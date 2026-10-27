/* Numi Tech · Tech IA · animacions de teoria (TANI). Contingut propi de Numi (vegeu scripts/TECH-CONTRACTE.md). */

/* ── unitat 1 ── */
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
   i el projecte (corpus, memoritzar o generalitzar, avaluar, autoria). Tot dibuixat per Numi. */
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
    }
  });
}

/* ── unitat 2 ── */
/* Tech IA · unitat 2 · animacions de teoria (TANI). Dibuixos propis de Numi: dades i etiquetes, característiques,
   entrenament i prova, qui etiqueta, encert, matriu de confusió, falsos positius i negatius, quan l'encert enganya,
   dreceres i biaix, estereotips al text, com es redueix el biaix, el projecte, la fitxa del model i la privadesa.
   TANI.i22spam és estàtica: la fa servir una pregunta de l'app (art) i una diapositiva. */
{
  const F = (sz, c = '#14204A', w = 800) => `style="font:${w} ${sz}px Lexend,system-ui,sans-serif;fill:${c}"`;
  const box = (x, y, w, h, fill, stroke, r = 14) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="2"` : ''}/>`;
  const arrow = (x1, y1, x2, y2, c = '#8B9BE0') => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><path d="M${x2} ${y2} l-7 -4 m7 4 l-7 4" stroke="${c}" stroke-width="2.5" stroke-linecap="round" fill="none" transform="rotate(${(Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI).toFixed(0)} ${x2} ${y2})"/>`;
  const ok = (cx, cy, r = 10, c = '#3CC47C') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/><path d="M${cx - r / 2} ${cy}l${r * .35} ${r * .35} ${r * .6} -${r * .65}" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  const ko = (cx, cy, r = 10) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#EF5A5A"/><path d="M${cx - r * .4} ${cy - r * .4}l${r * .8} ${r * .8}m0 -${r * .8}l-${r * .8} ${r * .8}" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`;
  const hbar = (x, y, w, p, c, lbl, pc, t, h = 13) => `<g ${tA(t, 'ta-in')}><text x="${x - 8}" y="${y + h - 2}" text-anchor="end" ${F(12.5)}>${lbl}</text><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="#E8EEFF"/><rect x="${x}" y="${y}" width="${Math.max(4, w * p).toFixed(1)}" height="${h}" rx="${h / 2}" fill="${c}"/><text x="${x + w + 8}" y="${y + h - 2}" ${F(12)}>${pc}</text></g>`;
  const tile = (x, y, s, bg, emo, t, cls = 'ta-pop') => `<g ${tA(t, cls)}><rect x="${x}" y="${y}" width="${s}" height="${s}" rx="${s * .22}" fill="${bg}"/><text x="${x + s / 2}" y="${y + s * .68}" text-anchor="middle" font-size="${(s * .52).toFixed(0)}">${emo}</text></g>`;
  const person = (x, y, c, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><circle cx="0" cy="-12" r="7" fill="${c}"/><path d="M-11 10 Q-11 -3 0 -3 Q11 -3 11 10 Z" fill="${c}"/></g>`;
  const grid4 = T => T.map(([e, a, b, c, bg], i) => { const x = 6 + (i % 2) * 156, y = 6 + Math.floor(i / 2) * 104; return `<g ${tA(.3 + i * .6, 'ta-pop')}>${box(x, y, 152, 98, bg, c + '55', 16)}<text x="${x + 30}" y="${y + 44}" text-anchor="middle" font-size="26">${e}</text>
    <text x="${x + 56}" y="${y + 42}" ${F(13)}>${a}</text><text x="${x + 56}" y="${y + 62}" ${F(13, c, 900)}>${b}</text>${ok(x + 134, y + 18, 9, c)}</g>`; }).join('');
  // matriu 2 × 2: [[encert, fn], [fp, encert]] amb rètols de fila i columna
  const matrix = (v, lab, anim) => {
    const A = (t, c = 'ta-pop') => anim ? tA(t, c) : '', X = [128, 222], Y = [70, 136], cell = (i, j) => { const d = i === j, bg = d ? '#DFF7E8' : i === 0 ? '#FFE1E1' : '#FFEBD6', fg = d ? '#15803D' : i === 0 ? '#B91C1C' : '#C2410C';
      return `<g ${A(.6 + (i * 2 + j) * .45)}>${box(X[j], Y[i], 88, 60, bg, '', 12)}<text x="${X[j] + 44}" y="${Y[i] + (lab ? 32 : 40)}" text-anchor="middle" ${F(22, fg, 900)}>${v[i][j]}</text>${lab ? `<text x="${X[j] + 44}" y="${Y[i] + 50}" text-anchor="middle" ${F(10.5, fg, 800)}>${d ? L('✓ encert', '✓ acierto') : i === 0 ? L('fals negatiu', 'falso negativo') : L('fals positiu', 'falso positivo')}</text>` : ''}</g>`; };
    return `<text x="172" y="22" text-anchor="middle" ${F(11, '#56628A', 700)}>${L('La IA diu →', 'La IA dice →')}</text>
      <g ${A(.2, 'ta-fade')}><text x="172" y="56" text-anchor="middle" ${F(12.5, '#B91C1C')}>🚫 spam</text><text x="266" y="56" text-anchor="middle" ${F(12.5, '#15803D')}>✉️ normal</text>
      <text x="118" y="106" text-anchor="end" ${F(12)}>${L('era spam', 'era spam')}</text><text x="118" y="172" text-anchor="end" ${F(12)}>${L('era normal', 'era normal')}</text></g>
      ${cell(0, 0)}${cell(0, 1)}${cell(1, 0)}${cell(1, 1)}`;
  };
  Object.assign(TANI, {
    // dada + etiqueta = exemple
    i21label() {
      const R = [['🍎', L('poma', 'manzana')], ['🍌', L('plàtan', 'plátano')], ['🍇', L('raïm', 'uva')]];
      return tSvg(214, `${R.map(([e, t], i) => `${tile(14, 10 + i * 68, 56, '#EEF2FF', e, .2 + i * .5)}<g ${tA(.5 + i * .5, 'ta-fade')}>${arrow(78, 38 + i * 68, 104, 38 + i * 68)}</g>
          <g ${tA(.7 + i * .5, 'ta-pop')}><path d="M110 ${24 + i * 68} h96 a8 8 0 0 1 8 8 v12 a8 8 0 0 1 -8 8 h-96 l-12 -14 z" fill="#8B5CF6"/><circle cx="114" cy="${38 + i * 68}" r="3.5" fill="#fff"/><text x="164" y="${43 + i * 68}" text-anchor="middle" ${F(13, '#fff')}>${t}</text></g>`).join('')}
        <g ${tA(2.3, 'ta-in')}>${box(226, 22, 90, 168, '#F3F0FF', '#D8CCFF', 16)}<text x="271" y="58" text-anchor="middle" ${F(13)}>${L('dada', 'dato')}</text><text x="271" y="84" text-anchor="middle" ${F(18, '#7C3AED', 900)}>+</text>
          <text x="271" y="108" text-anchor="middle" ${F(13)}>${L('etiqueta', 'etiqueta')}</text><text x="271" y="134" text-anchor="middle" ${F(18, '#7C3AED', 900)}>=</text><text x="271" y="160" text-anchor="middle" ${F(13, '#7C3AED', 900)}>${L('exemple', 'ejemplo')}</text></g>`);
    },
    // una foto es converteix en una quadrícula de 8 × 6 colors… i en números
    i21feat() {
      const P = ['wwwwwwww', 'wwwbwwww', 'wwrrrrww', 'wrrrrrrw', 'wwrrrrww', 'wwwrrwww'], C = { w: '#ECECE6', r: '#D9363E', b: '#7A4E2A' };
      const cells = P.flatMap((row, y) => [...row].map((k, x) => `<rect x="${14 + x * 17}" y="${34 + y * 17}" width="16" height="16" rx="3" fill="${C[k]}" ${tA(.1 + (y * 8 + x) * .025, 'ta-pop')}/>`)).join('');
      const vals = [.93, .93, .9, .62, .2, .8, .14, .16, .93, .55, .9, .3, .85, .12, .92, .7, .2, .88, .1, .93, .4, .91, .6, .93];
      return tSvg(214, `<text x="82" y="22" text-anchor="middle" ${F(12, '#56628A', 700)}>${L('la foto', 'la foto')}</text>${cells}<text x="82" y="152" text-anchor="middle" ${F(11.5, '#14204A', 800)}>8 × 6 ${L('colors', 'colores')}</text>
        <g ${tA(1.6, 'ta-fade')}>${arrow(156, 85, 182, 85, '#7C3AED')}</g>
        <g ${tA(1.9, 'ta-in')}><text x="252" y="22" text-anchor="middle" ${F(12, '#56628A', 700)}>${L('el que compara la IA', 'lo que compara la IA')}</text>${box(188, 34, 128, 100, '#0E1332', '', 12)}
          ${vals.map((v, i) => `<rect x="${196 + i * 4.8}" y="${126 - v * 82}" width="3.4" height="${(v * 82).toFixed(1)}" rx="1.5" fill="${['#F87171', '#4ADE80', '#60A5FA'][i % 3]}"/>`).join('')}</g>
        <text x="252" y="152" text-anchor="middle" ${F(11.5, '#14204A', 800)} ${tA(2.3, 'ta-fade')}>${L('molts números', 'muchos números')}</text>
        <g ${tA(2.8, 'ta-in')}>${box(14, 170, 302, 34, '#F3F0FF', '', 12)}<text x="165" y="192" text-anchor="middle" ${F(11.5, '#6D28D9', 800)}>✏️ ${L('dibuix: 16 × 16', 'dibujo: 16 × 16')}  ·  🎤 ${L('so: 16 bandes', 'sonido: 16 bandas')}</text></g>`);
    },
    // totes les dades → entrenament (80 %) i prova (20 %), que la IA no veu
    i21split() {
      const E = ['🍎', '🍌', '🍇', '🍎', '🍌', '🍇', '🍎', '🍌', '🍇', '🍎'];
      return tSvg(214, `<text x="160" y="18" text-anchor="middle" ${F(12, '#56628A', 700)}>${L('totes les dades', 'todos los datos')}</text>
        ${E.map((e, i) => tile(10 + i * 30.4, 26, 27, '#EEF2FF', e, .1 + i * .08)).join('')}
        <g ${tA(1, 'ta-fade')}>${arrow(120, 60, 110, 92, '#7C3AED')}${arrow(270, 60, 270, 92, '#F08A24')}</g>
        <g ${tA(1.3, 'ta-in')}>${box(8, 96, 214, 108, '#F3F0FF', '#D8CCFF', 16)}<text x="22" y="118" ${F(13, '#6D28D9', 900)}>🏋️ ${L('Entrenament', 'Entrenamiento')} · 80 %</text>
          ${E.slice(0, 8).map((e, i) => tile(20 + (i % 4) * 48, 128 + Math.floor(i / 4) * 36, 32, '#fff', e, 1.6 + i * .08)).join('')}</g>
        <g ${tA(2.2, 'ta-in')}>${box(230, 96, 84, 108, '#FFF4E8', '#FBD3A6', 16)}<text x="272" y="118" text-anchor="middle" ${F(13, '#C2410C', 900)}>🧪 ${L('Prova', 'Prueba')}</text><text x="272" y="134" text-anchor="middle" ${F(11, '#C2410C', 800)}>20 %</text>
          ${tile(240, 144, 30, '#fff', E[8], 2.5)}${tile(276, 144, 30, '#fff', E[9], 2.6)}<text x="272" y="196" text-anchor="middle" ${F(10, '#C2410C', 800)}>🙈 ${L('mai vistes', 'nunca vistas')}</text></g>`);
    },
    // tres persones etiqueten el mateix: no es posen d'acord sense un criteri
    i21who() {
      const P = [[50, '#8B5CF6', L('fruita', 'fruta'), '#3CC47C'], [160, '#22C3E6', L('verdura', 'verdura'), '#F08A24'], [270, '#F472B6', L('fruita', 'fruta'), '#3CC47C']];
      return tSvg(214, `${tile(132, 8, 56, '#FFF1F1', '🍅', .2)}
        ${P.map(([x, c, t, tc], i) => `<g ${tA(.6 + i * .4, 'ta-in')}>${person(x, 108, c, 1.5)}${box(x - 40, 122, 80, 26, tc, '', 13)}<text x="${x}" y="140" text-anchor="middle" ${F(12, '#fff')}>${t}</text></g>`).join('')}
        <text x="105" y="74" text-anchor="middle" ${F(22, '#F59E0B', 900)} ${tA(1.9, 'ta-wob')}>?</text><text x="215" y="74" text-anchor="middle" ${F(22, '#F59E0B', 900)} ${tA(2, 'ta-wob')}>?</text>
        <g ${tA(2.6, 'ta-pop')}>${box(30, 162, 260, 40, '#0E1332', '', 14)}<text x="160" y="187" text-anchor="middle" ${F(12.5, '#fff')}>📏 ${L('Criteri: té llavors → fruita', 'Criterio: tiene semillas → fruta')}</text></g>`);
    },
    // 10 proves: 8 encerts → 80 %
    i22acc() {
      const E = ['🍎', '🍌', '🍇', '🍎', '🍌', '🍇', '🍎', '🍌', '🍇', '🍎'], G = [1, 1, 0, 1, 1, 1, 1, 0, 1, 1];
      return tSvg(214, `${E.map((e, i) => { const x = 14 + (i % 5) * 60, y = 10 + Math.floor(i / 5) * 66; return `${tile(x, y, 50, '#EEF2FF', e, .1 + i * .1)}<g ${tA(.6 + i * .18, 'ta-pop')}>${G[i] ? ok(x + 46, y + 6, 10) : ko(x + 46, y + 6, 10)}</g>`; }).join('')}
        <g ${tA(2.6, 'ta-pop')}>${box(40, 148, 240, 54, '#7C3AED', '', 18)}<text x="160" y="182" text-anchor="middle" ${F(19, '#fff', 900)}>8 ÷ 10 = 80 %</text></g>`);
    },
    // la matriu de confusió, casella a casella
    i22cm() {
      return tSvg(214, `${matrix([[8, 2], [1, 9]], true, true)}<text x="160" y="206" text-anchor="middle" ${F(11, '#56628A', 700)} ${tA(2.8, 'ta-fade')}>${L('Files: el que era · columnes: el que diu la IA', 'Filas: lo que era · columnas: lo que dice la IA')}</text>`);
    },
    // la matriu del detector d'spam (estàtica, per a la pregunta)
    i22spam() {
      const X = [112, 214], Y = [64, 140], V = [[18, 2], [5, 75]], cell = (i, j) => { const d = i === j; return `${box(X[j], Y[i], 96, 68, d ? '#DFF7E8' : '#FFF1E6', '', 14)}<text x="${X[j] + 48}" y="${Y[i] + 46}" text-anchor="middle" ${F(32, d ? '#15803D' : '#C2410C', 900)}>${V[i][j]}</text>`; };
      return tSvg(214, `<text x="211" y="22" text-anchor="middle" ${F(16, '#56628A', 800)}>${L('la IA diu', 'la IA dice')} ↓</text><text x="160" y="54" text-anchor="middle" ${F(17, '#B91C1C', 900)}>spam</text><text x="262" y="54" text-anchor="middle" ${F(17, '#15803D', 900)}>normal</text>
        <text x="100" y="92" text-anchor="end" ${F(14, '#56628A', 700)}>${L('era', 'era')}</text><text x="100" y="114" text-anchor="end" ${F(18, '#B91C1C', 900)}>spam</text>
        <text x="100" y="168" text-anchor="end" ${F(14, '#56628A', 700)}>${L('era', 'era')}</text><text x="100" y="190" text-anchor="end" ${F(18, '#15803D', 900)}>normal</text>
        ${cell(0, 0)}${cell(0, 1)}${cell(1, 0)}${cell(1, 1)}`);
    },
    // l'alarma que sona per una torrada · el foc que no fa sonar l'alarma
    i22fpfn() {
      const P = (x, head, c, bg, a, b, txt, t) => `<g ${tA(t, 'ta-in')}>${box(x, 6, 150, 202, bg, c + '66', 16)}<text x="${x + 75}" y="30" text-anchor="middle" ${F(12.5, c, 900)}>${head}</text>
        <text x="${x + 48}" y="96" text-anchor="middle" font-size="40">${a}</text><text x="${x + 108}" y="96" text-anchor="middle" font-size="40">${b}</text></g>`;
      return tSvg(214, P(6, L('FALS POSITIU', 'FALSO POSITIVO'), '#C2410C', '#FFF4E8', '🍞', '🚨', '', .2) + P(164, L('FALS NEGATIU', 'FALSO NEGATIVO'), '#B91C1C', '#FFF1F1', '🔥', '🔕', '', 1.4)
        + `<text x="114" y="56" text-anchor="middle" ${F(12, '#C2410C', 900)} ${tA(.8, 'ta-wob')}>BIP!</text>
        <g ${tA(1, 'ta-fade')}><text x="81" y="140" text-anchor="middle" ${F(12.5)}>${L('Sona…', 'Suena…')}</text><text x="81" y="160" text-anchor="middle" ${F(12.5)}>${L('i no hi ha foc', 'y no hay fuego')}</text><text x="81" y="190" text-anchor="middle" ${F(11, '#C2410C', 800)}>${L('diu SÍ · era NO', 'dice SÍ · era NO')}</text></g>
        <g ${tA(2.2, 'ta-fade')}><text x="239" y="140" text-anchor="middle" ${F(12.5)}>${L('Hi ha foc…', 'Hay fuego…')}</text><text x="239" y="160" text-anchor="middle" ${F(12.5)}>${L('i no sona', 'y no suena')}</text><text x="239" y="190" text-anchor="middle" ${F(11, '#B91C1C', 800)}>${L('diu NO · era SÍ', 'dice NO · era SÍ')}</text></g>`);
    },
    // quin error fa més mal en cada cas
    i22cost() {
      const R = [['📱', L('Desbloqueig facial', 'Desbloqueo facial'), L('algú altre entra', 'entra otra persona'), L('fals positiu', 'falso positivo'), '#C2410C'], ['📧', L("Filtre d'spam", 'Filtro de spam'), L('perds un correu bo', 'pierdes un correo bueno'), L('fals positiu', 'falso positivo'), '#C2410C'], ['🩺', L('Prova mèdica', 'Prueba médica'), L('no veu una malaltia', 'no ve una enfermedad'), L('fals negatiu', 'falso negativo'), '#B91C1C']];
      return tSvg(214, `<text x="262" y="16" text-anchor="middle" ${F(10.5, '#56628A', 800)}>${L('el pitjor error', 'el peor error')}</text>${R.map(([e, a, b, w, c], i) => `<g ${tA(.3 + i * .8, 'ta-in')}>${box(6, 22 + i * 64, 308, 58, '#fff', '#DCE4FA')}<text x="30" y="${59 + i * 64}" text-anchor="middle" font-size="22">${e}</text>
          <text x="52" y="${45 + i * 64}" ${F(13)}>${a}</text><text x="52" y="${63 + i * 64}" ${F(10.5, '#56628A', 700)}>${b}</text></g>
        <g ${tA(.7 + i * .8, 'ta-pop')}>${box(216, 36 + i * 64, 92, 28, c, '', 14)}<text x="262" y="${55 + i * 64}" text-anchor="middle" ${F(10.5, '#fff')}>${w}</text></g>`).join('')}`);
    },
    // 100 compres, 5 fraus: una IA que diu sempre «normal» encerta el 95 % i no troba cap frau
    i22trap() {
      const bad = new Set([13, 37, 58, 71, 94]);
      const dots = Array.from({ length: 100 }, (_, i) => bad.has(i) ? '' : `<circle cx="${18 + (i % 10) * 13}" cy="${40 + Math.floor(i / 10) * 13}" r="4.6" fill="#B7C3E6"/>`).join('');
      return tSvg(214, `<text x="77" y="22" text-anchor="middle" ${F(12, '#56628A', 700)}>${L('100 compres', '100 compras')}</text><g ${tA(.1, 'ta-fade')}>${dots}</g>
        <g ${tA(.8, 'ta-pop')}>${[...bad].map(i => `<circle cx="${18 + (i % 10) * 13}" cy="${40 + Math.floor(i / 10) * 13}" r="5.4" fill="#EF4444"/>`).join('')}</g>
        <text x="77" y="184" text-anchor="middle" ${F(11, '#B91C1C', 800)} ${tA(.9, 'ta-fade')}>● 5 ${L('fraus', 'fraudes')}</text>
        <g ${tA(1.4, 'ta-in')}>${box(150, 22, 164, 44, '#0E1332', '', 14)}<text x="232" y="40" text-anchor="middle" ${F(11, '#C4B5FD', 700)}>${L('IA mandrosa', 'IA perezosa')}</text><text x="232" y="57" text-anchor="middle" ${F(12, '#fff')}>${L('sempre «normal»', 'siempre «normal»')}</text></g>
        <g ${tA(2.1, 'ta-pop')}>${box(150, 78, 164, 50, '#DFF7E8', '', 14)}<text x="232" y="98" text-anchor="middle" ${F(11, '#15803D', 800)}>${L('encert', 'acierto')}</text><text x="232" y="119" text-anchor="middle" ${F(20, '#15803D', 900)}>95 %</text></g>
        <g ${tA(2.8, 'ta-pop')}>${box(150, 140, 164, 50, '#FFE1E1', '', 14)}<text x="232" y="160" text-anchor="middle" ${F(11, '#B91C1C', 800)}>${L('fraus detectats', 'fraudes detectados')}</text><text x="232" y="181" text-anchor="middle" ${F(20, '#B91C1C', 900)}>0 / 5</text></g>`);
    },
    // la drecera del fons: pilotes a la gespa, tasses sobre fusta → una tassa a la gespa és «pilota»
    i23short() {
      const G = '#7CC456', W = '#9A6538';
      return tSvg(214, `<text x="160" y="16" text-anchor="middle" ${F(11.5, '#56628A', 700)}>${L('entrenament', 'entrenamiento')}</text>
        ${[0, 1, 2].map(i => tile(10 + i * 50, 24, 44, G, '⚽', .1 + i * .15)).join('')}${[0, 1, 2].map(i => tile(170 + i * 50, 24, 44, W, '☕', .5 + i * .15)).join('')}
        <g ${tA(1.3, 'ta-pop')}><circle cx="62" cy="46" r="34" fill="none" stroke="#F59E0B" stroke-width="4" stroke-dasharray="6 5"/><text x="62" y="98" text-anchor="middle" ${F(11.5, '#B45309', 800)}>🔍 ${L('la IA mira el fons', 'la IA mira el fondo')}</text></g>
        <text x="160" y="128" text-anchor="middle" ${F(11.5, '#56628A', 700)} ${tA(1.8, 'ta-fade')}>${L('prova', 'prueba')}</text>
        ${tile(60, 136, 60, G, '☕', 2)}<g ${tA(2.3, 'ta-fade')}>${arrow(128, 166, 160, 166, '#7C3AED')}</g>
        <g ${tA(2.6, 'ta-pop')}>${box(166, 146, 140, 40, '#FFE1E1', '', 14)}<text x="236" y="171" text-anchor="middle" ${F(13.5, '#B91C1C', 900)}>⚽ ${L('pilota?!', '¿pelota?!')}</text>${ko(300, 148, 10)}</g>`);
    },
    // qui surt poc a les dades, té més errors (exemple inventat, sense xifres)
    i23miss() {
      const R = [['#8B5CF6', 'A', .9, L('molts', 'muchos'), .12], ['#22C3E6', 'B', .35, L('pocs', 'pocos'), .45], ['#F08A24', 'C', .08, L('gairebé cap', 'casi ninguno'), .9]];
      return tSvg(214, `<text x="126" y="18" text-anchor="middle" ${F(11.5, '#56628A', 800)}>📦 ${L('exemples a les dades', 'ejemplos en los datos')}</text><text x="270" y="18" text-anchor="middle" ${F(11.5, '#B91C1C', 800)}>${L('errors', 'errores')}</text>
        ${R.map(([c, n, d, dl, e], i) => `<g ${tA(.3 + i * .7, 'ta-in')}>${person(24, 56 + i * 58, c, 1.2)}<text x="48" y="${58 + i * 58}" ${F(14, c, 900)}>${n}</text>
          <rect x="66" y="${44 + i * 58}" width="136" height="16" rx="8" fill="#E8EEFF"/><rect x="66" y="${44 + i * 58}" width="${(136 * d).toFixed(0)}" height="16" rx="8" fill="${c}"/><text x="68" y="${76 + i * 58}" ${F(10.5, '#56628A', 700)}>${dl}</text></g>
          <g ${tA(.7 + i * .7, 'ta-in')}><rect x="222" y="${44 + i * 58}" width="92" height="16" rx="8" fill="#FBE4E4"/><rect x="222" y="${44 + i * 58}" width="${(92 * e).toFixed(0)}" height="16" rx="8" fill="#EF4444"/></g>`).join('')}
        <text x="160" y="208" text-anchor="middle" ${F(10.5, '#56628A', 700)} ${tA(2.8, 'ta-fade')}>${L('(exemple inventat)', '(ejemplo inventado)')}</text>`);
    },
    // l'estereotip del text i el mateix model amb dades variades
    i23text() {
      const ctx = L('les noies són…', 'las chicas son…');
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 4, 312, 76, '#FFF4F4', '#F8C9C9')}<text x="16" y="24" ${F(11.5, '#B91C1C', 900)}>${L('DADES AMB ESTEREOTIPS', 'DATOS CON ESTEREOTIPOS')}</text><text x="16" y="44" ${F(12, '#56628A', 700)}>${ctx}</text></g>
        ${hbar(L(206, 210), 32, 64, .67, '#EF4444', L('maques', 'guapas'), '67 %', .6)}${hbar(L(206, 210), 52, 64, .33, '#C9D3F2', L('tranquil·les', 'tranquilas'), '33 %', .8)}
        <g ${tA(1.5, 'ta-in')}>${box(4, 90, 312, 120, '#EEFBF3', '#B9EBD2')}<text x="16" y="110" ${F(11.5, '#15803D', 900)}>${L('DADES VARIADES', 'DATOS VARIADOS')}</text><text x="16" y="130" ${F(12, '#56628A', 700)}>${ctx}</text></g>
        ${[[L('maques', 'guapas'), .25, '25 %'], [L('fortes', 'fuertes'), .13, '13 %'], [L('valentes', 'valientes'), .13, '13 %'], [L('científiques', 'científicas'), .13, '13 %']].map(([t, p, pc], i) => hbar(L(206, 210), 118 + i * 21, 64, p, i ? '#3CC47C' : '#F59E0B', t, pc, 2 + i * .25)).join('')}`);
    },
    // com es redueix el biaix
    i23fix() {
      return tSvg(214, grid4([['🌈', L('Dades', 'Datos'), L('variades', 'variados'), '#8B5CF6', '#F3F0FF'], ['⚖️', L('Classes', 'Clases'), L('equilibrades', 'equilibradas'), '#22C3E6', '#E9FAFD'], ['📊', L('Encert', 'Acierto'), L('per grups', 'por grupos'), '#F08A24', '#FFF4E8'], ['👥', L('Equip', 'Equipo'), L('divers', 'diverso'), '#3CC47C', '#EEFBF3']]));
    },
    // problema → classes → dades → prova → fitxa
    i24flow() {
      const S = [['💡', L('Problema', 'Problema')], ['🏷️', L('Classes', 'Clases')], ['📷', L('Dades', 'Datos')], ['🧪', L('Prova', 'Prueba')], ['🗂️', L('Fitxa', 'Ficha')]], C = ['#F59E0B', '#8B5CF6', '#22C3E6', '#F08A24', '#3CC47C'];
      return tSvg(214, `${S.map(([e, t], i) => `<g ${tA(.2 + i * .45, 'ta-pop')}><circle cx="${34 + i * 63}" cy="44" r="26" fill="${C[i]}" opacity=".18"/><circle cx="${34 + i * 63}" cy="44" r="26" fill="none" stroke="${C[i]}" stroke-width="3"/><text x="${34 + i * 63}" y="53" text-anchor="middle" font-size="23">${e}</text><text x="${34 + i * 63}" y="92" text-anchor="middle" ${F(11.5)}>${t}</text></g>${i < 4 ? `<g ${tA(.4 + i * .45, 'ta-fade')}>${arrow(62 + i * 63, 44, 69 + i * 63, 44, '#9AA6CC')}</g>` : ''}`).join('')}
        <g ${tA(2.6, 'ta-in')}>${box(6, 108, 308, 98, '#0E1332', '', 16)}<text x="20" y="130" ${F(11, '#C4B5FD', 800)}>${L('EXEMPLE: SEMÀFOR DEL SOROLL', 'EJEMPLO: SEMÁFORO DEL RUIDO')}</text>
          <text x="20" y="154" ${F(12, '#fff', 700)}>🤫 ${L('silenci', 'silencio')} · 🗣️ ${L('veu', 'voz')} · 📢 ${L('crits', 'gritos')}</text><text x="20" y="176" ${F(12, '#fff', 700)}>🎤 ${L('10 sons de cada classe', '10 sonidos de cada clase')}</text><text x="20" y="196" ${F(12, '#fff', 700)}>🧪 ${L('prova: 4 sons nous de cada', 'prueba: 4 sonidos nuevos de cada')}</text></g>`);
    },
    // la fitxa del model, camp a camp
    i24card() {
      const R = [['🎯', L('Per a què', 'Para qué'), L('avisar si hi ha massa soroll', 'avisar si hay mucho ruido')], ['📦', L('Dades', 'Datos'), L('30 sons de 6 persones', '30 sonidos de 6 personas')], ['🧪', L('Prova', 'Prueba'), L('83 % (10 de 12)', '83 % (10 de 12)')], ['⚠️', L('Límits', 'Límites'), L('es confon amb música', 'se confunde con música')], ['🚫', L('No és per a', 'No es para'), L('posar notes a ningú', 'poner notas a nadie')]];
      return tSvg(214, `${box(8, 4, 304, 206, '#fff', '#DCE4FA', 16)}${box(8, 4, 304, 34, '#7C3AED', '', 16)}<rect x="8" y="24" width="304" height="14" fill="#7C3AED"/><text x="22" y="27" ${F(12.5, '#fff', 900)}>🗂️ ${L('FITXA DEL MODEL', 'FICHA DEL MODELO')}</text><text x="298" y="27" text-anchor="end" ${F(10.5, '#E9D5FF', 700)}>${L('Semàfor v1', 'Semáforo v1')}</text>
        ${R.map(([e, k, v], i) => `<g ${tA(.4 + i * .5, 'ta-in')}><text x="22" y="${66 + i * 34}" font-size="15">${e}</text><text x="44" y="${66 + i * 34}" ${F(11.5, '#6D28D9', 900)}>${k}</text><text x="${L(124, 124)}" y="${66 + i * 34}" ${F(11, '#14204A', 700)}>${v}</text>${i < 4 ? `<line x1="22" y1="${76 + i * 34}" x2="298" y2="${76 + i * 34}" stroke="#EEF1FA" stroke-width="1.5"/>` : ''}</g>`).join('')}`);
    },
    // 3 proves meves (100 %?) contra 20 proves variades (80 %)
    i24test() {
      const G = [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 6, 118, 202, '#FFF4E8', '#FBD3A6', 16)}<text x="63" y="30" text-anchor="middle" ${F(11.5, '#C2410C', 900)}>${L('3 proves meves', '3 pruebas mías')}</text>
          ${[0, 1, 2].map(i => ok(33 + i * 30, 66, 11)).join('')}<text x="63" y="122" text-anchor="middle" ${F(22, '#C2410C', 900)}>100 %?</text><text x="63" y="164" text-anchor="middle" font-size="30">🤨</text></g>
        <g ${tA(1.2, 'ta-in')}>${box(130, 6, 186, 202, '#EEFBF3', '#B9EBD2', 16)}<text x="223" y="30" text-anchor="middle" ${F(11.5, '#15803D', 900)}>${L('20 proves variades', '20 pruebas variadas')}</text>
          <text x="223" y="48" text-anchor="middle" ${F(10, '#56628A', 700)}>${L('altres persones i llocs', 'otras personas y lugares')}</text></g>
        ${G.map((g, i) => `<g ${tA(1.5 + i * .06, 'ta-pop')}>${g ? ok(152 + (i % 5) * 36, 72 + Math.floor(i / 5) * 26, 9) : ko(152 + (i % 5) * 36, 72 + Math.floor(i / 5) * 26, 9)}</g>`).join('')}
        <g ${tA(2.9, 'ta-pop')}>${box(160, 172, 126, 28, '#15803D', '', 14)}<text x="223" y="191" text-anchor="middle" ${F(12.5, '#fff')}>80 % · ${L('fiable', 'fiable')} ✓</text></g>`);
    },
    // les imatges i el so no surten del dispositiu; al portafoli, només noms i números
    i24priv() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="10" y="12" width="150" height="120" rx="16" fill="#F3F0FF" stroke="#8B5CF6" stroke-width="2.5" stroke-dasharray="7 5"/><text x="85" y="34" text-anchor="middle" ${F(11.5, '#6D28D9', 900)}>🔒 ${L('el teu dispositiu', 'tu dispositivo')}</text>
          <text x="58" y="82" text-anchor="middle" font-size="30">📷</text><text x="112" y="82" text-anchor="middle" font-size="30">🎤</text><text x="85" y="116" text-anchor="middle" ${F(10.5, '#56628A', 700)}>${L('imatges i so, només aquí', 'imágenes y sonido, solo aquí')}</text></g>
        <g ${tA(1, 'ta-in')}><text x="246" y="52" text-anchor="middle" font-size="34">☁️</text>${ko(268, 30, 11)}<text x="246" y="80" text-anchor="middle" ${F(10.5, '#B91C1C', 800)}>${L('no surt enlloc', 'no sale a ningún sitio')}</text>${arrow(166, 50, 210, 46, '#EF9A9A')}</g>
        <g ${tA(1.8, 'ta-in')}><text x="208" y="122" font-size="22">📁</text><text x="236" y="114" ${F(10.5, '#15803D', 800)}>${L('al portafoli:', 'al portafolio:')}</text><text x="236" y="129" ${F(10, '#14204A', 700)}>${L('classes, nombre', 'clases, número')}</text><text x="236" y="142" ${F(10, '#14204A', 700)}>${L("d'exemples, encert", 'de ejemplos, acierto')}</text>${arrow(166, 112, 202, 116, '#86D3A5')}</g>
        <g ${tA(2.7, 'ta-pop')}>${box(10, 158, 300, 44, '#FFE1E1', '#F8B4B4', 14)}<text x="160" y="178" text-anchor="middle" ${F(11.5, '#B91C1C', 900)}>🚫 ${L("Endevinar emocions a l'escola", 'Adivinar emociones en la escuela')}</text><text x="160" y="195" text-anchor="middle" ${F(10, '#B91C1C', 700)}>${L("prohibit per la llei europea d'IA (2025)", 'prohibido por la ley europea de IA (2025)')}</text></g>`);
    }
  });
}

