/* Tech Digital · unitat 5 «La IA a fons» · animacions de teoria (TANI)
   Dibuixos propis de Numi: instrucció vaga i instrucció clara, les tres peces d'un bon prompt, revisar la resposta, les
   quatre menes d'imatges, el filtre de bellesa, els passos de verificar, les dades d'entrenament, què passa amb les
   converses, la configuració de privadesa, el manual de la IA i el que no deleguem. Cap marca ni cap app reals. */
{
  const d5e = (x, y, e, s = 24) => `<text x="${x}" y="${y}" font-size="${s}" text-anchor="middle">${e}</text>`;
  const d5bub = (x, y, w, h, me) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${me ? '#2F5BEA' : '#fff'}" stroke="${me ? '#2F5BEA' : '#DCE4FA'}" stroke-width="2"/>`;
  const d5tg = (x, y, on) => `<rect x="${x}" y="${y}" width="40" height="22" rx="11" fill="${on ? '#3CC47C' : '#C9D3F2'}"/><circle cx="${on ? x + 29 : x + 11}" cy="${y + 11}" r="8" fill="#fff"/>`;

  Object.assign(TANI, {
    // instrucció vaga → resposta que no serveix; instrucció clara → resposta útil
    d5prompt() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${d5bub(196, 6, 110, 30, 1)}<text x="251" y="26" text-anchor="middle" class="tat w s">${L('volcans', 'volcanes')}</text></g>
        <g ${tA(.8, 'ta-in')}>${d5bub(14, 42, 200, 40)}<g>${d5e(34, 70, '🤖', 18)}</g>${[0, 1, 2].map(i => `<rect x="54" y="${52 + i * 9}" width="${[148, 140, 120][i]}" height="5" rx="2.5" fill="#C9D3F2"/>`).join('')}</g>
        <g ${tA(1.3, 'ta-pop')}>${d5e(240, 72, '😵', 24)}</g>
        <g ${tA(1.9, 'ta-in')}>${d5bub(48, 96, 258, 46, 1)}<text x="177" y="115" text-anchor="middle" class="tat w s">${L('Per a 5è: explica en 5 frases', 'Para 5.º: explica en 5 frases')}</text><text x="177" y="133" text-anchor="middle" class="tat w s">${L('fàcils com es forma un volcà', 'fáciles cómo se forma un volcán')}</text></g>
        <g ${tA(2.8, 'ta-in')}>${d5bub(14, 150, 200, 56)}<g>${d5e(34, 184, '🤖', 18)}</g>${[0, 1, 2, 3, 4].map(i => `<text x="54" y="${163 + i * 9.5}" font-size="9" font-weight="800" fill="#2F5BEA">${i + 1}.</text><rect x="66" y="${158 + i * 9.5}" width="${[120, 110, 128, 100, 116][i]}" height="5" rx="2.5" fill="#C9D3F2"/>`).join('')}</g>
        <g ${tA(3.4, 'ta-pop')}>${d5e(250, 186, '🙂', 26)}<circle cx="282" cy="166" r="10" fill="#3CC47C"/><path d="M277 166l4 4 6-7" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>`);
    },
    // les tres peces d'una bona instrucció: context, tasca i forma
    d5peces() {
      const P = [['🧭', L('Context', 'Contexto'), L('per a 5è', 'para 5.º'), '#2F5BEA'], ['🎯', L('Tasca', 'Tarea'), L('explica…', 'explica…'), '#9B6CF2'], ['📏', L('Forma', 'Forma'), L('en 5 frases', 'en 5 frases'), '#F08A24']];
      return tSvg(214, `${P.map(([e, k, v, c], i) => `<g ${tA(.3 + i * .6, 'ta-pop')}><rect x="${12 + i * 100}" y="14" width="94" height="96" rx="16" fill="#fff" stroke="${c}" stroke-width="3"/><circle cx="${106 + i * 100}" cy="62" r="9" fill="${i < 2 ? c : 'none'}"/>
          <g>${d5e(59 + i * 100, 50, e, 24)}</g><text x="${59 + i * 100}" y="78" text-anchor="middle" class="tat b">${k}</text><text x="${59 + i * 100}" y="98" text-anchor="middle" class="tat s">${v}</text></g>`).join('')}
        <path d="M160 116v16" stroke="#9AA6C8" stroke-width="3" ${tA(2.2, 'ta-fade')}/><path d="M153 128l7 8 7-8" fill="#9AA6C8" ${tA(2.2, 'ta-fade')}/>
        <g ${tA(2.6, 'ta-pop')}><rect x="40" y="142" width="240" height="40" rx="18" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><g>${d5e(70, 170, '🤖', 20)}</g><text x="172" y="167" text-anchor="middle" class="tat b">${L('Resposta útil!', '¡Respuesta útil!')}</text></g>
        <text x="160" y="204" text-anchor="middle" class="tat s" ${tA(3.2, 'ta-fade')}>${L('I sense dades personals', 'Y sin datos personales')}</text>`);
    },
    // revisar la resposta: demanar-ne més i tres preguntes
    d5revisa() {
      const C = [L('«més fàcil»', '«más fácil»'), L('«un exemple»', '«un ejemplo»'), L('«més curt»', '«más corto»')];
      const R = [['🔍', L('És veritat?', '¿Es verdad?'), L('ho comprovo', 'lo compruebo'), '#2F5BEA'], ['💡', L('Ho entenc?', '¿Lo entiendo?'), L('si no, pregunto', 'si no, pregunto'), '#F2B21B'], ['✍️', L('És meu?', '¿Es mío?'), L('amb les meves paraules', 'con mis palabras'), '#3CC47C']];
      return tSvg(214, `<text x="160" y="18" text-anchor="middle" class="tat s" ${tA(.1, 'ta-fade')}>${L('Demana-li més:', 'Pídele más:')}</text>
        ${C.map((t, i) => `<g ${tA(.3 + i * .3, 'ta-pop')}><rect x="${12 + i * 100}" y="26" width="94" height="28" rx="14" fill="#F3E8FF" stroke="#9B6CF2" stroke-width="2"/><text x="${59 + i * 100}" y="45" text-anchor="middle" class="tat s">${t}</text></g>`).join('')}
        ${R.map(([e, q, a, c], i) => `<g ${tA(1.4 + i * .6, 'ta-in')}><rect x="12" y="${66 + i * 48}" width="296" height="40" rx="14" fill="#fff" stroke="${c}" stroke-width="2.5"/><g>${d5e(36, 93 + i * 48, e, 18)}</g><text x="58" y="${91 + i * 48}" class="tat b">${q} <tspan style="font-size:13.5px;font-weight:700">${a}</tspan></text></g>`).join('')}`);
    },
    // quatre menes d'imatges: real, retocada, fora de context i feta amb IA
    d5quatre() {
      const T = [['📷', L('Real', 'Real'), '🌳🏠', '#3CC47C'], ['🪄', L('Retocada', 'Retocada'), '🌳🏠✨', '#F2B21B'], ['📅', L('Fora de context', 'Fuera de contexto'), '❄️🏠', '#F08A24'], ['🤖', L('Feta amb IA', 'Hecha con IA'), '🐉🏠', '#9B6CF2']];
      return tSvg(214, `${T.map(([e, t, sc, c], i) => { const x = 10 + (i % 2) * 154, y = 8 + Math.floor(i / 2) * 102; return `<g ${tA(.3 + i * .6, 'ta-pop')}><rect x="${x}" y="${y}" width="146" height="94" rx="14" fill="#fff" stroke="${c}" stroke-width="3"/>
          <rect x="${x + 8}" y="${y + 8}" width="130" height="50" rx="8" fill="#EAF4FF"/><g>${d5e(x + 73, y + 42, sc, 22)}</g><g>${d5e(x + 20, y + 82, e, 15)}</g><text x="${x + 34}" y="${y + 81}" class="tat s">${t}</text></g>`; }).join('')}`);
    },
    // un filtre canvia la cara: et compares amb una cosa que no és real
    d5filtre() {
      const face = (cx, f) => `<circle cx="${cx}" cy="78" r="46" fill="${f ? '#FFE1CF' : '#F2C4A6'}"/><path d="M${cx - 46} 70c4-34 30-48 46-48s42 14 46 48c-12-18-30-24-46-24s-34 6-46 24z" fill="#6B4430"/>
        <ellipse cx="${cx - 16}" cy="78" rx="${f ? 8 : 5}" ry="${f ? 9 : 5}" fill="#14204A"/><ellipse cx="${cx + 16}" cy="78" rx="${f ? 8 : 5}" ry="${f ? 9 : 5}" fill="#14204A"/>
        <path d="M${cx - 14} 100q14 ${f ? 12 : 8} 28 0" stroke="#B5523B" stroke-width="3" fill="none" stroke-linecap="round"/>
        ${f ? `<text x="${cx + 34}" y="40" font-size="16">✨</text><text x="${cx - 48}" y="118" font-size="14">✨</text>` : [[-22, 92], [-26, 98], [20, 94], [26, 90], [-6, 64]].map(([dx, dy]) => `<circle cx="${cx + dx}" cy="${dy}" r="2" fill="#C98B6A"/>`).join('')}`;
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${face(72, 0)}<text x="72" y="146" text-anchor="middle" class="tat b">${L('Foto real', 'Foto real')}</text></g>
        <g ${tA(1, 'ta-fade')}><rect x="132" y="66" width="56" height="10" rx="5" fill="#E3E8F6"/><circle cx="182" cy="71" r="9" fill="#9B6CF2"/><text x="160" y="58" text-anchor="middle" class="tat s">${L('filtre', 'filtro')}</text></g>
        <g ${tA(1.6, 'ta-pop')}>${face(248, 1)}<text x="248" y="146" text-anchor="middle" class="tat b">${L('Amb filtre', 'Con filtro')}</text></g>
        <g ${tA(2.8, 'ta-pop')}><rect x="14" y="160" width="292" height="46" rx="16" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2.5"/><text x="160" y="179" text-anchor="middle" class="tat s">${L('Amb un filtre et compares', 'Con un filtro te comparas')}</text><text x="160" y="197" text-anchor="middle" class="tat b">${L('amb una cosa que no és real', 'con algo que no es real')}</text></g>`);
    },
    // fer com els verificadors: sortir a buscar
    d5verif() {
      const R = [['👤', L('Qui la publica?', '¿Quién la publica?')], ['🗂️', L("On és l'original?", '¿Dónde está el original?')], ['📅', L('Quan i on es va fer?', '¿Cuándo y dónde?')], ['📰', L('Qui més ho explica?', '¿Quién más lo cuenta?')]];
      return tSvg(214, `<g ${tA(.2, 'ta-pop')}><rect x="10" y="40" width="100" height="84" rx="12" fill="#EAF4FF" stroke="#7C9BFF" stroke-width="2"/><g>${d5e(60, 92, '🌉💥', 26)}</g><text x="60" y="144" text-anchor="middle" class="tat s">${L('Foto increïble', 'Foto increíble')}</text></g>
        <g ${tA(.6, 'ta-pop')}>${d5e(100, 52, '🔎', 30)}</g>
        ${R.map(([e, t], i) => `<g ${tA(1 + i * .55, 'ta-in')}><rect x="118" y="${8 + i * 44}" width="194" height="36" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d5e(134, 32 + i * 44, e, 14)}</g><text x="148" y="${31 + i * 44}" class="tat s" style="font-size:12px">${i + 1}. ${t}</text></g>`).join('')}
        <g ${tA(3.4, 'ta-pop')}><rect x="10" y="186" width="300" height="24" rx="12" fill="#3CC47C"/><text x="160" y="203" text-anchor="middle" class="tat w s">${L('Si no és clar, no es comparteix', 'Si no está claro, no se comparte')}</text></g>`);
    },
    // les dades d'entrenament: textos, imatges, veus i converses → la IA aprèn patrons
    d5dades() {
      const D = [['📚', L('Textos', 'Textos')], ['🖼️', L('Imatges', 'Imágenes')], ['🎙️', L('Veus', 'Voces')], ['💬', L('Converses', 'Conversaciones')]];
      return tSvg(214, `${D.map(([e, t], i) => `<g ${tA(.2 + i * .45, 'ta-in')}><rect x="10" y="${8 + i * 44}" width="132" height="36" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2" filter="url(#bwSh)"/><g>${d5e(30, 32 + i * 44, e, 17)}</g><text x="48" y="${31 + i * 44}" class="tat s">${t}</text>
          <circle r="4" fill="#9B6CF2"><animateMotion dur="1.8s" begin="${i * .4}s" repeatCount="indefinite" path="M144 ${26 + i * 44}L214 92"/></circle></g>`).join('')}
        <g ${tA(2, 'ta-pop')}><circle cx="252" cy="92" r="46" fill="#14204A"/><g>${d5e(252, 102, '🤖', 34)}</g></g>
        <text x="252" y="158" text-anchor="middle" class="tat b" ${tA(2.6, 'ta-fade')}>${L('Busca patrons', 'Busca patrones')}</text>
        <g ${tA(3.2, 'ta-pop')}><rect x="10" y="184" width="300" height="26" rx="13" fill="#F3E8FF" stroke="#9B6CF2" stroke-width="2"/><text x="160" y="202" text-anchor="middle" class="tat s">${L('Tot això ho han fet persones', 'Todo esto lo han hecho personas')}</text></g>`);
    },
    // el que escrius a una IA es pot guardar, fer servir per entrenar i llegir
    d5guarda() {
      return tSvg(214, `<g ${tA(.2, 'ta-in')}>${d5bub(10, 14, 128, 46, 1)}<text x="74" y="33" text-anchor="middle" class="tat w s">${L('El meu secret', 'Mi secreto')}</text><text x="74" y="50" text-anchor="middle" class="tat w s">${L('és que…', 'es que…')}</text></g>
        <path d="M140 37h30" stroke="#9AA6C8" stroke-width="3" ${tA(.8, 'ta-fade')}/><path d="M166 31l8 6-8 6" fill="#9AA6C8" ${tA(.8, 'ta-fade')}/>
        <g ${tA(1.1, 'ta-pop')}><rect x="178" y="8" width="132" height="60" rx="14" fill="#FFF3D6" stroke="#F2B21B" stroke-width="2.5"/><g>${d5e(204, 46, '📦', 22)}</g><text x="224" y="35" class="tat s">${L('Es pot', 'Se puede')}</text><text x="224" y="53" class="tat b">${L('guardar', 'guardar')}</text></g>
        <g ${tA(1.9, 'ta-in')}><rect x="10" y="84" width="146" height="54" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><g>${d5e(32, 118, '🧠', 20)}</g><text x="52" y="106" class="tat s">${L('Per entrenar', 'Para entrenar')}</text><text x="52" y="124" class="tat s">${L('la IA', 'la IA')}</text></g>
        <g ${tA(2.4, 'ta-in')}><rect x="164" y="84" width="146" height="54" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><g>${d5e(186, 118, '👀', 20)}</g><text x="206" y="106" class="tat s">${L('Ho pot llegir', 'Lo puede leer')}</text><text x="206" y="124" class="tat s">${L('una persona', 'una persona')}</text></g>
        <g ${tA(3.2, 'ta-pop')}><rect x="10" y="150" width="300" height="56" rx="16" fill="#E7F7EE" stroke="#3CC47C" stroke-width="2.5"/><text x="160" y="173" text-anchor="middle" class="tat b">${L('Dades personals, fotos i secrets:', 'Datos personales, fotos y secretos:')}</text><text x="160" y="194" text-anchor="middle" class="tat s">${L('fora. Els secrets, a persones de confiança', 'fuera. Los secretos, a personas de confianza')}</text></g>`);
    },
    // la configuració de privadesa d'una app d'IA: tu tries
    d5config() {
      const R = [[L('Entrenar amb les converses', 'Entrenar con las conversaciones'), 1, 0], [L("Desar l'historial", 'Guardar el historial'), 1, 0], [L('Conversa temporal', 'Conversación temporal'), 0, 1], [L('Ubicació', 'Ubicación'), 1, 0]];
      return tSvg(214, `<rect x="10" y="6" width="300" height="200" rx="18" fill="#F3F6FF" stroke="#DCE4FA" stroke-width="2"/><text x="28" y="30" class="tat b">⚙️ ${L('Privadesa', 'Privacidad')}</text>
        ${R.map(([t, a, b], i) => `<g><rect x="22" y="${40 + i * 36}" width="276" height="30" rx="12" fill="#fff"/><text x="34" y="${60 + i * 36}" class="tat s" style="font-size:12.5px">${t}</text>
          <g ${tA(.2, 'ta-fade')}>${d5tg(248, 44 + i * 36, a)}</g><g ${tA(1 + i * .5, 'ta-pop')}><rect x="246" y="${42 + i * 36}" width="44" height="26" rx="13" fill="#fff"/>${d5tg(248, 44 + i * 36, b)}</g></g>`).join('')}
        <text x="160" y="200" text-anchor="middle" class="tat s" ${tA(3.4, 'ta-fade')}>${L('Ho reviseu amb un adult', 'Lo revisáis con un adulto')}</text>`);
    },
    // el manual de la IA de la classe: sis capítols
    d5manual() {
      const C = [['💬', L('Preguntar bé', 'Preguntar bien')], ['🔍', L('Comprovar', 'Comprobar')], ['🤝', L('Honestedat', 'Honestidad')], ['🔒', L('Dades', 'Datos')], ['🖼️', L('Imatges i respecte', 'Imágenes y respeto')], ['🎂', L('Edats i permisos', 'Edades y permisos')]];
      return tSvg(214, `<rect x="10" y="8" width="300" height="198" rx="14" fill="#7C4DE0"/><rect x="18" y="16" width="138" height="182" rx="8" fill="#FFFDF5"/><rect x="164" y="16" width="138" height="182" rx="8" fill="#FFFDF5"/><path d="M160 16v182" stroke="#5B33B8" stroke-width="3"/>
        ${C.map(([e, t], i) => { const x = i < 3 ? 26 : 172, y = 30 + (i % 3) * 58; return `<g ${tA(.3 + i * .45, 'ta-in')}><rect x="${x}" y="${y}" width="122" height="48" rx="10" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><circle cx="${x + 14}" cy="${y + 14}" r="9" fill="#9B6CF2"/><text x="${x + 14}" y="${y + 18}" text-anchor="middle" class="tat w s">${i + 1}</text><g>${d5e(x + 36, y + 21, e, 15)}</g><text x="${x + 61}" y="${y + 40}" text-anchor="middle" class="tat s">${t}</text></g>`; }).join('')}`);
    },
    // el que la IA pot fer amb nosaltres i el que és nostre
    d5quanno() {
      const A = [L('Idees', 'Ideas'), L('Explicacions', 'Explicaciones'), L('Repassar', 'Repasar')];
      const B = [L('Les emocions', 'Las emociones'), L('Els problemes', 'Los problemas'), L('Les decisions', 'Las decisiones'), L('Aprendre a fer-ho', 'Aprender a hacerlo')];
      return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="8" y="6" width="304" height="88" rx="16" fill="#F3F6FF" stroke="#7C9BFF" stroke-width="2"/><g>${d5e(30, 33, '🤖', 20)}</g><text x="48" y="31" class="tat b">${L('Amb la IA (i amb permís)', 'Con la IA (y con permiso)')}</text></g>
        ${A.map((t, i) => `<g ${tA(.6 + i * .4, 'ta-pop')}><rect x="${18 + i * 98}" y="46" width="90" height="36" rx="12" fill="#fff" stroke="#C9D3F2" stroke-width="2"/><text x="${63 + i * 98}" y="69" text-anchor="middle" class="tat s" style="font-size:12px">✅ ${t}</text></g>`).join('')}
        <g ${tA(1.8, 'ta-in')}><rect x="8" y="102" width="304" height="106" rx="16" fill="#FFF3F6" stroke="#EF5A5A" stroke-width="2"/><g>${d5e(30, 129, '🧑', 20)}</g><text x="48" y="127" class="tat b">${L('Amb persones de confiança', 'Con personas de confianza')}</text></g>
        ${B.map((t, i) => `<g ${tA(2.2 + i * .4, 'ta-pop')}><rect x="${18 + (i % 2) * 146}" y="${140 + Math.floor(i / 2) * 32}" width="138" height="28" rx="12" fill="#fff" stroke="#F4B7B7" stroke-width="2"/><text x="${87 + (i % 2) * 146}" y="${159 + Math.floor(i / 2) * 32}" text-anchor="middle" class="tat s" style="font-size:12.5px">💛 ${t}</text></g>`).join('')}`);
    }
  });
}
