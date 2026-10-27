/* Tech Digital · unitat 6 «Consumidors digitals» · animacions de teoria (TANI)
   Dibuixos propis de Numi: anuncis per tot arreu, publicitat disfressada, les tres preguntes davant d'un anunci, com
   guanya diners un videojoc «gratis», les monedes virtuals que amaguen euros, l'atzar de les caixes sorpresa, para-calcula-
   pregunta, l'algoritme com una recepta, les pistes que mira, la bombolla de filtre i l'anunci honest. Cap marca real. */
{
  const d6e = (x, y, e, s = 24) => `<text x="${x}" y="${y}" font-size="${s}" text-anchor="middle">${e}</text>`;
  const d6tag = (x, y, t, c = '#EF5A5A') => `<rect x="${x}" y="${y}" width="${Math.round(t.length * 6.3 + 12)}" height="18" rx="9" fill="${c}"/><text x="${x + 6}" y="${y + 13}" class="tat w s" style="font-size:11px">${t}</text>`;

  Object.assign(TANI, {
    // anuncis per tot arreu: uns es veuen i d'altres s'amaguen
    d6anuncis() {
      const A = [['📺', L('Tele', 'Tele'), L('Anunci', 'Anuncio')], ['🪧', L('Carrer', 'Calle'), L('Cartell', 'Cartel')], ['📱', L('Mòbil', 'Móvil'), '#publi'], ['▶️', L('Vídeo', 'Vídeo'), L('Patrocinat', 'Patrocinado')]];
      return tSvg(214, `${A.map(([e, t, g], i) => { const x = 10 + (i % 2) * 154, y = 8 + Math.floor(i / 2) * 86; return `<g ${tA(.2 + i * .5, 'ta-pop')}><rect x="${x}" y="${y}" width="146" height="78" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d6e(x + 34, y + 50, e, 28)}</g><text x="${x + 62}" y="${y + 32}" class="tat b">${t}</text>
          <g ${tA(.6 + i * .5, 'ta-pop')}>${d6tag(x + 58, y + 44, g, i < 2 ? '#2F5BEA' : '#EF5A5A')}</g></g>`; }).join('')}
        <g ${tA(3, 'ta-pop')}><rect x="10" y="182" width="300" height="28" rx="14" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="160" y="201" text-anchor="middle" class="tat s">${L("Uns es veuen… i d'altres s'amaguen", 'Unos se ven… y otros se esconden')}</text></g>`);
    },
    // la publicitat disfressada: caixes regalades, marques a la sèrie, resultats patrocinats i «notícies» pagades
    d6disfressa() {
      const D = [['📦', L('Obrir caixes regalades', 'Abrir cajas regaladas')], ['🎬', L('La marca, a la sèrie', 'La marca, en la serie')], ['🔍', L('Resultat patrocinat', 'Resultado patrocinado')], ['📰', L('«Notícia» pagada', '«Noticia» pagada')]];
      return tSvg(214, `${D.map(([e, t], i) => `<g ${tA(.2 + i * .5, 'ta-in')}><rect x="10" y="${8 + i * 44}" width="300" height="38" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><g>${d6e(32, 34 + i * 44, e, 18)}</g><text x="54" y="${32 + i * 44}" class="tat s">${t}</text>
          <g ${tA(.9 + i * .5, 'ta-pop')}>${d6tag(232, 18 + i * 44, L('Anunci', 'Anuncio'))}</g></g>`).join('')}
        <text x="160" y="204" text-anchor="middle" class="tat b" ${tA(3.2, 'ta-fade')}>${L('Mira la lletra petita!', '¡Mira la letra pequeña!')}</text>`);
    },
    // la lupa de l'anunci: tres preguntes
    d6lupa() {
      const Q = [['💶', L('Qui el paga?', '¿Quién lo paga?')], ['🎯', L('Què vol que faci?', '¿Qué quiere que haga?')], ['🙈', L('Què no em diu?', '¿Qué no me dice?')]];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="8" y="20" width="100" height="150" rx="14" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><g>${d6e(58, 82, '👟', 36)}</g><text x="58" y="112" text-anchor="middle" class="tat s" style="font-size:12px">${L('Les millors!', '¡Las mejores!')}</text><text x="58" y="132" text-anchor="middle" class="tat s" style="font-size:12px">${L('Només avui!', '¡Solo hoy!')}</text></g>
        <g ${tA(.7, 'ta-pop')}><circle cx="96" cy="52" r="22" fill="none" stroke="#14204A" stroke-width="5"/><path d="M111 67l12 12" stroke="#14204A" stroke-width="7" stroke-linecap="round"/></g>
        ${Q.map(([e, t], i) => `<g ${tA(1.3 + i * .6, 'ta-in')}><rect x="118" y="${14 + i * 52}" width="194" height="42" rx="14" fill="#fff" stroke="#2F5BEA" stroke-width="2.5"/><circle cx="134" cy="${35 + i * 52}" r="10" fill="#2F5BEA"/><text x="134" y="${40 + i * 52}" text-anchor="middle" class="tat w s">${i + 1}</text><g>${d6e(156, 41 + i * 52, e, 15)}</g><text x="170" y="${40 + i * 52}" class="tat s" style="font-size:12.5px">${t}</text></g>`).join('')}
        <text x="160" y="196" text-anchor="middle" class="tat s" ${tA(3.4, 'ta-fade')}>${L('Després, decideixo amb calma', 'Después, decido con calma')}</text>`);
    },
    // com guanya diners un videojoc «gratis»: compres, anuncis i dades
    d6gratis() {
      const S = [['💎', L('Compres', 'Compras'), '#9B6CF2'], ['📺', L('Anuncis', 'Anuncios'), '#F08A24'], ['📊', L('Dades', 'Datos'), '#14A3B8']];
      return tSvg(214, `<g ${tA(.2, 'ta-pop')}><rect x="96" y="6" width="128" height="58" rx="16" fill="#3CC47C"/><text x="160" y="32" text-anchor="middle" class="tat w b">🎮 ${L('GRATIS!', '¡GRATIS!')}</text><text x="160" y="52" text-anchor="middle" class="tat w s">${L('per descarregar', 'para descargar')}</text></g>
        ${S.map(([e, t, c], i) => `<g ${tA(.8 + i * .5, 'ta-in')}><rect x="${10 + i * 104}" y="86" width="96" height="58" rx="14" fill="#fff" stroke="${c}" stroke-width="3"/><g>${d6e(58 + i * 104, 114, e, 22)}</g><text x="${58 + i * 104}" y="135" text-anchor="middle" class="tat s">${t}</text>
          <circle r="5" fill="#FFD54A" stroke="#C99A00"><animateMotion dur="1.6s" begin="${i * .5}s" repeatCount="indefinite" path="M${58 + i * 104} 148L160 176"/></circle></g>`).join('')}
        <g ${tA(2.6, 'ta-pop')}><rect x="80" y="176" width="160" height="32" rx="14" fill="#14204A"/><text x="160" y="197" text-anchor="middle" class="tat w s">🏢 ${L("L'empresa guanya", 'La empresa gana')}</text></g>`);
    },
    // les monedes virtuals amaguen els euros, i els paquets no quadren
    d6moneda() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="10" y="8" width="300" height="46" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><text x="40" y="37" class="tat b">5 €</text><text x="88" y="37" class="tat b">=</text><text x="118" y="37" class="tat b">💎 500</text><text x="206" y="37" class="tat s">${L('(paquet)', '(paquete)')}</text></g>
        <g ${tA(1, 'ta-in')}><rect x="10" y="62" width="300" height="46" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><text x="30" y="91" class="tat b">🧢 💎 100</text><text x="140" y="91" class="tat b">=</text><text x="170" y="91" class="tat b" ${tA(1.6, 'ta-pop')}>1 € ✓</text></g>
        <g ${tA(2.2, 'ta-in')}><rect x="10" y="116" width="300" height="56" rx="14" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2"/><text x="26" y="139" class="tat s">${L('Vestit: 💎 600 → 2 paquets (10 €)', 'Traje: 💎 600 → 2 paquetes (10 €)')}</text><text x="26" y="160" class="tat b" ${tA(2.8, 'ta-fade')}>${L('Et sobren 💎 400…', 'Te sobran 💎 400…')}</text></g>
        <g ${tA(3.4, 'ta-pop')}><rect x="40" y="180" width="240" height="30" rx="15" fill="#2F5BEA"/><text x="160" y="200" text-anchor="middle" class="tat w s">🧮 ${L('Passa sempre a euros', 'Pásalo siempre a euros')}</text></g>`);
    },
    // l'atzar: 1 de cada 100 caixes té el premi
    d6atzar() {
      return tSvg(214, `${Array.from({ length: 100 }, (_, i) => { const x = 14 + (i % 10) * 15, y = 14 + Math.floor(i / 10) * 15, g = i === 67; return `<rect x="${x}" y="${y}" width="12" height="12" rx="3" fill="${g ? '#FFC531' : '#C9B8F2'}" ${g ? tA(2, 'ta-pop') : ''}/>`; }).join('')}
        <g ${tA(2.2, 'ta-pop')}><circle cx="125" cy="110" r="13" fill="none" stroke="#F08A24" stroke-width="3"/></g>
        <g ${tA(.4, 'ta-in')}><rect x="176" y="14" width="134" height="64" rx="14" fill="#fff" stroke="#9B6CF2" stroke-width="2.5"/><text x="243" y="40" text-anchor="middle" class="tat b">${L('1 de cada 100', '1 de cada 100')}</text><text x="243" y="62" text-anchor="middle" class="tat s">${L('té el drac 🐉', 'tiene el dragón 🐉')}</text></g>
        <g ${tA(1.4, 'ta-in')}><rect x="176" y="88" width="134" height="64" rx="14" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2.5"/><text x="243" y="113" text-anchor="middle" class="tat s">${L('De mitjana, cal', 'De media, hay que')}</text><text x="243" y="134" text-anchor="middle" class="tat b">${L('obrir-ne 100', 'abrir 100')}</text></g>
        <g ${tA(3, 'ta-pop')}><rect x="14" y="170" width="296" height="38" rx="16" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2.5"/><text x="162" y="194" text-anchor="middle" class="tat s">${L("…i potser més. Decideix l'atzar.", '…y quizá más. Decide el azar.')}</text></g>`);
    },
    // para, calcula, pregunta
    d6stop() {
      const S = [['✋', L('Para', 'Para'), L('sense presses', 'sin prisas'), '#EF5A5A'], ['🧮', L('Calcula', 'Calcula'), L('quants euros?', '¿cuántos euros?'), '#F2B21B'], ['🙋', L('Pregunta', 'Pregunta'), L('a un adult', 'a un adulto'), '#3CC47C']];
      return tSvg(214, `<rect x="10" y="20" width="300" height="130" rx="65" fill="#1B1F2E"/>
        ${S.map(([e, t, s, c], i) => `<g ${tA(.4 + i * .8, 'ta-pop')}><circle cx="${62 + i * 98}" cy="85" r="44" fill="${c}"/><g>${d6e(62 + i * 98, 82, e, 30)}</g><text x="${62 + i * 98}" y="112" text-anchor="middle" class="tat w b">${t}</text></g>
          <text x="${62 + i * 98}" y="172" text-anchor="middle" class="tat s" ${tA(.8 + i * .8, 'ta-fade')}>${s}</text>`).join('')}
        <text x="160" y="204" text-anchor="middle" class="tat b" ${tA(3.2, 'ta-fade')}>${L('Abans de comprar res', 'Antes de comprar nada')}</text>`);
    },
    // un algoritme és una recepta de passos; el de recomanació tria què veus
    d6algo() {
      const P = [L('Mira què has vist', 'Mira qué has visto'), L('Busca semblants', 'Busca parecidos'), L('Els ordena', 'Los ordena'), L("Te'ls mostra", 'Te los muestra')];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="10" y="8" width="176" height="198" rx="14" fill="#FFFDF5" stroke="#F2B21B" stroke-width="2.5"/><text x="98" y="32" text-anchor="middle" class="tat b">📜 ${L('La recepta', 'La receta')}</text></g>
        ${P.map((t, i) => `<g ${tA(.6 + i * .5, 'ta-in')}><circle cx="30" cy="${58 + i * 40}" r="11" fill="#F08A24"/><text x="30" y="${63 + i * 40}" text-anchor="middle" class="tat w s">${i + 1}</text><text x="48" y="${63 + i * 40}" class="tat s" style="font-size:12.5px">${t}</text></g>`).join('')}
        <g ${tA(2.8, 'ta-pop')}>${['🐱', '🐶', '🐰'].map((e, i) => `<rect x="200" y="${14 + i * 64}" width="110" height="54" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><rect x="208" y="${22 + i * 64}" width="44" height="38" rx="8" fill="#EAF4FF"/><g>${d6e(230, 49 + i * 64, e, 20)}</g><rect x="258" y="${28 + i * 64}" width="44" height="6" rx="3" fill="#C9D3F2"/><rect x="258" y="${42 + i * 64}" width="32" height="6" rx="3" fill="#E3E8F6"/>`).join('')}</g>`);
    },
    // les pistes que mira l'algoritme
    d6pistes() {
      const P = [['👀', L('Què mires', 'Qué miras')], ['⏱️', L('Quanta estona', 'Cuánto rato')], ['❤️', L("Què t'agrada", 'Qué te gusta')], ['🔍', L('Què busques', 'Qué buscas')], ['🕘', L('A quina hora', 'A qué hora')], ['👥', L('Gent com tu', 'Gente como tú')]];
      return tSvg(214, `${P.map(([e, t], i) => { const a = (i / 6) * Math.PI * 2 - Math.PI / 2, x = 160 + Math.cos(a) * 98, y = 100 + Math.sin(a) * 74; return `<g ${tA(.2 + i * .4, 'ta-pop')}><rect x="${x - 58}" y="${y - 17}" width="116" height="34" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d6e(x - 42, y + 6, e, 14)}</g><text x="${x - 30}" y="${y + 5}" class="tat s" style="font-size:12px">${t}</text>
          <path d="M${160 + Math.cos(a) * 40} ${100 + Math.sin(a) * 26}L${160 + Math.cos(a) * 62} ${100 + Math.sin(a) * 42}" stroke="#9B6CF2" stroke-width="2.5" stroke-dasharray="3 3"/></g>`; }).join('')}
        <g ${tA(2.6, 'ta-pop')}><circle cx="160" cy="100" r="30" fill="#14204A"/><g>${d6e(160, 110, '⚙️', 26)}</g></g>
        <text x="160" y="206" text-anchor="middle" class="tat s" ${tA(3.2, 'ta-fade')}>${L("Amb tot això, endevina què t'enganxarà", 'Con todo esto, adivina qué te enganchará')}</text>`);
    },
    // la bombolla de filtre: a dins, sempre el mateix; a fora, tot un món
    d6bombolla() {
      const O = [['🎻', 30, 30], ['🔭', 290, 34], ['🎨', 26, 150], ['🌍', 292, 156], ['🐢', 160, 22], ['🧪', 60, 96], ['📚', 262, 96]];
      return tSvg(214, `${O.map(([e, x, y], i) => `<g ${tA(1.8 + i * .2, 'ta-pop')}>${d6e(x, y, e, 22)}</g>`).join('')}
        <g ${tA(.2, 'ta-pop')}><circle cx="160" cy="96" r="66" fill="#CFE9FF" fill-opacity=".55" stroke="#7CB8F0" stroke-width="3"><animate attributeName="r" values="66;70;66" dur="3s" repeatCount="indefinite"/></circle>
          <g>${d6e(160, 108, '🧒', 34)}</g>${[[124, 62], [196, 62], [118, 128], [202, 128], [160, 48]].map(([x, y]) => `<g>${d6e(x, y, '⚽', 16)}</g>`).join('')}</g>
        <g ${tA(3, 'ta-pop')}><rect x="20" y="176" width="280" height="32" rx="16" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="160" y="197" text-anchor="middle" class="tat s">${L("El teu inici no és el món sencer", 'Tu inicio no es el mundo entero')}</text></g>`);
    },
    // l'anunci honest: què hi va i què no
    d6honest() {
      const Y = [L('Què és', 'Qué es'), L('Quant costa', 'Cuánto cuesta'), L('Qui el fa', 'Quién lo hace'), L('Per a què', 'Para qué')], N = [L('Presses falses', 'Prisas falsas'), L('Lletra petita', 'Letra pequeña'), L('«El millor del món»', '«Lo mejor del mundo»')];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="10" y="8" width="150" height="198" rx="14" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><text x="85" y="32" text-anchor="middle" class="tat b">✅ ${L('Hi va', 'Va')}</text></g>
        ${Y.map((t, i) => `<g ${tA(.6 + i * .4, 'ta-in')}><rect x="20" y="${44 + i * 38}" width="130" height="30" rx="10" fill="#fff"/><text x="85" y="${64 + i * 38}" text-anchor="middle" class="tat s">${t}</text></g>`).join('')}
        <g ${tA(2.2, 'ta-in')}><rect x="168" y="8" width="142" height="198" rx="14" fill="#FDEBEB" stroke="#EF5A5A" stroke-width="2.5"/><text x="239" y="32" text-anchor="middle" class="tat b">🚫 ${L('No hi va', 'No va')}</text></g>
        ${N.map((t, i) => `<g ${tA(2.6 + i * .4, 'ta-in')}><rect x="176" y="${44 + i * 38}" width="126" height="30" rx="10" fill="#fff"/><text x="239" y="${64 + i * 38}" text-anchor="middle" class="tat s" style="font-size:12px">${t}</text></g>`).join('')}`);
    }
  });
}