/* ── unitat 3 ── */
/* Tech IA · unitat 3 · animacions de teoria (TANI). Dibuixos propis de Numi: del mini model al xatbot, l'ajust com a
   assistent, la finestra de context, les eines, les fitxes; per què al·lucina, fonts inventades, lectura lateral i
   senyals d'alerta; les peces d'un bon prompt, vague o precís, exemples, iterar i què no s'hi posa; i la IA com a
   tutora (copiadora o tutora, recordar per aprendre, la rutina, les normes, l'edat i la privadesa). */
{
  const F = (sz, c = '#14204A', w = 800) => `style="font:${w} ${sz}px Lexend,system-ui,sans-serif;fill:${c}"`;
  const M = (sz, c = '#14204A') => `style="font:700 ${sz}px ui-monospace,Menlo,monospace;fill:${c}"`;
  const box = (x, y, w, h, fill, stroke, r = 14) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="2"` : ''}/>`;
  const arrow = (x1, y1, x2, y2, c = '#8B9BE0') => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><path d="M${x2} ${y2} l-7 -4 m7 4 l-7 4" stroke="${c}" stroke-width="2.5" stroke-linecap="round" fill="none" transform="rotate(${(Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI).toFixed(0)} ${x2} ${y2})"/>`;
  const ok = (cx, cy, r = 10, c = '#3CC47C') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/><path d="M${cx - r / 2} ${cy}l${(r * .35).toFixed(1)} ${(r * .35).toFixed(1)} ${(r * .6).toFixed(1)} -${(r * .65).toFixed(1)}" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  const ko = (cx, cy, r = 10) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#EF5A5A"/><path d="M${cx - r * .4} ${cy - r * .4}l${r * .8} ${r * .8}m0 -${r * .8}l-${r * .8} ${r * .8}" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`;
  const CT = (x, y, t, sz, c, w) => `<text x="${x}" y="${y}" text-anchor="middle" ${F(sz, c, w)}>${t}</text>`;
  // graella 2 × 3 de targetes petites: [emoji, línia 1, línia 2, color, fons]
  const grid6 = (T, t0 = .2) => T.map(([e, a, b, c, bg], i) => { const x = 6 + (i % 2) * 156, y = 6 + Math.floor(i / 2) * 70;
    return `<g ${tA(t0 + i * .35, 'ta-pop')}>${box(x, y, 152, 62, bg, c + '66', 14)}<text x="${x + 26}" y="${y + 40}" text-anchor="middle" font-size="22">${e}</text><text x="${x + 50}" y="${y + 27}" ${F(12)}>${a}</text><text x="${x + 50}" y="${y + 46}" ${F(12, c, 900)}>${b}</text></g>`; }).join('');
  Object.assign(TANI, {
    // del mini model de la unitat 1 a un model gran: la mateixa tasca, moltíssima més escala
    i31scale() {
      const col = [[178, [44, 68, 92, 116, 140]], [232, [36, 58, 80, 102, 124, 146]], [286, [44, 68, 92, 116, 140]]];
      const lines = []; for (let c = 0; c < 2; c++) for (const y1 of col[c][1]) for (const y2 of col[c + 1][1]) lines.push(`<line x1="${col[c][0]}" y1="${y1}" x2="${col[c + 1][0]}" y2="${y2}" stroke="#6C7BD6" stroke-width="1" opacity=".45"/>`);
      const NC = ['#8B5CF6', '#22C3E6', '#F472B6'];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 34, 112, 132, '#F3F0FF', '#D8CCFF')}${CT(62, 58, L('EL TEU MODEL', 'TU MODELO'), 11, '#6D28D9', 900)}<text x="62" y="104" text-anchor="middle" font-size="32">📄</text>${CT(62, 132, L('compta parelles', 'cuenta parejas'), 11.5)}${CT(62, 150, L('de poques frases', 'de pocas frases'), 10.5, '#56628A', 700)}</g>
        <g ${tA(.8, 'ta-fade')}>${arrow(122, 100, 144, 100, '#7C3AED')}</g>
        <g ${tA(1, 'ta-in')}>${box(150, 6, 164, 172, '#0E1332', '', 16)}${CT(232, 26, L('UN MODEL GRAN', 'UN MODELO GRANDE'), 11, '#fff', 900)}</g>
        <g ${tA(1.4, 'ta-fade')}>${lines.join('')}</g>
        ${col.map(([x, ys], c) => `<g ${tA(1.3 + c * .35, 'ta-pop')}>${ys.map(y => `<circle cx="${x}" cy="${y}" r="6" fill="${NC[c]}"/>`).join('')}</g>`).join('')}
        <g ${tA(2.2, 'ta-fade')}>${CT(232, 168, L('xarxa neuronal enorme', 'red neuronal enorme'), 10.5, '#C4B5FD', 700)}</g>
        <g ${tA(2.6, 'ta-pop')}>${box(6, 186, 308, 24, '#7C3AED', '', 12)}${CT(160, 203, L('Mateixa tasca: predir la fitxa següent', 'Misma tarea: predecir la ficha siguiente'), 11.5, '#fff')}</g>`);
    },
    // un model base només continua el text; ajustat amb exemples i valoracions, respon com un assistent
    i31tune() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 4, 312, 96, '#FFF4F4', '#F8C9C9')}<text x="16" y="22" ${F(10.5, '#B91C1C', 900)}>${L('MODEL BASE', 'MODELO BASE')}</text>
          ${box(16, 30, 226, 24, '#fff', '#DCE4FA', 12)}<text x="26" y="46" ${F(11)}>${L('Quina és la capital de França?', '¿Cuál es la capital de Francia?')}</text></g>
        <g ${tA(.8, 'ta-fade')}><text x="16" y="76" ${M(12, '#B91C1C')}>${L("Quina és la d'Itàlia? I la…", '¿Y la de Italia? ¿Y la…')}</text><text x="16" y="93" ${F(10.5, '#56628A', 700)}>${L('només continua el text', 'solo continúa el texto')}</text></g>
        <g ${tA(1.3, 'ta-pop')}>${ko(294, 70)}</g>
        <g ${tA(1.7, 'ta-pop')}>${box(8, 106, 148, 24, '#F3F0FF', '#D8CCFF', 12)}${CT(82, 122, L('✍️ exemples de respostes', '✍️ ejemplos de respuestas'), 10.5, '#6D28D9')}</g>
        <g ${tA(1.9, 'ta-pop')}>${box(164, 106, 148, 24, '#FFF4E8', '#F8D2A8', 12)}${CT(238, 122, L('👍 valoracions', '👍 valoraciones'), 10.5, '#B45309')}</g>
        <g ${tA(2.4, 'ta-in')}>${box(4, 136, 312, 74, '#EEFBF3', '#B9EBD2')}<text x="16" y="154" ${F(10.5, '#15803D', 900)}>${L("DESPRÉS DE L'AJUST", 'DESPUÉS DEL AJUSTE')}</text>
          <text x="16" y="180" ${M(12.5, '#15803D')}>${L('París. Vols saber res més?', 'París. ¿Quieres saber algo más?')}</text><text x="16" y="199" ${F(10.5, '#56628A', 700)}>${L('respon com un assistent', 'responde como un asistente')}</text></g>
        <g ${tA(3, 'ta-pop')}>${ok(294, 174)}</g>`);
    },
    // la finestra de context: les instruccions de l'app i els últims missatges; el principi ja no hi cap
    i31ctx() {
      const R = [[0, 'sys'], [1, 'me'], [2, 'them'], [3, 'me'], [4, 'them'], [5, 'me'], [6, 'them']];
      const bar = ([i, w]) => { const y = 6 + i * 25, out = i === 1 || i === 2, x = w === 'me' ? 96 : 14, wd = w === 'sys' ? 158 : w === 'me' ? 110 : 132, c = w === 'sys' ? '#7C3AED' : w === 'me' ? '#8B5CF6' : '#22C3E6';
        return `<g ${tA(.2 + i * .18, 'ta-in')} opacity="${out ? .35 : 1}"><rect x="${x}" y="${y}" width="${wd}" height="19" rx="9.5" fill="${c}"/>${w === 'sys' ? `<text x="${x + 10}" y="${y + 14}" ${F(10.5, '#fff')}>📌 ${L("instruccions de l'app", 'instrucciones de la app')}</text>` : ''}</g>`; };
      return tSvg(214, `${R.map(bar).join('')}
        <g ${tA(1.7, 'ta-pop')}><rect x="8" y="78" width="212" height="100" rx="14" fill="none" stroke="#14A3B8" stroke-width="3" stroke-dasharray="7 5"/></g>
        <g ${tA(2.1, 'ta-fade')}><text x="230" y="122" ${F(12, '#0E7490', 900)}>👀 ${L('el que', 'lo que')}</text><text x="230" y="140" ${F(12, '#0E7490', 900)}>${L('veu ara', 've ahora')}</text>
          <text x="230" y="49" ${F(10.5, '#9AA6CC', 800)}>💨 ${L('ja no', 'ya no')}</text><text x="230" y="64" ${F(10.5, '#9AA6CC', 800)}>${L('hi cap', 'cabe')}</text><text x="178" y="18" ${F(10, '#7C3AED', 800)}>${L('sempre hi és', 'siempre está')}</text></g>
        <g ${tA(2.7, 'ta-pop')}>${box(40, 186, 240, 24, '#0E1332', '', 12)}${CT(160, 203, L('🆕 Xat nou → comença de zero', '🆕 Chat nuevo → empieza de cero'), 11.5, '#fff')}</g>`);
    },
    // sense eines s'ho inventa; amb una eina (cercador), l'app hi posa la dada i la font al context
    i31tools() {
      const q = `${L('Quin temps farà demà?', '¿Qué tiempo hará mañana?')}`;
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 4, 312, 96, '#FFF4F4', '#F8C9C9')}<text x="306" y="22" text-anchor="end" ${F(10, '#B91C1C', 900)}>${L('SENSE EINES', 'SIN HERRAMIENTAS')}</text>
          ${box(10, 40, 178, 26, '#fff', '#DCE4FA', 13)}${CT(99, 57, q, 11)}</g>
        <g ${tA(.7, 'ta-fade')}>${arrow(192, 53, 206, 53, '#B91C1C')}</g>
        <g ${tA(.9, 'ta-pop')}><circle cx="228" cy="53" r="20" fill="#7C3AED"/><text x="228" y="61" text-anchor="middle" font-size="19">🧠</text></g>
        <g ${tA(1.4, 'ta-pop')}><text x="280" y="62" text-anchor="middle" font-size="24">🤷</text>${CT(278, 88, L("s'ho inventa", 'se lo inventa'), 10.5, '#B91C1C', 800)}</g>
        <g ${tA(1.9, 'ta-in')}>${box(4, 108, 312, 102, '#EEFBF3', '#B9EBD2')}<text x="14" y="205" ${F(9.5, '#15803D', 900)}>${L('AMB UNA EINA', 'CON UNA HERRAMIENTA')}</text>
          ${box(10, 116, 178, 26, '#fff', '#DCE4FA', 13)}${CT(99, 133, q, 11)}</g>
        <g ${tA(2.3, 'ta-pop')}><circle cx="46" cy="178" r="20" fill="#7C3AED"/><text x="46" y="186" text-anchor="middle" font-size="19">🧠</text></g>
        <g ${tA(2.6, 'ta-fade')}>${arrow(70, 178, 126, 178, '#15803D')}<text x="98" y="168" text-anchor="middle" font-size="15">🔍</text></g>
        <g ${tA(2.9, 'ta-in')}>${box(132, 154, 176, 46, '#fff', '#A7E3C2', 12)}<text x="144" y="174" ${F(11.5)}>☀️ ${L('previsió + font', 'previsión + fuente')}</text><text x="144" y="191" ${F(10, '#56628A', 700)}>${L('la llegeix i et respon', 'la lee y te responde')}</text></g>
        <g ${tA(3.3, 'ta-pop')}>${ok(298, 156, 9)}</g>`);
    },
    // el text es parteix en fitxes i cada fitxa és un número (números d'exemple)
    i31tok() {
      const T = L(['incre', 'ïble', 'ment', ' ràpid', '!'], ['¡', 'incre', 'íble', 'mente', ' rápido', '!']), N = L(['4821', '377', '902', '15530', '0'], ['11', '4821', '9306', '2184', '33071', '0']);
      const C = ['#8B5CF6', '#22C3E6', '#F08A24', '#3CC47C', '#E5489A', '#3B82F6'], W = T.map(t => t.length * 8 + 12), tot = W.reduce((a, b) => a + b, 0) + (T.length - 1) * 6;
      let x = (320 - tot) / 2; const chips = T.map((t, i) => { const s = `<g ${tA(.9 + i * .3, 'ta-pop')}><rect x="${x}" y="70" width="${W[i]}" height="30" rx="9" fill="${C[i]}"/><text x="${x + W[i] / 2}" y="90" text-anchor="middle" ${M(13, '#fff')}>${t.replace(' ', '·')}</text><text x="${x + W[i] / 2}" y="118" text-anchor="middle" ${M(10.5, '#56628A')}>${N[i]}</text></g>`; x += W[i] + 6; return s; }).join('');
      return tSvg(196, `<g ${tA(.2, 'ta-in')}>${box(4, 6, 312, 40, '#0E1332', '', 14)}${CT(160, 32, L('increïblement ràpid!', '¡increíblemente rápido!'), 14.5, '#fff', 900)}</g>
        <g ${tA(.6, 'ta-fade')}>${arrow(160, 50, 160, 64, '#7C3AED')}</g>${chips}
        <g ${tA(2.8, 'ta-fade')}>${CT(160, 150, L('El model no veu lletres: veu fitxes,', 'El modelo no ve letras: ve fichas,'), 12)}${CT(160, 168, L('i cada fitxa és un número', 'y cada ficha es un número'), 12)}${CT(160, 188, L("(fitxes i números d'exemple)", '(fichas y números de ejemplo)'), 10, '#9AA6CC', 700)}</g>`);
    },

    // per què al·lucina: tria el probable, barreja trossos i omple els buits
    i32why() {
      const S = [['🎲', L('Tria el probable, no el comprovat', 'Elige lo probable, no lo comprobado'), L('no consulta cap font', 'no consulta ninguna fuente'), '#8B5CF6'],
        ['🧩', L('Barreja trossos de textos', 'Mezcla trozos de textos'), L('i surt una frase nova… i falsa', 'y sale una frase nueva… y falsa'), '#22C3E6'],
        ['🕳️', L('Omple els buits', 'Rellena los huecos'), L('en lloc de dir «no ho sé»', 'en lugar de decir «no lo sé»'), '#F08A24']];
      return tSvg(214, S.map(([e, t, k, c], i) => `<g ${tA(.3 + i * .8, 'ta-in')}>${box(6, 8 + i * 68, 308, 60, '#fff', '#DCE4FA')}<circle cx="34" cy="${38 + i * 68}" r="19" fill="${c}" opacity=".18"/><text x="34" y="${46 + i * 68}" text-anchor="middle" font-size="20">${e}</text>
          <text x="62" y="${34 + i * 68}" ${F(12.5)}>${t}</text><text x="62" y="${53 + i * 68}" ${F(11, c, 800)}>${k}</text></g>`).join(''));
    },
    // una font inventada: el llibre no surt enlloc i l'enllaç no existeix
    i32src() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 6, 312, 62, '#0E1332', '', 14)}<text x="16" y="24" ${F(10.5, '#9AA6CC', 700)}>📚 ${L('font que dona la IA:', 'fuente que da la IA:')}</text>
          <text x="16" y="43" ${M(11.5, '#fff')}>Vila, J. (2018).</text><text x="16" y="60" ${M(11.5, '#C4B5FD')}>${L('«Les abelles secretes». Ed. Rusc', '«Las abejas secretas». Ed. Panal')}</text></g>
        <g ${tA(.9, 'ta-in')}>${box(4, 80, 204, 30, '#fff', '#DCE4FA', 15)}<text x="16" y="100" ${F(11)}>🔎 ${L('«Les abelles secretes» Vila', '«Las abejas secretas» Vila')}</text></g>
        <g ${tA(1.4, 'ta-pop')}>${box(214, 80, 102, 30, '#FFE4E4', '#F8B4B4', 15)}${CT(265, 100, L('0 resultats', '0 resultados'), 11.5, '#B91C1C')}</g>
        <g ${tA(1.9, 'ta-in')}>${box(4, 122, 204, 30, '#fff', '#DCE4FA', 15)}<text x="16" y="142" ${M(10.5, '#1D4ED8')}>🔗 ${L('abelles.exemple/estudi', 'abejas.ejemplo/estudio')}</text></g>
        <g ${tA(2.4, 'ta-pop')}>${box(214, 122, 102, 30, '#FFE4E4', '#F8B4B4', 15)}${CT(265, 142, L('no existeix', 'no existe'), 11.5, '#B91C1C')}</g>
        <g ${tA(3, 'ta-pop')}>${box(24, 170, 272, 34, '#7C3AED', '', 17)}${CT(160, 192, L('Les fonts també es poden inventar', 'Las fuentes también se pueden inventar'), 12, '#fff')}</g>`);
    },
    // lectura lateral: una afirmació es comprova obrint fonts fiables i independents
    i32lateral() {
      const T = [['📘', L('Enciclopèdia', 'Enciclopedia'), ''], ['🏛️', L('Museu de', 'Museo de'), L('ciències', 'ciencias')], ['📚', L('Llibre de', 'Libro de'), L('text', 'texto')]];
      return tSvg(214, `<g ${tA(.2, 'ta-pop')}>${box(62, 6, 196, 40, '#FFF7E6', '#F6D28B', 14)}${CT(160, 31, L('«Les abelles tenen 5 ulls»', '«Las abejas tienen 5 ojos»'), 12.5, '#92400E')}</g>
        ${T.map(([e, a, b], i) => { const x = 8 + i * 104; return `<g ${tA(.7 + i * .3, 'ta-fade')}>${arrow(160, 50, x + 48, 80, '#C9A55A')}</g><g ${tA(.9 + i * .4, 'ta-in')}>${box(x, 84, 96, 72, '#fff', '#DCE4FA', 12)}<rect x="${x}" y="84" width="96" height="14" rx="7" fill="#E8EEFF"/><circle cx="${x + 10}" cy="91" r="3" fill="#9AA6CC"/><circle cx="${x + 20}" cy="91" r="3" fill="#9AA6CC"/>
          <text x="${x + 48}" y="122" text-anchor="middle" font-size="20">${e}</text>${CT(x + 48, 140, a, 10.5)}${b ? CT(x + 48, 152, b, 10.5) : ''}</g><g ${tA(1.8 + i * .3, 'ta-pop')}>${ok(x + 86, 88, 9)}</g>`; }).join('')}
        <g ${tA(2.9, 'ta-in')}>${box(6, 168, 308, 38, '#EEFBF3', '#B9EBD2', 14)}${CT(160, 192, L('2 fonts fiables i independents ✓', '2 fuentes fiables e independientes ✓'), 12, '#15803D')}</g>`);
    },
    // senyals d'alerta: on és més fàcil que hi hagi una al·lucinació
    i32flags() {
      return tSvg(214, grid6([['🔢', L('Xifres molt', 'Cifras muy'), L('exactes', 'exactas'), '#EF4444', '#FFF1F1'], ['💬', L('Cites', 'Citas'), L('literals', 'literales'), '#F08A24', '#FFF4E8'],
        ['📅', L('Dates i', 'Fechas y'), L('noms', 'nombres'), '#8B5CF6', '#F3F0FF'], ['🔗', L('Enllaços', 'Enlaces'), L('i llibres', 'y libros'), '#3B82F6', '#EEF4FF'],
        ['🆕', L('Temes molt', 'Temas muy'), L('recents', 'recientes'), '#14A3B8', '#E9FAFD'], ['📍', L('Coses molt', 'Cosas muy'), L('locals', 'locales'), '#E5489A', '#FDEEF6']]) +
        [0, 1, 2, 3, 4, 5].map(i => `<text x="${146 + (i % 2) * 156}" y="${24 + Math.floor(i / 2) * 70}" text-anchor="end" font-size="13" ${tA(1.9 + i * .15, 'ta-pop')}>🚩</text>`).join(''));
    },

    // les sis peces d'un bon prompt
    i33anat() {
      const P = [[L('CONTEXT', 'CONTEXTO'), L("estic a 2n d'ESO…", 'estoy en 2.º de ESO…'), '#8B5CF6', '#F3F0FF'], [L('TASCA', 'TAREA'), L("explica'm…", 'explícame…'), '#14A3B8', '#E9FAFD'],
        [L('FORMAT', 'FORMATO'), L('en 5 punts curts', 'en 5 puntos cortos'), '#F08A24', '#FFF4E8'], [L('EXEMPLE', 'EJEMPLO'), L('com aquest: …', 'como este: …'), '#3CC47C', '#EEFBF3'],
        [L('LÍMITS', 'LÍMITES'), L('sense…, només…', 'sin…, solo…'), '#E5489A', '#FDEEF6'], [L('COMPROVAR', 'COMPROBAR'), L('si dubtes, digues-ho', 'si dudas, dilo'), '#3B82F6', '#EEF4FF']];
      return tSvg(214, P.map(([k, x, c, bg], i) => { const X = 6 + (i % 2) * 156, Y = 6 + Math.floor(i / 2) * 70;
        return `<g ${tA(.2 + i * .4, 'ta-pop')}>${box(X, Y, 152, 62, bg, c + '66')}<circle cx="${X + 18}" cy="${Y + 20}" r="10" fill="${c}"/><text x="${X + 18}" y="${Y + 24}" text-anchor="middle" ${F(11, '#fff', 900)}>${i + 1}</text>
          <text x="${X + 34}" y="${Y + 25}" ${F(11.5, c, 900)}>${k}</text><text x="${X + 12}" y="${Y + 48}" ${F(10.5, '#14204A', 700)}>${x}</text></g>`; }).join(''));
    },
    // un prompt vague fa una resposta genèrica; un de precís, una de clara i útil
    i33compare() {
      const grey = [96, 120, 84, 130, 110, 124, 90, 116].map((w, i) => `<rect x="14" y="${90 + i * 10}" width="${w}" height="5" rx="2.5" fill="#E3B4B4"/>`).join('');
      const pts = [['#8B5CF6', 84], ['#14A3B8', 100], ['#F08A24', 76]].map(([c, w], i) => `<circle cx="180" cy="${101 + i * 22}" r="5" fill="${c}"/><rect x="192" y="${98 + i * 22}" width="${w}" height="6" rx="3" fill="#9ED9B8"/>`).join('');
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 4, 152, 206, '#FFF4F4', '#F8C9C9')}${CT(80, 23, L('PROMPT VAGUE', 'PROMPT VAGO'), 11, '#B91C1C', 900)}${box(14, 32, 132, 30, '#fff', '#DCE4FA', 12)}<text x="80" y="52" text-anchor="middle" ${M(12)}>${L('volcans', 'volcanes')}</text></g>
        <g ${tA(.7, 'ta-fade')}>${arrow(80, 66, 80, 80, '#C98A8A')}${grey}</g>
        <g ${tA(1.3, 'ta-pop')}>${ko(80, 182)}${CT(80, 204, L('llarg i genèric', 'largo y genérico'), 10.5, '#B91C1C', 800)}</g>
        <g ${tA(1.6, 'ta-in')}>${box(164, 4, 152, 206, '#EEFBF3', '#B9EBD2')}${CT(240, 23, L('PROMPT PRECÍS', 'PROMPT PRECISO'), 11, '#15803D', 900)}${box(172, 32, 136, 46, '#fff', '#DCE4FA', 12)}
          ${CT(240, 51, L("2n d'ESO: explica'm", '2.º ESO: explícame'), 10)}${CT(240, 67, L('els volcans en 3 punts', 'los volcanes en 3 puntos'), 10)}</g>
        <g ${tA(2.1, 'ta-fade')}>${arrow(240, 80, 240, 90, '#7FC79E')}${pts}<text x="176" y="170" ${F(11, '#15803D')}>❓ ${L('+ 1 pregunta de repàs', '+ 1 pregunta de repaso')}</text></g>
        <g ${tA(2.7, 'ta-pop')}>${ok(240, 186)}${CT(240, 207, L('clar i útil', 'claro y útil'), 10.5, '#15803D', 800)}</g>`);
    },
    // un exemple al prompt: el model n'imita el patró
    i33few() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 6, 312, 56, '#F3F0FF', '#D8CCFF')}<text x="16" y="24" ${F(10.5, '#6D28D9', 900)}>${L('EL TEU EXEMPLE', 'TU EJEMPLO')}</text>
          <text x="16" y="48" ${M(12)}><tspan fill="#7C3AED">${L('Volcà', 'Volcán')}</tspan>: <tspan fill="#0E7490">${L('muntanya que treu lava', 'montaña que echa lava')}</tspan></text><text x="${L(254, 246)}" y="48" font-size="13">🌋</text></g>
        <g ${tA(1, 'ta-in')}>${box(4, 74, 312, 86, '#0E1332', '', 14)}<text x="16" y="92" ${F(10.5, '#9AA6CC', 700)}>${L('el model segueix el patró:', 'el modelo sigue el patrón:')}</text></g>
        <g ${tA(1.6, 'ta-fade')}><text x="16" y="118" ${M(12, '#fff')}><tspan fill="#C4B5FD">${L('Terratrèmol', 'Terremoto')}</tspan>: <tspan fill="#67E8F9">${L('la terra tremola', 'la tierra tiembla')}</tspan></text><text x="${L(254, 246)}" y="118" font-size="13">🌍</text></g>
        <g ${tA(2.2, 'ta-fade')}><text x="16" y="144" ${M(12, '#fff')}><tspan fill="#C4B5FD">Tsunami</tspan>: <tspan fill="#67E8F9">${L('onada gegant', 'ola gigante')}</tspan></text><text x="${L(184, 170)}" y="144" font-size="13">🌊</text></g>
        <g ${tA(2.8, 'ta-pop')}>${box(14, 170, 80, 22, '#7C3AED', '', 11)}${CT(54, 185, L('nom', 'nombre'), 11, '#fff')}${box(102, 170, 132, 22, '#0E7490', '', 11)}${CT(168, 185, L('definició curta', 'definición corta'), 11, '#fff')}${box(242, 170, 64, 22, '#F08A24', '', 11)}${CT(274, 185, 'emoji', 11, '#fff')}</g>
        <g ${tA(3.2, 'ta-fade')}>${CT(160, 209, L('Un exemple val més que mil instruccions', 'Un ejemplo vale más que mil instrucciones'), 11, '#7C3AED', 800)}</g>`);
    },
    // iterar: cada versió afegeix el que faltava i la resposta millora
    i33iter() {
      const V = [['v1', L('resumeix la Revolució Industrial', 'resume la Revolución Industrial'), 2, '#EF5A5A'], ['v2', L("+ per a 3r d'ESO, en 5 punts", '+ para 3.º de ESO, en 5 puntos'), 4, '#F2B21B'], ['v3', L('+ sense inventar; si dubtes, digues-ho', '+ sin inventar; si dudas, dilo'), 6, '#3CC47C']];
      return tSvg(214, V.map(([v, t, s, c], i) => { const y = 6 + i * 70; return `<g ${tA(.3 + i * .9, 'ta-in')}>${box(4, y, 312, 62, '#fff', '#DCE4FA')}<circle cx="28" cy="${y + 31}" r="16" fill="${c}"/><text x="28" y="${y + 36}" text-anchor="middle" ${F(12, '#fff', 900)}>${v}</text>
          <text x="52" y="${y + 25}" ${M(10.5)}>${t}</text><rect x="52" y="${y + 38}" width="200" height="9" rx="4.5" fill="#E8EEFF"/><rect x="52" y="${y + 38}" width="${(200 * s / 6).toFixed(0)}" height="9" rx="4.5" fill="${c}"/><text x="262" y="${y + 47}" ${F(11.5)}>${s}/6</text></g>`; }).join('') +
        `<g ${tA(2.9, 'ta-pop')}>${ok(298, 186)}</g>`);
    },
    // què no hi posis mai · com demanar per aprendre
    i33safe() {
      const A = [L('nom i cognoms', 'nombre y apellidos'), L('adreça i telèfon', 'dirección y teléfono'), L('contrasenyes', 'contraseñas'), L("fotos d'altres", 'fotos de otros')];
      const B = [L("explica'm…", 'explícame…'), L("pregunta'm…", 'pregúntame…'), L("dona'm una pista", 'dame una pista'), L('revisa el meu text', 'revisa mi texto')];
      const col = (x, head, rows, good, fill, stroke, t0) => `<g ${tA(t0, 'ta-in')}>${box(x, 6, 152, 202, fill, stroke, 16)}${CT(x + 76, 34, head, 12.5)}</g>
        ${rows.map((t, i) => `<g ${tA(t0 + .4 + i * .4, 'ta-in')}>${good ? ok(x + 20, 68 + i * 38) : ko(x + 20, 68 + i * 38)}<text x="${x + 36}" y="${73 + i * 38}" ${F(11, '#14204A', 700)}>${t}</text></g>`).join('')}`;
      return tSvg(214, col(4, L('🔒 Mai no hi posis', '🔒 Nunca pongas'), A, false, '#FFF4F4', '#F8C9C9', .1) + col(164, L('🎓 Per aprendre', '🎓 Para aprender'), B, true, '#EEFBF3', '#B9EBD2', 1.6));
    },

    // dos camins: la IA copiadora (entregues, però no aprens) o la IA tutora (practiques i ho saps fer)
    i34two() {
      const A = [L("«fes-m'ho tu»", '«házmelo tú»'), L('entregues ràpid', 'entregas rápido'), L('no ho has après', 'no lo has aprendido')], B = [L("«ajuda'm a entendre»", '«ayúdame a entender»'), L('practiques i penses', 'practicas y piensas'), L('ho saps fer', 'sabes hacerlo')];
      const col = (x, head, rows, c, fill, stroke, emo, t0) => `<g ${tA(t0, 'ta-in')}>${box(x, 52, 150, 158, fill, stroke, 16)}${CT(x + 75, 72, head, 11.5, c, 900)}</g>
        ${rows.map((t, i) => `<g ${tA(t0 + .35 + i * .35, 'ta-fade')}>${CT(x + 75, 98 + i * 24, t, 11)}</g>`).join('')}
        <g ${tA(t0 + 1.4, 'ta-pop')}><text x="${x + 75}" y="188" text-anchor="middle" font-size="22">${emo}</text>${CT(x + 75, 204, L("a l'examen…", 'en el examen…'), 10, '#56628A', 700)}</g>`;
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}>${box(96, 4, 128, 30, '#0E1332', '', 15)}${CT(160, 24, L('📚 Tinc deures', '📚 Tengo deberes'), 12, '#fff')}</g>
        <g ${tA(.3, 'ta-fade')}>${arrow(130, 36, 90, 50, '#C98A8A')}${arrow(190, 36, 230, 50, '#7FC79E')}</g>` +
        col(4, L('📋 COPIADORA', '📋 COPIADORA'), A, '#B91C1C', '#FFF4F4', '#F8C9C9', '😰', .5) + col(166, L('🧑‍🏫 TUTORA', '🧑‍🏫 TUTORA'), B, '#15803D', '#EEFBF3', '#B9EBD2', '😎', 1.5));
    },
    // recordar sense mirar costa més… i per això queda: rellegir o fer-se preguntes
    i34brain() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(4, 6, 312, 96, '#F5F8FF', '#DCE4FA')}<text x="30" y="58" text-anchor="middle" font-size="26">📖</text>
          <text x="56" y="44" ${F(13)}>${L('Rellegir els apunts', 'Releer los apuntes')}</text><text x="56" y="64" ${F(10.5, '#56628A', 700)}>${L('sembla fàcil', 'parece fácil')}</text></g>
        <g ${tA(.9, 'ta-fade')}><path d="M190 56 C206 50 214 66 230 58" stroke="#C9D3F2" stroke-width="2" fill="none" stroke-dasharray="3 5"/></g>
        <g ${tA(1.3, 'ta-pop')}><text x="272" y="62" text-anchor="middle" font-size="26">😕</text>${CT(272, 88, L('al cap de dies…', 'a los días…'), 10, '#56628A', 700)}</g>
        <g ${tA(1.8, 'ta-in')}>${box(4, 112, 312, 96, '#F3F0FF', '#D8CCFF')}<text x="30" y="166" text-anchor="middle" font-size="26">❓</text>
          <text x="56" y="150" ${F(13)}>${L("Fer-se preguntes", 'Hacerse preguntas')}</text><text x="56" y="170" ${F(10.5, '#6D28D9', 700)}>${L('costa més… i queda', 'cuesta más… y queda')}</text></g>
        <g ${tA(2.5, 'ta-fade')}><path d="M190 162 C206 154 214 172 230 164" stroke="#7C3AED" stroke-width="6" fill="none" stroke-linecap="round"/></g>
        <g ${tA(2.9, 'ta-pop')}><text x="272" y="168" text-anchor="middle" font-size="26">😃</text>${CT(272, 194, L('ho recordes', 'lo recuerdas'), 10, '#6D28D9', 800)}</g>`);
    },
    // la rutina d'estudi amb IA: un cicle de cinc passos
    i34loop() {
      const N = [['✍️', L('Prova-ho tu', 'Inténtalo'), '#8B5CF6'], ['💡', L('Demana pista', 'Pide pista'), '#F08A24'], ['❓', L('Respon', 'Responde'), '#14A3B8'], ['🔎', L('Comprova', 'Comprueba'), '#3CC47C'], ['🗣️', L('Explica-ho', 'Explícalo'), '#E5489A']];
      return tSvg(214, `<ellipse cx="160" cy="98" rx="112" ry="70" fill="none" stroke="#C4B5FD" stroke-width="3" stroke-dasharray="8 8" class="ta-dash"/>
        <g ${tA(.2, 'ta-pop')}><text x="160" y="112" text-anchor="middle" font-size="28">🧠</text></g>
        ${N.map(([e, t, c], i) => { const a = (-90 + i * 72) * Math.PI / 180, x = 160 + 112 * Math.cos(a), y = 98 + 70 * Math.sin(a);
          return `<g ${tA(.4 + i * .45, 'ta-pop')}><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="20" fill="${c}"/><text x="${x.toFixed(1)}" y="${(y + 7).toFixed(1)}" text-anchor="middle" font-size="17">${e}</text>
            <text x="${x.toFixed(1)}" y="${(y + 36).toFixed(1)}" text-anchor="middle" ${F(11, c, 900)}>${i + 1}. ${t}</text></g>`; }).join('')}`);
    },
    // les normes: segueix les del centre, declara-ho i la feina final és teva
    i34rules() {
      const R = [[1, L('Segueix les normes del centre', 'Sigue las normas del centro')], [1, L('Declara quan fas servir IA', 'Declara cuándo usas IA')], [1, L('La feina final és teva', 'El trabajo final es tuyo')], [0, L('Text de la IA com si fos teu', 'Texto de la IA como si fuera tuyo')]];
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(28, 4, 264, 206, '#fff', '#DCE4FA', 16)}${CT(160, 30, L('📜 Normes de la classe', '📜 Normas de la clase'), 13.5)}</g>
        ${R.map(([g, t], i) => `<g ${tA(.5 + i * .4, 'ta-in')}>${g ? ok(52, 54 + i * 26, 9) : ko(52, 54 + i * 26, 9)}<text x="68" y="${59 + i * 26}" ${F(11, '#14204A', 700)}>${t}</text></g>`).join('')}
        <g ${tA(2.4, 'ta-pop')}>${box(44, 160, 232, 42, '#F3F0FF', '#D8CCFF', 10)}<text x="56" y="178" ${F(10.5, '#6D28D9', 800)}>🏷️ ${L('Nota: he fet servir IA per', 'Nota: he usado IA para')}</text><text x="56" y="194" ${F(10.5, '#6D28D9', 800)}>${L('fer-me preguntes de repàs.', 'hacerme preguntas de repaso.')}</text></g>`);
    },
    // abans de fer servir una app d'IA real: edat, permís, privadesa i normes
    i34age() {
      const T = [['🎂', L('Edat', 'Edad'), L('mínima', 'mínima'), '#8B5CF6', '#F3F0FF'], ['👪', L('Permís', 'Permiso'), L('de la família', 'de la familia'), '#14A3B8', '#E9FAFD'], ['🔒', L('Cap dada', 'Ningún dato'), L('personal', 'personal'), '#3CC47C', '#EEFBF3'], ['🏫', L('Normes', 'Normas'), L('del centre', 'del centro'), '#F08A24', '#FFF4E8']];
      return tSvg(214, T.map(([e, a, b, c, bg], i) => { const x = 6 + (i % 2) * 156, y = 6 + Math.floor(i / 2) * 104; return `<g ${tA(.3 + i * .6, 'ta-pop')}>${box(x, y, 152, 98, bg, c + '55', 16)}<text x="${x + 28}" y="${y + 58}" text-anchor="middle" font-size="26">${e}</text>
          <text x="${x + 52}" y="${y + 46}" ${F(12.5)}>${a}</text><text x="${x + 52}" y="${y + 66}" ${F(12, c, 900)}>${b}</text>${ok(x + 136, y + 16, 9, c)}</g>`; }).join(''));
    }
  });
}

/* ── unitat 4 ── */
/* Tech IA · unitat 4 · animacions de teoria (TANI). Dibuixos propis de Numi: parelles d'imatge i text, del soroll a la
   imatge (difusió), les peces d'un prompt d'imatge, estereotips, estils i artistes; tipus de deepfakes, veus clonades,
   verificar, etiquetes i marques, consentiment; drets d'autor, llicències Creative Commons, qui és l'autor, entrenar amb
   obres d'altres, la fitxa de transparència; i el projecte (guió, coherència del personatge, qui fa què, l'etiqueta). */
{
  const F = (sz, c = '#14204A', w = 800) => `style="font:${w} ${sz}px Lexend,system-ui,sans-serif;fill:${c}"`;
  const M = (sz, c = '#14204A') => `style="font:700 ${sz}px ui-monospace,Menlo,monospace;fill:${c}"`;
  const box = (x, y, w, h, fill, stroke, r = 14) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="2"` : ''}/>`;
  const arrow = (x1, y1, x2, y2, c = '#8B9BE0') => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><path d="M${x2} ${y2} l-7 -4 m7 4 l-7 4" stroke="${c}" stroke-width="2.5" stroke-linecap="round" fill="none" transform="rotate(${(Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI).toFixed(0)} ${x2} ${y2})"/>`;
  const ok = (cx, cy, r = 10, c = '#3CC47C') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/><path d="M${cx - r / 2} ${cy}l${(r * .35).toFixed(1)} ${(r * .35).toFixed(1)} ${(r * .6).toFixed(1)} -${(r * .65).toFixed(1)}" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  const ko = (cx, cy, r = 10) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#EF5A5A"/><path d="M${cx - r * .4} ${cy - r * .4}l${r * .8} ${r * .8}m0 -${r * .8}l-${r * .8} ${r * .8}" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`;
  const CT = (x, y, t, sz, c, w) => `<text x="${x}" y="${y}" text-anchor="middle" ${F(sz, c, w)}>${t}</text>`;
  const rng = s => () => { s = (s * 1103515245 + 12345) % 2147483648; return s / 2147483648; };
  // una persona petita (cap, cabells i cos), per a les animacions d'estereotips i del personatge
  const pers = (x, y, skin, hair, top, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-13 26 Q-13 6 0 6 Q13 6 13 26 Z" fill="${top}"/><circle cx="0" cy="-6" r="10" fill="${skin}"/><path d="M-10 -8 Q-9 -19 0 -18 Q10 -19 10 -8 Q6 -13 0 -13 Q-6 -13 -10 -8 Z" fill="${hair}"/></g>`;
  // la Kira, la protagonista inventada del còmic del projecte (cabells curts blaus i dessuadora groga)
  const kira = (x, y, hair = '#3B82F6', top = '#FACC15', s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-16 34 Q-16 8 0 8 Q16 8 16 34 Z" fill="${top}"/><path d="M-5 8 L0 15 L5 8" fill="none" stroke="#14204A" stroke-width="1.5" opacity=".35"/><circle cx="0" cy="-6" r="12" fill="#F2C9A0"/>
    <path d="M-13 -5 Q-14 -21 0 -21 Q14 -21 13 -5 Q11 -13 4 -14 Q-2 -9 -9 -12 Q-12 -9 -13 -5 Z" fill="${hair}"/><circle cx="-4" cy="-5" r="1.6" fill="#14204A"/><circle cx="4" cy="-5" r="1.6" fill="#14204A"/><path d="M-3 1 Q0 3 3 1" stroke="#14204A" stroke-width="1.4" fill="none" stroke-linecap="round"/></g>`;
  Object.assign(TANI, {
    // aprendre de parelles: moltes imatges amb la seva descripció
    i41pairs() {
      const R = [['🐱', L('«un gat dormint»', '«un gato durmiendo»'), '#F3F0FF'], ['🌅', L('«posta de sol al mar»', '«puesta de sol en el mar»'), '#FFF4E8'], ['🚲', L('«bicicleta vermella»', '«bicicleta roja»'), '#E9FAFD']];
      return tSvg(214, `${R.map(([e, t, bg], i) => { const y = 8 + i * 68; return `<g ${tA(.2 + i * .45, 'ta-pop')}>${box(8, y, 60, 60, bg, '#DCE4FA', 12)}<text x="38" y="${y + 41}" text-anchor="middle" font-size="28">${e}</text></g>
          <g ${tA(.5 + i * .45, 'ta-in')}>${box(78, y + 17, 150, 26, '#fff', '#DCE4FA', 13)}<text x="153" y="${y + 34}" text-anchor="middle" ${M(10.5)}>${t}</text></g><g ${tA(1.6, 'ta-fade')}>${arrow(232, y + 30, 248, 104 + (i - 1) * 10, '#C4B5FD')}</g>`; }).join('')}
        <g ${tA(2, 'ta-pop')}><circle cx="280" cy="104" r="30" fill="#7C3AED"/><text x="280" y="114" text-anchor="middle" font-size="27">🧠</text>${CT(280, 152, 'model', 11.5, '#56628A', 800)}</g>
        <g ${tA(2.6, 'ta-fade')}>${CT(280, 172, L('paraules', 'palabras'), 10, '#7C3AED', 800)}${CT(280, 186, '↔', 12, '#7C3AED', 900)}${CT(280, 200, L('imatges', 'imágenes'), 10, '#7C3AED', 800)}</g>`);
    },
    // difusió: del soroll a la imatge, pas a pas, guiat pel text del prompt
    i41noise() {
      const PAL = ['#8B5CF6', '#22C3E6', '#F08A24', '#3CC47C', '#E5489A', '#FDE68A', '#64748B', '#F1F5F9'], N = [110, 70, 28, 0], O = [0, .35, .72, 1], LB = [L('soroll', 'ruido'), L('formes', 'formas'), L('detalls', 'detalles'), L('imatge', 'imagen')];
      const frame = (k) => { const fx = 8 + k * 78, fy = 44, R = rng(17 + k * 31); let n = '';
        for (let i = 0; i < N[k]; i++) n += `<rect x="${(fx + Math.floor(R() * 17) * 4).toFixed(0)}" y="${(fy + Math.floor(R() * 17) * 4).toFixed(0)}" width="4" height="4" fill="${PAL[Math.floor(R() * PAL.length)]}"/>`;
        const img = `<g opacity="${O[k]}"><rect x="${fx}" y="${fy}" width="68" height="68" fill="#1E2A5A"/><circle cx="${fx + 52}" cy="${fy + 14}" r="7" fill="#FFF3B0"/><polygon points="${fx + 28},${fy + 22} ${fx + 2},${fy + 12} ${fx + 2},${fy + 30}" fill="#FDE68A" opacity=".55"/>
          <rect x="${fx}" y="${fy + 50}" width="68" height="18" fill="#2B4C9B"/><rect x="${fx + 22}" y="${fy + 24}" width="12" height="28" fill="#F1F5F9"/><rect x="${fx + 22}" y="${fy + 32}" width="12" height="5" fill="#EF4444"/><rect x="${fx + 22}" y="${fy + 43}" width="12" height="5" fill="#EF4444"/><rect x="${fx + 20}" y="${fy + 16}" width="16" height="9" rx="2" fill="#EF4444"/><circle cx="${fx + 28}" cy="${fy + 20}" r="3" fill="#FDE68A"/></g>`;
        return `<g ${tA(.5 + k * .55, 'ta-pop')}><rect x="${fx}" y="${fy}" width="68" height="68" rx="8" fill="${k === 0 ? '#9AA0B5' : '#5B6490'}"/>${img}${n}<rect x="${fx}" y="${fy}" width="68" height="68" rx="8" fill="none" stroke="#14204A" stroke-width="2"/>${CT(fx + 34, 128, LB[k], 10.5, k === 3 ? '#7C3AED' : '#56628A', 800)}</g>${k < 3 ? `<g ${tA(.8 + k * .55, 'ta-fade')}>${arrow(fx + 70, 78, fx + 76, 78, '#7C3AED')}</g>` : ''}`; };
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}>${box(50, 4, 220, 28, '#0E1332', '', 14)}${CT(160, 23, L('«un far de nit amb la lluna»', '«un faro de noche con la luna»'), 11, '#fff')}</g>
        ${[0, 1, 2, 3].map(frame).join('')}
        <g ${tA(2.9, 'ta-in')}>${box(6, 144, 308, 64, '#F3F0FF', '#D8CCFF', 14)}${CT(160, 170, L('A cada pas, el model treu una mica de soroll', 'En cada paso, el modelo quita un poco de ruido'), 11)}${CT(160, 190, L('guiat pel text del prompt (difusió)', 'guiado por el texto del prompt (difusión)'), 11, '#6D28D9')}</g>`);
    },
    // les peces d'un prompt d'imatge
    i41prompt() {
      const P = [[L('TEMA', 'TEMA'), L('un far', 'un faro'), '#8B5CF6', '#F3F0FF'], [L('ESCENA', 'ESCENA'), L('en una illa, de nit', 'en una isla, de noche'), '#14A3B8', '#E9FAFD'],
        [L('ESTIL', 'ESTILO'), L('il·lustració plana', 'ilustración plana'), '#F08A24', '#FFF4E8'], [L('LLUM', 'LUZ'), L('llum blava de lluna', 'luz azul de luna'), '#3B82F6', '#EEF4FF'],
        [L('ENQUADRAMENT', 'ENCUADRE'), L('vertical, des de lluny', 'vertical, desde lejos'), '#3CC47C', '#EEFBF3'], [L('SENSE', 'SIN'), L('text ni persones', 'texto ni personas'), '#E5489A', '#FDEEF6']];
      return tSvg(214, P.map(([k, x, c, bg], i) => { const X = 6 + (i % 2) * 156, Y = 6 + Math.floor(i / 2) * 70;
        return `<g ${tA(.2 + i * .4, 'ta-pop')}>${box(X, Y, 152, 62, bg, c + '66')}<circle cx="${X + 18}" cy="${Y + 20}" r="10" fill="${c}"/><text x="${X + 18}" y="${Y + 24}" text-anchor="middle" ${F(11, '#fff', 900)}>${i + 1}</text>
          <text x="${X + 34}" y="${Y + 25}" ${F(11, c, 900)}>${k}</text><text x="${X + 12}" y="${Y + 48}" ${F(10.5, '#14204A', 700)}>${x}</text></g>`; }).join(''));
    },
    // estereotips: les dades tenen biaixos i les imatges també; fer explícita la diversitat
    i41bias() {
      const S = ['#F2C9A0', '#C68B59', '#8D5524', '#E0AC69', '#F1C27D', '#5C3A21'], H = ['#4B3621', '#111827', '#B45309', '#9CA3AF', '#1F2937', '#7C2D12'];
      const row1 = [0, 1, 2, 3, 4, 5].map(i => pers(46 + i * 46, 74, i === 4 ? S[2] : S[0], i === 4 ? H[1] : H[0], '#F8FAFC', .95)).join('');
      const row2 = [0, 1, 2, 3, 4, 5].map(i => pers(46 + i * 46, 172, S[i], H[i], '#F8FAFC', .95)).join('');
      return tSvg(214, `<g ${tA(.1, 'ta-pop')}>${box(56, 4, 208, 26, '#0E1332', '', 13)}${CT(160, 22, L('«una persona que fa ciència»', '«una persona que hace ciencia»'), 11, '#fff')}</g>
        <g ${tA(.6, 'ta-in')}>${row1}</g><g ${tA(1.2, 'ta-fade')}>${CT(160, 114, L('gairebé sempre surt el mateix tipus de persona', 'casi siempre sale el mismo tipo de persona'), 10.5, '#B91C1C', 800)}</g>
        <g ${tA(1.8, 'ta-pop')}>${box(36, 122, 248, 26, '#7C3AED', '', 13)}${CT(160, 140, L('«persones diverses fent ciència»', '«personas diversas haciendo ciencia»'), 11, '#fff')}</g>
        <g ${tA(2.4, 'ta-in')}>${row2}</g><g ${tA(3, 'ta-pop')}>${ok(300, 150, 9)}</g>`);
    },
    // estils i artistes: el model aprèn d'obres d'artistes; millor descriure la tècnica
    i41style() {
      const bird = (x, y, s, c = '#7C3AED') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 Q14 -16 30 -4 Q22 0 30 6 Q14 14 0 0 Z" fill="${c}"/><circle cx="24" cy="-3" r="2" fill="#fff"/><path d="M-4 -2 Q-14 -12 -18 2 Q-10 0 -4 4 Z" fill="#F472B6"/><path d="M6 -6 Q12 -22 22 -14" stroke="#F08A24" stroke-width="3" fill="none" stroke-linecap="round"/></g>`;
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 16, 118, 142, '#FFF9F0', '#F6D9B0', 14)}${bird(48, 74, 1.5)}${CT(65, 128, L("obra d'una artista", 'obra de una artista'), 10.5, '#92400E', 800)}${CT(65, 146, '✍️ Aina Riu', 10.5, '#92400E', 700)}</g>
        <g ${tA(.9, 'ta-fade')}>${arrow(128, 86, 168, 86, '#C4B5FD')}${CT(148, 76, '🤖', 14)}</g>
        <g ${tA(1.3, 'ta-pop')}>${box(174, 16, 140, 142, '#F3F0FF', '#D8CCFF', 14)}${[[198, 50], [262, 50], [198, 104], [262, 104]].map(([x, y], i) => bird(x - 14, y, .85, ['#7C3AED', '#8B5CF6', '#6D28D9', '#A78BFA'][i])).join('')}${CT(244, 146, L("«a l'estil d'Aina Riu»", '«al estilo de Aina Riu»'), 10, '#6D28D9', 800)}</g>
        <g ${tA(2, 'ta-pop')}><text x="65" y="186" text-anchor="middle" font-size="22">😟</text></g>
        <g ${tA(2.6, 'ta-in')}>${box(110, 170, 204, 38, '#EEFBF3', '#B9EBD2', 12)}${CT(212, 186, L('✓ Descriu la tècnica', '✓ Describe la técnica'), 11, '#15803D')}${CT(212, 201, L('(aquarel·la, línia clara…)', '(acuarela, línea clara…)'), 9.5, '#15803D', 700)}</g>`);
    },

    // tipus de deepfakes
    i42what() {
      const T = [['🔄', L('Canvi', 'Cambio'), L('de cara', 'de cara'), '#8B5CF6', '#F3F0FF'], ['👄', L('Llavis', 'Labios'), L('sincronitzats', 'sincronizados'), '#E5489A', '#FDEEF6'], ['🗣️', L('Veu', 'Voz'), L('clonada', 'clonada'), '#14A3B8', '#E9FAFD'], ['✨', L('Escena', 'Escena'), L('inventada', 'inventada'), '#F08A24', '#FFF4E8']];
      return tSvg(214, T.map(([e, a, b, c, bg], i) => { const x = 6 + (i % 2) * 156, y = 6 + Math.floor(i / 2) * 104; return `<g ${tA(.3 + i * .55, 'ta-pop')}>${box(x, y, 152, 98, bg, c + '55', 16)}<text x="${x + 28}" y="${y + 58}" text-anchor="middle" font-size="26">${e}</text>
          <text x="${x + 52}" y="${y + 46}" ${F(12.5)}>${a}</text><text x="${x + 52}" y="${y + 66}" ${F(11.5, c, 900)}>${b}</text></g>`; }).join(''));
    },
    // veus clonades: pocs segons de veu → una trucada urgent; la defensa: penjar i trucar, o la paraula clau
    i42voice() {
      const wave = [6, 14, 9, 18, 7, 15, 10, 4, 12, 16, 8].map((h, i) => `<rect x="${18 + i * 5}" y="${36 - h / 2}" width="3" height="${h}" rx="1.5" fill="#22C3E6"/>`).join('');
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 8, 74, 56, '#0E1332', '', 12)}${wave}${CT(43, 78, L('pocs segons', 'pocos segundos'), 9.5, '#56628A', 800)}${CT(43, 90, L('de veu', 'de voz'), 9.5, '#56628A', 800)}</g>
        <g ${tA(.7, 'ta-fade')}>${arrow(84, 36, 104, 36, '#EF5A5A')}</g><g ${tA(.9, 'ta-pop')}><circle cx="124" cy="36" r="18" fill="#7C3AED"/><text x="124" y="43" text-anchor="middle" font-size="17">🤖</text></g>
        <g ${tA(1.2, 'ta-fade')}>${arrow(144, 36, 160, 36, '#EF5A5A')}</g>
        <g ${tA(1.4, 'ta-in')}>${box(164, 6, 150, 62, '#FFF1F1', '#F8B4B4', 12)}<text x="174" y="26" ${F(11, '#B91C1C', 900)}>📞 ${L('«Avi, soc jo!', '«¡Abuelo, soy yo!')}</text><text x="174" y="43" ${F(10.5, '#14204A', 700)}>${L("Envia'm diners ara", 'Mándame dinero ya')}</text><text x="174" y="59" ${F(10.5, '#14204A', 700)}>${L('i no ho diguis a ningú»', 'y no se lo digas a nadie»')}</text></g>
        <g ${tA(2, 'ta-pop')}>${box(40, 96, 240, 26, '#EF5A5A', '', 13)}${CT(160, 113, L('pressa + secret + diners = 🚩', 'prisa + secreto + dinero = 🚩'), 11.5, '#fff')}</g>
        <g ${tA(2.5, 'ta-in')}>${box(6, 132, 150, 76, '#EEFBF3', '#B9EBD2', 14)}<text x="81" y="160" text-anchor="middle" font-size="20">📵</text>${CT(81, 180, L('Penja i truca al', 'Cuelga y llama al'), 10.5)}${CT(81, 196, L('número de sempre', 'número de siempre'), 10.5)}</g>
        <g ${tA(2.9, 'ta-in')}>${box(164, 132, 150, 76, '#EEFBF3', '#B9EBD2', 14)}<text x="239" y="160" text-anchor="middle" font-size="20">🔑</text>${CT(239, 180, L('Paraula clau', 'Palabra clave'), 10.5)}${CT(239, 196, L('de la família', 'de la familia'), 10.5)}</g>`);
    },
    // verificar un vídeo o un àudio: atura't, qui ho publica, altres fonts, l'original
    i42verify() {
      const S = [['✋', L("Atura't", 'Detente'), L('no ho comparteixis encara', 'no lo compartas todavía'), '#EF5A5A'], ['👤', L('Qui ho publica?', '¿Quién lo publica?'), L('compte nou? font oficial?', '¿cuenta nueva? ¿fuente oficial?'), '#8B5CF6'],
        ['🔎', L('Què diuen altres fonts?', '¿Qué dicen otras fuentes?'), L('mitjans fiables, web oficial', 'medios fiables, web oficial'), '#14A3B8'], ['🧭', L("Busca l'original", 'Busca el original'), L("cerca inversa d'imatges", 'búsqueda inversa de imágenes'), '#3CC47C']];
      return tSvg(214, S.map(([e, t, k, c], i) => `<g ${tA(.3 + i * .6, 'ta-in')}>${box(6, 4 + i * 52, 308, 46, '#fff', '#DCE4FA', 12)}<circle cx="30" cy="${27 + i * 52}" r="16" fill="${c}" opacity=".18"/><text x="30" y="${34 + i * 52}" text-anchor="middle" font-size="17">${e}</text>
          <text x="54" y="${23 + i * 52}" ${F(12.5)}>${i + 1}. ${t}</text><text x="54" y="${40 + i * 52}" ${F(10.5, c, 800)}>${k}</text></g>`).join(''));
    },
    // etiquetes i marques: visible, metadades i marca d'aigua invisible; sense etiqueta no vol dir real
    i42label() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 308, 92, '#0E1332', '', 14)}${pers(160, 58, '#C68B59', '#111827', '#3B82F6', 1.5)}<polygon points="40,40 40,64 60,52" fill="#fff" opacity=".85"/><rect x="20" y="86" width="280" height="4" rx="2" fill="#2E3A86"/><rect x="20" y="86" width="96" height="4" rx="2" fill="#EF5A5A"/></g>
        <g ${tA(.8, 'ta-pop')}>${box(214, 14, 92, 22, '#FDE68A', '', 11)}${CT(260, 29, L('✨ Fet amb IA', '✨ Hecho con IA'), 10, '#92400E', 900)}</g>
        ${[['🏷️', L('etiqueta', 'etiqueta'), L('visible', 'visible')], ['🧾', L('metadades', 'metadatos'), L('credencials', 'credenciales')], ['💧', L("marca d'aigua", 'marca de agua'), L('invisible', 'invisible')]].map(([e, a, b], i) => `<g ${tA(1.3 + i * .4, 'ta-pop')}>${box(6 + i * 104, 106, 100, 42, '#F3F0FF', '#D8CCFF', 12)}${CT(56 + i * 104, 124, `${e} ${a}`, 10.5)}${CT(56 + i * 104, 140, b, 9.5, '#6D28D9', 700)}</g>`).join('')}
        <g ${tA(2.7, 'ta-in')}>${box(6, 156, 308, 52, '#FFF7E6', '#F6D28B', 12)}${CT(160, 176, L('UE, des del 2-8-2026: cal etiquetar els deepfakes', 'UE, desde el 2-8-2026: hay que etiquetar los deepfakes'), 10.5, '#92400E')}${CT(160, 196, L('⚠️ Sense etiqueta ≠ real: les marques es treuen', '⚠️ Sin etiqueta ≠ real: las marcas se quitan'), 10.5, '#B91C1C')}</g>`);
    },
    // consentiment: mai deepfakes de persones reals; si et passa, què fer
    i42consent() {
      const R = [L('Sense permís, mai', 'Sin permiso, nunca'), L('Fa mal (i pot ser delicte)', 'Hace daño (y puede ser delito)'), L('Compartir-lo també fa mal', 'Compartirlo también hace daño')];
      const H = [['🧑‍🏫', L('adult de confiança', 'adulto de confianza')], ['📸', L('guarda proves', 'guarda pruebas')], ['🚩', L('denuncia-ho', 'denúncialo')], ['☎️', '017 · 116 111']];
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(6, 6, 308, 112, '#FFF4F4', '#F8C9C9', 16)}<text x="22" y="32" ${F(13)}>🚫 ${L('Deepfakes de persones reals', 'Deepfakes de personas reales')}</text></g>
        ${R.map((t, i) => `<g ${tA(.5 + i * .4, 'ta-in')}>${ko(32, 56 + i * 22, 8)}<text x="48" y="${60 + i * 22}" ${F(11, '#14204A', 700)}>${t}</text></g>`).join('')}
        <g ${tA(1.9, 'ta-fade')}><text x="10" y="138" ${F(11.5, '#15803D', 900)}>${L('Si et passa a tu o a algú:', 'Si te pasa a ti o a alguien:')}</text></g>
        ${H.map(([e, t], i) => { const x = 6 + (i % 2) * 156, y = 146 + Math.floor(i / 2) * 32; return `<g ${tA(2.2 + i * .3, 'ta-pop')}>${box(x, y, 152, 28, '#EEFBF3', '#B9EBD2', 14)}${CT(x + 76, y + 19, `${e} ${t}`, 10.5, '#15803D')}</g>`; }).join('')}`);
    },

    // drets d'autor: neixen amb l'obra i l'autor/a decideix
    i43rights() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(8, 10, 132, 132, '#fff', '#DCE4FA', 14)}<rect x="20" y="22" width="108" height="84" rx="8" fill="#E0F2FE"/><circle cx="104" cy="42" r="10" fill="#FBBF24"/><path d="M20 106 L58 58 L80 84 L96 66 L128 106 Z" fill="#22C3E6"/><path d="M48 70 L58 58 L66 68" fill="#fff"/>${CT(74, 128, L('La meva il·lustració', 'Mi ilustración'), 10, '#56628A', 800)}</g>
        <g ${tA(.9, 'ta-pop')}><circle cx="132" cy="18" r="16" fill="#7C3AED"/><text x="132" y="25" text-anchor="middle" ${F(18, '#fff', 900)}>©</text></g>
        <g ${tA(1.2, 'ta-fade')}>${CT(74, 164, L("Neix amb l'obra:", 'Nace con la obra:'), 11.5)}${CT(74, 182, L('no cal registrar-la', 'no hace falta registrarla'), 10, '#56628A', 700)}</g>
        <g ${tA(1.5, 'ta-in')}><text x="156" y="30" ${F(12.5)}>${L("L'autor/a decideix si:", 'El autor/a decide si:')}</text></g>
        ${[['📄', L('es copia', 'se copia')], ['📤', L('es comparteix', 'se comparte')], ['✂️', L('es transforma', 'se transforma')]].map(([e, t], i) => `<g ${tA(1.8 + i * .35, 'ta-in')}>${box(156, 42 + i * 36, 158, 30, '#F3F0FF', '#D8CCFF', 12)}<text x="168" y="${62 + i * 36}" ${F(11.5)}>${e} ${t}</text></g>`).join('')}
        <g ${tA(3, 'ta-pop')}>${box(156, 156, 158, 46, '#7C3AED', '', 14)}${CT(235, 175, L('A la UE: tota la vida', 'En la UE: toda la vida'), 10.5, '#fff')}${CT(235, 192, L("de l'autor/a + 70 anys", 'del autor/a + 70 años'), 10.5, '#fff')}</g>`);
    },
    // les llicències Creative Commons: què vol dir cada peça
    i43cc() {
      const R = [['BY', L('Cita qui ho ha fet', 'Cita a quien lo ha hecho'), '#3B82F6'], ['SA', L('Comparteix amb la mateixa llicència', 'Comparte con la misma licencia'), '#14A3B8'], ['NC', L('Sense ús comercial', 'Sin uso comercial'), '#F08A24'], ['ND', L('Sense obres derivades', 'Sin obras derivadas'), '#E5489A'], ['0', L('CC0: domini públic, lliure', 'CC0: dominio público, libre'), '#3CC47C']];
      return tSvg(214, R.map(([b, t, c], i) => `<g ${tA(.3 + i * .45, 'ta-in')}>${box(6, 4 + i * 42, 308, 36, '#fff', '#DCE4FA', 12)}<circle cx="30" cy="${22 + i * 42}" r="14" fill="${c}"/><text x="30" y="${27 + i * 42}" text-anchor="middle" ${F(b.length > 1 ? 10.5 : 13, '#fff', 900)}>${b}</text>
          <text x="54" y="${27 + i * 42}" ${F(11.5)}>${t}</text></g>`).join(''));
    },
    // qui és l'autor d'una imatge generada: depèn de quanta feina creativa hi posa una persona
    i43who() {
      const S = [['🖱️', L('Només un prompt', 'Solo un prompt'), L("en molts llocs, sense drets d'autor", 'en muchos sitios, sin derechos de autor'), '#64748B'],
        ['✍️', L('Prompt + triar + retocar molt', 'Prompt + elegir + retocar mucho'), L('la teva part creativa pot comptar', 'tu parte creativa puede contar'), '#F08A24'],
        ['🎨', L('El teu dibuix + IA per al fons', 'Tu dibujo + IA para el fondo'), L('el dibuix és teu', 'el dibujo es tuyo'), '#3CC47C']];
      return tSvg(214, S.map(([e, t, k, c], i) => `<g ${tA(.3 + i * .8, 'ta-in')}>${box(6, 8 + i * 68, 308, 60, '#fff', '#DCE4FA')}<circle cx="34" cy="${38 + i * 68}" r="19" fill="${c}" opacity=".18"/><text x="34" y="${46 + i * 68}" text-anchor="middle" font-size="20">${e}</text>
          <text x="62" y="${34 + i * 68}" ${F(12.5)}>${t}</text><text x="62" y="${53 + i * 68}" ${F(11, c, 800)}>${k}</text></g>`).join(''));
    },
    // entrenar amb obres d'altres: moltes obres → model; artistes que diuen que no; judicis oberts
    i43train() {
      const C = ['#8B5CF6', '#22C3E6', '#F08A24', '#3CC47C', '#E5489A', '#FBBF24', '#3B82F6', '#14A3B8', '#F472B6'];
      return tSvg(214, `${C.map((c, i) => `<g ${tA(.1 + i * .12, 'ta-pop')}><rect x="${10 + (i % 3) * 34}" y="${14 + Math.floor(i / 3) * 34}" width="28" height="28" rx="6" fill="${c}" opacity=".85"/><circle cx="${24 + (i % 3) * 34}" cy="${28 + Math.floor(i / 3) * 34}" r="6" fill="#fff" opacity=".7"/></g>`).join('')}
        ${CT(58, 130, L("milions d'obres", 'millones de obras'), 10.5, '#56628A', 800)}
        <g ${tA(1.3, 'ta-fade')}>${arrow(112, 64, 140, 64, '#C4B5FD')}</g><g ${tA(1.5, 'ta-pop')}><circle cx="166" cy="64" r="24" fill="#7C3AED"/><text x="166" y="72" text-anchor="middle" font-size="22">🧠</text></g>
        <g ${tA(2, 'ta-in')}>${box(200, 10, 114, 74, '#FFF1F1', '#F8B4B4', 12)}${CT(257, 34, '🎨🚫🤖', 15)}${CT(257, 54, L('«No entreneu', '«No entrenéis'), 10, '#B91C1C', 800)}${CT(257, 70, L('amb la meva obra»', 'con mi obra»'), 10, '#B91C1C', 800)}</g>
        <g ${tA(2.5, 'ta-pop')}>${box(6, 146, 150, 58, '#F5F8FF', '#DCE4FA', 12)}${CT(81, 170, '⚖️', 16)}${CT(81, 192, L('judicis oberts', 'juicios abiertos'), 11)}</g>
        <g ${tA(2.9, 'ta-pop')}>${box(164, 146, 150, 58, '#EEFBF3', '#B9EBD2', 12)}${CT(239, 168, L('A la UE es pot', 'En la UE se puede'), 10.5, '#15803D')}${CT(239, 184, L('dir que no (opt-out)', 'decir que no (opt-out)'), 10.5, '#15803D')}${CT(239, 198, L('i cal un resum de dades', 'y hace falta un resumen'), 9, '#15803D', 700)}</g>`);
    },
    // la fitxa de transparència: què ha fet la IA i què has fet tu
    i43declare() {
      const R = [[L('Eina', 'Herramienta'), L("generador d'imatges", 'generador de imágenes')], [L('La IA ha fet', 'La IA ha hecho'), L('esborrany del fons', 'borrador del fondo')], [L('Jo he fet', 'Yo he hecho'), L('idea, dibuix i textos', 'idea, dibujo y textos')], [L('Fonts', 'Fuentes'), 'foto CC BY de M. Vila'], [L('Etiqueta', 'Etiqueta'), L('«Fet amb IA i retocat»', '«Hecho con IA y retocado»')]];
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(14, 4, 292, 206, '#fff', '#DCE4FA', 16)}<rect x="14" y="4" width="292" height="30" rx="16" fill="#7C3AED"/><rect x="14" y="20" width="292" height="14" fill="#7C3AED"/>${CT(160, 25, L('🏷️ FITXA DE TRANSPARÈNCIA', '🏷️ FICHA DE TRANSPARENCIA'), 11.5, '#fff', 900)}</g>
        ${R.map(([k, v], i) => `<g ${tA(.5 + i * .4, 'ta-in')}><text x="28" y="${60 + i * 30}" ${F(10.5, '#6D28D9', 900)}>${k}</text><text x="${L(124, 134)}" y="${60 + i * 30}" ${F(11, '#14204A', 700)}>${v}</text><line x1="28" y1="${68 + i * 30}" x2="292" y2="${68 + i * 30}" stroke="#E8EEFF" stroke-width="1.5"/></g>`).join('')}
        <g ${tA(2.8, 'ta-wob')}>${ok(290, 19, 10)}</g>`);
    },

    // el projecte: del guió a les vinyetes
    i44board() {
      const P = [['📱', '❗', L('rep el vídeo', 'recibe el vídeo')], ['🤔', '', L('dubta', 'duda')], ['💻', '🔎', L('ho comprova', 'lo comprueba')], ['✋', '📢', L('avisa la classe', 'avisa a la clase')]];
      return tSvg(214, `${P.map(([a, b, t], i) => { const x = 6 + (i % 2) * 156, y = 4 + Math.floor(i / 2) * 82; return `<g ${tA(.3 + i * .5, 'ta-pop')}>${box(x, y, 152, 76, '#fff', '#14204A', 8)}<circle cx="${x + 14}" cy="${y + 14}" r="9" fill="#7C3AED"/><text x="${x + 14}" y="${y + 18}" text-anchor="middle" ${F(10, '#fff', 900)}>${i + 1}</text>
          ${kira(x + 46, y + 38, '#3B82F6', '#FACC15', .8)}<text x="${x + 96}" y="${y + 40}" text-anchor="middle" font-size="22">${a}</text>${b ? `<text x="${x + 128}" y="${y + 30}" text-anchor="middle" font-size="15">${b}</text>` : ''}<text x="${x + 106}" y="${y + 66}" text-anchor="middle" ${F(10, '#56628A', 800)}>${t}</text></g>`; }).join('')}
        <g ${tA(2.6, 'ta-in')}>${box(6, 172, 308, 34, '#F3F0FF', '#D8CCFF', 17)}${CT(160, 194, L('idea → guió → imatges → retoc → fitxa', 'idea → guion → imágenes → retoque → ficha'), 11.5, '#6D28D9')}</g>`);
    },
    // coherència: el mateix personatge a totes les vinyetes
    i44consist() {
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(4, 4, 312, 100, '#EEFBF3', '#B9EBD2', 14)}<text x="16" y="24" ${F(11, '#15803D', 900)}>✓ ${L('Mateixa descripció a cada prompt', 'Misma descripción en cada prompt')}</text></g>
        ${[0, 1, 2].map(i => `<g ${tA(.4 + i * .3, 'ta-pop')}>${kira(80 + i * 80, 58, '#3B82F6', '#FACC15', .95)}</g>`).join('')}
        <g ${tA(1.5, 'ta-in')}>${box(4, 112, 312, 98, '#FFF4F4', '#F8C9C9', 14)}<text x="16" y="132" ${F(11, '#B91C1C', 900)}>✗ ${L('Descripció diferent cada vegada', 'Descripción distinta cada vez')}</text></g>
        ${[['#3B82F6', '#FACC15'], ['#7C2D12', '#EF4444'], ['#111827', '#3CC47C']].map(([h, t], i) => `<g ${tA(1.8 + i * .3, 'ta-pop')}>${kira(80 + i * 80, 166, h, t, .95)}</g>`).join('')}
        <g ${tA(2.9, 'ta-pop')}>${ko(296, 128, 9)}${ok(296, 20, 9)}</g>`);
    },
    // qui fa què: l'equip decideix; la IA fa esborranys
    i44human() {
      const A = [L('la idea i la història', 'la idea y la historia'), L('els diàlegs', 'los diálogos'), L('triar i retocar', 'elegir y retocar'), L('revisar errors', 'revisar errores'), L('la fitxa', 'la ficha')], B = [L('esborranys', 'borradores'), L('variacions', 'variaciones'), L('fons i detalls', 'fondos y detalles')];
      const col = (x, head, rows, c, fill, stroke, t0) => `<g ${tA(t0, 'ta-in')}>${box(x, 6, 152, 202, fill, stroke, 16)}${CT(x + 76, 32, head, 13.5)}</g>
        ${rows.map((t, i) => `<g ${tA(t0 + .35 + i * .3, 'ta-in')}><circle cx="${x + 20}" cy="${58 + i * 30}" r="5" fill="${c}"/><text x="${x + 32}" y="${62 + i * 30}" ${F(11, '#14204A', 700)}>${t}</text></g>`).join('')}`;
      return tSvg(214, col(4, L('🧑 Nosaltres', '🧑 Nosotros'), A, '#7C3AED', '#F3F0FF', '#D8CCFF', .1) + col(164, L('🤖 La IA', '🤖 La IA'), B, '#14A3B8', '#E9FAFD', '#B5EBF5', 1.8) +
        `<g ${tA(3, 'ta-pop')}>${box(176, 164, 128, 34, '#7C3AED', '', 17)}${CT(240, 186, L('el projecte és vostre', 'el proyecto es vuestro'), 10, '#fff')}</g>`);
    },
    // el còmic acabat amb l'etiqueta visible i la fitxa
    i44card() {
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(8, 6, 180, 200, '#fff', '#14204A', 10)}${[0, 1, 2, 3].map(i => `<rect x="${16 + (i % 2) * 86}" y="${14 + Math.floor(i / 2) * 76}" width="78" height="70" rx="4" fill="${['#E0F2FE', '#FEF3C7', '#EDE9FE', '#DCFCE7'][i]}" stroke="#14204A" stroke-width="1.5"/>${kira(55 + (i % 2) * 86, 52 + Math.floor(i / 2) * 76, '#3B82F6', '#FACC15', .65)}`).join('')}</g>
        <g ${tA(1, 'ta-pop')}>${box(14, 170, 168, 30, '#FDE68A', '', 8)}${CT(98, 184, L('Imatges amb IA, editades', 'Imágenes con IA, editadas'), 9.5, '#92400E', 900)}${CT(98, 196, L("per l'equip · CC BY", 'por el equipo · CC BY'), 9, '#92400E', 800)}</g>
        <g ${tA(1.6, 'ta-in')}>${box(198, 30, 116, 150, '#F3F0FF', '#D8CCFF', 12)}${CT(256, 52, L('FITXA', 'FICHA'), 11, '#6D28D9', 900)}${[L('autoria', 'autoría'), L('eines', 'herramientas'), L('què ha fet la IA', 'qué ha hecho la IA'), L('què hem fet', 'qué hemos hecho'), L('llicència', 'licencia')].map((t, i) => `<g ${tA(1.9 + i * .25, 'ta-fade')}>${ok(214, 72 + i * 22, 6)}<text x="226" y="${76 + i * 22}" ${F(9.5, '#14204A', 700)}>${t}</text></g>`).join('')}</g>
        <g ${tA(3.2, 'ta-wob')}>${box(214, 184, 84, 24, '#3CC47C', '', 12)}${CT(256, 200, L('honest ✓', 'honesto ✓'), 11, '#fff')}</g>`);
    }
  });
}

