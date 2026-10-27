/* Tech Digital · unitat 4 «Ciberseguretat» · animacions de teoria (TANI)
   Dibuixos propis de Numi: les disfresses dels missatges trampa, els quatre passos, els permisos de les apps, el diàleg de
   permís, les wifis que imiten noms, els forats que tapen les actualitzacions, les còpies de seguretat, el bloqueig de
   pantalla i l'escape room. Cap marca ni cap app reals. */
{
  const d4e = (x, y, e, s = 24) => `<text x="${x}" y="${y}" font-size="${s}" text-anchor="middle">${e}</text>`;
  const d4ph = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w * .16}" fill="#1B1F2E"/><rect x="${x + 4}" y="${y + 8}" width="${w - 8}" height="${h - 16}" rx="${w * .08}" fill="#fff"/>`;
  const d4ok = (cx, cy, c = '#3CC47C') => `<circle cx="${cx}" cy="${cy}" r="10" fill="${c}"/><path d="M${cx - 5} ${cy}l4 4 6-7" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
  const d4ko = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="10" fill="#EF5A5A"/><path d="M${cx - 4} ${cy - 4}l8 8M${cx + 4} ${cy - 4}l-8 8" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`;

  Object.assign(TANI, {
    // les disfresses de l'engany: paquet, premi, amic, suport… i sempre el mateix truc (que vagis de pressa)
    d4disfressa() {
      const R = [['📦', L('Paquet retingut', 'Paquete retenido')], ['🎁', L('Has guanyat!', '¡Has ganado!')], ['💬', L('«Soc en Pau»', '«Soy Pau»')], ['🛠️', L('«Suport oficial»', '«Soporte oficial»')]];
      return tSvg(226, `${R.map(([e, t], i) => `<g ${tA(.2 + i * .45, 'ta-in')}><rect x="8" y="${8 + i * 44}" width="176" height="36" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d4e(28, 33 + i * 44, e, 18)}</g><text x="46" y="${31 + i * 44}" class="tat s">${t}</text></g>
          <path d="M186 ${26 + i * 44}L204 ${88}" stroke="#F08A24" stroke-width="2.5" stroke-dasharray="4 4" ${tA(.5 + i * .45, 'ta-fade')}/>`).join('')}
        <g ${tA(2.2, 'ta-pop')}><circle cx="256" cy="88" r="50" fill="#FFF3D6" stroke="#F2B21B" stroke-width="3"/><g>${d4e(256, 86, '🎣', 34)}</g>
          <text x="256" y="110" text-anchor="middle" class="tat s">${L('Mateix truc:', 'Mismo truco:')}</text><text x="256" y="127" text-anchor="middle" class="tat b">${L('de pressa!', '¡deprisa!')}</text></g>
        <g ${tA(3.2, 'ta-pop')}><rect x="10" y="186" width="300" height="34" rx="16" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><text x="160" y="208" text-anchor="middle" class="tat b">${L("Atura't, comprova i pregunta", 'Para, comprueba y pregunta')}</text></g>`);
    },
    // els quatre passos davant d'un missatge trampa
    d4passos() {
      const R = [['✋', L("Atura't:", 'Para:'), L('no toquis res', 'no toques nada'), '#EF5A5A'], ['🔍', L('Comprova:', 'Comprueba:'), L('per un altre camí', 'por otro camino'), '#2F5BEA'], ['🗣️', L('Explica-ho:', 'Cuéntalo:'), L('a un adult', 'a un adulto'), '#9B6CF2'], ['🚩', L('Denuncia:', 'Denuncia:'), L('bloqueja i esborra', 'bloquea y borra'), '#3CC47C']];
      return tSvg(214, `${R.map(([e, t, s, c], i) => `<g ${tA(.3 + i * .6, 'ta-in')}><rect x="10" y="${6 + i * 44}" width="300" height="38" rx="14" fill="#fff" stroke="${c}" stroke-width="2.5"/>
          <circle cx="30" cy="${25 + i * 44}" r="12" fill="${c}"/><text x="30" y="${30 + i * 44}" text-anchor="middle" class="tat w s">${i + 1}</text><g>${d4e(60, 32 + i * 44, e, 18)}</g>
          <text x="80" y="${30 + i * 44}" class="tat b">${t} <tspan style="font-size:13.5px;font-weight:700">${s}</tspan></text></g>`).join('')}
        <g ${tA(3, 'ta-pop')}><rect x="10" y="184" width="300" height="28" rx="14" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="160" y="203" text-anchor="middle" class="tat s">${L('Si ja has caigut: explica-ho de seguida', 'Si ya has caído: cuéntalo enseguida')}</text></g>`);
    },
    // un permís és una clau que deixes a una app
    d4permis() {
      const R = [['📷', L('Càmera', 'Cámara')], ['🎙️', L('Micròfon', 'Micrófono')], ['📍', L('Ubicació', 'Ubicación')], ['👥', L('Contactes', 'Contactos')], ['🖼️', L('Fotos', 'Fotos')]];
      return tSvg(216, `${d4ph(20, 14, 96, 168)}${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${32 + (i % 3) * 25}" y="${36 + Math.floor(i / 3) * 28}" width="20" height="20" rx="6" fill="${['#7C9BFF', '#3CC47C', '#F2B21B', '#EF5A5A', '#9B6CF2', '#14A3B8'][i]}"/>`).join('')}
        <g ${tA(.3, 'ta-pop')}><rect x="30" y="104" width="76" height="56" rx="10" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/>${d4e(68, 132, '🔑', 20)}<text x="68" y="152" text-anchor="middle" class="tat s">${L('Permís?', '¿Permiso?')}</text></g>
        ${R.map(([e, t], i) => `<g ${tA(.8 + i * .4, 'ta-in')}><path d="M118 ${120}L148 ${25 + i * 36}" stroke="#C9D3F2" stroke-width="2" stroke-dasharray="3 4"/><rect x="150" y="${10 + i * 36}" width="160" height="30" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d4e(170, 31 + i * 36, e, 16)}</g><text x="188" y="${30 + i * 36}" class="tat s">${t}</text></g>`).join('')}
        <g ${tA(3, 'ta-pop')}><rect x="10" y="188" width="300" height="26" rx="13" fill="#2F5BEA"/><text x="160" y="206" text-anchor="middle" class="tat w s">${L('Un permís = una clau per a una app', 'Un permiso = una llave para una app')}</text></g>`);
    },
    // té sentit? cada app, el permís que necessita (i el que no)
    d4sentit() {
      const R = [['🗺️', L('Mapes', 'Mapas'), '📍', L('Ubicació', 'Ubicación'), 1], ['📸', L('Fotos', 'Fotos'), '📷', L('Càmera', 'Cámara'), 1], ['🧮', L('Calculadora', 'Calculadora'), '👥', L('Contactes', 'Contactos'), 0]];
      return tSvg(214, `${R.map(([e1, a, e2, p, ok], i) => `<g ${tA(.3 + i * .8, 'ta-in')}><rect x="10" y="${8 + i * 52}" width="122" height="42" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d4e(32, 36 + i * 52, e1, 20)}</g><text x="50" y="${34 + i * 52}" class="tat s">${a}</text>
          <path d="M136 ${29 + i * 52}h16" stroke="#9AA6C8" stroke-width="3"/><path d="M150 ${23 + i * 52}l8 6-8 6" fill="#9AA6C8"/>
          <rect x="162" y="${8 + i * 52}" width="118" height="42" rx="14" fill="${ok ? '#E7F7EE' : '#FDEBEB'}" stroke="${ok ? '#3CC47C' : '#EF5A5A'}" stroke-width="2"/><g>${d4e(182, 36 + i * 52, e2, 18)}</g><text x="198" y="${34 + i * 52}" class="tat s">${p}</text></g>
          <g ${tA(.8 + i * .8, 'ta-pop')}>${ok ? d4ok(300, 29 + i * 52) : d4ko(300, 29 + i * 52)}</g>`).join('')}
        <g ${tA(3.2, 'ta-pop')}><rect x="40" y="166" width="240" height="40" rx="18" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2.5"/><text x="160" y="191" text-anchor="middle" class="tat b">${L('Per a què ho necessita?', '¿Para qué lo necesita?')}</text></g>`);
    },
    // el diàleg de permís: sovint hi ha més opcions que «sí» o «no»
    d4dialeg() {
      const B = [[L("Mentre faig servir l'app", 'Mientras uso la app'), 1], [L('Només aquesta vegada', 'Solo esta vez'), 0], [L('No permetre', 'No permitir'), 0]];
      return tSvg(214, `<rect x="30" y="6" width="260" height="168" rx="22" fill="#F3F6FF" stroke="#DCE4FA" stroke-width="2"/>
        <g ${tA(.2, 'ta-fade')}>${d4e(160, 34, '📍', 22)}<text x="160" y="56" text-anchor="middle" class="tat s">${L('Vols que «Mapes» sàpiga', '¿Quieres que «Mapas» sepa')}</text><text x="160" y="73" text-anchor="middle" class="tat s">${L('on ets?', 'dónde estás?')}</text></g>
        ${B.map(([t, on], i) => `<g ${tA(.8 + i * .4, 'ta-in')}><rect x="48" y="${84 + i * 30}" width="224" height="26" rx="13" fill="#fff" stroke="#C9D3F2" stroke-width="2"/><text x="160" y="${102 + i * 30}" text-anchor="middle" class="tat s">${t}</text></g>`).join('')}
        <g ${tA(2.4, 'ta-pop')}><rect x="48" y="84" width="224" height="26" rx="13" fill="none" stroke="#3CC47C" stroke-width="4"/></g>
        <g ${tA(3, 'ta-pop')}><rect x="20" y="180" width="280" height="30" rx="15" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2"/><text x="160" y="200" text-anchor="middle" class="tat s">${L('Tria la més petita que serveixi', 'Elige la más pequeña que sirva')}</text></g>`);
    },
    // la wifi de l'estació i les que n'imiten el nom; el cadenat vol dir xifrat, no «de fiar»
    d4wifi() {
      const R = [['🔒', 'Estacio_Vilabit', L("✓ La de l'estació", '✓ La de la estación'), '#1E8A50'], ['🔓', 'Estacio_Vilabit_FREE', L('? Imita el nom', '? Imita el nombre'), '#D93F45'], ['🔓', 'WIFI_GRATIS_RAPIDA', L('? De qui és?', '? ¿De quién es?'), '#D93F45']];
      return tSvg(226, `<text x="160" y="18" text-anchor="middle" class="tat b" ${tA(.1, 'ta-fade')}>📶 ${L("Wifis de l'estació", 'Wifis de la estación')}</text>
        ${R.map(([e, n, t, c], i) => `<g ${tA(.4 + i * .6, 'ta-in')}><rect x="10" y="${26 + i * 46}" width="300" height="40" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><g>${d4e(28, 52 + i * 46, e, 15)}</g><text x="44" y="${43 + i * 46}" class="tat s">${n}</text>
          <text x="44" y="${60 + i * 46}" class="tat s" style="fill:${c};font-size:11.5px" ${tA(.8 + i * .6, 'ta-fade')}>${t}</text></g>`).join('')}
        <g ${tA(2.6, 'ta-in')}><rect x="10" y="166" width="300" height="24" rx="12" fill="#F3F6FF" stroke="#C9D3F2" stroke-width="2"/><text x="24" y="183" class="tat s">🔒 https://… ${L('= xifrat, no «de fiar»', '= cifrado, no «de fiar»')}</text></g>
        <g ${tA(3.4, 'ta-pop')}><rect x="10" y="196" width="300" height="26" rx="13" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2"/><text x="160" y="214" text-anchor="middle" class="tat s">${L('Comptes i compres: millor a casa', 'Cuentas y compras: mejor en casa')}</text></g>`);
    },
    // els programes tenen forats; l'actualització els tapa
    d4forat() {
      const H = [[70, 70], [150, 110], [230, 60]];
      return tSvg(214, `<rect x="20" y="20" width="280" height="130" rx="14" fill="#DCE4FA"/>${[0, 1, 2, 3, 4].map(r => `<path d="M20 ${46 + r * 26}h280" stroke="#C3CEF0" stroke-width="2"/>`).join('')}
        ${H.map(([x, y], i) => `<ellipse cx="${x}" cy="${y}" rx="16" ry="12" fill="#14204A" ${tA(.2 + i * .2, 'ta-pop')}/>`).join('')}
        <g ${tA(.9, 'ta-in')}>${d4e(110, 84, '🐛', 22)}</g>
        ${H.map(([x, y], i) => `<g ${tA(1.8 + i * .4, 'ta-pop')}><rect x="${x - 22}" y="${y - 16}" width="44" height="32" rx="8" fill="#3CC47C" stroke="#fff" stroke-width="2"/><text x="${x}" y="${y + 6}" text-anchor="middle" class="tat w b">⬆️</text></g>`).join('')}
        <text x="160" y="14" text-anchor="middle" class="tat s" ${tA(.3, 'ta-fade')}>${L('Tots els programes tenen errors (forats)', 'Todos los programas tienen errores (agujeros)')}</text>
        <g ${tA(3.2, 'ta-pop')}><rect x="10" y="158" width="300" height="24" rx="12" fill="#3CC47C"/><text x="160" y="175" text-anchor="middle" class="tat w s">${L("L'actualització els tapa", 'La actualización los tapa')}</text></g>
        <text x="160" y="204" text-anchor="middle" class="tat s" ${tA(3.8, 'ta-fade')}>${L('Des de la configuració, no des d\'una web', 'Desde la configuración, no desde una web')}</text>`);
    },
    // una còpia de seguretat: les fotos també en un altre lloc
    d4copia() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${d4ph(124, 52, 72, 116)}${['🏖️', '🐶', '🎂', '🎨'].map((e, i) => `<g>${d4e(146 + (i % 2) * 28, 90 + Math.floor(i / 2) * 32, e, 18)}</g>`).join('')}</g>
        <path d="M120 96C90 80 80 60 74 48" stroke="#2F5BEA" stroke-width="3" stroke-dasharray="5 4" fill="none" ${tA(.8, 'ta-fade')}/><path d="M200 96C230 80 240 60 246 48" stroke="#2F5BEA" stroke-width="3" stroke-dasharray="5 4" fill="none" ${tA(1, 'ta-fade')}/>
        <g ${tA(1.2, 'ta-pop')}><rect x="14" y="6" width="112" height="44" rx="16" fill="#EAF4FF" stroke="#7C9BFF" stroke-width="2"/><g>${d4e(38, 36, '☁️', 22)}</g><text x="58" y="33" class="tat s">${L('Núvol', 'Nube')}</text></g>
        <g ${tA(1.4, 'ta-pop')}><rect x="182" y="6" width="130" height="44" rx="16" fill="#EAF4FF" stroke="#7C9BFF" stroke-width="2"/><g>${d4e(200, 36, '💾', 18)}</g><text x="214" y="33" class="tat s">${L('Disc extern', 'Disco externo')}</text></g>
        <g ${tA(2.4, 'ta-pop')}>${d4e(220, 140, '💥', 34)}</g>
        <g ${tA(3.2, 'ta-pop')}><rect x="10" y="176" width="300" height="32" rx="15" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><text x="160" y="197" text-anchor="middle" class="tat s">${L("Si es trenca, les fotos són a l'altre lloc", 'Si se rompe, las fotos están a salvo')}</text></g>`);
    },
    // el bloqueig de pantalla i els dos panys del compte
    d4pany() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="16" y="8" width="118" height="196" rx="20" fill="#1B1F2E"/><rect x="22" y="16" width="106" height="180" rx="14" fill="#22306E"/>
          <g>${d4e(75, 52, '🔒', 22)}</g>${[0, 1, 2, 3, 4, 5].map(i => `<circle cx="${44 + i * 12}" cy="72" r="4" fill="#fff" ${tA(.6 + i * .2, 'ta-pop')}/>`).join('')}
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n, i) => `<circle cx="${50 + (i % 3) * 25}" cy="${98 + Math.floor(i / 3) * 26}" r="10" fill="rgba(255,255,255,.14)"/><text x="${50 + (i % 3) * 25}" y="${103 + Math.floor(i / 3) * 26}" text-anchor="middle" class="tat w s">${n}</text>`).join('')}</g>
        <g ${tA(1.8, 'ta-in')}><rect x="148" y="10" width="162" height="50" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><g>${d4e(170, 42, '⏱️', 18)}</g><text x="188" y="32" class="tat s">${L('Es bloqueja sola', 'Se bloquea sola')}</text><text x="188" y="50" class="tat b">${L('als 2 minuts', 'a los 2 minutos')}</text></g>
        <g ${tA(2.6, 'ta-in')}><rect x="148" y="72" width="162" height="78" rx="16" fill="#F3F6FF" stroke="#C9D3F2" stroke-width="2"/><text x="229" y="94" text-anchor="middle" class="tat s">${L('Dos panys:', 'Dos candados:')}</text>
          <g>${d4e(186, 132, '🔑', 22)}</g><text x="210" y="126" class="tat b">+</text><g>${d4e(240, 132, '📱', 22)}</g><text x="268" y="128" class="tat s">${L('codi', 'código')}</text></g>
        <g ${tA(3.4, 'ta-pop')}><rect x="148" y="160" width="162" height="44" rx="16" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><text x="229" y="179" text-anchor="middle" class="tat s">${L('PIN difícil', 'PIN difícil')}</text><text x="229" y="196" text-anchor="middle" class="tat s">${L("d'endevinar", 'de adivinar')}</text></g>`);
    },
    // l'escape room: quatre sales, quatre xifres i la porta s'obre
    d4escape() {
      const S = [['🎣', '7'], ['📲', '2'], ['📶', '9'], ['🔐', '4']];
      return tSvg(214, `${S.map(([e], i) => `<g ${tA(.2 + i * .5, 'ta-in')}><rect x="${10 + i * 52}" y="10" width="44" height="44" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d4e(32 + i * 52, 40, e, 20)}</g><text x="${32 + i * 52}" y="70" text-anchor="middle" class="tat s">${L('Sala', 'Sala')} ${i + 1}</text></g>`).join('')}
        <rect x="222" y="8" width="90" height="190" rx="10" fill="#8A5A3B"/><rect x="230" y="16" width="74" height="174" rx="6" fill="#A86E47"/><circle cx="292" cy="108" r="5" fill="#FFD54A"/>
        <rect x="12" y="92" width="196" height="56" rx="14" fill="#14204A"/>
        ${S.map(([, d], i) => `<rect x="${24 + i * 46}" y="102" width="36" height="36" rx="8" fill="#22306E"/><text x="${42 + i * 46}" y="128" text-anchor="middle" class="tat w b" style="font-size:20px" ${tA(.6 + i * .5, 'ta-pop')}>${d}</text>`).join('')}
        <g ${tA(3, 'ta-pop')}><rect x="230" y="16" width="74" height="174" rx="6" fill="#FFF3D6"/>${d4e(267, 110, '🤖', 30)}</g>
        <g ${tA(3.4, 'ta-pop')}><rect x="12" y="160" width="196" height="40" rx="16" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><text x="110" y="185" text-anchor="middle" class="tat b">${L('Porta oberta!', '¡Puerta abierta!')}</text></g>`);
    },
    // com es dissenya una bona prova
    d4prova() {
      const R = [['🏷️', L('Tema', 'Tema'), L('les wifis', 'las wifis')], ['🎬', L('Situació', 'Situación'), L('curta i clara', 'corta y clara')], ['💡', L('Pista', 'Pista'), L('ajuda, sense resoldre', 'ayuda, sin resolver')], ['✅', L('Solució', 'Solución'), L('es pot comprovar', 'se puede comprobar')]];
      return tSvg(214, `<rect x="14" y="6" width="292" height="164" rx="14" fill="#FFFDF5" stroke="#F2B21B" stroke-width="2.5"/><text x="160" y="28" text-anchor="middle" class="tat b">${L('La meva prova', 'Mi prueba')}</text>
        ${R.map(([e, k, v], i) => `<g ${tA(.4 + i * .5, 'ta-in')}><g>${d4e(38, 58 + i * 30, e, 16)}</g><text x="56" y="${57 + i * 30}" class="tat b">${k}:</text><text x="148" y="${57 + i * 30}" class="tat s">${v}</text></g>`).join('')}
        <g ${tA(2.8, 'ta-pop')}><rect x="40" y="176" width="240" height="32" rx="16" fill="#9B6CF2"/><text x="160" y="197" text-anchor="middle" class="tat w s">💡 ${L("I una idea per aprendre", 'Y una idea para aprender')}</text></g>`);
    }
  });
}
