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