/* ── unitat 5 ── */
/* Tech IA · unitat 5 · animacions de teoria (TANI). Dibuixos propis de Numi: el cicle del vibe coding, on ajuda la IA i on
   falla, «sembla que funciona ≠ funciona», seguretat (claus i paquets inventats) i llicències (i5-1); l'especificació, els
   exemples, les proves d'acceptació, llegir codi que no has escrit i fer que t'ho expliqui (i5-2); depurar, llegir l'error,
   iterar amb canvis petits, versions i regressions (i5-3); i el projecte: necessitat, pla, construcció i transparència (i5-4). */
{
  const F = (sz, c = '#14204A', w = 800) => `style="font:${w} ${sz}px Lexend,system-ui,sans-serif;fill:${c}"`;
  const M = (sz, c = '#14204A') => `style="font:700 ${sz}px ui-monospace,Menlo,monospace;fill:${c}"`;
  const box = (x, y, w, h, fill, stroke, r = 14) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="2"` : ''}/>`;
  const arrow = (x1, y1, x2, y2, c = '#8B9BE0') => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><path d="M${x2} ${y2} l-7 -4 m7 4 l-7 4" stroke="${c}" stroke-width="2.5" stroke-linecap="round" fill="none" transform="rotate(${(Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI).toFixed(0)} ${x2} ${y2})"/>`;
  const ok = (cx, cy, r = 10, c = '#3CC47C') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/><path d="M${cx - r / 2} ${cy}l${(r * .35).toFixed(1)} ${(r * .35).toFixed(1)} ${(r * .6).toFixed(1)} -${(r * .65).toFixed(1)}" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  const ko = (cx, cy, r = 10) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#EF5A5A"/><path d="M${cx - r * .4} ${cy - r * .4}l${r * .8} ${r * .8}m0 -${r * .8}l-${r * .8} ${r * .8}" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`;
  const CT = (x, y, t, sz, c, w) => `<text x="${x}" y="${y}" text-anchor="middle" ${F(sz, c, w)}>${t}</text>`;
  const TX = (x, y, t, sz, c, w) => `<text x="${x}" y="${y}" ${F(sz, c, w)}>${t}</text>`;
  // una finestra d'editor fosca amb línies de codi: [text, color] (color: null = normal)
  const code = (x, y, w, lines, t0 = .2, hl = -1) => `<g ${tA(t0, 'ta-in')}>${box(x, y, w, 22 + lines.length * 17, '#0E1332', '', 12)}<circle cx="${x + 12}" cy="${y + 11}" r="3.5" fill="#EF5A5A"/><circle cx="${x + 23}" cy="${y + 11}" r="3.5" fill="#F2B21B"/><circle cx="${x + 34}" cy="${y + 11}" r="3.5" fill="#3CC47C"/>
    ${lines.map(([t, c], i) => `${i === hl ? `<rect x="${x + 4}" y="${y + 17 + i * 17}" width="${w - 8}" height="16" rx="4" fill="#EF5A5A" opacity=".28"/>` : ''}<text x="${x + 10}" y="${y + 29 + i * 17}" ${M(10.5, c || '#C8F7DC')}>${t}</text>`).join('')}</g>`;
  // un node rodó del cicle: emoji i etiqueta
  const node = (cx, cy, e, t, c, t0) => `<g ${tA(t0, 'ta-pop')}><circle cx="${cx}" cy="${cy}" r="25" fill="${c}22" stroke="${c}" stroke-width="2.5"/><text x="${cx}" y="${cy + 7}" text-anchor="middle" font-size="20">${e}</text>${CT(cx, cy + 41, t, 11, c, 900)}</g>`;
  // graella 2 × 3 de targetes: [emoji, línia 1, línia 2, color, fons]
  const grid6 = (T, t0 = .2) => T.map(([e, a, b, c, bg], i) => { const x = 6 + (i % 2) * 156, y = 6 + Math.floor(i / 2) * 68;
    return `<g ${tA(t0 + i * .3, 'ta-pop')}>${box(x, y, 152, 60, bg, c + '66', 14)}<text x="${x + 24}" y="${y + 38}" text-anchor="middle" font-size="21">${e}</text>${TX(x + 46, y + 26, a, 11.5)}${TX(x + 46, y + 44, b, 11.5, c, 900)}</g>`; }).join('');
  Object.assign(TANI, {
    /* ---------- i5-1 · Vibe coding ---------- */
    // el cicle: descriure → la IA genera → llegir → provar → arreglar (i tornar-hi)
    i51loop() {
      const N = [[160, 34, '💬', L('Descriu', 'Describe'), '#7C3AED'], [272, 92, '🤖', L('Genera', 'Genera'), '#2563EB'], [228, 168, '👀', L('Llegeix', 'Lee'), '#0E9F6E'], [92, 168, '▶️', L('Prova', 'Prueba'), '#D97706'], [48, 92, '🔧', L('Arregla', 'Arregla'), '#DB2777']];
      const A = [[184, 46, 246, 74], [266, 124, 248, 146], [196, 176, 126, 176], [72, 150, 54, 124], [62, 68, 134, 42]];
      return tSvg(214, `${A.map(([a, b, c, d], i) => `<g ${tA(.5 + i * .45, 'ta-fade')}>${arrow(a, b, c, d, '#B4BEE8')}</g>`).join('')}
        ${N.map(([x, y, e, t, c], i) => node(x, y, e, t, c, .2 + i * .45)).join('')}
        <g ${tA(2.7, 'ta-pop')}>${box(96, 82, 128, 46, '#F3F0FF', '#D8CCFF', 14)}${CT(160, 101, L('tu manes', 'tú mandas'), 12, '#6D28D9', 900)}${CT(160, 118, L('la IA ajuda', 'la IA ayuda'), 10.5, '#56628A', 700)}</g>`);
    },
    // on ajuda de veritat i on s'equivoca més
    i51good() {
      return tSvg(214, grid6([['🔘', L('Botons, llistes', 'Botones, listas'), L('ho fa ràpid', 'lo hace rápido'), '#15803D', '#EEFBF3'], ['🧪', L('Casos estranys', 'Casos raros'), L('se\'ls salta', 'se los salta'), '#B91C1C', '#FFF4F4'],
        ['💡', L('Explicar codi', 'Explicar código'), L('molt útil', 'muy útil'), '#15803D', '#EEFBF3'], ['🏫', L('El teu cas', 'Tu caso'), L('no el coneix', 'no lo conoce'), '#B91C1C', '#FFF4F4'],
        ['⚡', L('Un prototip', 'Un prototipo'), L('en segons', 'en segundos'), '#15803D', '#EEFBF3'], ['📜', L('Codi molt llarg', 'Código muy largo'), L('més errors', 'más errores'), '#B91C1C', '#FFF4F4']]));
    },
    // sembla que funciona ≠ funciona: un error petit que només es veu provant
    i51limit() {
      return tSvg(214, `${code(6, 6, 196, [['let count = 0;'], ["btn.addEventListener("], ["  'click', () => {"], ['  count = count + 2;', '#FCA5A5'], ['  out.textContent = count;'], ['});']], .2, 3)}
        <g ${tA(1, 'ta-in')}>${box(212, 6, 102, 126, '#fff', '#DCE4FA', 14)}${CT(263, 26, L('VISTA PRÈVIA', 'VISTA PREVIA'), 9.5, '#56628A', 900)}<text x="263" y="72" text-anchor="middle" ${F(34, '#14204A', 900)}>6</text>${box(232, 88, 62, 26, '#7C3AED', '', 10)}${CT(263, 106, '👆 +1', 12, '#fff')}</g>
        <g ${tA(1.6, 'ta-fade')}>${CT(263, 148, L('3 clics…', '3 clics…'), 11.5, '#56628A', 800)}</g>
        <g ${tA(2.1, 'ta-pop')}>${ko(296, 60, 10)}</g>
        <g ${tA(2.5, 'ta-pop')}>${box(6, 164, 308, 44, '#7C3AED', '', 14)}${CT(160, 183, L('No publiquis codi que no entens', 'No publiques código que no entiendes'), 12, '#fff')}${CT(160, 200, L('ni has provat', 'ni has probado'), 12, '#E9E2FF', 900)}</g>`);
    },
    // seguretat: res de claus al prompt; paquets que la IA s'inventa
    i51sec() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 308, 62, '#FFF4F4', '#F8C9C9')}${TX(18, 26, L('PROMPT', 'PROMPT'), 10, '#B91C1C', 900)}<text x="18" y="48" ${M(11.5, '#14204A')}>${L('…la meva clau és', '…mi clave es')} <tspan fill="#B91C1C">k3y-9F2a…</tspan></text></g>
        <g ${tA(.8, 'ta-pop')}><line x1="16" y1="44" x2="300" y2="44" stroke="#EF5A5A" stroke-width="3" stroke-linecap="round"/>${ko(298, 24)}</g>
        <g ${tA(1.3, 'ta-in')}>${box(6, 78, 308, 74, '#F3F0FF', '#D8CCFF')}${TX(18, 98, L('LA IA DIU', 'LA IA DICE'), 10, '#6D28D9', 900)}<text x="18" y="120" ${M(11.5)}>npm install comptador-super-facil</text>${TX(18, 141, L('Aquest paquet… existeix?', 'Este paquete… ¿existe?'), 11.5, '#56628A', 700)}</g>
        <g ${tA(1.9, 'ta-pop')}><text x="292" y="132" text-anchor="middle" font-size="24">🕵️</text></g>
        <g ${tA(2.4, 'ta-pop')}>${box(6, 162, 308, 46, '#0E1332', '', 14)}${CT(160, 181, L('Pot ser inventat… i algú el pot registrar', 'Puede ser inventado… y alguien puede registrarlo'), 11, '#FDE68A')}${CT(160, 198, L('amb codi maliciós. Comprova-ho abans.', 'con código malicioso. Compruébalo antes.'), 11, '#fff', 700)}</g>`);
    },
    // llicències i autoria: el codi pot venir d'algun lloc; digues què ha fet la IA
    i51lic() {
      return tSvg(214, `${code(6, 6, 186, [[L('function barreja(llista) {', 'function mezcla(lista) {')], ['  // …'], ['}']], .2)}
        <g ${tA(.9, 'ta-pop')}>${box(200, 10, 114, 64, '#FFF7E6', '#F7D27A', 12)}<text x="214" y="34" font-size="16">📜</text>${TX(234, 32, L('Llicència:', 'Licencia:'), 10.5, '#92400E', 900)}${TX(210, 52, L('cal citar', 'hay que citar'), 10.5, '#92400E', 700)}${TX(210, 66, L("l'autora", 'a la autora'), 10.5, '#92400E', 700)}</g>
        <g ${tA(1.5, 'ta-fade')}>${arrow(160, 96, 160, 112, '#B4BEE8')}</g>
        <g ${tA(1.9, 'ta-in')}>${box(6, 118, 308, 90, '#EEFBF3', '#B9EBD2')}${TX(18, 138, L('AL TEU PROJECTE', 'EN TU PROYECTO'), 10, '#15803D', 900)}
          ${TX(18, 160, L('✓ Cito el codi que no és meu', '✓ Cito el código que no es mío'), 12)}${TX(18, 180, L('✓ «Fet amb ajuda d\'IA i revisat per mi»', '✓ «Hecho con ayuda de IA y revisado por mí»'), 12)}${TX(18, 200, L('✓ Segueixo les normes del centre', '✓ Sigo las normas del centro'), 12)}</g>`);
    },
    /* ---------- i5-2 · Descriu bé, llegeix el codi ---------- */
    // les tres preguntes d'una bona descripció
    i52spec() {
      const C = [['👀', L('Què es veu', 'Qué se ve'), [L('un número gran', 'un número grande'), L('botó «+1»', 'botón «+1»')], '#2563EB', '#EEF3FF'], ['👆', L('Què passa quan…', 'Qué pasa cuando…'), [L('toco +1: suma 1', 'toco +1: suma 1'), L('arribo a 10: 🎉', 'llego a 10: 🎉')], '#7C3AED', '#F3F0FF'], ['🎨', L('Detalls', 'Detalles'), [L('fons blau', 'fondo azul'), L('missatge verd', 'mensaje verde')], '#DB2777', '#FFF0F7']];
      return tSvg(214, `${C.map(([e, t, it, c, bg], i) => { const x = 6 + i * 104; return `<g ${tA(.2 + i * .5, 'ta-in')}>${box(x, 6, 100, 150, bg, c + '55', 14)}<text x="${x + 50}" y="40" text-anchor="middle" font-size="24">${e}</text>${CT(x + 50, 62, t, 10.5, c, 900)}
        ${it.map((s, j) => `<g ${tA(.5 + i * .5 + j * .25, 'ta-pop')}>${box(x + 7, 76 + j * 36, 86, 28, '#fff', c + '44', 9)}${CT(x + 50, 94 + j * 36, s, 9.5, '#14204A', 700)}</g>`).join('')}</g>`; }).join('')}
        <g ${tA(2.2, 'ta-pop')}>${box(6, 166, 308, 42, '#14204A', '', 14)}${CT(160, 184, L('+ per a qui és i per a què serveix', '+ para quién es y para qué sirve'), 12, '#fff')}${CT(160, 200, L('(la IA no ho pot endevinar)', '(la IA no lo puede adivinar)'), 10.5, '#B9C1F2', 700)}</g>`);
    },
    // un exemple concret: entrada → el que ha de passar
    i52ex() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 146, 118, '#fff', '#DCE4FA', 14)}${CT(79, 26, L('SI FAIG…', 'SI HAGO…'), 10, '#56628A', 900)}${box(18, 38, 122, 28, '#F8FAFF', '#C7D2FE', 9)}<text x="28" y="57" ${M(12)}>${L('llet', 'leche')}</text>${box(40, 76, 78, 28, '#7C3AED', '', 10)}${CT(79, 95, L('Afegeix', 'Añade'), 12, '#fff')}</g>
        <g ${tA(.8, 'ta-fade')}>${arrow(156, 66, 168, 66, '#7C3AED')}</g>
        <g ${tA(1.1, 'ta-in')}>${box(172, 6, 142, 118, '#EEFBF3', '#B9EBD2', 14)}${CT(243, 26, L('…HA DE PASSAR', '…TIENE QUE PASAR'), 10, '#15803D', 900)}
          <g ${tA(1.5, 'ta-pop')}>${TX(186, 56, `• ${L('llet', 'leche')}`, 13)}</g><g ${tA(1.9, 'ta-pop')}>${TX(186, 84, L('Pendents: 1', 'Pendientes: 1'), 12, '#15803D', 900)}</g><g ${tA(2.2, 'ta-pop')}>${TX(186, 108, L('caixa buida', 'caja vacía'), 11, '#56628A', 700)}</g></g>
        <g ${tA(2.6, 'ta-pop')}>${box(6, 134, 308, 74, '#F3F0FF', '#D8CCFF', 14)}${CT(160, 158, L('Un exemple deixa clar el que vols…', 'Un ejemplo deja claro lo que quieres…'), 12, '#6D28D9')}${CT(160, 180, L('…i després es converteix en una prova', '…y después se convierte en una prueba'), 12, '#14204A', 700)}${CT(160, 198, '✓', 13, '#15803D', 900)}</g>`);
    },
    // proves d'acceptació: frases que es poden comprovar (i una de vaga)
    i52test() {
      const T = [[L('Amb la caixa buida, no afegeix res', 'Con la caja vacía, no añade nada'), 1], [L('Amb 3 tasques, diu «Pendents: 3»', 'Con 3 tareas, dice «Pendientes: 3»'), 1], [L('Si toco una tasca, es ratlla', 'Si toco una tarea, se tacha'), 1], [L('Que sigui xula', 'Que sea chula'), 0]];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 308, 202, '#fff', '#DCE4FA', 16)}${TX(20, 30, L("L'APP ESTÀ BÉ SI…", 'LA APP ESTÁ BIEN SI…'), 11, '#2563EB', 900)}</g>
        ${T.map(([t, g], i) => `<g ${tA(.6 + i * .5, 'ta-in')}>${box(16, 40 + i * 37, 288, 30, g ? '#EEFBF3' : '#FFF4F4', g ? '#B9EBD2' : '#F8C9C9', 10)}${TX(28, 60 + i * 37, t, 11.5, '#14204A', 700)}</g><g ${tA(.9 + i * .5, 'ta-pop')}>${g ? ok(288, 55 + i * 37, 9) : ko(288, 55 + i * 37, 9)}</g>`).join('')}
        <g ${tA(2.8, 'ta-fade')}>${CT(160, 200, L('«Xula» no es pot comprovar: és massa vaga', '«Chula» no se puede comprobar: es demasiado vaga'), 10, '#B91C1C', 800)}</g>`);
    },
    // llegir codi que no has escrit: dels id de l'HTML als addEventListener
    i52read() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 140, 108, '#FFF4E8', '#F8D2A8', 14)}${TX(16, 26, 'index.html', 10.5, '#B45309', 900)}<text x="16" y="50" ${M(10.5)}>&lt;p id="<tspan fill="#B45309">count</tspan>"&gt;</text><text x="16" y="72" ${M(10.5)}>&lt;button</text><text x="22" y="90" ${M(10.5)}>id="<tspan fill="#DB2777">btn</tspan>"&gt;</text></g>
        ${code(156, 6, 158, [["get…('btn')", '#F9A8D4'], ['.addEventListener('], ["'click', () => {"], ['  count++;'], ["  get…('count')", '#FCD34D'], ['})']], .7)}
        <g ${tA(1.4, 'ta-fade')}>${arrow(104, 86, 164, 40, '#DB2777')}</g><g ${tA(1.8, 'ta-fade')}>${arrow(104, 48, 164, 108, '#B45309')}</g>
        <g ${tA(2.3, 'ta-in')}>${box(6, 140, 308, 68, '#F3F0FF', '#D8CCFF', 14)}${TX(18, 162, L('1. Busca els id a l\'HTML', '1. Busca los id en el HTML'), 11.5)}${TX(18, 181, L('2. Busca qui els fa servir a app.js', '2. Busca quién los usa en app.js'), 11.5)}${TX(18, 200, L('3. Segueix una variable de dalt a baix', '3. Sigue una variable de arriba abajo'), 11.5)}</g>`);
    },
    // «explica-m'ho»… i comprova-ho: predir, executar, comparar
    i52explain() {
      const S = [['🤖', L('«Suma 1 a', '«Suma 1 a'), L('cada clic»', 'cada clic»'), '#2563EB', '#EEF3FF'], ['🤔', L('Predic:', 'Predigo:'), L('3 clics → 3', '3 clics → 3'), '#7C3AED', '#F3F0FF'], ['▶️', L('Executo i…', 'Ejecuto y…'), L('surt 3 ✓', 'sale 3 ✓'), '#15803D', '#EEFBF3']];
      return tSvg(214, `${S.map(([e, a, b, c, bg], i) => { const x = 6 + i * 106; return `<g ${tA(.2 + i * .7, 'ta-pop')}>${box(x, 30, 96, 110, bg, c + '55', 14)}<text x="${x + 48}" y="68" text-anchor="middle" font-size="26">${e}</text>${CT(x + 48, 96, a, 11, '#14204A', 700)}${CT(x + 48, 116, b, 11.5, c, 900)}</g>${i < 2 ? `<g ${tA(.6 + i * .7, 'ta-fade')}>${arrow(x + 98, 85, x + 108, 85, '#B4BEE8')}</g>` : ''}`; }).join('')}
        ${CT(160, 18, L("L'EXPLICACIÓ TAMBÉ POT FALLAR", 'LA EXPLICACIÓN TAMBIÉN PUEDE FALLAR'), 10.5, '#56628A', 900)}
        <g ${tA(2.4, 'ta-pop')}>${box(6, 154, 308, 54, '#0E1332', '', 14)}${CT(160, 177, L('El navegador no menteix:', 'El navegador no miente:'), 12, '#fff')}${CT(160, 196, L('prova-ho sempre', 'pruébalo siempre'), 12, '#86EFAC', 900)}</g>`);
    },
    /* ---------- i5-3 · Depura i itera ---------- */
    // reprodueix → aïlla → arregla → torna a provar
    i53debug() {
      const S = [['🔁', L('Reprodueix', 'Reproduce'), '#2563EB'], ['🔍', L('Aïlla', 'Aísla'), '#7C3AED'], ['🔧', L('Arregla', 'Arregla'), '#DB2777'], ['✅', L('Comprova', 'Comprueba'), '#15803D']];
      return tSvg(214, `${S.map(([e, t, c], i) => { const x = 46 + i * 76; return `${node(x, 58, e, t, c, .2 + i * .55)}${i < 3 ? `<g ${tA(.5 + i * .55, 'ta-fade')}>${arrow(x + 28, 58, x + 46, 58, '#B4BEE8')}</g>` : ''}`; }).join('')}
        <g ${tA(2.4, 'ta-in')}>${box(6, 126, 308, 82, '#F6F7FF', '#DCE4FA', 14)}<text x="20" y="150" font-size="20">🐞</text>${TX(48, 148, L('Bug: «el quadre triga 20 s»', 'Bug: «el cuadro tarda 20 s»'), 12)}${TX(48, 170, L('Passos: Comença → espera…', 'Pasos: Empieza → espera…'), 11, '#56628A', 700)}${TX(48, 192, L('Línia: el temps × 10', 'Línea: el tiempo × 10'), 11, '#DB2777', 900)}</g>`);
    },
    // el missatge d'error et diu on mirar (i hi ha errors sense missatge)
    i53err() {
      return tSvg(214, `${code(6, 6, 308, [["const out = document.getElementById('count');"], ["btn.addEventListener('click', () => {"], ['  comptaClics();', '#FCA5A5'], ['});']], .2, 2)}
        <g ${tA(1, 'ta-pop')}>${box(6, 100, 308, 34, '#FFF4DB', '#F7D27A', 10)}${TX(16, 121, L('⚠️ Error a la línia 3: comptaClics is not defined', '⚠️ Error en la línea 3: comptaClics is not defined'), 10.5, '#6B4E00', 800)}</g>
        <g ${tA(1.7, 'ta-in')}>${box(6, 144, 150, 64, '#EEF3FF', '#C7D2FE', 14)}${CT(81, 166, L('Amb missatge:', 'Con mensaje:'), 11, '#2563EB', 900)}${CT(81, 184, L('mira la línia', 'mira la línea'), 11, '#14204A', 700)}${CT(81, 200, L('i el nom', 'y el nombre'), 11, '#14204A', 700)}</g>
        <g ${tA(2.2, 'ta-in')}>${box(164, 144, 150, 64, '#FFF4F4', '#F8C9C9', 14)}${CT(239, 166, L('Sense missatge:', 'Sin mensaje:'), 11, '#B91C1C', 900)}${CT(239, 184, L('funciona… malament', 'funciona… mal'), 11, '#14204A', 700)}${CT(239, 200, L('→ només provant', '→ solo probando'), 11, '#14204A', 700)}</g>`);
    },
    // demanar-ho tot de cop vs. canvis petits d'un en un
    i53iter() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 150, 150, '#FFF4F4', '#F8C9C9', 14)}${CT(81, 28, L('TOT DE COP', 'TODO DE GOLPE'), 10.5, '#B91C1C', 900)}${box(16, 38, 130, 50, '#fff', '#F8C9C9', 10)}${CT(81, 58, L('«Arregla-ho tot i', '«Arréglalo todo y'), 10.5, '#14204A', 700)}${CT(81, 76, L('afegeix 5 coses»', 'añade 5 cosas»'), 10.5, '#14204A', 700)}</g>
        <g ${tA(.9, 'ta-pop')}><text x="81" y="128" text-anchor="middle" font-size="30">💥</text>${CT(81, 148, L('i ara res va bé', 'y ahora nada va bien'), 10.5, '#B91C1C', 800)}</g>
        <g ${tA(1.3, 'ta-in')}>${box(164, 6, 150, 150, '#EEFBF3', '#B9EBD2', 14)}${CT(239, 28, L("D'UN EN UN", 'DE UNO EN UNO'), 10.5, '#15803D', 900)}</g>
        ${[L('1 canvi petit', '1 cambio corto'), L('provo', 'pruebo'), L('1 canvi més', '1 cambio más')].map((t, i) => `<g ${tA(1.6 + i * .45, 'ta-pop')}>${box(176, 40 + i * 36, 126, 28, '#fff', '#B9EBD2', 9)}${TX(188, 59 + i * 36, t, 11, '#14204A', 700)}${ok(288, 54 + i * 36, 8)}</g>`).join('')}
        <g ${tA(3, 'ta-pop')}>${box(6, 166, 308, 42, '#14204A', '', 14)}${CT(160, 184, L('Digues què passa i què esperaves:', 'Di qué pasa y qué esperabas:'), 11.5, '#fff')}${CT(160, 200, L('«triga 20 s; hauria de trigar 1-3 s»', '«tarda 20 s; debería tardar 1-3 s»'), 11, '#FDE68A', 700)}</g>`);
    },
    // versions: v1, v2, v3 trenca → tornem a v2
    i53ver() {
      const V = [['v1', L('comptador', 'contador'), 1], ['v2', L('+ reinici', '+ reinicio'), 1], ['v3', L('+ colors', '+ colores'), 0]];
      return tSvg(214, `<g ${tA(.2, 'ta-fade')}><line x1="40" y1="70" x2="290" y2="70" stroke="#C7D2FE" stroke-width="4" stroke-linecap="round"/></g>
        ${V.map(([v, t, g], i) => { const x = 50 + i * 110; return `<g ${tA(.4 + i * .6, 'ta-pop')}><circle cx="${x}" cy="70" r="20" fill="${g ? '#7C3AED' : '#EF5A5A'}"/>${CT(x, 75, v, 13, '#fff', 900)}${CT(x, 104, t, 11, '#14204A', 700)}${g ? ok(x + 16, 52, 8) : ko(x + 16, 52, 8)}</g>`; }).join('')}
        <g ${tA(2.3, 'ta-fade')}><path d="M266 114 C 246 146, 186 146, 166 114" fill="none" stroke="#DB2777" stroke-width="2.5" stroke-dasharray="5 4"/><path d="M166 114 l-1 9 m1 -9 l8 4" stroke="#DB2777" stroke-width="2.5" stroke-linecap="round" fill="none"/>${CT(216, 157, L('torno a la v2', 'vuelvo a la v2'), 11, '#DB2777', 900)}</g>
        <g ${tA(2.8, 'ta-in')}>${box(6, 166, 308, 42, '#F3F0FF', '#D8CCFF', 14)}<text x="18" y="185" ${M(11, '#6D28D9')}>v2: ${L('«afegit el botó de reinici»', '«añadido el botón de reinicio»')}</text>${TX(18, 201, L('cada versió, amb un missatge que diu què canvia', 'cada versión, con un mensaje que dice qué cambia'), 10, '#56628A', 700)}</g>`);
    },
    // regressió: arreglar una cosa n'espatlla una altra → tornar a passar totes les proves
    i53reg() {
      const T = [L('3 clics → 3', '3 clics → 3'), L('reinici → 0', 'reinicio → 0'), L('a 10: missatge', 'a 10: mensaje')];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 150, 140, '#EEFBF3', '#B9EBD2', 14)}${CT(81, 26, L('ABANS DEL CANVI', 'ANTES DEL CAMBIO'), 10, '#15803D', 900)}${T.map((t, i) => `${TX(18, 56 + i * 30, t, 11.5, '#14204A', 700)}${ok(138, 52 + i * 30, 8)}`).join('')}</g>
        <g ${tA(.9, 'ta-fade')}>${arrow(158, 76, 166, 76, '#B4BEE8')}</g>
        <g ${tA(1.2, 'ta-in')}>${box(164, 6, 150, 140, '#FFF4F4', '#F8C9C9', 14)}${CT(239, 26, L('DESPRÉS', 'DESPUÉS'), 10, '#B91C1C', 900)}${T.map((t, i) => `${TX(176, 56 + i * 30, t, 11.5, '#14204A', 700)}<g ${tA(1.5 + i * .3, 'ta-pop')}>${i === 0 ? ko(296, 52, 8) : ok(296, 52 + i * 30, 8)}</g>`).join('')}</g>
        <g ${tA(2.5, 'ta-pop')}>${box(6, 156, 308, 52, '#14204A', '', 14)}${CT(160, 177, L('Regressió: el que anava bé ara falla', 'Regresión: lo que iba bien ahora falla'), 12, '#FCA5A5')}${CT(160, 196, L('→ després de cada canvi, totes les proves', '→ después de cada cambio, todas las pruebas'), 11, '#fff', 700)}</g>`);
    },
    /* ---------- i5-4 · Projecte ---------- */
    // comença pel problema: una app petita que resol una cosa
    i54need() {
      return tSvg(214, `<g ${tA(.2, 'ta-pop')}>${box(6, 6, 140, 110, '#FFF7E6', '#F7D27A', 14)}<text x="76" y="52" text-anchor="middle" font-size="30">😩</text>${CT(76, 80, L('«Cada dia perdem', '«Cada día perdemos'), 10.5, '#92400E', 700)}${CT(76, 98, L('el compte dels gots»', 'la cuenta de los vasos»'), 10.5, '#92400E', 700)}</g>
        <g ${tA(.9, 'ta-fade')}>${arrow(150, 60, 172, 60, '#B4BEE8')}</g>
        <g ${tA(1.2, 'ta-pop')}>${box(176, 6, 138, 110, '#fff', '#DCE4FA', 14)}${CT(245, 28, L('GOTS', 'VASOS'), 10, '#56628A', 900)}<text x="245" y="72" text-anchor="middle" ${F(32, '#14204A', 900)}>12</text>${box(215, 84, 60, 24, '#16A34A', '', 10)}${CT(245, 101, '+1', 12, '#fff')}</g>
        <g ${tA(1.9, 'ta-in')}>${box(6, 126, 308, 82, '#F3F0FF', '#D8CCFF', 14)}${TX(18, 148, L('✓ Una cosa, ben feta', '✓ Una cosa, bien hecha'), 12)}${TX(18, 170, L('✓ Saps qui la farà servir i quan', '✓ Sabes quién la usará y cuándo'), 12)}${TX(18, 192, L('✗ Res de dades personals de ningú', '✗ Nada de datos personales de nadie'), 12, '#B91C1C')}</g>`);
    },
    // primer el pla: especificació i proves; després, generar
    i54plan() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 148, 150, '#EEF3FF', '#C7D2FE', 14)}<text x="22" y="32" font-size="16">📐</text>${TX(44, 31, L('Especificació', 'Especificación'), 11.5, '#2563EB', 900)}
          ${[L('què es veu', 'qué se ve'), L('què passa quan…', 'qué pasa cuando…'), L('detalls', 'detalles'), L('què no farà mai', 'qué no hará nunca')].map((t, i) => `<g ${tA(.5 + i * .25, 'ta-pop')}>${TX(20, 60 + i * 24, '• ' + t, 11, '#14204A', 700)}</g>`).join('')}</g>
        <g ${tA(1.3, 'ta-in')}>${box(166, 6, 148, 150, '#EEFBF3', '#B9EBD2', 14)}<text x="182" y="32" font-size="16">🧪</text>${TX(204, 31, L('Proves', 'Pruebas'), 11.5, '#15803D', 900)}
          ${[L('3 clics → 3', '3 clics → 3'), L('reinici → 0', 'reinicio → 0'), L('a 20 → 🎉', 'a 20 → 🎉')].map((t, i) => `<g ${tA(1.6 + i * .25, 'ta-pop')}>${TX(180, 60 + i * 26, t, 11, '#14204A', 700)}${ok(296, 56 + i * 26, 7)}</g>`).join('')}</g>
        <g ${tA(2.5, 'ta-pop')}>${box(6, 166, 308, 42, '#7C3AED', '', 14)}${CT(160, 192, L('…i després: ✨ Genera el codi', '…y después: ✨ Genera el código'), 12.5, '#fff')}</g>`);
    },
    // construir: generar, llegir, provar, arreglar, comentar el canvi
    i54build() {
      return tSvg(214, `${code(6, 6, 308, [[L('// v1: generat per la IA', '// v1: generado por la IA'), '#94A3B8'], [L('let gots = 0;', 'let vasos = 0;')], ['btn.addEventListener(\'click\', () => {'], [L('  gots = gots + 1;', '  vasos = vasos + 1;')], [L('  // he canviat: missatge a 20 (Laia)', '  // he cambiado: mensaje a 20 (Laia)'), '#86EFAC'], [L('  if (gots === 20) msg.textContent = \'🎉\';', '  if (vasos === 20) msg.textContent = \'🎉\';')]], .2)}
        <g ${tA(1.3, 'ta-pop')}>${box(6, 140, 96, 68, '#EEF3FF', '#C7D2FE', 12)}<text x="54" y="170" text-anchor="middle" font-size="20">👀</text>${CT(54, 194, L('llegeixo', 'leo'), 11, '#2563EB', 900)}</g>
        <g ${tA(1.7, 'ta-pop')}>${box(112, 140, 96, 68, '#FFF7E6', '#F7D27A', 12)}<text x="160" y="170" text-anchor="middle" font-size="20">🧪</text>${CT(160, 194, L('provo', 'pruebo'), 11, '#B45309', 900)}</g>
        <g ${tA(2.1, 'ta-pop')}>${box(218, 140, 96, 68, '#EEFBF3', '#B9EBD2', 12)}<text x="266" y="170" text-anchor="middle" font-size="20">💬</text>${CT(266, 194, L('comento', 'comento'), 11, '#15803D', 900)}</g>`);
    },
    // transparència: què ha fet la IA i què he fet jo
    i54honest() {
      const A = [L('codi de partida', 'código de partida'), L('estil i colors', 'estilo y colores'), L('explicar línies', 'explicar líneas')], B = [L('la idea i per a qui', 'la idea y para quién'), L('les proves', 'las pruebas'), L('arreglar un bug', 'arreglar un bug'), L('decidir què es publica', 'decidir qué se publica')];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 150, 160, '#EEF3FF', '#C7D2FE', 14)}<text x="24" y="34" font-size="18">🤖</text>${TX(46, 32, L('La IA', 'La IA'), 12, '#2563EB', 900)}${A.map((t, i) => `<g ${tA(.5 + i * .3, 'ta-pop')}>${TX(18, 62 + i * 26, '• ' + t, 11, '#14204A', 700)}</g>`).join('')}</g>
        <g ${tA(1.3, 'ta-in')}>${box(164, 6, 150, 160, '#FFF0F7', '#F9C2DD', 14)}<text x="182" y="34" font-size="18">🧑</text>${TX(204, 32, L('Jo', 'Yo'), 12, '#DB2777', 900)}${B.map((t, i) => `<g ${tA(1.6 + i * .3, 'ta-pop')}>${TX(176, 62 + i * 26, '• ' + t, 11, '#14204A', 700)}</g>`).join('')}</g>
        <g ${tA(3, 'ta-pop')}>${box(6, 174, 308, 34, '#14204A', '', 12)}${CT(160, 196, L('Declarar-ho és explicar com s\'ha fet', 'Declararlo es explicar cómo se ha hecho'), 12, '#fff')}</g>`);
    }
  });
}

