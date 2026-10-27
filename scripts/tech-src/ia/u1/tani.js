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
