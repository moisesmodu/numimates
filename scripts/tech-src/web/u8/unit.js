/* Tech Web · unitat 8 «La meva web» (w8-1 … w8-4) · projecte final del curs
   Cada alumne/a tria el tema, el públic i els colors de la seva web (w8-1, pas «review») i en fa l'esquelet, que es desa
   al portafoli. Les sessions següents continuen sempre des de l'última versió desada d'aquesta unitat (w8-2 l'omple de
   contingut i estil, w8-3 la revisa i la millora, w8-4 la deixa a punt i es presenta).
   · El codi dels exemples i dels reptes porta text de pàgina en les dues llengües: per això els camps html/css són
     «getters» (es calculen en el moment, amb l'idioma de l'alumne/a).
   · La «solució» dels passos del projecte propi no esborra la feina de l'alumne/a: és el seu codi amb les peces que
     encara falten afegides (així, el botó «Mostra una solució» no fa perdre res). */
Object.assign(TBADGE, {
  w_u8pla: { id: 'w_u8pla', ico: '🗺️', n: 'Arquitecte/a web|Arquitecto/a web', d: "Has planificat la teva web: públic, seccions i esbós, i n'has fet l'esquelet.|Has planificado tu web: público, secciones y boceto, y has hecho su esqueleto." },
  w_u8build: { id: 'w_u8build', ico: '🧩', n: 'Constructor/a web|Constructor/a web', d: 'Has omplert la teva web de textos, imatges i estil.|Has llenado tu web de textos, imágenes y estilo.' },
  w_u8rev: { id: 'w_u8rev', ico: '🔍', n: 'Revisor/a web|Revisor/a web', d: "Has revisat l'accessibilitat, l'ortografia i el mòbil, i has millorat la teva web.|Has revisado la accesibilidad, la ortografía y el móvil, y has mejorado tu web." },
  w_u8grad: { id: 'w_u8grad', ico: '🎓', n: 'Creador/a web|Creador/a web', d: 'Has acabat el curs Tech Web i has presentat la teva pròpia web.|Has terminado el curso Tech Web y has presentado tu propia web.' }
});
COURSE_UNITS[8] = (() => {
  /* ---------- Els camps html/css que són funcions passen a ser getters (text en l'idioma de l'alumne/a) ---------- */
  const lz = o => {
    if (!o || typeof o !== 'object') return o;
    for (const k of ['html', 'css']) { const dsc = Object.getOwnPropertyDescriptor(o, k); if (dsc && typeof dsc.value === 'function') { const f = dsc.value; Object.defineProperty(o, k, { get: f, enumerable: true, configurable: true }); } }
    ['sol', 'code', 'media'].forEach(k => lz(o[k])); (o.opts || []).forEach(lz); (o.cards || []).forEach(lz);
    // a les comprovacions, «t» és el nom d'una etiqueta (h1, img…), no un text: no enumerable perquè no es confongui amb text visible
    (o.checks || []).forEach(c => { if (c && typeof c.t === 'string' && Object.getOwnPropertyDescriptor(c, 't').enumerable) { const v = c.t; Object.defineProperty(c, 't', { value: v, enumerable: false, writable: true, configurable: true }); }
      if (c && typeof c.v === 'string' && c.v.includes('|')) { const v = c.v; Object.defineProperty(c, 'v', { value: v, enumerable: false, writable: true, configurable: true }); } });
    return o;
  };

  /* ---------- La web de l'alumne/a: tema, públic i colors (w8-1) i l'última versió desada ---------- */
  const TOP = [
    { e: '🚀', t: "L'espai i les estrelles|El espacio y las estrellas", h1: 'El cel de nit|El cielo de noche', ids: ['planetes', 'estrelles', 'observar'], secs: ['Els planetes|Los planetas', 'Les estrelles|Las estrellas', 'Com observar el cel|Cómo observar el cielo'], img: 'img/tech/web/planeta.svg', alt: 'Un planeta amb anells|Un planeta con anillos' },
    { e: '🐢', t: 'Els animals|Los animales', h1: 'El món dels animals|El mundo de los animales', ids: ['com-son', 'on-viuen', 'curiositats'], secs: ['Com són|Cómo son', 'On viuen|Dónde viven', 'Curiositats|Curiosidades'], img: 'img/tech/web/tortuga.svg', alt: 'Una tortuga caminant|Una tortuga caminando' },
    { e: '🧁', t: 'La cuina|La cocina', h1: 'La meva cuina|Mi cocina', ids: ['receptes', 'ingredients', 'consells'], secs: ['Les meves receptes|Mis recetas', 'Ingredients|Ingredientes', 'Consells de cuina|Consejos de cocina'], img: 'img/tech/web/pastis.svg', alt: 'Un pastís amb una espelma|Un pastel con una vela' },
    { e: '⚽', t: "L'esport|El deporte", h1: 'Esport a fons|Deporte a fondo', ids: ['esport', 'entrenar', 'consells'], secs: ['El meu esport|Mi deporte', "Com s'entrena|Cómo se entrena", 'Consells|Consejos'], img: 'img/tech/web/pilota.svg', alt: 'Una pilota|Una pelota' },
    { e: '🎧', t: 'La música|La música', h1: 'La meva música|Mi música', ids: ['instruments', 'cancons', 'comencar'], secs: ['Instruments|Instrumentos', 'Les meves cançons|Mis canciones', 'Com començar|Cómo empezar'], img: 'img/tech/web/guitarra.svg', alt: 'Una guitarra|Una guitarra' },
    { e: '🏰', t: 'El meu poble o barri|Mi pueblo o barrio', h1: 'El meu poble|Mi pueblo', ids: ['llocs', 'festes', 'natura'], secs: ['Llocs per visitar|Lugares para visitar', 'Festes|Fiestas', 'Natura|Naturaleza'], img: 'img/tech/web/castell.svg', alt: 'Un castell dalt d\'un turó|Un castillo en lo alto de una colina' }
  ];
  const AUD = ['Nois i noies de la meva edat|Chicos y chicas de mi edad', 'Nens i nenes més petits|Niños y niñas más pequeños', 'Famílies i persones grans|Familias y personas mayores', 'Gent que no en sap res|Gente que no sabe nada del tema'];
  const PAL = [['Mar|Mar', '#0E7490', '#ECFEFF', '#F59E0B'], ['Bosc|Bosque', '#166534', '#F0FDF4', '#CA8A04'], ['Posta de sol|Puesta de sol', '#C2410C', '#FFF7ED', '#7C2D12'], ['Nit|Noche', '#3730A3', '#EEF2FF', '#DB2777']];
  const ts = () => { try { return typeof TS_ === 'function' ? TS_() : null; } catch (e) { return null; } };
  // el que va triar a w8-1 (respostes del pas «review»); si encara no hi ha res, el primer de cada llista
  const picks = () => { const t = ts(), r = t && t.rev && t.rev['w8-1'], a = r && Array.isArray(r.a) ? r.a : []; const g = (i, n) => (Number.isInteger(a[i]) && a[i] >= 0 && a[i] < n ? a[i] : 0); return { T: TOP[g(0, TOP.length)], A: AUD[g(1, AUD.length)], C: PAL[g(2, PAL.length)] }; };
  // l'última versió desada de la seva web (portafoli): el projecte de qualsevol sessió d'aquesta unitat
  const last = () => { const t = ts(); if (!t || !Array.isArray(t.port)) return null; for (let i = t.port.length - 1; i >= 0; i--) { const p = t.port[i]; if (p && p.kind === 'web' && /^w8-/.test(p.sid || '') && typeof p.html === 'string' && p.html.trim()) return p; } return null; };
  const ind = (s, n) => s.split('\n').map(l => l ? ' '.repeat(n) + l : l).join('\n');
  const secHTML = (id, h2, p) => `<section id="${id}">\n  <h2>${h2}</h2>\n  <p>${p}</p>\n</section>`;
  const TXT0 = () => L('Aquí hi aniran els teus textos.', 'Aquí irán tus textos.');
  // l'esquelet de partida (w8-1): capçalera, una secció i comentaris amb el pla
  const v1start = () => { const { T, A } = picks(), s = T.secs.map(tx);
    return { html: `<!--
  ${L('Tema', 'Tema')}: ${tx(T.t)}
  ${L('Per a', 'Para')}: ${tx(A).toLowerCase()}
-->
<header>
  <h1>${tx(T.h1)}</h1>
  <p>${L('Una web sobre', 'Una web sobre')} ${tx(T.t).toLowerCase()}.</p>
</header>

<!-- ${L('Pas 1: el menú (nav)', 'Paso 1: el menú (nav)')} -->

<main>
${ind(secHTML(T.ids[0], s[0], TXT0()), 2)}

  <!--
    ${L('Pas 2: dues seccions més', 'Paso 2: dos secciones más')}
    · ${s[1]} (id="${T.ids[1]}")
    · ${s[2]} (id="${T.ids[2]}")
  -->
</main>`, css: v1css() }; };
  const v1css = () => { const [, M, Lt, Ac] = picks().C; return `body {
  font-family: Verdana, sans-serif;
  background: ${Lt};
  color: #1d2433;
  margin: 0;
}
header {
  background: ${M};
  color: white;
  padding: 16px;
}
main {
  padding: 16px;
}
/* ${L('Color per destacar', 'Color para destacar')}: ${Ac} */`; };
  // l'esquelet acabat (per si algú no va fer la sessió 1): menú i tres seccions
  const v1full = () => { const { T } = picks(), s = T.secs.map(tx), [, M] = picks().C;
    return { html: `<header>
  <h1>${tx(T.h1)}</h1>
  <p>${L('Una web sobre', 'Una web sobre')} ${tx(T.t).toLowerCase()}.</p>
</header>
<nav>
${T.ids.map((id, i) => `  <a href="#${id}">${s[i]}</a>`).join('\n')}
</nav>
<main>
${T.ids.map((id, i) => ind(secHTML(id, s[i], TXT0()), 2)).join('\n')}
</main>`, css: v1css() + `\nnav {\n  padding: 12px 16px;\n  background: white;\n}\nnav a {\n  color: ${M};\n  margin-right: 12px;\n}` }; };
  const mine = () => { const p = last(); return p ? { html: p.html, css: p.css || '' } : v1full(); };
  // el codi que hi ha ara a l'editor (si l'alumne/a hi està treballant) o el de partida del pas
  const cur = st => (typeof WB !== 'undefined' && WB && WB.st === st) ? { html: WB.html, css: WB.css } : { html: st.html, css: st.css };
  const D = (h, c) => webDoc(h || '', c || ''), ok = (d, c) => !!webCheck(d, c), has = (h, t) => D(h, '').els.some(e => e.t === t);
  const before = (h, tag, add) => { const re = new RegExp(`</${tag}>`, 'i'); return re.test(h) ? h.replace(re, `${add}\n</${tag}>`) : `${h}\n${add}`; };
  const after = (h, tag, add) => { const re = new RegExp(`</${tag}>`, 'i'); return re.test(h) ? h.replace(re, `</${tag}>\n${add}`) : `${add}\n${h}`; };
  // un pas del projecte propi: comença des de start() i la solució completa el codi de l'alumne/a amb fix()
  const own = (o, start, fix) => { const st = { ...o }; Object.defineProperty(st, 'html', { get: () => start().html, enumerable: true }); Object.defineProperty(st, 'css', { get: () => start().css, enumerable: true });
    st.sol = { get html() { const c = cur(st); return fix(c.html || '', c.css || '').html; }, get css() { const c = cur(st); return fix(c.html || '', c.css || '').css; } }; return st; };
  // versió 1: menú amb 3 enllaços a seccions i 3 seccions amb h2
  const fix1 = (h, c) => { const { T } = picks(); let d = D(h, c);
    if (!ok(d, { k: 'text', t: 'h1', min: 3 })) h = `<header>\n  <h1>${tx(T.h1)}</h1>\n</header>\n` + h;
    const have = webAll(D(h, c).html.root).filter(e => e.t === 'section');
    const ids = have.map(e => e.attrs.id).filter(Boolean);
    let k = 0; while (have.length + k < 3) { const i = T.ids.findIndex(x => !ids.includes(x)); const id = i >= 0 ? T.ids[i] : `seccio${ids.length + 1}`; ids.push(id); h = before(h, 'main', ind(secHTML(id, i >= 0 ? tx(T.secs[i]) : L('Una secció nova', 'Una sección nueva'), TXT0()), 2)); k++; }
    d = D(h, c);
    if (!(ok(d, { k: 'in', t: 'a', p: 'nav', min: 3 }) && ok(d, { k: 'link', href: '/^#/', min: 3 }))) { const links = ids.slice(0, Math.max(3, ids.length)).map(id => { const i = T.ids.indexOf(id); return `  <a href="#${id}">${i >= 0 ? tx(T.secs[i]) : id}</a>`; }).join('\n');
      h = has(h, 'nav') ? before(h, 'nav', links) : after(h, 'header', `<nav>\n${links}\n</nav>`); }
    return { html: h, css: c }; };
  // versió 2: textos, una imatge amb alt, el peu de pàgina i més estil
  const fix2 = (h, c) => { const { T } = picks(), [, M, , Ac] = picks().C; let d = D(h, c);
    if (!ok(d, { k: 'attr', t: 'img', a: 'alt', v: '/.{3}/' }) || !ok(d, { k: 'tag', t: 'p', min: 3 }))
      h = before(h, 'main', ind(`<section id="galeria">\n  <h2>${L('Galeria', 'Galería')}</h2>\n  <img src="${T.img}" alt="${tx(T.alt)}" width="140">\n  <p>${L('Una imatge que explica el tema de la web.', 'Una imagen que explica el tema de la web.')}</p>\n  <p>${L('Aquí pots explicar què hi surt i per què és important.', 'Aquí puedes explicar qué sale y por qué es importante.')}</p>\n</section>`, 2));
    if (!ok(D(h, c), { k: 'tag', t: 'footer' })) h += `\n<footer>\n  <p>${L('Web feta a Numi Tech.', 'Web hecha en Numi Tech.')}</p>\n</footer>`;
    if (!ok(D(h, c), { k: 'rules', min: 5 })) c += `\nh2 {\n  color: ${M};\n}\nsection {\n  background: white;\n  padding: 12px;\n  border-radius: 12px;\n  margin-bottom: 12px;\n}\nfooter {\n  text-align: center;\n  padding: 12px;\n  border-top: 3px solid ${Ac};\n}`;
    return { html: h, css: c }; };
  // versió 3: imatges amb alt, títols en ordre i una regla per al mòbil
  const fix3 = (h, c) => { const { T } = picks(); const d = D(h, c);
    if (!ok(d, { k: 'attr', t: 'img', a: 'alt', v: '/.{3}/' })) h = before(h, 'main', `  <img src="${T.img}" alt="${tx(T.alt)}" width="140">`);
    if (!ok(D(h, c), { k: 'order', a: 'h1', b: 'h2' })) h = `<h1>${tx(T.h1)}</h1>\n` + h;
    if (!ok(D(h, c), { k: 'media' })) c += `\n@media (max-width: 600px) {\n  body {\n    font-size: 18px;\n  }\n  nav a {\n    display: block;\n    padding: 8px 0;\n  }\n}`;
    return { html: h, css: c }; };
  // versió final: «Torna a dalt» (id="inici") i un peu de pàgina amb els crèdits
  const fix4 = (h, c) => { if (!/id\s*=\s*["']?inici\b/i.test(h)) h = /<header(?![^>]*\bid=)/i.test(h) ? h.replace(/<header(?![^>]*\bid=)/i, '<header id="inici"') : /<h1(?![^>]*\bid=)/i.test(h) ? h.replace(/<h1(?![^>]*\bid=)/i, '<h1 id="inici"') : `<span id="inici"></span>\n${h}`;
    const link = `  <p><a href="#inici">${L('Torna a dalt', 'Vuelve arriba')}</a></p>`, cred = `  <p>${L('Web feta a Numi Tech. Imatges: Numi.', 'Web hecha en Numi Tech. Imágenes: Numi.')}</p>`;
    if (!has(h, 'footer')) h += `\n<footer>\n${cred}\n${link}\n</footer>`;
    else { const d = D(h, c); if (!ok(d, { k: 'text', t: 'footer', min: 10 })) h = before(h, 'footer', cred); if (!ok(D(h, c), { k: 'link', href: '#inici' })) h = before(h, 'footer', link); }
    return { html: h, css: c }; };
  const NAME = n => `La meva web (versió ${n})|Mi web (versión ${n})`;

  /* ---------- Miniatures per triar (pas «review») ---------- */
  const optTop = T => () => `<span style="font-size:26px;display:block;margin-bottom:4px">${T.e}</span>${tx(T.t)}`;
  const optPal = ([n, ...cs]) => () => `<span style="display:flex;gap:4px;justify-content:center;margin-bottom:6px">${cs.map(c => `<i style="display:inline-block;width:24px;height:24px;border-radius:7px;background:${c};border:1px solid rgba(0,0,0,.15)"></i>`).join('')}</span>${tx(n)}`;

  /* ---------- Codi dels exemples i dels reptes ---------- */
  const OK_DARK = '/^(#[0-5][0-9a-f]{2}([0-9a-f]{3})?|black|navy|darkblue|darkgreen|darkred|maroon|indigo|purple|darkslategray|rgb\\(\\s*[0-9]{1,2}\\s*,.*)$/';
  // l'esquelet d'una web (per a les demos)
  const SKEL = () => `<header>
  <h1>${L("L'hort de l'escola", 'El huerto de la escuela')}</h1>
</header>
<nav>
  <a href="#plantes">${L('Plantes', 'Plantas')}</a>
  <a href="#calendari">${L('Calendari', 'Calendario')}</a>
</nav>
<main>
  <section id="plantes">
    <h2>${L('Plantes', 'Plantas')}</h2>
    <p>${L('Tomàquets, enciams i maduixes.', 'Tomates, lechugas y fresas.')}</p>
  </section>
</main>
<footer>${L("Fet per la classe de l'hort", 'Hecho por la clase del huerto')}</footer>`;
  const SKEL_CSS = `header {
  background: #166534;
  color: white;
  padding: 10px;
}
nav a {
  margin-right: 10px;
}
footer {
  background: #E2E8F0;
  padding: 8px;
}`;
  // un esquelet en blocs de colors (es veu bé a les miniatures de les opcions)
  const BLK = order => order.map(k => ({ h: `<header>${L('Capçalera', 'Cabecera')}</header>`, n: `<nav>${L('Menú', 'Menú')}</nav>`, m: `<main>${L('Contingut', 'Contenido')}</main>`, f: `<footer>${L('Peu', 'Pie')}</footer>` })[k]).join('\n');
  const BLK_CSS = `body {
  font-size: 14px;
}
header {
  background: #166534;
  color: white;
  padding: 8px;
}
nav {
  background: #F59E0B;
  padding: 4px 8px;
}
main {
  background: #DCFCE7;
  height: 50px;
  padding: 8px;
}
footer {
  background: #94A3B8;
  padding: 4px 8px;
}`;
  const GATS = (nav) => `<header>
  <h1>${L('El racó dels gats', 'El rincón de los gatos')}</h1>
  <nav>
${nav}
  </nav>
</header>
<main>
  <section id="races">
    <h2>${L('Races de gats', 'Razas de gatos')}</h2>
    <p>${L('Hi ha gats de pèl llarg i gats de pèl curt.', 'Hay gatos de pelo largo y gatos de pelo corto.')}</p>
  </section>
  <section id="cures">
    <h2>${L('Com cuidar-los', 'Cómo cuidarlos')}</h2>
    <p>${L('Necessiten aigua neta, menjar i un lloc tranquil per dormir.', 'Necesitan agua limpia, comida y un sitio tranquilo para dormir.')}</p>
  </section>
  <section id="fotos">
    <h2>${L('Fotos', 'Fotos')}</h2>
    <img src="img/tech/web/gat.svg" alt="${L('Un gat assegut', 'Un gato sentado')}" width="110">
  </section>
</main>`;
  const GATS_CSS = `header {
  background: #0E7490;
  color: white;
  padding: 12px;
}
nav a {
  color: white;
  margin-right: 12px;
}`;
  const CLUB_NAV = () => `<header>
  <h1>${L('Club de lectura', 'Club de lectura')}</h1>
  <nav>
    <a href="#llibres">${L('Llibres', 'Libros')}</a>
    <a href="#trobades">${L('Trobades', 'Encuentros')}</a>
    <a href="#unir-te">${L("Uneix-t'hi", 'Únete')}</a>
  </nav>
</header>`;
  const CLUB_CSS = `header {
  background: #3730A3;
  color: white;
  padding: 12px;
}
nav a {
  color: white;
  margin-right: 12px;
}
section {
  border-bottom: 2px solid #C7D2FE;
}`;
  const ASTRO = (broken) => broken ? `<footer>
  <p>${L("Fet pel Club d'Astronomia", 'Hecho por el Club de Astronomía')}</p>
</footer>
<header>
  <h1>${L("Club d'Astronomia", 'Club de Astronomía')}</h1>
</header>
<main>
  <section id="sortides">
    <h2>${L('Sortides', 'Salidas')}</h2>
    <p>${L('Un cop al mes mirem les estrelles des de la muntanya.', 'Una vez al mes miramos las estrellas desde la montaña.')}</p>
  <section id="telescopis">
    <h2>${L('Telescopis', 'Telescopios')}</h2>
    <p>${L('Tenim dos telescopis per deixar als socis.', 'Tenemos dos telescopios para prestar a los socios.')}</p>
  </section>
</main>` : `<header>
  <h1>${L("Club d'Astronomia", 'Club de Astronomía')}</h1>
</header>
<main>
  <section id="sortides">
    <h2>${L('Sortides', 'Salidas')}</h2>
    <p>${L('Un cop al mes mirem les estrelles des de la muntanya.', 'Una vez al mes miramos las estrellas desde la montaña.')}</p>
  </section>
  <section id="telescopis">
    <h2>${L('Telescopis', 'Telescopios')}</h2>
    <p>${L('Tenim dos telescopis per deixar als socis.', 'Tenemos dos telescopios para prestar a los socios.')}</p>
  </section>
</main>
<footer>
  <p>${L("Fet pel Club d'Astronomia", 'Hecho por el Club de Astronomía')}</p>
</footer>`;
  const ASTRO_CSS = `header {
  background: #3730A3;
  color: white;
  padding: 12px;
}
footer {
  background: #E0E7FF;
  padding: 8px;
}`;
  // l'hort de l'escola (sessió 2)
  const HORT3 = (cls) => [['tomaqueres', L('Tomaqueres', 'Tomateras'), L('Les reguem cada dos dies.', 'Las regamos cada dos días.')], ['enciams', L('Enciams', 'Lechugas'), L('Creixen de pressa i es mengen frescos.', 'Crecen deprisa y se comen frescas.')], ['maduixes', L('Maduixes', 'Fresas'), L('Surten a la primavera.', 'Salen en primavera.')]]
    .map(([id, h, p]) => `<section id="${id}"${cls ? ' class="targeta"' : ''}>\n  <h2>${h}</h2>\n  <p>${p}</p>\n</section>`).join('\n');
  const TARG_CSS = `.targeta {
  background: #FFF7ED;
  padding: 16px;
  border-radius: 12px;
  border: 2px solid #C2410C;
}
h2 {
  font-size: 18px;
  margin: 0;
}`;
  const TARG_HTML = () => `<div class="targeta">\n  <h2>${L('Maduixes', 'Fresas')}</h2>\n  <p>${L('Surten a la primavera.', 'Salen en primavera.')}</p>\n</div>`;
  const GAL = (alts) => `<h2>${L('Galeria', 'Galería')}</h2>
<div class="galeria">
  <img src="img/tech/web/tomaquet.svg" alt="${L('Un tomàquet vermell', 'Un tomate rojo')}" width="90">
  <img src="img/tech/web/poma.svg"${alts ? ` alt="${L('Una poma', 'Una manzana')}"` : ''} width="90">
  <img src="img/tech/web/platan.svg"${alts ? ` alt="${L('Un plàtan', 'Un plátano')}"` : ''} width="90">
</div>`;
  // el club de lectura amb problemes (sessió 3)
  const A11Y = (good) => `<h1>${L('Club de Lectura', 'Club de Lectura')}</h1>
<${good ? 'h2' : 'h4'}>${L('Què llegim', 'Qué leemos')}</${good ? 'h2' : 'h4'}>
<img src="img/tech/web/llibre.svg"${good ? ` alt="${L('Un llibre obert', 'Un libro abierto')}"` : ''} width="90">
<p>${L('Aquest mes llegim una novel·la de dracs.', 'Este mes leemos una novela de dragones.')}</p>
<${good ? 'h2' : 'h4'}>${L('On ens trobem', 'Dónde nos reunimos')}</${good ? 'h2' : 'h4'}>
<img src="img/tech/web/castell.svg"${good ? ` alt="${L('El castell on hi ha la biblioteca', 'El castillo donde está la biblioteca')}"` : ''} width="90">
<p>${L('A la biblioteca del castell, els dimecres.', 'En la biblioteca del castillo, los miércoles.')}</p>`;
  const CONTR_HTML = () => `<h2>${L('Trobades', 'Encuentros')}</h2>
<p>${L('Ens trobem cada dimecres a les sis de la tarda.', 'Nos reunimos cada miércoles a las seis de la tarde.')}</p>
<p>${L('Porta el teu llibre i ganes de parlar-ne!', '¡Trae tu libro y ganas de hablar de él!')}</p>`;
  const FILA_HTML = () => `<h2>${L('Els nostres llibres', 'Nuestros libros')}</h2>
<div class="fila">
  <div class="llibre">${L('Dracs del nord', 'Dragones del norte')}</div>
  <div class="llibre">${L('El misteri del far', 'El misterio del faro')}</div>
  <div class="llibre">${L('Viatge a la Lluna', 'Viaje a la Luna')}</div>
</div>`;
  const FILA_CSS = `.fila {
  display: flex;
  gap: 12px;
}
.llibre {
  flex: 1;
  background: #EEF2FF;
  padding: 16px;
  border-radius: 10px;
  font-weight: bold;
}`;
  // la web de mostra de l'Aina (sessió 4)
  const AINA = (top, foot) => `<header${top ? ' id="inici"' : ''}>
  <h1>${L('El cel de nit', 'El cielo de noche')}</h1>
</header>
<main>
  <section id="planetes">
    <h2>${L('Els planetes', 'Los planetas')}</h2>
    <img src="img/tech/web/planeta.svg" alt="${L('Un planeta amb anells', 'Un planeta con anillos')}" width="110">
    <p>${L('Al sistema solar hi ha vuit planetes.', 'En el sistema solar hay ocho planetas.')}</p>
  </section>
  <section id="estrelles">
    <h2>${L('Les estrelles', 'Las estrellas')}</h2>
    <p>${L('El Sol també és una estrella.', 'El Sol también es una estrella.')}</p>
  </section>
</main>
<footer>
  <p>${L("Web feta per l'Aina a Numi Tech.", 'Web hecha por Aina en Numi Tech.')}</p>${foot ? `\n  <p><a href="#inici">${L('Torna a dalt', 'Vuelve arriba')}</a></p>` : ''}
</footer>`;
  const AINA_CSS = `body {
  font-family: Verdana, sans-serif;
  background: #EEF2FF;
  margin: 0;
}
header {
  background: #3730A3;
  color: white;
  padding: 16px;
}
main {
  padding: 12px;
}
footer {
  background: #E0E7FF;
  padding: 12px;
}`;
  const DOCW = (full) => `<!doctype html>
<html${full ? ` lang="${L('ca', 'es')}"` : ''}>
<head>
  <meta charset="utf-8">${full ? `\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>${L('El cel de nit', 'El cielo de noche')}</title>` : ''}
</head>
<body>
  <h1>${L('El cel de nit', 'El cielo de noche')}</h1>
  <p>${L('Una web sobre planetes i estrelles.', 'Una web sobre planetas y estrellas.')}</p>
</body>
</html>`;

  const S = [
    /* ---------- Sessió 1 · Planificar ---------- */
    { id: 'w8-1', t: 'Planificar|Planificar', min: 45, badge: 'w_u8pla',
      learn: ['Una bona web comença pensant per a qui és i què hi ha de trobar el públic.|Una buena web empieza pensando para quién es y qué tiene que encontrar el público.',
        "L'esquelet d'una web és header, nav, main amb seccions i footer; l'esbós en paper ajuda a decidir-lo.|El esqueleto de una web es header, nav, main con secciones y footer; el boceto en papel ayuda a decidirlo.",
        "Un enllaç del menú href=\"#nom\" porta a l'element amb id=\"nom\": el nom ha de ser idèntic.|Un enlace del menú href=\"#nombre\" lleva al elemento con id=\"nombre\": el nombre tiene que ser idéntico."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Comencem l'última unitat! Una web es veu bé a l'ordinador, però al mòbil tot surt petit i cal fer zoom. Què li falta al <code>&lt;head&gt;</code>?|¡Empezamos la última unidad! Una web se ve bien en el ordenador, pero en el móvil todo sale pequeño y hay que hacer zoom. ¿Qué le falta al <code>&lt;head&gt;</code>?",
          opts: ['<code>&lt;meta name="viewport" …&gt;</code>|<code>&lt;meta name="viewport" …&gt;</code>', '<code>&lt;title&gt;</code>|<code>&lt;title&gt;</code>', '<code>&lt;footer&gt;</code>|<code>&lt;footer&gt;</code>'], a: 0,
          ex: "La metaetiqueta <b>viewport</b> diu al mòbil que faci servir l'amplada real de la pantalla.|La metaetiqueta <b>viewport</b> le dice al móvil que use el ancho real de la pantalla." },
        { k: 'quiz', ph: 'recorda', q: 'Quina regla de CSS canvia l\'estil <b>només a les pantalles petites</b>?|¿Qué regla de CSS cambia el estilo <b>solo en las pantallas pequeñas</b>?',
          opts: ['<code>@media (max-width: 600px) { … }</code>|<code>@media (max-width: 600px) { … }</code>', '<code>a:hover { … }</code>|<code>a:hover { … }</code>', '<code>.petita { … }</code>|<code>.petita { … }</code>'], a: 0,
          ex: 'El que hi ha dins de <code>@media</code> només s\'aplica quan la pantalla fa 600 px o menys.|Lo que hay dentro de <code>@media</code> solo se aplica cuando la pantalla mide 600 px o menos.' },
        { k: 'story', ph: 'missio', who: 'both', scene: 'taller', title: 'La Mostra de Webs|La Muestra de Webs',
          t: "Gran notícia a l'illa: d'aquí a quatre setmanes se celebra la <b>Mostra de Webs</b>! Cada creador/a hi presentarà <b>una web feta per ell o ella</b>, amb HTML i CSS de veritat, i el públic la podrà visitar al mòbil i a l'ordinador. I tu també hi seràs!|¡Gran noticia en la isla: dentro de cuatro semanas se celebra la <b>Muestra de Webs</b>! Cada creador/a presentará <b>una web hecha por él o ella</b>, con HTML y CSS de verdad, y el público podrá visitarla en el móvil y en el ordenador. ¡Y tú también estarás!" },
        { k: 'story', ph: 'missio', who: 'bit', mood: 'happy', title: 'El pla de les quatre setmanes|El plan de las cuatro semanas',
          t: "BIP BIP! Ja saps com viatja una pàgina, escriure HTML, posar imatges i enllaços, donar estil amb CSS, fer caixes, col·locar-les amb flexbox i adaptar-ho tot al mòbil. Ara ho ajuntaràs en una web teva!|¡BIP BIP! Ya sabes cómo viaja una página, escribir HTML, poner imágenes y enlaces, dar estilo con CSS, hacer cajas, colocarlas con flexbox y adaptarlo todo al móvil. ¡Ahora lo juntarás en una web tuya!",
          box: '<ol><li><b>Avui:</b> el pla i l\'esquelet.</li><li><b>Setmana 2:</b> la construeixes: textos, imatges i estil.</li><li><b>Setmana 3:</b> la revises i la millores.</li><li><b>Setmana 4:</b> la presentes a la Mostra.</li></ol>|<ol><li><b>Hoy:</b> el plan y el esqueleto.</li><li><b>Semana 2:</b> la construyes: textos, imágenes y estilo.</li><li><b>Semana 3:</b> la revisas y la mejoras.</li><li><b>Semana 4:</b> la presentas en la Muestra.</li></ol>' },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'El públic|El público', t: 'Per a qui és la teva web?|¿Para quién es tu web?', anim: 'w8aud',
            x: "Abans d'escriure una sola etiqueta, els dissenyadors web es fan dues preguntes: <b>per a qui és?</b> (el <span class='hl'>públic</span>) i <b>què hi ha de trobar?</b> (l'objectiu). No és el mateix una web per a nens petits (frases curtes, imatges grans) que una per a famílies (horaris, adreces, preus).|Antes de escribir una sola etiqueta, los diseñadores web se hacen dos preguntas: <b>¿para quién es?</b> (el <span class='hl'>público</span>) y <b>¿qué tiene que encontrar?</b> (el objetivo). No es lo mismo una web para niños pequeños (frases cortas, imágenes grandes) que una para familias (horarios, direcciones, precios).",
            tip: 'Imagina una persona concreta del teu públic i pensa què li agradaria trobar-hi.|Imagina a una persona concreta de tu público y piensa qué le gustaría encontrar.' },
          { k: "L'esquelet|El esqueleto", t: 'Les parts d\'una pàgina|Las partes de una página', media: { k: 'web', html: SKEL, css: SKEL_CSS },
            x: "Gairebé totes les webs tenen el mateix esquelet: <code>&lt;header&gt;</code> (la capçalera, amb el títol), <code>&lt;nav&gt;</code> (el menú), <code>&lt;main&gt;</code> (el contingut, dividit en <code>&lt;section&gt;</code>) i <code>&lt;footer&gt;</code> (el peu). Aquestes etiquetes no canvien com es veu la pàgina, però diuen <b>què és cada part</b>: ho entenen els navegadors, els cercadors i els lectors de pantalla.|Casi todas las webs tienen el mismo esqueleto: <code>&lt;header&gt;</code> (la cabecera, con el título), <code>&lt;nav&gt;</code> (el menú), <code>&lt;main&gt;</code> (el contenido, dividido en <code>&lt;section&gt;</code>) y <code>&lt;footer&gt;</code> (el pie). Estas etiquetas no cambian cómo se ve la página, pero dicen <b>qué es cada parte</b>: lo entienden los navegadores, los buscadores y los lectores de pantalla." },
          { k: "L'esbós|El boceto", t: 'Primer, en paper|Primero, en papel', anim: 'w8wire',
            x: "Un <span class='hl'>esbós</span> (en anglès, <i>wireframe</i>) és un dibuix fet amb caixes: on va el títol, el menú, cada secció i el peu. No cal dibuixar bé ni posar-hi colors: serveix per decidir l'ordre i què hi haurà a cada part. Dibuixa'l en format mòbil, que és com el veurà més gent.|Un <span class='hl'>boceto</span> (en inglés, <i>wireframe</i>) es un dibujo hecho con cajas: dónde va el título, el menú, cada sección y el pie. No hace falta dibujar bien ni poner colores: sirve para decidir el orden y qué habrá en cada parte. Dibújalo en formato móvil, que es como lo verá más gente." },
          { k: 'El menú|El menú', t: 'Un menú que porta a cada secció|Un menú que lleva a cada sección', anim: 'w8map',
            x: "Si la web té diverses seccions, el menú ajuda a saltar-hi. Cada secció té un <code>id</code> i cada enllaç del menú hi apunta amb <code>href=\"#…\"</code>: <code>&lt;a href=\"#fotos\"&gt;</code> porta a <code>&lt;section id=\"fotos\"&gt;</code>.|Si la web tiene varias secciones, el menú ayuda a saltar a ellas. Cada sección tiene un <code>id</code> y cada enlace del menú apunta a ella con <code>href=\"#…\"</code>: <code>&lt;a href=\"#fotos\"&gt;</code> lleva a <code>&lt;section id=\"fotos\"&gt;</code>.",
            bad: '<code>href="#foto"</code> i <code>id="fotos"</code>: l\'enllaç no porta enlloc.|<code>href="#foto"</code> e <code>id="fotos"</code>: el enlace no lleva a ninguna parte.', good: '<code>href="#fotos"</code> i <code>id="fotos"</code>: exactament el mateix nom.|<code>href="#fotos"</code> e <code>id="fotos"</code>: exactamente el mismo nombre.' },
          { k: 'Compte!|¡Cuidado!', t: 'Primer l\'estructura, després els colors|Primero la estructura, después los colores', anim: 'w8layers',
            x: "Una web es construeix per capes: primer l'<b>estructura</b> (l'esquelet en HTML), després el <b>contingut</b> (textos i imatges), després l'<b>estil</b> (CSS) i, al final, la <b>revisió</b>. Si comences pels colors i els efectes, després hauràs de refer-ho tot quan canviïs l'estructura.|Una web se construye por capas: primero la <b>estructura</b> (el esqueleto en HTML), después el <b>contenido</b> (textos e imágenes), después el <b>estilo</b> (CSS) y, al final, la <b>revisión</b>. Si empiezas por los colores y los efectos, después tendrás que rehacerlo todo cuando cambies la estructura.",
            bad: 'Comencem per triar les ombres i les animacions.|Empezamos eligiendo las sombras y las animaciones.', good: 'Comencem per l\'esquelet i les seccions.|Empezamos por el esqueleto y las secciones.' }
        ] },
        { k: 'quiz', ph: 'mans', q: "L'Arnau vol fer una web sobre el seu equip de bàsquet perquè les <b>famílies</b> sàpiguen quan i on són els partits. Què és el més important que hi ha de trobar el públic?|Arnau quiere hacer una web sobre su equipo de baloncesto para que las <b>familias</b> sepan cuándo y dónde son los partidos. ¿Qué es lo más importante que tiene que encontrar el público?",
          opts: ['El calendari dels partits i on es fan|El calendario de los partidos y dónde son', "Una animació molt llarga a l'entrada|Una animación muy larga en la entrada", "La història de l'invent del bàsquet|La historia del invento del baloncesto"], a: 0,
          ex: "Pensar en el públic diu què ha d'anar primer: les famílies volen saber <b>quan</b> i <b>on</b>. La resta pot venir després.|Pensar en el público dice qué tiene que ir primero: las familias quieren saber <b>cuándo</b> y <b>dónde</b>. El resto puede venir después." },
        { k: 'seq', ph: 'mans', q: 'Ordena les parts de l\'esquelet d\'una web, <b>de dalt a baix</b>.|Ordena las partes del esqueleto de una web, <b>de arriba abajo</b>.',
          items: ['<code>&lt;header&gt;</code>: la capçalera amb el títol|<code>&lt;header&gt;</code>: la cabecera con el título', '<code>&lt;nav&gt;</code>: el menú amb els enllaços|<code>&lt;nav&gt;</code>: el menú con los enlaces', '<code>&lt;main&gt;</code>: el contingut, amb les seccions|<code>&lt;main&gt;</code>: el contenido, con las secciones', '<code>&lt;footer&gt;</code>: el peu, amb els crèdits|<code>&lt;footer&gt;</code>: el pie, con los créditos'],
          ex: 'Capçalera, menú, contingut i peu: així ho fan la majoria de webs, i així el públic ho troba tot on espera.|Cabecera, menú, contenido y pie: así lo hacen la mayoría de webs, y así el público lo encuentra todo donde espera.' },
        { k: 'unplug', ph: 'mans', ico: '✏️', title: "L'esbós de la teva web|El boceto de tu web", t: 'Amb paper i llapis (a classe o amb algú de casa).|Con papel y lápiz (en clase o con alguien de casa).',
          steps: ['Escriu a dalt del full el tema de la teva web, per a qui és i què hi ha de trobar el públic.|Escribe arriba de la hoja el tema de tu web, para quién es y qué tiene que encontrar el público.',
            "Dibuixa un mòbil gran i, a dins, les caixes de l'esquelet: capçalera, menú, tres seccions i peu.|Dibuja un móvil grande y, dentro, las cajas del esqueleto: cabecera, menú, tres secciones y pie.",
            "Posa un nom curt a cada secció (serà el seu id) i escriu què hi haurà: text, una imatge, una llista…|Pon un nombre corto a cada sección (será su id) y escribe qué habrá: texto, una imagen, una lista…",
            "Ensenya l'esbós a una altra persona: entén de què va la web? Sabria on clicar per trobar cada cosa?|Enseña el boceto a otra persona: ¿entiende de qué va la web? ¿Sabría dónde hacer clic para encontrar cada cosa?"],
          tip: "Guarda l'esbós: el faràs servir les quatre setmanes.|Guarda el boceto: lo usarás las cuatro semanas." },
        lz({ k: 'wquiz', ph: 'prova', q: 'Quina vista prèvia fa aquest codi?|¿Qué vista previa da este código?',
          code: { html: () => BLK(['h', 'n', 'm', 'f']), css: BLK_CSS },
          opts: [{ html: () => BLK(['h', 'n', 'm', 'f']), css: BLK_CSS }, { html: () => BLK(['f', 'h', 'n', 'm']), css: BLK_CSS }, { html: () => BLK(['h', 'm', 'n', 'f']), css: BLK_CSS }], a: 0,
          ex: 'El navegador dibuixa les parts en el mateix ordre que les escrius: capçalera, menú, contingut i peu.|El navegador dibuja las partes en el mismo orden en que las escribes: cabecera, menú, contenido y pie.' }),
        lz({ k: 'wspot', ph: 'investiga', q: "L'enllaç «Horaris» del menú no porta enlloc. El menú està bé: <b>toca la línia de la secció que té el nom equivocat</b>.|El enlace «Horarios» del menú no lleva a ninguna parte. El menú está bien: <b>toca la línea de la sección que tiene el nombre equivocado</b>.",
          html: () => `<nav>
  <a href="#horaris">${L('Horaris', 'Horarios')}</a>
  <a href="#preus">${L('Preus', 'Precios')}</a>
</nav>
<section id="horari">
  <h2>${L('Horaris', 'Horarios')}</h2>
</section>
<section id="preus">
  <h2>${L('Preus', 'Precios')}</h2>
</section>`, bad: 5,
          ex: "L'enllaç apunta a <code>#horaris</code>, però la secció es diu <code>horari</code>. El nom de l'<code>id</code> i el de l'<code>href</code> han de ser <b>idèntics</b> (sense el #).|El enlace apunta a <code>#horaris</code>, pero la sección se llama <code>horari</code>. El nombre del <code>id</code> y el del <code>href</code> tienen que ser <b>idénticos</b> (sin el #)." }),
        { k: 'move', ph: 'pausa', secs: 30, t: "Fes de web amb el cos! Mans al cap: <b>capçalera</b>. Braços estirats als costats: <b>menú</b>. Mans a la panxa: <b>contingut</b>. Toca't els peus: <b>peu de pàgina</b>! Ara més de pressa, i a l'inrevés.|¡Haz de web con el cuerpo! Manos en la cabeza: <b>cabecera</b>. Brazos estirados a los lados: <b>menú</b>. Manos en la barriga: <b>contenido</b>. Tócate los pies: <b>pie de página</b>! Ahora más deprisa, y al revés." },
        lz({ k: 'web', ph: 'repte', url: 'raco-gats.numi', q: "<b>Completa el menú.</b> La web del racó dels gats té tres seccions, però el menú només porta a la primera. Afegeix els enllaços que porten a <b>#cures</b> i a <b>#fotos</b>.|<b>Completa el menú.</b> La web del rincón de los gatos tiene tres secciones, pero el menú solo lleva a la primera. Añade los enlaces que llevan a <b>#cures</b> y a <b>#fotos</b>.",
          html: () => GATS(`    <a href="#races">${L('Races', 'Razas')}</a>`), css: GATS_CSS,
          snips: ['<a href="#|"></a>'],
          checks: [{ k: 'in', t: 'a', p: 'nav', min: 3, txt: 'El menú <code>&lt;nav&gt;</code> té 3 enllaços|El menú <code>&lt;nav&gt;</code> tiene 3 enlaces' }, { k: 'link', href: '#cures', txt: 'Un enllaç porta a <code>#cures</code>|Un enlace lleva a <code>#cures</code>' }, { k: 'link', href: '#fotos', txt: 'Un enllaç porta a <code>#fotos</code>|Un enlace lleva a <code>#fotos</code>' }, { k: 'clean' }],
          sol: { html: () => GATS(`    <a href="#races">${L('Races', 'Razas')}</a>\n    <a href="#cures">${L('Cures', 'Cuidados')}</a>\n    <a href="#fotos">${L('Fotos', 'Fotos')}</a>`) },
          hint: "Copia l'enllaç que ja hi ha i canvia l'href i el text. Mira l'id de cada secció: l'href és el mateix nom amb un # davant.|Copia el enlace que ya hay y cambia el href y el texto. Mira el id de cada sección: el href es el mismo nombre con un # delante." }),
        lz({ k: 'web', ph: 'repte', url: 'club-lectura.numi', q: "<b>Ara, les seccions.</b> El menú del club de lectura ja està fet, però el <code>&lt;main&gt;</code> és buit. Escriu-hi <b>tres seccions</b> amb l'<code>id</code> que demana cada enllaç, i un <code>&lt;h2&gt;</code> a cadascuna.|<b>Ahora, las secciones.</b> El menú del club de lectura ya está hecho, pero el <code>&lt;main&gt;</code> está vacío. Escribe <b>tres secciones</b> con el <code>id</code> que pide cada enlace, y un <code>&lt;h2&gt;</code> en cada una.",
          html: () => `${CLUB_NAV()}\n<main>\n  \n</main>`, css: CLUB_CSS,
          snips: ['<section id="|">\n  <h2></h2>\n</section>', '<h2>|</h2>', '<p>|</p>'],
          checks: [{ k: 'id', id: 'llibres' }, { k: 'id', id: 'trobades' }, { k: 'id', id: 'unir-te' }, { k: 'in', t: 'h2', p: 'section', min: 3, txt: 'Cada secció té un <code>&lt;h2&gt;</code>|Cada sección tiene un <code>&lt;h2&gt;</code>' }, { k: 'clean' }],
          sol: { html: () => `${CLUB_NAV()}\n<main>\n  <section id="llibres">\n    <h2>${L('Llibres', 'Libros')}</h2>\n    <p>${L('Aquest mes llegim una novel·la de misteri.', 'Este mes leemos una novela de misterio.')}</p>\n  </section>\n  <section id="trobades">\n    <h2>${L('Trobades', 'Encuentros')}</h2>\n    <p>${L('Cada dimecres a la biblioteca.', 'Cada miércoles en la biblioteca.')}</p>\n  </section>\n  <section id="unir-te">\n    <h2>${L("Uneix-t'hi", 'Únete')}</h2>\n    <p>${L('Només cal que portis un llibre.', 'Solo tienes que traer un libro.')}</p>\n  </section>\n</main>` },
          hint: "Fes servir el botó de la secció: escriu l'id entre les cometes (sense #) i el títol dins de l'<h2>. Tres vegades!|Usa el botón de la sección: escribe el id entre las comillas (sin #) y el título dentro del <h2>. ¡Tres veces!" }),
        lz({ k: 'web', ph: 'repte', url: 'club-astronomia.numi', q: "<b>Arregla l'esquelet.</b> Algú ha fet la web del Club d'Astronomia amb pressa: el peu de pàgina ha quedat a dalt de tot i una secció no està tancada. <b>Troba els dos errors i arregla'ls.</b>|<b>Arregla el esqueleto.</b> Alguien ha hecho la web del Club de Astronomía con prisas: el pie de página ha quedado arriba del todo y una sección no está cerrada. <b>Encuentra los dos errores y arréglalos.</b>",
          html: () => ASTRO(true), css: ASTRO_CSS,
          checks: [{ k: 'order', a: 'header', b: 'footer', txt: 'La capçalera va abans del peu|La cabecera va antes del pie' }, { k: 'order', a: 'main', b: 'footer', txt: 'El contingut va abans del peu|El contenido va antes del pie' }, { k: 'clean' }],
          sol: { html: () => ASTRO(false) },
          hint: "Talla les tres línies del <footer> i enganxa-les al final, després de </main>. I mira quina <section> no té el seu </section> abans que comenci la següent.|Corta las tres líneas del <footer> y pégalas al final, después de </main>. Y mira qué <section> no tiene su </section> antes de que empiece la siguiente." }),
        { k: 'review', ph: 'crea', who: 'numi', btn: 'Desa el pla|Guarda el plan', q: "<b>Ara, la teva web!</b> Tria el tema, el públic i els colors que has pensat al teu esbós. Quan ho tinguis, toca el botó de baix: ho faràs servir per començar l'esquelet.|<b>¡Ahora, tu web!</b> Elige el tema, el público y los colores que has pensado en tu boceto. Cuando lo tengas, toca el botón de abajo: lo usarás para empezar el esqueleto.",
          items: [
            { q: 'De què parlarà la teva web?|¿De qué hablará tu web?', opts: TOP.map(optTop) },
            { q: 'Per a qui és?|¿Para quién es?', opts: AUD },
            { q: 'Quins colors tindrà?|¿Qué colores tendrá?', opts: PAL.map(optPal) }
          ] },
        own({ k: 'wcreate', ph: 'crea', url: 'la-meva-web.numi', name: NAME(1),
          q: "<b>La versió 1 de la teva web: l'esquelet.</b> Ja tens la capçalera i una secció. Canvia el títol si vols, escriu el <b>menú</b> amb tres enllaços i afegeix <b>dues seccions més</b>, cada una amb el seu <code>id</code> i un <code>&lt;h2&gt;</code>. Encara no cal omplir-les: això ho farem la setmana que ve.|<b>La versión 1 de tu web: el esqueleto.</b> Ya tienes la cabecera y una sección. Cambia el título si quieres, escribe el <b>menú</b> con tres enlaces y añade <b>dos secciones más</b>, cada una con su <code>id</code> y un <code>&lt;h2&gt;</code>. Todavía no hace falta llenarlas: eso lo haremos la semana que viene.",
          crit: ['Un títol <code>&lt;h1&gt;</code> amb el nom de la web|Un título <code>&lt;h1&gt;</code> con el nombre de la web', 'Un menú <code>&lt;nav&gt;</code> amb 3 enllaços <code>#…</code>|Un menú <code>&lt;nav&gt;</code> con 3 enlaces <code>#…</code>', 'Tres seccions amb id i <code>&lt;h2&gt;</code>|Tres secciones con id y <code>&lt;h2&gt;</code>'],
          snips: ['<nav>\n  |\n</nav>', '<a href="#|"></a>', '<section id="|">\n  <h2></h2>\n  <p></p>\n</section>', '<h2>|</h2>'],
          checks: [{ k: 'text', t: 'h1', min: 3, txt: 'El títol <code>&lt;h1&gt;</code> té text|El título <code>&lt;h1&gt;</code> tiene texto' }, { k: 'in', t: 'a', p: 'nav', min: 3, txt: 'El menú <code>&lt;nav&gt;</code> té 3 enllaços|El menú <code>&lt;nav&gt;</code> tiene 3 enlaces' }, { k: 'link', href: '/^#./', min: 3, txt: 'Els enllaços porten a seccions (<code>#…</code>)|Los enlaces llevan a secciones (<code>#…</code>)' }, { k: 'tag', t: 'section', min: 3, txt: 'Hi ha 3 seccions|Hay 3 secciones' }, { k: 'in', t: 'h2', p: 'section', min: 3, txt: 'Cada secció té un <code>&lt;h2&gt;</code>|Cada sección tiene un <code>&lt;h2&gt;</code>' }, { k: 'clean' }],
          hint: "Escriu el menú entre </header> i <main>. Cada enllaç: <a href=\"#id-de-la-secció\">Nom</a>. Als comentaris de la plantilla tens idees per a les seccions.|Escribe el menú entre </header> y <main>. Cada enlace: <a href=\"#id-de-la-sección\">Nombre</a>. En los comentarios de la plantilla tienes ideas para las secciones." }, v1start, fix1),
        { k: 'quiz', ph: 'tanca', q: "Per què és bona idea fer l'esbós en paper abans d'escriure codi?|¿Por qué es buena idea hacer el boceto en papel antes de escribir código?",
          opts: ['Per decidir les parts i el seu ordre abans de picar etiquetes|Para decidir las partes y su orden antes de teclear etiquetas', 'Perquè el navegador necessita el dibuix|Porque el navegador necesita el dibujo', 'Per triar ja els colors exactes|Para elegir ya los colores exactos'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Un enllaç <code>&lt;a href="#contacte"&gt;</code> porta a…|Un enlace <code>&lt;a href="#contacte"&gt;</code> lleva a…',
          opts: ["L'element que té <code>id=\"contacte\"</code>|El elemento que tiene <code>id=\"contacte\"</code>", 'Els elements amb <code>class="contacte"</code>|Los elementos con <code>class="contacte"</code>', 'Una altra web que es diu contacte|Otra web que se llama contacte'], a: 0,
          ex: "El <b>#</b> vol dir «dins d'aquesta pàgina, l'element amb aquest id».|El <b>#</b> quiere decir «dentro de esta página, el elemento con este id»." },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ---------- Sessió 2 · Construir ---------- */
    { id: 'w8-2', t: 'Construir|Construir', min: 45, badge: 'w_u8build',
      learn: ['Els textos d\'una web són curts, clars i escrits amb les teves paraules.|Los textos de una web son cortos, claros y escritos con tus palabras.',
        "Cada imatge porta un alt que la descriu; només fem servir imatges que tenim permís per fer servir.|Cada imagen lleva un alt que la describe; solo usamos imágenes que tenemos permiso para usar.",
        'Una classe com .targeta dona el mateix estil a moltes seccions; una paleta de pocs colors fa la web més clara.|Una clase como .targeta da el mismo estilo a muchas secciones; una paleta de pocos colores hace la web más clara.'],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "La setmana passada vas fer l'esquelet de la teva web. Quin és l'ordre bo de les parts?|La semana pasada hiciste el esqueleto de tu web. ¿Cuál es el orden correcto de las partes?",
          opts: ['header, nav, main, footer|header, nav, main, footer', 'footer, main, nav, header|footer, main, nav, header', 'main, header, footer, nav|main, header, footer, nav'], a: 0 },
        { k: 'quiz', ph: 'recorda', q: 'Quina diferència hi ha entre una <b>classe</b> i un <b>id</b>?|¿Qué diferencia hay entre una <b>clase</b> y un <b>id</b>?',
          opts: ["Una classe es pot repetir en molts elements; un id és únic a la pàgina|Una clase se puede repetir en muchos elementos; un id es único en la página", "Cap: són el mateix|Ninguna: son lo mismo", "L'id només serveix per als colors|El id solo sirve para los colores"], a: 0,
          ex: "Per això fem servir classes per a l'estil que es repeteix (<code>.targeta</code>) i ids per a coses úniques (<code>#fotos</code>).|Por eso usamos clases para el estilo que se repite (<code>.targeta</code>) e ids para cosas únicas (<code>#fotos</code>)." },
        { k: 'story', ph: 'missio', who: 'both', scene: 'lab', title: 'El taller de la Mostra|El taller de la Muestra',
          t: "L'esquelet ja aguanta la teva web. Avui toca omplir-la: <b>textos</b> que s'entenguin, <b>imatges</b> amb el seu alt i l'<b>estil</b> amb els colors que vas triar. Recorda el pla: primer el contingut i, després, que quedi bonic.|El esqueleto ya sostiene tu web. Hoy toca llenarla: <b>textos</b> que se entiendan, <b>imágenes</b> con su alt y el <b>estilo</b> con los colores que elegiste. Recuerda el plan: primero el contenido y, después, que quede bonito." },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Textos|Textos', t: 'Escriure per a una pantalla|Escribir para una pantalla', pic: 'img/ment/lli.webp',
            x: "A la pantalla la gent no llegeix, <b>escaneja</b>: mira els títols i les primeres paraules. Per això els bons textos web tenen <b>títols clars</b>, <b>paràgrafs curts</b> (dues o tres frases) i, si hi ha una llista de coses, una <code>&lt;ul&gt;</code>. I sempre amb <b>les teves paraules</b>: si copies un text d'una altra web, no és teu.|En la pantalla la gente no lee, <b>escanea</b>: mira los títulos y las primeras palabras. Por eso los buenos textos web tienen <b>títulos claros</b>, <b>párrafos cortos</b> (dos o tres frases) y, si hay una lista de cosas, una <code>&lt;ul&gt;</code>. Y siempre con <b>tus palabras</b>: si copias un texto de otra web, no es tuyo." },
          { k: 'Imatges|Imágenes', t: 'Imatges amb alt i amb permís|Imágenes con alt y con permiso', media: { k: 'web', html: () => `<h2>${L('Tomaqueres', 'Tomateras')}</h2>\n<img src="img/tech/web/tomaquet.svg" alt="${L('Un tomàquet vermell i madur', 'Un tomate rojo y maduro')}" width="90">\n<p>${L('Les reguem cada dos dies.', 'Las regamos cada dos días.')}</p>`, css: 'img {\n  float: right;\n}' },
            x: "Cada <code>&lt;img&gt;</code> necessita un <code>alt</code> que digui què s'hi veu: el llegeixen els lectors de pantalla i surt si la imatge no carrega. A les teves webs fes servir imatges teves, de Numi o amb llicència lliure, i <b>cita'n la font</b>. Una foto trobada a internet no sempre es pot fer servir.|Cada <code>&lt;img&gt;</code> necesita un <code>alt</code> que diga qué se ve: lo leen los lectores de pantalla y sale si la imagen no carga. En tus webs usa imágenes tuyas, de Numi o con licencia libre, y <b>cita su fuente</b>. Una foto encontrada en internet no siempre se puede usar." },
          { k: 'Classes|Clases', t: 'Un estil, moltes seccions|Un estilo, muchas secciones', media: { k: 'web', html: TARG_HTML, css: TARG_CSS },
            x: "Si vols que totes les seccions semblin targetes, no cal repetir l'estil tres vegades: posa <code>class=\"targeta\"</code> a cada secció i escriu una sola regla <code>.targeta { … }</code> amb el farciment, la vora arrodonida i el fons. Si un dia la vols canviar, la canvies en un sol lloc.|Si quieres que todas las secciones parezcan tarjetas, no hace falta repetir el estilo tres veces: pon <code>class=\"targeta\"</code> en cada sección y escribe una sola regla <code>.targeta { … }</code> con el relleno, el borde redondeado y el fondo. Si un día la quieres cambiar, la cambias en un solo sitio." },
          { k: 'Paleta|Paleta', t: 'Pocs colors i una lletra|Pocos colores y una letra', media: { k: 'web', html: () => `<h1>${L('El cel de nit', 'El cielo de noche')}</h1>\n<p>${L('Dos colors i un de destacat.', 'Dos colores y uno para destacar.')}</p>\n<a href="#">${L('Veure els planetes', 'Ver los planetas')}</a>`, css: 'body {\n  font-family: Verdana, sans-serif;\n  background: #EEF2FF;\n}\nh1 {\n  color: #3730A3;\n}\na {\n  background: #DB2777;\n  color: white;\n  padding: 6px 12px;\n  border-radius: 8px;\n}' },
            x: "Les webs que es veuen més professionals fan servir <b>pocs colors</b>: un de principal, un de fons clar i un per destacar (els botons, per exemple), i <b>una sola família de lletra</b>. Ja vas triar la teva paleta: fes-la servir a tot arreu i la web semblarà una sola peça.|Las webs que se ven más profesionales usan <b>pocos colores</b>: uno principal, uno de fondo claro y uno para destacar (los botones, por ejemplo), y <b>una sola familia de letra</b>. Ya elegiste tu paleta: úsala en todas partes y la web parecerá una sola pieza." },
          { k: 'Compte!|¡Cuidado!', t: 'Copiar no és crear|Copiar no es crear', anim: 'w8layers',
            x: "És temptador copiar textos o imatges d'altres webs, però tenen autor i drets. A més, la teva web és interessant justament perquè hi expliques <b>el que tu saps i penses</b>. Si fas servir una dada o una idea d'una altra pàgina, escriu-la amb les teves paraules i posa'n la font al peu.|Es tentador copiar textos o imágenes de otras webs, pero tienen autor y derechos. Además, tu web es interesante justamente porque en ella explicas <b>lo que tú sabes y piensas</b>. Si usas un dato o una idea de otra página, escríbela con tus palabras y pon la fuente en el pie.",
            bad: 'Copio i enganxo tres paràgrafs d\'una altra web.|Copio y pego tres párrafos de otra web.', good: 'Ho explico amb les meves paraules i en cito la font.|Lo explico con mis palabras y cito la fuente.' }
        ] },
        { k: 'quiz', ph: 'mans', q: 'Quin d\'aquests textos està més ben escrit per a la secció «Com cuidar una tortuga» d\'una web per a nens i nenes?|¿Cuál de estos textos está mejor escrito para la sección «Cómo cuidar una tortuga» de una web para niños y niñas?',
          opts: ["Necessita aigua neta cada dia, sol una estona i menjar de tortuga. No la treguis al carrer.|Necesita agua limpia cada día, sol un rato y comida de tortuga. No la saques a la calle.", "Les tortugues, que són rèptils de l'ordre dels quelonis i que existeixen des de fa milions d'anys, tenen unes necessitats que convé conèixer amb detall abans de…|Las tortugas, que son reptiles del orden de los quelonios y que existen desde hace millones de años, tienen unas necesidades que conviene conocer con detalle antes de…", 'TORTUGA!!! MOLT IMPORTANT!!! LLEGEIX-HO TOT!!!|¡¡¡TORTUGA!!! ¡¡¡MUY IMPORTANTE!!! ¡¡¡LÉELO TODO!!!'], a: 0,
          ex: 'Frases curtes, directes i pensades per al públic: és el que fa que una web s\'entengui.|Frases cortas, directas y pensadas para el público: es lo que hace que una web se entienda.' },
        { k: 'seq', ph: 'mans', q: '<b>Ordena</b> com construiries una secció nova de la teva web.|<b>Ordena</b> cómo construirías una sección nueva de tu web.',
          items: ['Escric la <code>&lt;section&gt;</code> amb el seu id i el seu <code>&lt;h2&gt;</code>|Escribo la <code>&lt;section&gt;</code> con su id y su <code>&lt;h2&gt;</code>', 'Hi poso el text en paràgrafs curts|Pongo el texto en párrafos cortos', 'Hi afegeixo una imatge amb el seu alt|Añado una imagen con su alt', "Li dono estil amb la classe i el CSS|Le doy estilo con la clase y el CSS", 'La miro al mòbil i a l\'ordinador|La miro en el móvil y en el ordenador'],
          ex: 'Estructura, contingut, estil i comprovar: les mateixes capes que per a tota la web.|Estructura, contenido, estilo y comprobar: las mismas capas que para toda la web.' },
        lz({ k: 'wquiz', ph: 'prova', q: 'Quina vista prèvia fa aquesta targeta?|¿Qué vista previa da esta tarjeta?',
          code: { html: TARG_HTML, css: TARG_CSS },
          opts: [{ html: TARG_HTML, css: TARG_CSS }, { html: TARG_HTML, css: '.targeta {\n  background: #FFF7ED;\n  padding: 16px;\n}\nh2 {\n  font-size: 18px;\n  margin: 0;\n}' }, { html: TARG_HTML, css: '.targeta {\n  background: #7C2D12;\n  color: white;\n  padding: 16px;\n  border-radius: 12px;\n}\nh2 {\n  font-size: 18px;\n  margin: 0;\n}' }], a: 0,
          ex: 'Fons clar, farciment de 16 px, vores arrodonides i una vora taronja de 2 px.|Fondo claro, relleno de 16 px, bordes redondeados y un borde naranja de 2 px.' }),
        { k: 'wspot', ph: 'investiga', q: "La targeta no té ni fons ni farciment, i el CSS sembla ben escrit. <b>Toca la línia que té l'error.</b>|La tarjeta no tiene ni fondo ni relleno, y el CSS parece bien escrito. <b>Toca la línea que tiene el error.</b>",
          css: '.targeta {\n  background: #FFF7ED\n  padding: 16px;\n  border-radius: 12px;\n  border: 2px solid #C2410C;\n}', bad: 2, preview: false,
          ex: "Falta el <b>punt i coma</b> després de <code>#FFF7ED</code>. Sense ell, el navegador llegeix «#FFF7ED padding: 16px» com un sol valor, no l'entén i se salta les dues propietats.|Falta el <b>punto y coma</b> después de <code>#FFF7ED</code>. Sin él, el navegador lee «#FFF7ED padding: 16px» como un solo valor, no lo entiende y se salta las dos propiedades." },
        { k: 'move', ph: 'pausa', secs: 30, t: 'Estira\'t com una <b>imatge al 100 %</b> d\'amplada: braços ben oberts! Ara fes-te petit/a com una icona. Fes tres <b>salts flex</b> cap a la dreta i tres cap a l\'esquerra, i acaba amb una vora arrodonida: un cercle amb els braços!|¡Estírate como una <b>imagen al 100 %</b> de ancho: brazos bien abiertos! Ahora hazte pequeño/a como un icono. Haz tres <b>saltos flex</b> hacia la derecha y tres hacia la izquierda, y termina con un borde redondeado: ¡un círculo con los brazos!' },
        lz({ k: 'web', ph: 'repte', url: 'hort-escola.numi', q: "<b>Omple la secció.</b> A la web de l'hort de l'escola, la secció de les tomaqueres només té el títol. Afegeix-hi un <b>paràgraf</b> que expliqui alguna cosa i la <b>imatge del tomàquet</b> amb un <code>alt</code> que la descrigui.|<b>Llena la sección.</b> En la web del huerto de la escuela, la sección de las tomateras solo tiene el título. Añade un <b>párrafo</b> que explique algo y la <b>imagen del tomate</b> con un <code>alt</code> que la describa.",
          html: () => `<section id="tomaqueres">\n  <h2>${L('Les tomaqueres', 'Las tomateras')}</h2>\n  <!-- ${L('Afegeix aquí un paràgraf i la imatge', 'Añade aquí un párrafo y la imagen')} -->\n  \n</section>`, css: 'section {\n  background: #F0FDF4;\n  padding: 12px;\n  border-radius: 12px;\n}\nh2 {\n  color: #166534;\n}',
          snips: ['<p>|</p>', '<img src="img/tech/web/tomaquet.svg" alt="|" width="100">'],
          checks: [{ k: 'in', t: 'p', p: 'section', txt: 'Hi ha un <code>&lt;p&gt;</code> dins de la secció|Hay un <code>&lt;p&gt;</code> dentro de la sección' }, { k: 'text', t: 'p', min: 20, txt: 'El paràgraf té almenys 20 lletres|El párrafo tiene al menos 20 letras' }, { k: 'attr', t: 'img', a: 'src', v: '/tomaquet\\.svg/', txt: 'Hi ha la imatge <code>tomaquet.svg</code>|Está la imagen <code>tomaquet.svg</code>' }, { k: 'attr', t: 'img', a: 'alt', v: '/.{4}/', txt: "La imatge té un <code>alt</code> que la descriu|La imagen tiene un <code>alt</code> que la describe" }, { k: 'clean' }],
          sol: { html: () => `<section id="tomaqueres">\n  <h2>${L('Les tomaqueres', 'Las tomateras')}</h2>\n  <p>${L('Les vam plantar al març i ja fan tomàquets vermells.', 'Las plantamos en marzo y ya dan tomates rojos.')}</p>\n  <img src="img/tech/web/tomaquet.svg" alt="${L('Un tomàquet vermell i madur', 'Un tomate rojo y maduro')}" width="100">\n</section>` },
          hint: "L'alt descriu la imatge com si l'expliquessis per telèfon: «Un tomàquet vermell i madur». No cal posar «imatge de».|El alt describe la imagen como si la explicaras por teléfono: «Un tomate rojo y maduro». No hace falta poner «imagen de»." }),
        lz({ k: 'web', ph: 'repte', url: 'hort-escola.numi', q: '<b>Totes iguals amb una classe.</b> Posa <code>class="targeta"</code> a les <b>tres seccions</b> i, al CSS, completa la regla <code>.targeta</code> amb un <b>farciment</b> (padding) i <b>vores arrodonides</b> (border-radius).|<b>Todas iguales con una clase.</b> Pon <code>class="targeta"</code> en las <b>tres secciones</b> y, en el CSS, completa la regla <code>.targeta</code> con un <b>relleno</b> (padding) y <b>bordes redondeados</b> (border-radius).',
          html: () => HORT3(false), css: '.targeta {\n  background: #F0FDF4;\n  \n}',
          checks: [{ k: 'class', c: 'targeta', min: 3, txt: 'Les 3 seccions tenen la classe <code>.targeta</code>|Las 3 secciones tienen la clase <code>.targeta</code>' }, { k: 'css', s: '.targeta', p: 'padding' }, { k: 'css', s: '.targeta', p: 'border-radius' }, { k: 'cssclean' }],
          sol: { html: () => HORT3(true), css: '.targeta {\n  background: #F0FDF4;\n  padding: 16px;\n  border-radius: 12px;\n  margin-bottom: 12px;\n}' },
          hint: 'A l\'HTML, dins de cada <section …> afegeix class="targeta". Al CSS, dins de les claus: padding: 16px; i border-radius: 12px; (amb punt i coma!).|En el HTML, dentro de cada <section …> añade class="targeta". En el CSS, dentro de las llaves: padding: 16px; y border-radius: 12px; (¡con punto y coma!).' }),
        lz({ k: 'web', ph: 'repte', url: 'hort-escola.numi', q: "<b>Una galeria.</b> Les tres imatges surten una sota l'altra. Fes que la <code>.galeria</code> les posi <b>en fila</b> amb <code>display: flex</code> i un espai entre elles (<code>gap</code>). I, ja que hi ets: dues imatges no tenen <code>alt</code>!|<b>Una galería.</b> Las tres imágenes salen una debajo de la otra. Haz que la <code>.galeria</code> las ponga <b>en fila</b> con <code>display: flex</code> y un espacio entre ellas (<code>gap</code>). Y, ya que estás: ¡dos imágenes no tienen <code>alt</code>!",
          html: () => GAL(false), css: '.galeria {\n  \n}\nimg {\n  display: block;\n}',
          checks: [{ k: 'css', s: '.galeria', p: 'display', v: 'flex' }, { k: 'css', s: '.galeria', p: 'gap' }, { k: 'attr', t: 'img', a: 'alt', v: '/.{3}/', min: 3, txt: 'Les 3 imatges tenen <code>alt</code>|Las 3 imágenes tienen <code>alt</code>' }, { k: 'clean' }],
          sol: { html: () => GAL(true), css: '.galeria {\n  display: flex;\n  gap: 12px;\n}\nimg {\n  display: block;\n}' },
          hint: 'Al CSS: display: flex; i gap: 12px; dins de .galeria. A l\'HTML, afegeix alt="…" a la poma i al plàtan.|En el CSS: display: flex; y gap: 12px; dentro de .galeria. En el HTML, añade alt="…" a la manzana y al plátano.' }),
        { k: 'story', ph: 'crea', who: 'numi', t: "Ara, la teva web! T'hi espera l'última versió que vas desar. Omple <b>cada secció</b> amb textos teus i posa-hi <b>imatges</b> de Numi (són a <code>img/tech/web/</code> i <code>img/ic/</code>) amb el seu alt. Després, dona-li estil amb els teus colors i afegeix el <b>peu de pàgina</b>.|¡Ahora, tu web! Te espera la última versión que guardaste. Llena <b>cada sección</b> con textos tuyos y pon <b>imágenes</b> de Numi (están en <code>img/tech/web/</code> y <code>img/ic/</code>) con su alt. Después, dale estilo con tus colores y añade el <b>pie de página</b>.",
          box: "Imatges que pots fer servir: <code>planeta.svg</code>, <code>estrella.svg</code>, <code>coet.svg</code>, <code>tortuga.svg</code>, <code>gat.svg</code>, <code>gos.svg</code>, <code>pastis.svg</code>, <code>pizza.svg</code>, <code>fruita.svg</code>, <code>pilota.svg</code>, <code>guitarra.svg</code>, <code>castell.svg</code>, <code>muntanya.svg</code>… (totes a <code>img/tech/web/</code>).|Imágenes que puedes usar: <code>planeta.svg</code>, <code>estrella.svg</code>, <code>coet.svg</code>, <code>tortuga.svg</code>, <code>gat.svg</code>, <code>gos.svg</code>, <code>pastis.svg</code>, <code>pizza.svg</code>, <code>fruita.svg</code>, <code>pilota.svg</code>, <code>guitarra.svg</code>, <code>castell.svg</code>, <code>muntanya.svg</code>… (todas en <code>img/tech/web/</code>)." },
        own({ k: 'wcreate', ph: 'crea', url: 'la-meva-web.numi', name: NAME(2),
          q: "<b>La versió 2 de la teva web: el contingut i l'estil.</b> Escriu un paràgraf a cada secció, posa-hi almenys una imatge amb <code>alt</code>, afegeix un <code>&lt;footer&gt;</code> i dona estil a la web amb els teus colors (com a mínim cinc regles de CSS). Prova-la amb els botons 📱 i 💻.|<b>La versión 2 de tu web: el contenido y el estilo.</b> Escribe un párrafo en cada sección, pon al menos una imagen con <code>alt</code>, añade un <code>&lt;footer&gt;</code> y dale estilo a la web con tus colores (como mínimo cinco reglas de CSS). Pruébala con los botones 📱 y 💻.",
          crit: ['Un paràgraf amb text teu a cada secció|Un párrafo con texto tuyo en cada sección', 'Almenys una imatge amb un alt que la descriu|Al menos una imagen con un alt que la describe', 'Un peu de pàgina <code>&lt;footer&gt;</code>|Un pie de página <code>&lt;footer&gt;</code>', 'Estil amb la teva paleta: 5 regles de CSS o més|Estilo con tu paleta: 5 reglas de CSS o más'],
          snips: ['<p>|</p>', '<img src="img/tech/web/|.svg" alt="" width="140">', '<footer>\n  <p>|</p>\n</footer>', '<ul>\n  <li>|</li>\n</ul>', { t: 'section {\n  |\n}', tab: 'css' }, { t: '.targeta {\n  |\n}', tab: 'css' }],
          checks: [{ k: 'tag', t: 'p', min: 3, txt: 'Hi ha almenys 3 paràgrafs|Hay al menos 3 párrafos' }, { k: 'attr', t: 'img', a: 'alt', v: '/.{3}/', txt: 'Una imatge amb <code>alt</code>|Una imagen con <code>alt</code>' }, { k: 'tag', t: 'footer' }, { k: 'rules', min: 5 }, { k: 'clean' }],
          hint: "Ves secció per secció: canvia «Aquí hi aniran els teus textos» per un text teu. El footer va al final de tot, després de </main>. Al CSS pots afegir regles per a h2, section, nav a i footer.|Ve sección por sección: cambia «Aquí irán tus textos» por un texto tuyo. El footer va al final de todo, después de </main>. En el CSS puedes añadir reglas para h2, section, nav a y footer." }, mine, fix2),
        { k: 'quiz', ph: 'tanca', q: 'Per què val la pena fer servir una classe com <code>.targeta</code> en lloc de repetir l\'estil a cada secció?|¿Por qué vale la pena usar una clase como <code>.targeta</code> en lugar de repetir el estilo en cada sección?',
          opts: ['Perquè l\'estil s\'escriu una vegada i, si el canvies, canvia a totes|Porque el estilo se escribe una vez y, si lo cambias, cambia en todas', 'Perquè les classes fan la web més ràpida a internet|Porque las clases hacen la web más rápida en internet', 'Perquè sense classes no es pot posar color|Porque sin clases no se puede poner color'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Has trobat una foto preciosa en una altra web. Què fas?|Has encontrado una foto preciosa en otra web. ¿Qué haces?',
          opts: ['Miro si es pot fer servir (llicència) i, si és així, en cito la font; si no, en busco una altra o en faig una de meva|Miro si se puede usar (licencia) y, si es así, cito la fuente; si no, busco otra o hago una mía', 'La poso i ja està: és a internet, és de tothom|La pongo y ya está: está en internet, es de todos', 'La poso i hi escric que és meva|La pongo y escribo que es mía'], a: 0,
          ex: 'Que una imatge sigui a internet no vol dir que es pugui fer servir: té un autor/a.|Que una imagen esté en internet no quiere decir que se pueda usar: tiene un autor/a.' },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ---------- Sessió 3 · Revisar i millorar ---------- */
    { id: 'w8-3', t: 'Revisar i millorar|Revisar y mejorar', min: 45, badge: 'w_u8rev',
      learn: ['Una web accessible té alt a les imatges, títols en ordre, enllaços clars i bon contrast.|Una web accesible tiene alt en las imágenes, títulos en orden, enlaces claros y buen contraste.',
        "Abans de publicar, es revisa l'ortografia llegint en veu alta i es prova la web al mòbil.|Antes de publicar, se revisa la ortografía leyendo en voz alta y se prueba la web en el móvil.",
        "Una bona revisió d'un company/a diu què funciona i proposa una millora concreta, amb amabilitat.|Una buena revisión de un compañero/a dice qué funciona y propone una mejora concreta, con amabilidad."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: 'Per què cal posar <code>alt</code> a les imatges?|¿Por qué hay que poner <code>alt</code> en las imágenes?',
          opts: ["Perquè el llegeix el lector de pantalla i surt si la imatge no carrega|Porque lo lee el lector de pantalla y sale si la imagen no carga", 'Perquè la imatge surti més gran|Para que la imagen salga más grande', 'Perquè la imatge tingui color|Para que la imagen tenga color'], a: 0 },
        { k: 'quiz', ph: 'recorda', q: 'Quina propietat fa que els elements d\'un contenidor flex es posin <b>un sota l\'altre</b>?|¿Qué propiedad hace que los elementos de un contenedor flex se pongan <b>uno debajo del otro</b>?',
          opts: ['<code>flex-direction: column</code>|<code>flex-direction: column</code>', '<code>gap: 20px</code>|<code>gap: 20px</code>', '<code>display: block</code> al text|<code>display: block</code> en el texto'], a: 0 },
        { k: 'story', ph: 'missio', who: 'both', scene: 'poble', title: "L'equip de revisió|El equipo de revisión",
          t: "Abans d'obrir la Mostra, totes les webs passen per l'<b>equip de revisió</b>. A les empreses de veritat també ho fan: algú que no l'ha feta la prova al mòbil, la llegeix amb calma i comprova que tothom la pugui fer servir. Avui seràs revisor/a… i també revisaran la teva!|Antes de abrir la Muestra, todas las webs pasan por el <b>equipo de revisión</b>. En las empresas de verdad también lo hacen: alguien que no la ha hecho la prueba en el móvil, la lee con calma y comprueba que todo el mundo la pueda usar. ¡Hoy serás revisor/a… y también revisarán la tuya!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'Accessibilitat|Accesibilidad', t: 'Una web per a tothom|Una web para todo el mundo', anim: 'w8a11y',
            x: "Hi ha persones que naveguen amb un <span class='hl'>lector de pantalla</span>, que llegeix la web en veu alta. Per a elles, l'<code>alt</code> de cada imatge és l'única manera de saber què hi ha, i els títols <b>en ordre</b> (h1, després h2, després h3) són com l'índex d'un llibre: si saltes de h1 a h4, s'hi perden.|Hay personas que navegan con un <span class='hl'>lector de pantalla</span>, que lee la web en voz alta. Para ellas, el <code>alt</code> de cada imagen es la única manera de saber qué hay, y los títulos <b>en orden</b> (h1, después h2, después h3) son como el índice de un libro: si saltas de h1 a h4, se pierden.",
            tip: "Tria el títol per la seva importància, no per la mida: la mida es canvia amb CSS.|Elige el título por su importancia, no por el tamaño: el tamaño se cambia con CSS." },
          { k: 'Contrast|Contraste', t: 'Que es llegeixi bé|Que se lea bien', media: { k: 'web', html: () => `<p class="mal">${L('Gris clar sobre blanc: costa de llegir.', 'Gris claro sobre blanco: cuesta leerlo.')}</p>\n<p class="be">${L('Gairebé negre sobre blanc: es llegeix bé.', 'Casi negro sobre blanco: se lee bien.')}</p>\n<p class="be2">${L('Blanc sobre blau fosc: també.', 'Blanco sobre azul oscuro: también.')}</p>`, css: '.mal {\n  color: #C8C8C8;\n}\n.be {\n  color: #1d2433;\n}\n.be2 {\n  color: white;\n  background: #3730A3;\n  padding: 6px;\n}' },
            x: "El <span class='hl'>contrast</span> és la diferència entre el color del text i el del fons. Text fosc sobre fons clar (o al revés) es llegeix bé fins i tot al sol o amb una pantalla vella. Text gris clar sobre blanc, o groc sobre blanc, costa molt de llegir, sobretot a les persones que hi veuen poc.|El <span class='hl'>contraste</span> es la diferencia entre el color del texto y el del fondo. Texto oscuro sobre fondo claro (o al revés) se lee bien incluso al sol o con una pantalla vieja. Texto gris claro sobre blanco, o amarillo sobre blanco, cuesta mucho de leer, sobre todo a las personas que ven poco." },
          { k: 'Ortografia|Ortografía', t: 'Llegeix-la en veu alta|Léela en voz alta', pic: 'img/ment/sin.webp',
            x: "Una falta d'ortografia fa que una web sembli feta amb pressa (i, com vas veure, és un dels senyals de les webs falses!). El truc dels professionals: <b>llegir el text en veu alta</b>, a poc a poc, o demanar a algú que el llegeixi. També cal revisar les majúscules, els accents i els noms propis.|Una falta de ortografía hace que una web parezca hecha con prisas (y, como viste, ¡es una de las señales de las webs falsas!). El truco de los profesionales: <b>leer el texto en voz alta</b>, despacio, o pedir a alguien que lo lea. También hay que revisar las mayúsculas, los acentos y los nombres propios." },
          { k: 'Mòbil|Móvil', t: 'Prova-la al mòbil|Pruébala en el móvil', media: { k: 'web', html: FILA_HTML, css: () => FILA_CSS + '\n@media (max-width: 600px) {\n  .fila {\n    flex-direction: column;\n  }\n}' },
            x: "La majoria de gent obrirà la teva web amb el mòbil. Toca el botó 📱 de la vista prèvia: hi ha coses massa amples, text massa petit o files que no hi caben? Amb una regla <code>@media (max-width: 600px)</code> pots posar les files en columna, fer la lletra més gran o amagar el que sobra.|La mayoría de gente abrirá tu web con el móvil. Toca el botón 📱 de la vista previa: ¿hay cosas demasiado anchas, texto demasiado pequeño o filas que no caben? Con una regla <code>@media (max-width: 600px)</code> puedes poner las filas en columna, hacer la letra más grande o esconder lo que sobra." },
          { k: 'Compte!|¡Cuidado!', t: 'Una revisió amable i útil|Una revisión amable y útil', anim: 'w8check',
            x: "Quan revises la web d'un company/a, fes-ho com t'agradaria que t'ho fessin a tu: digues primer <b>què funciona</b> i després proposa <b>una millora concreta</b>. «És lletja» no ajuda gens; «el text gris es llegeix malament, prova un color més fosc», sí.|Cuando revises la web de un compañero/a, hazlo como te gustaría que te lo hicieran a ti: di primero <b>qué funciona</b> y después propón <b>una mejora concreta</b>. «Es fea» no ayuda nada; «el texto gris se lee mal, prueba un color más oscuro», sí.",
            bad: '«No m\'agrada.»|«No me gusta.»', good: "«M'agrada el menú. Proposo posar alt a la foto del gos.»|«Me gusta el menú. Propongo poner alt a la foto del perro.»" }
        ] },
        { k: 'quiz', ph: 'mans', q: 'Quin text d\'enllaç és més <b>accessible</b>? (Pensa en algú que només escolta els enllaços, un darrere l\'altre.)|¿Qué texto de enlace es más <b>accesible</b>? (Piensa en alguien que solo escucha los enlaces, uno detrás de otro.)',
          opts: ['«Llegeix les normes del club»|«Lee las normas del club»', '«Clica aquí»|«Haz clic aquí»', '«Més»|«Más»'], a: 0,
          ex: "Si un lector de pantalla diu «clica aquí, clica aquí, clica aquí», no se sap on porta cada enllaç. El text de l'enllaç ha de dir on vas.|Si un lector de pantalla dice «haz clic aquí, haz clic aquí, haz clic aquí», no se sabe adónde lleva cada enlace. El texto del enlace tiene que decir adónde vas." },
        lz({ k: 'wquiz', ph: 'mans', q: 'Quina d\'aquestes targetes es llegeix <b>millor</b>?|¿Cuál de estas tarjetas se lee <b>mejor</b>?',
          opts: [{ html: () => `<p>${L('Trobades cada dimecres a les sis.', 'Encuentros cada miércoles a las seis.')}</p>`, css: 'p {\n  background: #FFF7ED;\n  color: #1d2433;\n  padding: 10px;\n  font-size: 18px;\n}' },
            { html: () => `<p>${L('Trobades cada dimecres a les sis.', 'Encuentros cada miércoles a las seis.')}</p>`, css: 'p {\n  background: white;\n  color: #FFE066;\n  padding: 10px;\n  font-size: 18px;\n}' },
            { html: () => `<p>${L('Trobades cada dimecres a les sis.', 'Encuentros cada miércoles a las seis.')}</p>`, css: 'p {\n  background: #3730A3;\n  color: #4F46E5;\n  padding: 10px;\n  font-size: 18px;\n}' }], a: 0,
          ex: 'Text gairebé negre sobre un fons clar: molt contrast. El groc sobre blanc i el blau sobre blau gairebé no es veuen.|Texto casi negro sobre un fondo claro: mucho contraste. El amarillo sobre blanco y el azul sobre azul casi no se ven.' }),
        lz({ k: 'wspot', ph: 'prova', q: "Revisa l'ortografia de la web del club. <b>Toca la línia que té una falta.</b>|Revisa la ortografía de la web del club. <b>Toca la línea que tiene una falta.</b>",
          html: () => `<h1>${L('Club de Lectura', 'Club de Lectura')}</h1>
<p>${L('Ens trobem cada dimecres a la biblioteca.', 'Nos reunimos cada miércoles en la biblioteca.')}</p>
<p>${L("Llegim llibres d'abentures i de misteri.", 'Leemos livros de aventuras y de misterio.')}</p>
<p>${L('Després en parlem i votem el següent.', 'Después hablamos de ellos y votamos el siguiente.')}</p>
<p>${L('Porta el teu llibre preferit!', '¡Trae tu libro favorito!')}</p>`, bad: 3,
          ex: "La línia 3 té una <b>b</b> que hauria de ser <b>v</b>. Per això cal llegir els textos a poc a poc, paraula per paraula: el corrector del navegador no sempre ho veu.|La línea 3 tiene una <b>v</b> que debería ser <b>b</b>. Por eso hay que leer los textos despacio, palabra por palabra: el corrector del navegador no siempre lo ve." }),
        lz({ k: 'wspot', ph: 'investiga', q: "Ara revisa els títols: un lector de pantalla s'hi perdria. <b>Toca la línia del títol que no segueix l'ordre.</b>|Ahora revisa los títulos: un lector de pantalla se perdería. <b>Toca la línea del título que no sigue el orden.</b>",
          html: () => `<h1>${L('Club de Lectura', 'Club de Lectura')}</h1>
<h2>${L('Qui som', 'Quiénes somos')}</h2>
<p>${L('Som vuit lectors i lectores.', 'Somos ocho lectores y lectoras.')}</p>
<h4>${L('Què llegim', 'Qué leemos')}</h4>
<p>${L('Novel·les, còmics i poesia.', 'Novelas, cómics y poesía.')}</p>`, bad: 4,
          ex: 'Després d\'un <code>&lt;h1&gt;</code> i un <code>&lt;h2&gt;</code> no pot venir un <code>&lt;h4&gt;</code>: «Què llegim» té la mateixa importància que «Qui som», així que també ha de ser un <code>&lt;h2&gt;</code>.|Después de un <code>&lt;h1&gt;</code> y un <code>&lt;h2&gt;</code> no puede venir un <code>&lt;h4&gt;</code>: «Qué leemos» tiene la misma importancia que «Quiénes somos», así que también tiene que ser un <code>&lt;h2&gt;</code>.' }),
        { k: 'move', ph: 'pausa', secs: 30, t: "Revisió de cos sencer! <b>Ulls</b>: mira lluny per la finestra i torna a mirar a prop, tres vegades. <b>Coll</b>: gira el cap a poc a poc a un costat i a l'altre. <b>Mans</b>: obre i tanca els dits deu vegades. A punt per revisar!|¡Revisión de cuerpo entero! <b>Ojos</b>: mira lejos por la ventana y vuelve a mirar cerca, tres veces. <b>Cuello</b>: gira la cabeza despacio a un lado y al otro. <b>Manos</b>: abre y cierra los dedos diez veces. ¡A punto para revisar!" },
        lz({ k: 'web', ph: 'repte', url: 'club-lectura.numi', q: "<b>Arregla l'accessibilitat.</b> Aquesta pàgina del club té dos problemes: les <b>imatges no tenen alt</b> i els títols salten de <code>&lt;h1&gt;</code> a <code>&lt;h4&gt;</code>. Posa un <code>alt</code> a cada imatge i canvia els <code>&lt;h4&gt;</code> per <code>&lt;h2&gt;</code>.|<b>Arregla la accesibilidad.</b> Esta página del club tiene dos problemas: las <b>imágenes no tienen alt</b> y los títulos saltan de <code>&lt;h1&gt;</code> a <code>&lt;h4&gt;</code>. Pon un <code>alt</code> a cada imagen y cambia los <code>&lt;h4&gt;</code> por <code>&lt;h2&gt;</code>.",
          html: () => A11Y(false), css: 'h4 {\n  color: #3730A3;\n}\nh2 {\n  color: #3730A3;\n}',
          checks: [{ k: 'attr', t: 'img', a: 'alt', v: '/.{4}/', min: 2, txt: 'Les 2 imatges tenen un <code>alt</code> que les descriu|Las 2 imágenes tienen un <code>alt</code> que las describe' }, { k: 'notag', t: 'h4' }, { k: 'tag', t: 'h2', min: 2 }, { k: 'clean' }],
          sol: { html: () => A11Y(true) },
          hint: "Recorda canviar també l'etiqueta de tancament: <h2>…</h2>. A l'alt, explica què hi ha a la imatge en poques paraules.|Recuerda cambiar también la etiqueta de cierre: <h2>…</h2>. En el alt, explica qué hay en la imagen en pocas palabras." }),
        lz({ k: 'web', ph: 'repte', url: 'club-lectura.numi', q: "<b>Millora el contrast.</b> El títol és groc i el text és gris clar, sobre fons blanc: gairebé no es llegeixen. Canvia el <code>color</code> del <code>h2</code> i del <code>p</code> per colors <b>foscos</b> (com <code>#1d2433</code>, <code>#3730A3</code> o <code>navy</code>).|<b>Mejora el contraste.</b> El título es amarillo y el texto es gris claro, sobre fondo blanco: casi no se leen. Cambia el <code>color</code> del <code>h2</code> y del <code>p</code> por colores <b>oscuros</b> (como <code>#1d2433</code>, <code>#3730A3</code> o <code>navy</code>).",
          html: CONTR_HTML, css: 'body {\n  background: white;\n}\nh2 {\n  color: #FFE066;\n}\np {\n  color: #C8C8C8;\n  font-size: 18px;\n}',
          checks: [{ k: 'styled', t: 'h2', p: 'color', v: OK_DARK, txt: 'El títol <code>&lt;h2&gt;</code> té un color fosc|El título <code>&lt;h2&gt;</code> tiene un color oscuro' }, { k: 'styled', t: 'p', p: 'color', v: OK_DARK, txt: 'El text <code>&lt;p&gt;</code> té un color fosc|El texto <code>&lt;p&gt;</code> tiene un color oscuro' }, { k: 'cssclean' }],
          sol: { css: 'body {\n  background: white;\n}\nh2 {\n  color: #3730A3;\n}\np {\n  color: #1d2433;\n  font-size: 18px;\n}' },
          hint: 'Un color en hexadecimal és fosc si comença per un número baix: #1d2433, #333, #3730A3. Els que comencen per C, D, E o F són clars.|Un color en hexadecimal es oscuro si empieza por un número bajo: #1d2433, #333, #3730A3. Los que empiezan por C, D, E o F son claros.' }),
        lz({ k: 'web', ph: 'repte', url: 'club-lectura.numi', q: "<b>Que es vegi bé al mòbil.</b> Toca 📱: els tres llibres queden massa estrets. Afegeix una regla <code>@media (max-width: 600px)</code> que posi la <code>.fila</code> en <b>columna</b>.|<b>Que se vea bien en el móvil.</b> Toca 📱: los tres libros quedan demasiado estrechos. Añade una regla <code>@media (max-width: 600px)</code> que ponga la <code>.fila</code> en <b>columna</b>.",
          html: FILA_HTML, css: FILA_CSS, tab: 'css',
          snips: [{ t: '@media (max-width: 600px) {\n  |\n}', tab: 'css' }, { t: '.fila {\n    flex-direction: |;\n  }', tab: 'css' }],
          checks: [{ k: 'media', max: 600 }, { k: 'css', s: '.fila', p: 'flex-direction', v: 'column', media: true, txt: 'Dins de <code>@media</code>, la <code>.fila</code> va en columna|Dentro de <code>@media</code>, la <code>.fila</code> va en columna' }, { k: 'cssclean' }],
          sol: { css: FILA_CSS + '\n@media (max-width: 600px) {\n  .fila {\n    flex-direction: column;\n  }\n}' },
          hint: "Dins de @media (max-width: 600px) { … } escriu una regla sencera: .fila { flex-direction: column; }. Compta bé les claus: n'hi ha dues de tancament al final.|Dentro de @media (max-width: 600px) { … } escribe una regla entera: .fila { flex-direction: column; }. Cuenta bien las llaves: hay dos de cierre al final." }),
        { k: 'review', ph: 'crea', who: 'numi', btn: 'Desa la revisió|Guarda la revisión', q: "<b>Revisa la web d'un company/a.</b> Seieu per parelles: obre la web de l'altra persona (a «Projectes» del seu ordinador) i respon amb sinceritat. Després digues-li en veu alta <b>una cosa que funciona</b> i <b>una millora concreta</b>.|<b>Revisa la web de un compañero/a.</b> Sentaos por parejas: abre la web de la otra persona (en «Proyectos» de su ordenador) y responde con sinceridad. Después dile en voz alta <b>algo que funciona</b> y <b>una mejora concreta</b>.",
          items: [
            { q: "S'entén de què va la web i per a qui és?|¿Se entiende de qué va la web y para quién es?", opts: ['Sí, del tot|Sí, del todo', 'Més o menys|Más o menos', 'No gaire|No mucho'] },
            { q: 'Les imatges tenen alt i els títols van en ordre?|¿Las imágenes tienen alt y los títulos van en orden?', opts: ['Sí, tot|Sí, todo', 'Alguna cosa no|Alguna cosa no', 'No|No'] },
            { q: 'Es llegeix bé (contrast i mida de la lletra)?|¿Se lee bien (contraste y tamaño de la letra)?', opts: ['Molt bé|Muy bien', 'Hi ha alguna part difícil|Hay alguna parte difícil', 'Costa de llegir|Cuesta leerla'] },
            { q: "Hi has trobat faltes d'ortografia?|¿Has encontrado faltas de ortografía?", opts: ['Cap|Ninguna', 'Una o dues|Una o dos', 'Bastantes|Bastantes'] },
            { q: 'Com es veu al mòbil (botó 📱)?|¿Cómo se ve en el móvil (botón 📱)?', opts: ['Molt bé|Muy bien', 'Alguna cosa és massa ampla|Algo es demasiado ancho', 'Malament|Mal'] }
          ] },
        own({ k: 'wcreate', ph: 'crea', url: 'la-meva-web.numi', name: NAME(3),
          q: "<b>La versió 3 de la teva web: revisada i millorada.</b> Fes servir la revisió del teu company/a i la llista: <b>alt</b> a totes les imatges, <b>títols en ordre</b>, bon <b>contrast</b>, <b>cap falta</b> (llegeix-la en veu alta) i una regla <code>@media</code> perquè es vegi bé al <b>mòbil</b>.|<b>La versión 3 de tu web: revisada y mejorada.</b> Usa la revisión de tu compañero/a y la lista: <b>alt</b> en todas las imágenes, <b>títulos en orden</b>, buen <b>contraste</b>, <b>ninguna falta</b> (léela en voz alta) y una regla <code>@media</code> para que se vea bien en el <b>móvil</b>.",
          crit: ['Totes les imatges tenen alt|Todas las imágenes tienen alt', 'Els títols van en ordre: primer h1, després h2|Los títulos van en orden: primero h1, después h2', 'Colors amb bon contrast i cap falta d\'ortografia|Colores con buen contraste y ninguna falta de ortografía', 'Una regla @media per al mòbil|Una regla @media para el móvil'],
          snips: [{ t: '@media (max-width: 600px) {\n  |\n}', tab: 'css' }, { t: 'img {\n  max-width: 100%;\n  height: auto;|\n}', tab: 'css' }, { t: 'a:hover {\n  |\n}', tab: 'css' }, 'alt="|"'],
          checks: [{ k: 'attr', t: 'img', a: 'alt', v: '/.{3}/', txt: 'Les imatges tenen <code>alt</code>|Las imágenes tienen <code>alt</code>' }, { k: 'order', a: 'h1', b: 'h2', txt: 'Els títols van en ordre (h1 abans que h2)|Los títulos van en orden (h1 antes que h2)' }, { k: 'media', txt: 'Hi ha una regla <code>@media</code> per al mòbil|Hay una regla <code>@media</code> para el móvil' }, { k: 'clean' }, { k: 'cssclean' }],
          hint: "Comença per la regla @media al CSS (per exemple, lletra més gran i enllaços del menú un sota l'altre). Després repassa cada <img> i llegeix tots els textos en veu alta.|Empieza por la regla @media en el CSS (por ejemplo, letra más grande y enlaces del menú uno debajo del otro). Después repasa cada <img> y lee todos los textos en voz alta." }, mine, fix3),
        { k: 'quiz', ph: 'tanca', q: 'Quina és la manera més útil de dir a un company/a com millorar la seva web?|¿Cuál es la manera más útil de decirle a un compañero/a cómo mejorar su web?',
          opts: ["«M'agrada la galeria. Proposo un color més fosc per al text, que costa de llegir.»|«Me gusta la galería. Propongo un color más oscuro para el texto, que cuesta de leer.»", '«Està malament.»|«Está mal.»', '«Fes-la de nou.»|«Hazla de nuevo.»'], a: 0 },
        { k: 'quiz', ph: 'tanca', q: 'Has acabat la teva web. Quin és el millor truc per trobar les faltes d\'ortografia?|Has terminado tu web. ¿Cuál es el mejor truco para encontrar las faltas de ortografía?',
          opts: ['Llegir-la en veu alta, a poc a poc, o que la llegeixi algú altre|Leerla en voz alta, despacio, o que la lea otra persona', 'Mirar-la molt de pressa|Mirarla muy deprisa', 'Fer la lletra més gran|Hacer la letra más grande'], a: 0 },
        { k: 'feel', ph: 'tanca' }
      ] },

    /* ---------- Sessió 4 · Presentació i diploma ---------- */
    { id: 'w8-4', t: 'Presentació i diploma|Presentación y diploma', min: 45, proj: true, badge: 'w_u8grad',
      learn: ["Una web pública mai no porta dades personals: ni adreça, ni telèfon, ni escola.|Una web pública nunca lleva datos personales: ni dirección, ni teléfono, ni colegio.",
        'Per publicar-la, el document complet té lang, title i viewport, i un peu amb els crèdits.|Para publicarla, el documento completo tiene lang, title y viewport, y un pie con los créditos.',
        "Presentar una web és explicar per a qui és, com l'has feta i què n'has après.|Presentar una web es explicar para quién es, cómo la has hecho y qué has aprendido."],
      steps: [
        { k: 'quiz', ph: 'recorda', q: "Quina d'aquestes coses <b>no</b> forma part de la revisió d'una web?|¿Cuál de estas cosas <b>no</b> forma parte de la revisión de una web?",
          opts: ['Posar-hi com més colors millor|Ponerle cuantos más colores mejor', 'Comprovar que les imatges tenen alt|Comprobar que las imágenes tienen alt', 'Provar-la al mòbil|Probarla en el móvil'], a: 0,
          ex: 'Al contrari: pocs colors, ben triats i amb bon contrast.|Al contrario: pocos colores, bien elegidos y con buen contraste.' },
        { k: 'story', ph: 'missio', who: 'both', scene: 'illa', mood: 'dance', title: "S'obre la Mostra!|¡Se abre la Muestra!",
          t: "Avui és el gran dia: s'obre la <b>Mostra de Webs</b>! Abans de presentar, deixarem la web a punt per publicar: un peu de pàgina amb els crèdits, un enllaç per tornar a dalt i <b>cap dada personal</b>. I al final, en Bit lliurarà els diplomes!|¡Hoy es el gran día: se abre la <b>Muestra de Webs</b>! Antes de presentar, dejaremos la web a punto para publicar: un pie de página con los créditos, un enlace para volver arriba y <b>ningún dato personal</b>. ¡Y al final, Bit entregará los diplomas!" },
        { k: 'learn', ph: 'descobreix', cards: [
          { k: 'El viatge|El viaje', t: 'Vuit unitats, una web teva|Ocho unidades, una web tuya', anim: 'w8journey',
            x: "Vas començar descobrint com viatja una pàgina per internet. Després vas aprendre l'<b>HTML</b>, les <b>imatges i els enllaços</b>, el <b>CSS</b>, les <b>caixes</b>, la <b>disposició</b> amb flexbox i graelles i el disseny per al <b>mòbil</b>. I ara ho has ajuntat tot en una web pensada i feta per tu.|Empezaste descubriendo cómo viaja una página por internet. Después aprendiste el <b>HTML</b>, las <b>imágenes y los enlaces</b>, el <b>CSS</b>, las <b>cajas</b>, la <b>disposición</b> con flexbox y rejillas y el diseño para el <b>móvil</b>. Y ahora lo has juntado todo en una web pensada y hecha por ti." },
          { k: 'Dades|Datos', t: 'El que no va mai a una web pública|Lo que nunca va en una web pública', anim: 'w8safe',
            x: "Una web publicada la pot veure <b>qualsevol persona del món</b>. Per això hi pots posar el teu nom de pila, però mai l'<b>adreça</b>, el <b>telèfon</b>, el <b>nom de l'escola</b>, el cognom complet ni fotos on se't vegi la cara. Si vols que et contactin, que sigui a través del professor/a o de la família.|Una web publicada la puede ver <b>cualquier persona del mundo</b>. Por eso puedes poner tu nombre, pero nunca la <b>dirección</b>, el <b>teléfono</b>, el <b>nombre del colegio</b>, el apellido completo ni fotos en las que se te vea la cara. Si quieres que te contacten, que sea a través del profesor/a o de la familia." },
          { k: 'Publicar|Publicar', t: 'A punt per publicar|A punto para publicar', media: { k: 'web', html: () => DOCW(true) },
            x: "Per publicar una web en un servidor de veritat, el document ha d'anar complet: <code>&lt;html lang&gt;</code> (l'idioma), <code>&lt;title&gt;</code> (el nom de la pestanya i dels cercadors) i el <code>viewport</code> per al mòbil. Després es puja el fitxer a un servidor i el domini hi porta, com a la unitat 1.|Para publicar una web en un servidor de verdad, el documento tiene que ir completo: <code>&lt;html lang&gt;</code> (el idioma), <code>&lt;title&gt;</code> (el nombre de la pestaña y de los buscadores) y el <code>viewport</code> para el móvil. Después se sube el archivo a un servidor y el dominio lleva a él, como en la unidad 1.",
            tip: "A «Projectes», toca <b>Descarrega</b>: tindràs el fitxer <code>.html</code> sencer per publicar-lo (sempre amb un adult).|En «Proyectos», toca <b>Descarga</b>: tendrás el archivo <code>.html</code> entero para publicarlo (siempre con un adulto)." },
          { k: 'Presentar|Presentar', t: 'Tres preguntes per presentar|Tres preguntas para presentar', pic: 'img/ment/nom.webp',
            x: "Per presentar la teva web, respon tres preguntes: <b>Per a qui és i de què va?</b> (ensenya la portada), <b>Com l'has feta?</b> (ensenya una part del codi: el menú, una classe, la regla @media) i <b>Què n'has après?</b> (un error que vas arreglar, una millora que et va proposar un company/a). Acaba ensenyant-la al mòbil!|Para presentar tu web, responde tres preguntas: <b>¿Para quién es y de qué va?</b> (enseña la portada), <b>¿Cómo la has hecho?</b> (enseña una parte del código: el menú, una clase, la regla @media) y <b>¿Qué has aprendido?</b> (un error que arreglaste, una mejora que te propuso un compañero/a). ¡Termina enseñándola en el móvil!",
            tip: 'Parla a poc a poc i mira el públic. Dos minuts són suficients.|Habla despacio y mira al público. Dos minutos son suficientes.' },
          { k: 'Compte!|¡Cuidado!', t: 'Crèdits i «Torna a dalt»|Créditos y «Vuelve arriba»', media: { k: 'web', html: () => AINA(true, true), css: AINA_CSS },
            x: "Una web acabada té un <b>peu de pàgina</b> que diu qui l'ha feta i d'on surten les imatges, i un enllaç per <b>tornar a dalt</b>: posa <code>id=\"inici\"</code> a la capçalera i, al peu, <code>&lt;a href=\"#inici\"&gt;</code>. Al mòbil, on les webs són molt llargues, s'agraeix molt.|Una web terminada tiene un <b>pie de página</b> que dice quién la ha hecho y de dónde salen las imágenes, y un enlace para <b>volver arriba</b>: pon <code>id=\"inici\"</code> en la cabecera y, en el pie, <code>&lt;a href=\"#inici\"&gt;</code>. En el móvil, donde las webs son muy largas, se agradece mucho.",
            bad: 'Sense peu: no se sap qui l\'ha feta ni d\'on són les imatges.|Sin pie: no se sabe quién la ha hecho ni de dónde son las imágenes.', good: 'Peu amb els crèdits i un enllaç «Torna a dalt».|Pie con los créditos y un enlace «Vuelve arriba».' }
        ] },
        { k: 'seq', ph: 'mans', q: '<b>Ordena</b> la teva presentació a la Mostra.|<b>Ordena</b> tu presentación en la Muestra.',
          items: ['Dic el nom de la web, de què va i per a qui és|Digo el nombre de la web, de qué va y para quién es', 'Ensenyo les seccions amb el menú|Enseño las secciones con el menú', "Ensenyo una part del codi i l'explico|Enseño una parte del código y la explico", "Explico un error que vaig arreglar o una millora|Explico un error que arreglé o una mejora", "L'ensenyo al mòbil i responc preguntes|La enseño en el móvil y respondo preguntas"],
          ex: "De què va, com funciona, com l'has feta i què n'has après: amb aquest ordre, el públic t'entén de seguida.|De qué va, cómo funciona, cómo la has hecho y qué has aprendido: con este orden, el público te entiende enseguida." },
        { k: 'quiz', ph: 'prova', q: "La Júlia vol posar a la seva web pública un apartat «Sobre mi». Què hi pot posar?|Júlia quiere poner en su web pública un apartado «Sobre mí». ¿Qué puede poner?",
          opts: ["El seu nom de pila i les coses que li agraden|Su nombre y las cosas que le gustan", "L'adreça de casa per si algú li vol enviar una carta|La dirección de casa por si alguien le quiere enviar una carta", 'El seu telèfon i el nom de la seva escola|Su teléfono y el nombre de su colegio'], a: 0,
          ex: "El nom de pila i les aficions no diuen on trobar-la. L'adreça, el telèfon o l'escola, sí: no es posen mai a una web pública.|El nombre y las aficiones no dicen dónde encontrarla. La dirección, el teléfono o el colegio, sí: nunca se ponen en una web pública." },
        lz({ k: 'wspot', ph: 'prova', q: "Aquesta és la pàgina «Sobre mi» de l'Aina, que la publicarà avui. <b>Toca la línia que no hauria de ser en una web pública.</b>|Esta es la página «Sobre mí» de Aina, que la publicará hoy. <b>Toca la línea que no debería estar en una web pública.</b>",
          html: () => `<h1>${L("Hola! Soc l'Aina", '¡Hola! Soy Aina')}</h1>
<p>${L("M'agraden les estrelles i els planetes.", 'Me gustan las estrellas y los planetas.')}</p>
<p>${L('Visc al carrer dels Til·lers, 7, segon pis.', 'Vivo en la calle de los Tilos, 7, segundo piso.')}</p>
<p>${L('Aquesta web parla del cel de nit.', 'Esta web habla del cielo de noche.')}</p>`, bad: 3,
          ex: "L'<b>adreça</b> diu on viu l'Aina, i la web la pot veure qualsevol persona. La resta de línies parlen de les seves aficions i de la web: perfecte.|La <b>dirección</b> dice dónde vive Aina, y la web la puede ver cualquier persona. El resto de líneas hablan de sus aficiones y de la web: perfecto." }),
        { k: 'quiz', ph: 'investiga', q: 'Per a què serveix el <code>&lt;title&gt;</code> del <code>&lt;head&gt;</code>?|¿Para qué sirve el <code>&lt;title&gt;</code> del <code>&lt;head&gt;</code>?',
          opts: ['És el nom que surt a la pestanya del navegador i als resultats dels cercadors|Es el nombre que sale en la pestaña del navegador y en los resultados de los buscadores', 'És el títol gran de la pàgina, com un h1|Es el título grande de la página, como un h1', 'Fa que la pàgina sigui segura|Hace que la página sea segura'], a: 0 },
        { k: 'move', ph: 'pausa', secs: 30, t: "Assaig de presentació! Posa't dret/a, respira fondo tres vegades i saluda el públic imaginari. Ara digues en veu alta, a poc a poc: «La meva web es diu… i és per a…». Acaba amb una reverència!|¡Ensayo de presentación! Ponte de pie, respira hondo tres veces y saluda al público imaginario. Ahora di en voz alta, despacio: «Mi web se llama… y es para…». ¡Termina con una reverencia!" },
        lz({ k: 'web', ph: 'repte', url: 'cel-de-nit.numi', q: "<b>Abans de publicar.</b> La pàgina «Sobre mi» de l'Aina encara té <b>dues dades personals</b>. Esborra la línia de l'adreça i la del telèfon i, en lloc seu, escriu un paràgraf sobre una cosa que li agradi (o que t'agradi a tu).|<b>Antes de publicar.</b> La página «Sobre mí» de Aina todavía tiene <b>dos datos personales</b>. Borra la línea de la dirección y la del teléfono y, en su lugar, escribe un párrafo sobre algo que le guste (o que te guste a ti).",
          html: () => `<h1>${L("Hola! Soc l'Aina", '¡Hola! Soy Aina')}</h1>\n<p>${L("M'agraden les estrelles i els planetes.", 'Me gustan las estrellas y los planetas.')}</p>\n<p>${L('Visc al carrer dels Til·lers, 7, segon pis.', 'Vivo en la calle de los Tilos, 7, segundo piso.')}</p>\n<p>${L('El meu telèfon és el 973 XX XX XX.', 'Mi teléfono es el 973 XX XX XX.')}</p>\n<p>${L('Aquesta web parla del cel de nit.', 'Esta web habla del cielo de noche.')}</p>`,
          css: AINA_CSS,
          checks: [{ k: 'notext', text: 'Til', txt: "Ja no hi ha l'adreça de casa|Ya no está la dirección de casa" }, { k: 'notext', text: 'XX', txt: 'Ja no hi ha el telèfon|Ya no está el teléfono' }, { k: 'tag', t: 'p', min: 3, txt: 'Hi ha almenys 3 paràgrafs (n\'has escrit un de nou)|Hay al menos 3 párrafos (has escrito uno nuevo)' }, { k: 'clean' }],
          sol: { html: () => `<h1>${L("Hola! Soc l'Aina", '¡Hola! Soy Aina')}</h1>\n<p>${L("M'agraden les estrelles i els planetes.", 'Me gustan las estrellas y los planetas.')}</p>\n<p>${L('El meu planeta preferit és Saturn, pels anells.', 'Mi planeta preferido es Saturno, por los anillos.')}</p>\n<p>${L('Aquesta web parla del cel de nit.', 'Esta web habla del cielo de noche.')}</p>` },
          hint: "Selecciona tota la línia de l'adreça, de <p> a </p>, i esborra-la. Fes el mateix amb la del telèfon. Després escriu un <p> nou amb una afició.|Selecciona toda la línea de la dirección, de <p> a </p>, y bórrala. Haz lo mismo con la del teléfono. Después escribe un <p> nuevo con una afición." }),
        lz({ k: 'web', ph: 'repte', url: 'cel-de-nit.numi', q: "<b>Torna a dalt.</b> La web de l'Aina ja té peu de pàgina. Posa <code>id=\"inici\"</code> a la <code>&lt;header&gt;</code> i afegeix al <code>&lt;footer&gt;</code> un enllaç que hi porti: <code>&lt;a href=\"#inici\"&gt;</code>.|<b>Vuelve arriba.</b> La web de Aina ya tiene pie de página. Pon <code>id=\"inici\"</code> en el <code>&lt;header&gt;</code> y añade al <code>&lt;footer&gt;</code> un enlace que lleve a él: <code>&lt;a href=\"#inici\"&gt;</code>.",
          html: () => AINA(false, false), css: AINA_CSS,
          snips: ['id="inici"', '<a href="#inici">|</a>'],
          checks: [{ k: 'id', id: 'inici' }, { k: 'in', t: 'a', p: 'footer', txt: 'Hi ha un enllaç dins del <code>&lt;footer&gt;</code>|Hay un enlace dentro del <code>&lt;footer&gt;</code>' }, { k: 'link', href: '#inici', txt: "L'enllaç porta a <code>#inici</code>|El enlace lleva a <code>#inici</code>" }, { k: 'clean' }],
          sol: { html: () => AINA(true, true) },
          hint: "L'id va dins de l'etiqueta d'obertura: <header id=\"inici\">. L'enllaç, dins del footer, amb un text que digui on porta: «Torna a dalt».|El id va dentro de la etiqueta de apertura: <header id=\"inici\">. El enlace, dentro del footer, con un texto que diga adónde lleva: «Vuelve arriba»." }),
        lz({ k: 'web', ph: 'repte', url: 'cel-de-nit.numi', q: "<b>El document complet.</b> Per publicar la web en un servidor, el document ha d'anar sencer. Afegeix l'idioma a <code>&lt;html lang=\"…\"&gt;</code> i, dins del <code>&lt;head&gt;</code>, el <code>&lt;title&gt;</code> i la metaetiqueta <b>viewport</b>.|<b>El documento completo.</b> Para publicar la web en un servidor, el documento tiene que ir entero. Añade el idioma a <code>&lt;html lang=\"…\"&gt;</code> y, dentro del <code>&lt;head&gt;</code>, el <code>&lt;title&gt;</code> y la metaetiqueta <b>viewport</b>.",
          html: () => DOCW(false),
          snips: ['<title>|</title>', '<meta name="viewport" content="width=device-width, initial-scale=1">', 'lang="|"'],
          checks: [{ k: 'lang' }, { k: 'title' }, { k: 'attr', t: 'meta', a: 'name', v: 'viewport', txt: 'Hi ha la metaetiqueta <code>viewport</code>|Está la metaetiqueta <code>viewport</code>' }, { k: 'clean' }],
          sol: { html: () => DOCW(true) },
          hint: "lang va dins de l'etiqueta <html>: <html lang=\"ca\"> (o \"es\"). El title i el meta van entre <head> i </head>.|lang va dentro de la etiqueta <html>: <html lang=\"es\"> (o \"ca\"). El title y el meta van entre <head> y </head>." }),
        own({ k: 'wcreate', ph: 'crea', url: 'la-meva-web.numi', name: 'La meva web (versió final)|Mi web (versión final)',
          q: "<b>La versió final de la teva web.</b> Repassa que no hi hagi cap dada personal, posa <code>id=\"inici\"</code> a la capçalera i fes un <b>peu de pàgina</b> amb els crèdits (qui l'ha feta, d'on són les imatges) i un enllaç <b>Torna a dalt</b>. Quan la desis, ja estarà a punt per a la Mostra!|<b>La versión final de tu web.</b> Repasa que no haya ningún dato personal, pon <code>id=\"inici\"</code> en la cabecera y haz un <b>pie de página</b> con los créditos (quién la ha hecho, de dónde son las imágenes) y un enlace <b>Vuelve arriba</b>. ¡Cuando la guardes, ya estará a punto para la Muestra!",
          crit: ["Cap dada personal: ni adreça, ni telèfon, ni escola|Ningún dato personal: ni dirección, ni teléfono, ni colegio", 'Un peu de pàgina amb els crèdits|Un pie de página con los créditos', 'Un enllaç «Torna a dalt» que porta a #inici|Un enlace «Vuelve arriba» que lleva a #inici'],
          snips: ['id="inici"', '<a href="#inici">|</a>', '<footer>\n  <p>|</p>\n</footer>'],
          checks: [{ k: 'text', t: 'footer', min: 10, txt: 'El peu de pàgina té els crèdits|El pie de página tiene los créditos' }, { k: 'id', id: 'inici' }, { k: 'link', href: '#inici', txt: 'Un enllaç porta a <code>#inici</code>|Un enlace lleva a <code>#inici</code>' }, { k: 'clean' }],
          hint: "<header id=\"inici\"> a dalt de tot. Al footer: un paràgraf amb «Web feta per… a Numi Tech. Imatges: Numi.» i <a href=\"#inici\">Torna a dalt</a>.|<header id=\"inici\"> arriba del todo. En el footer: un párrafo con «Web hecha por… en Numi Tech. Imágenes: Numi.» y <a href=\"#inici\">Vuelve arriba</a>." }, mine, fix4),
        { k: 'review', ph: 'crea', who: 'numi', btn: 'Desa i continua|Guarda y continúa', q: "<b>Prepara la presentació.</b> Respon aquestes preguntes: t'ajudaran a saber què vols explicar a la Mostra.|<b>Prepara la presentación.</b> Responde estas preguntas: te ayudarán a saber qué quieres explicar en la Muestra.",
          items: [
            { q: "De què n'estàs més orgullós/osa?|¿De qué estás más orgulloso/a?", opts: ['El disseny i els colors|El diseño y los colores', 'Els textos|Los textos', 'El menú i les seccions|El menú y las secciones', 'Com es veu al mòbil|Cómo se ve en el móvil'] },
            { q: "Què t'ha costat més?|¿Qué te ha costado más?", opts: ["L'HTML|El HTML", 'El CSS|El CSS', 'Trobar els errors|Encontrar los errores', 'Decidir el contingut|Decidir el contenido'] },
            { q: 'Què hi afegiries si tinguessis més temps?|¿Qué añadirías si tuvieras más tiempo?', opts: ['Més seccions|Más secciones', 'Una galeria|Una galería', 'Una pàgina nova|Una página nueva', 'Efectes amb :hover|Efectos con :hover'] }
          ] },
        { k: 'diploma', ph: 'tanca', skills: [
          'Explicar com viatja una pàgina per internet|Explicar cómo viaja una página por internet',
          'Escriure HTML: títols, paràgrafs i llistes|Escribir HTML: títulos, párrafos y listas',
          'Posar imatges amb alt i enllaços|Poner imágenes con alt y enlaces',
          'Donar estil amb CSS: colors, lletres i classes|Dar estilo con CSS: colores, letras y clases',
          'Fer caixes amb farciment, vores i ombres|Hacer cajas con relleno, bordes y sombras',
          'Col·locar elements amb flexbox i graelles|Colocar elementos con flexbox y rejillas',
          'Adaptar una web al mòbil i detectar webs falses|Adaptar una web al móvil y detectar webs falsas',
          'Planificar, construir, revisar i presentar una web pròpia|Planificar, construir, revisar y presentar una web propia'] },
        { k: 'story', ph: 'tanca', who: 'bit', mood: 'win', t: "BIP BIP BIP! Enhorabona, creador/a web! Has acabat el curs. Ara ja saps el que hi ha darrere de cada pàgina que obres: etiquetes, regles i molta feina pensada per a les persones que la faran servir. Continua creant!|¡BIP BIP BIP! ¡Enhorabuena, creador/a web! Has terminado el curso. Ahora ya sabes lo que hay detrás de cada página que abres: etiquetas, reglas y mucho trabajo pensado para las personas que la usarán. ¡Sigue creando!" },
        { k: 'quiz', ph: 'tanca', q: 'Ara ja ho saps: què fa un creador/a web quan alguna cosa no es veu com esperava?|Ahora ya lo sabes: ¿qué hace un creador/a web cuando algo no se ve como esperaba?',
          opts: ["Busca la línia que falla (una etiqueta sense tancar, un punt i coma…), l'arregla i ho torna a provar|Busca la línea que falla (una etiqueta sin cerrar, un punto y coma…), la arregla y lo vuelve a probar", 'Ho esborra tot|Lo borra todo', 'Diu que és culpa del navegador|Dice que es culpa del navegador'], a: 0,
          ex: 'Equivocar-se forma part de crear, i ho has fet molt bé durant tot el curs. Enhorabona!|Equivocarse forma parte de crear, y lo has hecho muy bien durante todo el curso. ¡Enhorabuena!' },
        { k: 'quiz', ph: 'tanca', q: 'Abans de publicar la teva web a internet, què has de comprovar?|Antes de publicar tu web en internet, ¿qué tienes que comprobar?',
          opts: ["Que no hi hagi cap dada personal i que un adult l'hagi revisada|Que no haya ningún dato personal y que un adulto la haya revisado", 'Que tingui com més colors millor|Que tenga cuantos más colores mejor', "Que hi surti el teu telèfon per si et volen trucar|Que salga tu teléfono por si te quieren llamar"], a: 0,
          ex: "El que publiques ho pot veure tothom i durant molt de temps: cap adreça, telèfon, escola ni foto de la cara, i sempre amb un adult.|Lo que publicas lo puede ver todo el mundo y durante mucho tiempo: ninguna dirección, teléfono, colegio ni foto de la cara, y siempre con un adulto." },
        { k: 'feel', ph: 'tanca' }
      ] }
  ];
  S.forEach(s => s.steps.forEach(lz));
  return { t: 'La meva web|Mi web', d: 'Projecte final: planificar, construir, revisar i presentar|Proyecto final: planificar, construir, revisar y presentar', color: '#0E7490', s: S };
})();