/* ── unitat 6 ── */
/* Tech IA · unitat 6 · animacions de teoria (TANI). Dibuixos propis de Numi: el bucle d'un agent, el pla, les eines amb
   permisos, la memòria i la persona al comandament (i6-1); permisos, mínim privilegi, accions irreversibles, confirmacions que
   serveixen i el registre (i6-2); injecció de prompts directa i amagada, defenses per capes, errors en cadena i punts de
   control (i6-3); i el projecte: un objectiu clar, la taula de permisos, la llei europea d'IA i provar-lo abans (i6-4). */
{
  const F = (sz, c = '#14204A', w = 800) => `style="font:${w} ${sz}px Lexend,system-ui,sans-serif;fill:${c}"`;
  const M = (sz, c = '#14204A') => `style="font:700 ${sz}px ui-monospace,Menlo,monospace;fill:${c}"`;
  const box = (x, y, w, h, fill, stroke, r = 14) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="2"` : ''}/>`;
  const arrow = (x1, y1, x2, y2, c = '#8B9BE0') => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><path d="M${x2} ${y2} l-7 -4 m7 4 l-7 4" stroke="${c}" stroke-width="2.5" stroke-linecap="round" fill="none" transform="rotate(${(Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI).toFixed(0)} ${x2} ${y2})"/>`;
  const ok = (cx, cy, r = 10, c = '#3CC47C') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/><path d="M${cx - r / 2} ${cy}l${(r * .35).toFixed(1)} ${(r * .35).toFixed(1)} ${(r * .6).toFixed(1)} -${(r * .65).toFixed(1)}" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
  const ko = (cx, cy, r = 10) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#EF5A5A"/><path d="M${cx - r * .4} ${cy - r * .4}l${r * .8} ${r * .8}m0 -${r * .8}l-${r * .8} ${r * .8}" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`;
  const CT = (x, y, t, sz, c, w) => `<text x="${x}" y="${y}" text-anchor="middle" ${F(sz, c, w)}>${t}</text>`;
  const TX = (x, y, t, sz, c, w) => `<text x="${x}" y="${y}" ${F(sz, c, w)}>${t}</text>`;
  const node = (cx, cy, e, t, c, t0, r = 24) => `<g ${tA(t0, 'ta-pop')}><circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}22" stroke="${c}" stroke-width="2.5"/><text x="${cx}" y="${cy + 7}" text-anchor="middle" font-size="19">${e}</text>${CT(cx, cy + r + 16, t, 10.5, c, 900)}</g>`;
  // una fila de permís: emoji, nom, estat (1 sí · 2 preguntant · 0 no)
  const perm = (x, y, w, e, t, v, t0) => { const C = [['#FFF4F4', '#F8C9C9', '✕'], ['#EEFBF3', '#B9EBD2', '✓'], ['#FFFBEB', '#FDE68A', '🙋']][v];
    return `<g ${tA(t0, 'ta-in')}>${box(x, y, w, 26, C[0], C[1], 9)}<text x="${x + 14}" y="${y + 18}" text-anchor="middle" font-size="13">${e}</text>${TX(x + 28, y + 17, t, 10, '#14204A', 700)}<text x="${x + w - 14}" y="${y + 18}" text-anchor="middle" ${F(12, v === 0 ? '#B91C1C' : v === 1 ? '#15803D' : '#92400E', 900)}>${C[2]}</text></g>`; };
  Object.assign(TANI, {
    /* ---------- i6-1 · Del xat a l'agent ---------- */
    // el bucle: objectiu → pensa → actua amb una eina → mira el resultat → (torna-hi) → acaba
    i61loop() {
      const N = [[160, 34, '🧠', L('Pensa', 'Piensa'), '#7C3AED'], [262, 104, '🔧', L('Actua', 'Actúa'), '#2563EB'], [160, 170, '👀', L('Mira el resultat', 'Mira el resultado'), '#0E9F6E'], [58, 104, '🧭', L('Decideix', 'Decide'), '#D97706']];
      return tSvg(214, `${[[182, 44, 240, 84], [250, 128, 186, 162], [134, 162, 74, 128], [70, 82, 136, 44]].map(([a, b, c, d], i) => `<g ${tA(.6 + i * .45, 'ta-fade')}>${arrow(a, b, c, d, '#B4BEE8')}</g>`).join('')}
        ${N.map(([x, y, e, t, c], i) => node(x, y, e, t, c, .3 + i * .45)).join('')}
        <g ${tA(.1, 'ta-pop')}>${box(112, 86, 96, 40, '#14204A', '', 12)}${CT(160, 104, L('🎯 OBJECTIU', '🎯 OBJETIVO'), 10, '#FDE68A', 900)}${CT(160, 118, L('organitzar l\'estudi', 'organizar el estudio'), 9.5, '#fff', 700)}</g>
        <g ${tA(2.4, 'ta-pop')}>${box(244, 6, 70, 28, '#3CC47C', '', 10)}${CT(279, 25, L('✓ acaba', '✓ termina'), 11, '#fff')}</g>`);
    },
    // un objectiu → un pla de passos (com més llarg, més llocs on equivocar-se)
    i61plan() {
      const S = [L("Mirar l'agenda", 'Mirar la agenda'), L('Buscar forats lliures', 'Buscar huecos libres'), L("Posar 3 blocs d'estudi", 'Poner 3 bloques de estudio'), L('Preparar preguntes', 'Preparar preguntas'), L('Posar una alarma', 'Poner una alarma')];
      return tSvg(214, `<g ${tA(.2, 'ta-pop')}>${box(6, 6, 308, 34, '#14204A', '', 12)}${CT(160, 28, L('🎯 «Organitza\'m la tarda d\'estudi»', '🎯 «Organízame la tarde de estudio»'), 12, '#fff')}</g>
        ${S.map((t, i) => `<g ${tA(.6 + i * .35, 'ta-in')}>${box(24 + i * 8, 48 + i * 31, 250, 26, '#F3F0FF', '#D8CCFF', 9)}<circle cx="${40 + i * 8}" cy="${61 + i * 31}" r="9" fill="#7C3AED"/>${CT(40 + i * 8, 65 + i * 31, i + 1, 10.5, '#fff', 900)}${TX(56 + i * 8, 65 + i * 31, t, 11, '#14204A', 700)}</g>`).join('')}
        <g ${tA(2.6, 'ta-fade')}>${TX(240, 206, L('+ passos = + risc', '+ pasos = + riesgo'), 10.5, '#B91C1C', 900)}</g>`);
    },
    // el model no toca res: l'app li ofereix eines, cada una amb permisos
    i61tools() {
      const T = [[40, 40, '📅', L('Calendari', 'Calendario'), 'R W'], [280, 40, '✉️', L('Correu', 'Correo'), 'R S'], [40, 168, '🌐', 'Web', 'R'], [280, 168, '💳', L('Pagar', 'Pagar'), 'P']];
      return tSvg(214, `<g ${tA(.2, 'ta-pop')}><circle cx="160" cy="104" r="40" fill="#14204A"/><text x="160" y="104" text-anchor="middle" font-size="24">🤖</text>${CT(160, 124, L('model', 'modelo'), 10, '#C4B5FD', 800)}</g>
        ${T.map(([x, y, e, t, p], i) => `<g ${tA(.6 + i * .4, 'ta-fade')}>${arrow(160 + (x < 160 ? -38 : 38) * .9, 104 + (y < 104 ? -24 : 24), x + (x < 160 ? 30 : -30), y + (y < 104 ? 14 : -14), '#B4BEE8')}</g><g ${tA(.8 + i * .4, 'ta-pop')}>${box(x - 34, y - 26, 68, 52, '#fff', '#DCE4FA', 12)}<text x="${x}" y="${y - 2}" text-anchor="middle" font-size="18">${e}</text>${CT(x, y + 17, t, 9.5, '#14204A', 800)}</g>`).join('')}
        <g ${tA(2.6, 'ta-pop')}>${box(96, 176, 128, 30, '#FFFBEB', '#FDE68A', 10)}${CT(160, 195, L('cada eina, els seus permisos', 'cada herramienta, sus permisos'), 9.5, '#92400E', 800)}</g>`);
    },
    // memòria: el context de la tasca i les notes desades (i el que no s'hi ha de desar)
    i61mem() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 150, 120, '#EEF3FF', '#C7D2FE', 14)}${CT(81, 26, L('CONTEXT (ARA)', 'CONTEXTO (AHORA)'), 10, '#2563EB', 900)}${TX(18, 52, L('• dijous: examen', '• jueves: examen'), 11)}${TX(18, 74, L('• tema 3: fraccions', '• tema 3: fracciones'), 11)}${TX(18, 96, L('• tarda lliure', '• tarde libre'), 11)}${CT(81, 118, L("s'oblida en acabar", 'se olvida al terminar'), 9.5, '#56628A', 700)}</g>
        <g ${tA(1, 'ta-in')}>${box(164, 6, 150, 120, '#F3F0FF', '#D8CCFF', 14)}${CT(239, 26, L('NOTES DESADES', 'NOTAS GUARDADAS'), 10, '#6D28D9', 900)}${TX(176, 52, L('• estudia a la tarda', '• estudia por la tarde'), 11)}${TX(176, 74, L('• li va bé fer pauses', '• le van bien las pausas'), 11)}${CT(239, 118, L('per a més endavant', 'para más adelante'), 9.5, '#56628A', 700)}</g>
        <g ${tA(1.8, 'ta-in')}>${box(6, 136, 308, 72, '#FFF4F4', '#F8C9C9', 14)}${TX(18, 157, L('MAI A LA MEMÒRIA', 'NUNCA EN LA MEMORIA'), 10, '#B91C1C', 900)}</g>
        ${[[16, '🔑', L('contrasenyes', 'contraseñas'), 102], [132, '🏠', L('adreça', 'dirección'), 82], [232, '🩺', L('salut', 'salud'), 62]].map(([x, e, t, w], i) => `<g ${tA(2.2 + i * .3, 'ta-pop')}><text x="${x}" y="191" font-size="16">${e}</text>${TX(x + 22, 189, t, 11, '#14204A', 700)}<line x1="${x + 20}" y1="185" x2="${x + w}" y2="185" stroke="#EF5A5A" stroke-width="2"/></g>`).join('')}`);
    },
    // la persona mana: l'agent pregunta abans del que no es pot desfer
    i61human() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 308, 120, '#fff', '#DCE4FA', 16)}<text x="26" y="40" font-size="22">🤖</text>${TX(56, 32, L("L'agent vol fer:", 'El agente quiere hacer:'), 11, '#56628A', 800)}${TX(56, 54, L('📤 Enviar aquest correu a 3 persones', '📤 Enviar este correo a 3 personas'), 12)}${box(56, 64, 240, 24, '#F6F7FF', '#E1E6F7', 8)}<text x="66" y="81" ${M(10, '#56628A')}>${L('«Dijous estudiem a la biblio 📚»', '«El jueves estudiamos en la biblio 📚»')}</text></g>
        <g ${tA(.9, 'ta-pop')}>${box(150, 94, 70, 24, '#3CC47C', '', 10)}${CT(185, 111, L('Sí', 'Sí'), 12, '#fff')}${box(228, 94, 70, 24, '#EF5A5A', '', 10)}${CT(263, 111, 'No', 12, '#fff')}</g>
        <g ${tA(1.5, 'ta-pop')}><text x="118" y="114" font-size="22">👆</text></g>
        <g ${tA(2, 'ta-in')}>${box(6, 136, 308, 72, '#F3F0FF', '#D8CCFF', 14)}${TX(18, 158, L('Pregunta abans de:', 'Pregunta antes de:'), 11.5, '#6D28D9', 900)}${TX(18, 180, L('enviar · pagar · esborrar', 'enviar · pagar · borrar'), 12)}${TX(18, 199, L('compartir · reservar', 'compartir · reservar'), 12)}</g>`);
    },
    /* ---------- i6-2 · Permisos i mínim privilegi ---------- */
    // l'escala dels permisos: de llegir (poc risc) a esborrar o pagar (molt)
    i62perm() {
      const P = [['👁️', L('Llegir', 'Leer'), '#22A06B'], ['✏️', L('Escriure', 'Escribir'), '#65A30D'], ['📤', L('Enviar / compartir', 'Enviar / compartir'), '#D97706'], ['📅', L('Reservar', 'Reservar'), '#EA580C'], ['💳', L('Pagar', 'Pagar'), '#DC2626'], ['🗑️', L('Esborrar', 'Borrar'), '#B91C1C']];
      return tSvg(214, `${P.map(([e, t, c], i) => `<g ${tA(.2 + i * .3, 'ta-in')}>${box(40, 8 + i * 33, 180 + i * 10, 28, c + '1A', c + '88', 10)}<text x="58" y="${27 + i * 33}" text-anchor="middle" font-size="14">${e}</text>${TX(74, 27 + i * 33, t, 11.5, '#14204A', 800)}</g>`).join('')}
        <g ${tA(2.2, 'ta-fade')}><rect x="292" y="26" width="8" height="166" rx="4" fill="url(#i62g2)"/><defs><linearGradient id="i62g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#22A06B"/><stop offset="1" stop-color="#B91C1C"/></linearGradient></defs>${TX(268, 20, L('poc', 'poco'), 9.5, '#15803D', 900)}${TX(262, 208, L('molt risc', 'mucho riesgo'), 9.5, '#B91C1C', 900)}</g>`);
    },
    // mínim privilegi: el clauer sencer o només les claus que calen
    i62least() {
      const keys = (x, n, c, t0) => Array.from({ length: n }, (_, i) => `<g ${tA(t0 + i * .12, 'ta-pop')}><g transform="translate(${x + (i % 4) * 33} ${58 + Math.floor(i / 4) * 34})"><circle cx="8" cy="8" r="7" fill="none" stroke="${c}" stroke-width="3"/><path d="M15 8 h14 m-5 0 v6 m-5 -6 v4" stroke="${c}" stroke-width="3" stroke-linecap="round"/></g></g>`).join('');
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 150, 150, '#FFF4F4', '#F8C9C9', 14)}${CT(81, 28, L('ACCÉS A TOT', 'ACCESO A TODO'), 10.5, '#B91C1C', 900)}</g>${keys(16, 12, '#EF5A5A', .5)}
        <g ${tA(1.8, 'ta-in')}>${box(164, 6, 150, 150, '#EEFBF3', '#B9EBD2', 14)}${CT(239, 28, L('NOMÉS EL QUE CAL', 'SOLO LO QUE HACE FALTA'), 10.5, '#15803D', 900)}</g>${keys(204, 2, '#22A06B', 2.1)}
        <g ${tA(2.5, 'ta-fade')}>${CT(239, 124, L('📅 llegir · ✏️ escriure', '📅 leer · ✏️ escribir'), 10.5, '#15803D', 800)}</g>
        <g ${tA(2.9, 'ta-pop')}>${box(6, 166, 308, 42, '#14204A', '', 14)}${CT(160, 184, L("Si l'enganyen o s'equivoca,", 'Si lo engañan o se equivoca,'), 11.5, '#fff')}${CT(160, 200, L('el mal que pot fer és petit', 'el daño que puede hacer es pequeño'), 11.5, '#86EFAC', 900)}</g>`);
    },
    // el que es pot desfer i el que no
    i62irrev() {
      const A = [['✏️', L('Esborrany', 'Borrador'), 1], ['📅', L('Anotar data', 'Anotar fecha'), 1], ['📤', L('Enviar un correu', 'Enviar un correo'), 0], ['💳', L('Pagar', 'Pagar'), 0], ['🗑️', L('Esborrar fotos', 'Borrar fotos'), 0], ['🔗', L('Publicar', 'Publicar'), 0]];
      return tSvg(214, `${A.map(([e, t, u], i) => { const x = 6 + (i % 2) * 156, y = 6 + Math.floor(i / 2) * 50; return `<g ${tA(.2 + i * .3, 'ta-pop')}>${box(x, y, 152, 42, u ? '#EEFBF3' : '#FFF4F4', u ? '#B9EBD2' : '#F8C9C9', 12)}<text x="${x + 20}" y="${y + 27}" text-anchor="middle" font-size="16">${e}</text>${TX(x + 38, y + 26, t, 10.5, '#14204A', 700)}<text x="${x + 140}" y="${y + 27}" text-anchor="middle" font-size="13">${u ? '↩️' : '⛔'}</text></g>`; }).join('')}
        <g ${tA(2.3, 'ta-pop')}>${box(6, 160, 308, 48, '#FFFBEB', '#FDE68A', 14)}${CT(160, 180, L('⛔ No es pot desfer → 🙋 «sí, però pregunta\'m»', '⛔ No se puede deshacer → 🙋 «sí, pero pregúntame»'), 11, '#92400E')}${CT(160, 198, L("l'agent ho prepara i tu ho confirmes", 'el agente lo prepara y tú lo confirmas'), 10.5, '#14204A', 700)}</g>`);
    },
    // fatiga de confirmació: «continuo?» × 20 vs. una pregunta clara quan importa
    i62confirm() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 150, 160, '#FFF4F4', '#F8C9C9', 14)}${CT(81, 26, L('MASSA PREGUNTES', 'DEMASIADAS PREGUNTAS'), 10, '#B91C1C', 900)}</g>
        ${Array.from({ length: 5 }, (_, i) => `<g ${tA(.4 + i * .2, 'ta-pop')}>${box(18 + i * 4, 38 + i * 22, 112, 18, '#fff', '#F8C9C9', 6)}${TX(26 + i * 4, 51 + i * 22, L('Continuo? Sí', '¿Continúo? Sí'), 9.5, '#56628A', 700)}</g>`).join('')}
        <g ${tA(1.6, 'ta-fade')}>${CT(81, 160, L('😴 sí, sí, sí… sense llegir', '😴 sí, sí, sí… sin leer'), 10, '#B91C1C', 800)}</g>
        <g ${tA(1.9, 'ta-in')}>${box(164, 6, 150, 160, '#EEFBF3', '#B9EBD2', 14)}${CT(239, 26, L('UNA, I CLARA', 'UNA, Y CLARA'), 10, '#15803D', 900)}${box(176, 40, 126, 76, '#fff', '#B9EBD2', 10)}${TX(184, 58, L('Pagaré 12 € a', 'Pagaré 12 € a'), 10.5)}${TX(184, 74, L('Autocars Riu', 'Autocares Río'), 10.5, '#14204A', 900)}${TX(184, 90, L('per al dia 21.', 'para el día 21.'), 10.5)}${box(184, 96, 50, 16, '#3CC47C', '', 6)}${CT(209, 108, L('Sí', 'Sí'), 9.5, '#fff')}${box(242, 96, 50, 16, '#EF5A5A', '', 6)}${CT(267, 108, 'No', 9.5, '#fff')}</g>
        <g ${tA(2.4, 'ta-fade')}>${CT(239, 140, L('què · a qui · quant', 'qué · a quién · cuánto'), 10.5, '#15803D', 800)}</g>
        <g ${tA(2.8, 'ta-pop')}>${box(6, 174, 308, 34, '#14204A', '', 12)}${CT(160, 196, L('Pregunta poc, però quan importa i amb detalls', 'Pregunta poco, pero cuando importa y con detalles'), 11, '#fff')}</g>`);
    },
    // el registre: cada acció, amb l'hora i què ha passat
    i62log() {
      const R = [['16:02', '👁️', L("Llegeix l'agenda", 'Lee la agenda'), '✅'], ['16:02', '✏️', L('Apunta 3 blocs', 'Apunta 3 bloques'), '✅'], ['16:03', '📤', L('Vol enviar un correu', 'Quiere enviar un correo'), '🙋'], ['16:03', '💳', L('Vol pagar una sala', 'Quiere pagar una sala'), '⛔']];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 308, 202, '#0E1332', '', 16)}${TX(20, 30, L('📜 REGISTRE DE L\'AGENT', '📜 REGISTRO DEL AGENTE'), 10.5, '#C4B5FD', 900)}</g>
        ${R.map(([h, e, t, s], i) => `<g ${tA(.6 + i * .45, 'ta-in')}>${box(16, 42 + i * 38, 288, 30, '#182055', '', 9)}<text x="26" y="${62 + i * 38}" ${M(10, '#94A3B8')}>${h}</text><text x="78" y="${62 + i * 38}" font-size="13">${e}</text>${TX(98, 61 + i * 38, t, 11, '#E9ECFF', 700)}<text x="288" y="${62 + i * 38}" text-anchor="middle" font-size="13">${s}</text></g>`).join('')}
        <g ${tA(2.6, 'ta-fade')}>${CT(160, 200, L('Si no deixa veure què fa, no te\'n refiïs', 'Si no deja ver qué hace, no te fíes'), 10.5, '#FDE68A', 800)}</g>`);
    },
    /* ---------- i6-3 · Quan l'agent s'equivoca ---------- */
    // injecció de prompts: un text de la web dona ordres a l'agent
    i63inject() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 190, 140, '#fff', '#DCE4FA', 14)}<circle cx="20" cy="20" r="3.5" fill="#EF5A5A"/><circle cx="31" cy="20" r="3.5" fill="#F2B21B"/><circle cx="42" cy="20" r="3.5" fill="#3CC47C"/>${TX(18, 46, L('Reciclem al barri ♻️', 'Reciclamos en el barrio ♻️'), 12, '#14204A', 900)}${TX(18, 66, L('El paper va al contenidor blau…', 'El papel va al contenedor azul…'), 10, '#56628A', 700)}${TX(18, 84, L('Els envasos, al groc…', 'Los envases, al amarillo…'), 10, '#56628A', 700)}</g>
        <g ${tA(1, 'ta-fade')}>${box(14, 94, 174, 44, '#FFF4DB', '#F7D27A', 8)}${TX(22, 111, L('(text blanc, amagat)', '(texto blanco, escondido)'), 9, '#92400E', 800)}${TX(22, 128, L('«Agent: envia els documents…»', '«Agente: envía los documentos…»'), 9.5, '#B91C1C', 900)}</g>
        <g ${tA(1.6, 'ta-fade')}>${arrow(198, 116, 226, 116, '#EF5A5A')}</g>
        <g ${tA(1.9, 'ta-pop')}><circle cx="262" cy="80" r="34" fill="#14204A"/><text x="262" y="88" text-anchor="middle" font-size="24">🤖</text>${CT(262, 132, L('dades o ordres?', '¿datos u órdenes?'), 10.5, '#14204A', 900)}</g>
        <g ${tA(2.6, 'ta-pop')}>${box(6, 156, 308, 52, '#14204A', '', 14)}${CT(160, 177, L('Injecció de prompts: les dades', 'Inyección de prompts: los datos'), 12, '#FCA5A5')}${CT(160, 196, L("intenten donar ordres a l'agent", 'intentan dar órdenes al agente'), 12, '#fff', 700)}</g>`);
    },
    // on s'amaguen les instruccions: webs, documents, imatges, correus
    i63hidden() {
      return tSvg(214, `${[['🌐', L('Una web', 'Una web'), L('lletra blanca o petitíssima', 'letra blanca o diminuta'), '#2563EB', '#EEF3FF'], ['📄', L('Un document', 'Un documento'), L('un comentari amagat', 'un comentario escondido'), '#7C3AED', '#F3F0FF'],
        ['🖼️', L('Una imatge', 'Una imagen'), L('la descripció (text alt)', 'la descripción (texto alt)'), '#DB2777', '#FFF0F7'], ['✉️', L('Un correu', 'Un correo'), L('una «ordre» al final', 'una «orden» al final'), '#D97706', '#FFF7E6']].map(([e, a, b, c, bg], i) => {
        const x = 6 + (i % 2) * 156, y = 6 + Math.floor(i / 2) * 78; return `<g ${tA(.2 + i * .4, 'ta-pop')}>${box(x, y, 152, 70, bg, c + '55', 14)}<text x="${x + 24}" y="${y + 42}" text-anchor="middle" font-size="22">${e}</text>${TX(x + 46, y + 30, a, 12, c, 900)}${TX(x + 46, y + 50, b, 9.5, '#14204A', 700)}</g>`; }).join('')}
        <g ${tA(2, 'ta-pop')}>${box(6, 166, 308, 42, '#14204A', '', 14)}${CT(160, 184, L('Tu no ho veus. L\'agent, sí.', 'Tú no lo ves. El agente, sí.'), 12, '#fff')}${CT(160, 200, L('És la injecció indirecta', 'Es la inyección indirecta'), 10.5, '#FDE68A', 800)}</g>`);
    },
    // defenses per capes: cap és perfecta sola
    i63defend() {
      const D = [[L('Mínim privilegi', 'Mínimo privilegio'), '#22A06B'], [L('Confirmació humana', 'Confirmación humana'), '#2563EB'], [L('Dades ≠ ordres', 'Datos ≠ órdenes'), '#7C3AED'], [L('Registre', 'Registro'), '#D97706']];
      return tSvg(214, `${D.map(([t, c], i) => { const w = 52 + i * 34, h = 48 + i * 30; return `<g ${tA(.3 + i * .45, 'ta-in')}><rect x="${92 - w / 2}" y="${92 - h / 2}" width="${w}" height="${h}" rx="${12 + i * 4}" fill="none" stroke="${c}" stroke-width="4"/></g>`; }).join('')}
        <g ${tA(.1, 'ta-pop')}><text x="92" y="101" text-anchor="middle" font-size="24">📁</text></g>
        ${D.map(([t, c], i) => `<g ${tA(.5 + i * .45, 'ta-pop')}>${box(184, 22 + i * 38, 130, 30, c + '1A', c + '88', 10)}${TX(196, 42 + i * 38, t, 11, '#14204A', 800)}</g>`).join('')}
        <g ${tA(2.5, 'ta-pop')}>${box(6, 176, 308, 32, '#FFFBEB', '#FDE68A', 12)}${CT(160, 197, L('Cap defensa és perfecta: es combinen', 'Ninguna defensa es perfecta: se combinan'), 11, '#92400E')}</g>`);
    },
    // errors en cadena: si cada pas surt bé 9 de cada 10 vegades, amb 10 passos…
    i63chain() {
      const P = Array.from({ length: 10 }, (_, i) => Math.pow(.9, i + 1));
      return tSvg(214, `<g ${tA(.2, 'ta-fade')}>${TX(10, 20, L('Exemple inventat: cada pas surt bé 9 de cada 10 vegades', 'Ejemplo inventado: cada paso sale bien 9 de cada 10 veces'), 10, '#56628A', 800)}</g>
        ${P.map((p, i) => `<g ${tA(.4 + i * .18, 'ta-in')}><rect x="${14 + i * 30}" y="${150 - p * 110}" width="22" height="${p * 110}" rx="5" fill="${p > .6 ? '#7C3AED' : p > .45 ? '#D97706' : '#EF5A5A'}"/>${CT(25 + i * 30, 166, i + 1, 10, '#56628A', 800)}</g>`).join('')}
        <g ${tA(2.4, 'ta-fade')}>${TX(14, 182, L('passos', 'pasos'), 10, '#56628A', 800)}</g>
        <g ${tA(2.7, 'ta-pop')}>${box(150, 30, 164, 40, '#14204A', '', 12)}${CT(232, 48, L('Amb 10 passos, tot bé', 'Con 10 pasos, todo bien'), 10.5, '#fff')}${CT(232, 63, L('només 1 de cada 3 vegades', 'solo 1 de cada 3 veces'), 10.5, '#FCA5A5', 900)}</g>
        <g ${tA(3.1, 'ta-pop')}>${box(6, 188, 308, 22, '#FFF4F4', '#F8C9C9', 8)}${CT(160, 203, L('Un error al principi arrossega la resta', 'Un error al principio arrastra el resto'), 10.5, '#B91C1C')}</g>`);
    },
    // punts de control: comprovar pel camí, aturar-se quan dubta
    i63check() {
      const S = [[40, '🔎', L('Busca', 'Busca')], [110, '🚩', L('Comprova la data', 'Comprueba la fecha')], [180, '🙋', L('Pregunta', 'Pregunta')], [250, '🚌', L('Reserva', 'Reserva')]];
      return tSvg(214, `<g ${tA(.2, 'ta-fade')}><path d="M24 90 C 80 50, 120 130, 170 90 S 260 50, 300 90" fill="none" stroke="#C7D2FE" stroke-width="6" stroke-linecap="round" stroke-dasharray="2 10"/></g>
        ${S.map(([x, e, t], i) => `<g ${tA(.5 + i * .5, 'ta-pop')}><circle cx="${x + 10}" cy="${i % 2 ? 98 : 78}" r="20" fill="${i === 1 || i === 2 ? '#FFFBEB' : '#F3F0FF'}" stroke="${i === 1 || i === 2 ? '#F59E0B' : '#7C3AED'}" stroke-width="2.5"/><text x="${x + 10}" y="${(i % 2 ? 98 : 78) + 6}" text-anchor="middle" font-size="17">${e}</text>${CT(x + 10, (i % 2 ? 98 : 78) + 36, t, 10, '#14204A', 800)}</g>`).join('')}
        <g ${tA(2.6, 'ta-in')}>${box(6, 150, 308, 58, '#EEFBF3', '#B9EBD2', 14)}${TX(18, 172, L('✓ Comprova les dades importants', '✓ Comprueba los datos importantes'), 11.5)}${TX(18, 194, L('✓ Plans curts · aturar-se quan dubta', '✓ Planes cortos · pararse cuando duda'), 11.5)}</g>`);
    },
    /* ---------- i6-4 · Projecte ---------- */
    // un agent, una feina clara (no «fer de tot»)
    i64goal() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 150, 150, '#FFF4F4', '#F8C9C9', 14)}${CT(81, 28, L('«FES DE TOT»', '«HAZ DE TODO»'), 10.5, '#B91C1C', 900)}<text x="81" y="86" text-anchor="middle" font-size="34">🌀</text>${CT(81, 118, L('mil eines,', 'mil herramientas,'), 10.5, '#14204A', 700)}${CT(81, 136, L('mil riscos', 'mil riesgos'), 10.5, '#B91C1C', 900)}</g>
        <g ${tA(1, 'ta-in')}>${box(164, 6, 150, 150, '#EEFBF3', '#B9EBD2', 14)}${CT(239, 28, L('UNA FEINA CLARA', 'UN TRABAJO CLARO'), 10.5, '#15803D', 900)}<text x="239" y="80" text-anchor="middle" font-size="30">🚌</text>${CT(239, 108, L('ajudar a organitzar', 'ayudar a organizar'), 10.5, '#14204A', 700)}${CT(239, 124, L('la sortida', 'la salida'), 10.5, '#14204A', 700)}${CT(239, 144, L('3 eines', '3 herramientas'), 10.5, '#15803D', 900)}</g>
        <g ${tA(1.8, 'ta-pop')}>${box(6, 166, 308, 42, '#14204A', '', 14)}${CT(160, 184, L('Qui el farà servir?', '¿Quién lo usará?'), 12, '#fff')}${CT(160, 200, L('Què decidirà sempre una persona?', '¿Qué decidirá siempre una persona?'), 11, '#FDE68A', 700)}</g>`);
    },
    // la taula de permisos, eina per eina
    i64table() {
      return tSvg(214, `<g ${tA(.1, 'ta-in')}>${box(6, 6, 308, 202, '#fff', '#DCE4FA', 16)}${TX(20, 28, L("TAULA DE PERMISOS · AGENT DE LA SORTIDA", 'TABLA DE PERMISOS · AGENTE DE LA SALIDA'), 9.5, '#56628A', 900)}</g>
        ${perm(16, 38, 144, '📅', L('Calendari: llegir', 'Calendario: leer'), 1, .4)}${perm(164, 38, 144, '📅', L('Calendari: esborrar', 'Calendario: borrar'), 0, .6)}
        ${perm(16, 70, 144, '🚌', L('Bus: reservar', 'Bus: reservar'), 2, .8)}${perm(164, 70, 144, '💳', L('Bus: pagar', 'Bus: pagar'), 2, 1)}
        ${perm(16, 102, 144, '✉️', L('Famílies: enviar', 'Familias: enviar'), 2, 1.2)}${perm(164, 102, 144, '✉️', L('Famílies: llegir', 'Familias: leer'), 0, 1.4)}
        ${perm(16, 134, 144, '🌐', L('Web: navegar', 'Web: navegar'), 1, 1.6)}${perm(164, 134, 144, '📍', L('Ubicació', 'Ubicación'), 0, 1.8)}
        <g ${tA(2.3, 'ta-fade')}>${CT(160, 190, L('✓ sí · 🙋 sí, preguntant · ✕ no (i per què)', '✓ sí · 🙋 sí, preguntando · ✕ no (y por qué)'), 10.5, '#14204A', 800)}</g>`);
    },
    // la llei europea d'IA: nivells de risc amb exemples del món educatiu
    i64law() {
      const N = [[L('PROHIBIT', 'PROHIBIDO'), L('deduir emocions de l\'alumnat', 'deducir emociones del alumnado'), '#B91C1C', 120], [L('ALT RISC', 'ALTO RIESGO'), L('admetre, posar notes, vigilar exàmens', 'admitir, poner notas, vigilar exámenes'), '#EA580C', 170], [L('TRANSPARÈNCIA', 'TRANSPARENCIA'), L('dir que és una IA (xatbots)', 'decir que es una IA (chatbots)'), '#D97706', 230], [L('MÍNIM', 'MÍNIMO'), L("organitzar una sortida, comptadors…", 'organizar una salida, contadores…'), '#22A06B', 290]];
      return tSvg(214, `${N.map(([a, b, c, w], i) => `<g ${tA(.2 + i * .5, 'ta-in')}><rect x="${160 - w / 2}" y="${10 + i * 46}" width="${w}" height="40" rx="10" fill="${c}1F" stroke="${c}" stroke-width="2"/>${CT(160, 27 + i * 46, a, 10.5, c, 900)}${CT(160, 43 + i * 46, b, 9.5, '#14204A', 700)}</g>`).join('')}`);
    },
    // provar-lo abans: entorn de prova, intentar enganyar-lo i mirar el registre
    i64test() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${box(6, 6, 308, 130, '#F6F7FF', '#C7D2FE', 16)}${TX(18, 26, L('🧪 ENTORN DE PROVA (sense claus de veritat)', '🧪 ENTORNO DE PRUEBA (sin llaves de verdad)'), 10, '#2563EB', 900)}</g>
        <g ${tA(.7, 'ta-pop')}><circle cx="160" cy="84" r="30" fill="#14204A"/><text x="160" y="92" text-anchor="middle" font-size="22">🤖</text></g>
        ${[[50, 56, '🕳️', L('text trampa', 'texto trampa')], [270, 56, '❓', L('ordre ambigua', 'orden ambigua')], [60, 116, '🧨', L('dada falsa', 'dato falso')], [262, 116, '🔁', L('tasca llarga', 'tarea larga')]].map(([x, y, e, t], i) => `<g ${tA(1.1 + i * .35, 'ta-pop')}><text x="${x}" y="${y}" text-anchor="middle" font-size="16">${e}</text>${CT(x, y + 14, t, 9.5, '#B91C1C', 800)}</g><g ${tA(1.3 + i * .35, 'ta-fade')}>${arrow(x + (x < 160 ? 26 : -26), y - 6, 160 + (x < 160 ? -32 : 32), 84 + (y < 84 ? -10 : 10), '#F8A5A5')}</g>`).join('')}
        <g ${tA(2.8, 'ta-in')}>${box(6, 146, 308, 62, '#EEFBF3', '#B9EBD2', 14)}${TX(18, 168, L('Red team: intenteu enganyar-lo vosaltres', 'Red team: intentad engañarlo vosotros'), 11.5)}${TX(18, 190, L('Mireu el registre i corregiu la taula', 'Mirad el registro y corregid la tabla'), 11.5)}</g>`);
    }
  });
}
