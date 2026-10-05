/* ===== Numi Tech · Web: editor d'HTML i CSS amb vista prèvia =====
   Per a 12-14 anys: escriuen codi de veritat (HTML i CSS) i veuen la pàgina al moment. Cada repte té una llista de
   comprovacions que es van marcant mentre escriuen (té un títol h1?, la llista té 3 elements?, el títol és de color?…).
   · Les comprovacions no depenen del navegador: un analitzador propi d'HTML i de CSS (petit i tolerant) construeix
     l'arbre d'etiquetes i les regles, i així també es poden provar les solucions sense navegador.
   · La vista prèvia és un iframe aïllat (sandbox, sense scripts): el codi de l'alumne no pot executar res.
   · Les imatges per a les pàgines són dibuixos propis a img/tech/web/ (animals, menjar, llocs, icones). */

const WEB_VOID = new Set(['img', 'br', 'hr', 'input', 'meta', 'link', 'source', 'area', 'col', 'embed', 'wbr']);
const WEB_KNOWN = new Set(['html', 'head', 'body', 'title', 'meta', 'link', 'style', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'img', 'ul', 'ol', 'li', 'div', 'span', 'section', 'header', 'footer', 'nav', 'main', 'article', 'aside', 'figure', 'figcaption',
  'strong', 'em', 'b', 'i', 'u', 'small', 'mark', 'br', 'hr', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'caption', 'button', 'input', 'label', 'form', 'textarea', 'select', 'option', 'blockquote', 'q', 'cite', 'code', 'pre', 'sup', 'sub', 'abbr', 'time', 'address', 'dl', 'dt', 'dd', 'iframe', 'video', 'audio', 'source', 'picture', 'details', 'summary']);
/* ---------- HTML: de text a arbre (tolerant: anota els errors però continua) ---------- */
function webParse(src) {
  const root = { t: '#root', kids: [], attrs: {}, line: 0 }, errs = [], st = [root];
  const re = /<!--[\s\S]*?-->|<!doctype[^>]*>|<\/\s*([a-zA-Z][\w-]*)\s*>|<\s*([a-zA-Z][\w-]*)((?:\s+[^\s=>\/]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*)\s*(\/?)>|([^<]+)|(<)/gi;
  let m, line = 1;
  const at = i => src.slice(0, i).split('\n').length;
  while ((m = re.exec(src))) {
    const top = st[st.length - 1];
    if (m[0].startsWith('<!--') || /^<!doctype/i.test(m[0])) continue;
    if (m[1]) { const t = m[1].toLowerCase(); let k = st.length - 1; while (k > 0 && st[k].t !== t) k--;
      if (k === 0) errs.push({ k: 'close', t, line: at(m.index) }); else { for (let j = st.length - 1; j > k; j--) errs.push({ k: 'open', t: st[j].t, line: st[j].line }); st.length = k; } continue; }
    if (m[2]) { const t = m[2].toLowerCase(), attrs = {}; (m[3] || '').replace(/([^\s=>\/]+)(?:\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+)))?/g, (_, a, __, d, s1, b) => { attrs[a.toLowerCase()] = d ?? s1 ?? b ?? ''; return ''; });
      const el = { t, attrs, kids: [], line: at(m.index), parent: top }; top.kids.push(el); if (!WEB_KNOWN.has(t)) errs.push({ k: 'unknown', t, line: el.line });
      if (!WEB_VOID.has(t) && !m[4]) { if (t === 'style') { const end = src.toLowerCase().indexOf('</style', re.lastIndex); el.css = src.slice(re.lastIndex, end < 0 ? src.length : end); re.lastIndex = end < 0 ? src.length : end; } st.push(el); } continue; }
    if (m[5] != null) { if (m[5].trim()) top.kids.push({ t: '#text', text: m[5], parent: top }); continue; }
    if (m[6]) errs.push({ k: 'lt', line: at(m.index) });
  }
  for (let j = st.length - 1; j > 0; j--) if (!['html', 'body', 'head', 'p', 'li'].includes(st[j].t)) errs.push({ k: 'open', t: st[j].t, line: st[j].line });
  return { root, errs };
}
const webAll = (n, out = []) => { for (const k of n.kids || []) if (k.t !== '#text') { out.push(k); webAll(k, out); } return out; };
const webText = n => n.t === '#text' ? n.text : (n.kids || []).map(webText).join('');
const webTxt = n => webText(n).replace(/\s+/g, ' ').trim();
/* ---------- CSS: regles { selectors, decls, media? } ---------- */
function webCSS(src) {
  const rules = [], errs = []; src = String(src || '').replace(/\/\*[\s\S]*?\*\//g, '');
  const parse = (s, media) => { let i = 0;
    while (i < s.length) {
      const o = s.indexOf('{', i); if (o < 0) { if (s.slice(i).trim()) errs.push({ k: 'brace' }); break; }
      const head = s.slice(i, o).trim(); let d = 1, j = o + 1; while (j < s.length && d) { if (s[j] === '{') d++; else if (s[j] === '}') d--; j++; }
      if (d) errs.push({ k: 'brace', sel: head });
      const body = s.slice(o + 1, d ? s.length : j - 1);
      if (head.startsWith('@media')) parse(body, head.slice(6).trim());
      else if (head.startsWith('@')) { /* @font-face, @keyframes… */ rules.push({ at: head, body }); }
      else { const decls = {}; body.split(';').forEach(x => { const c = x.indexOf(':'); if (c < 0) { if (x.trim()) errs.push({ k: 'decl', sel: head, d: x.trim() }); return; } if (/[\s\n][a-z-]+\s*:/i.test(x.slice(c + 1)) && !/url\(|https?:/i.test(x)) errs.push({ k: 'semi', sel: head, d: x.trim() }); const p = x.slice(0, c).trim().toLowerCase(), v = x.slice(c + 1).trim(); if (p && v) decls[p] = v; else if (p) errs.push({ k: 'decl', sel: head, d: x.trim() }); });
        rules.push({ sel: head.split(',').map(z => z.trim().replace(/\s+/g, ' ')).filter(Boolean), decls, media: media || null }); }
      i = j; } };
  parse(src); return { rules, errs };
}
// un selector senzill (etiqueta, .classe, #id, combinats i descendents «ul li», amb :hover) apunta a un element?
function webMatch(el, sel) {
  const parts = sel.replace(/:{1,2}[\w-]+(\([^)]*\))?/g, '').split(/\s*>\s*|\s+/).filter(Boolean); if (!parts.length) return false;
  const one = (e, p) => { if (!e || e.t === '#root') return false; if (p === '*') return true; const m = p.match(/^([a-z][\w-]*)?((?:[.#][\w-]+)*)$/i); if (!m) return false; if (m[1] && m[1].toLowerCase() !== e.t) return false;
    const cls = (e.attrs.class || '').split(/\s+/); for (const q of (m[2].match(/[.#][\w-]+/g) || [])) { if (q[0] === '.' && !cls.includes(q.slice(1))) return false; if (q[0] === '#' && e.attrs.id !== q.slice(1)) return false; } return true; };
  if (!one(el, parts[parts.length - 1])) return false;
  let e = el.parent; for (let k = parts.length - 2; k >= 0; k--) { while (e && !one(e, parts[k])) e = e.parent; if (!e) return false; e = e.parent; } return true;
}
// el valor d'una propietat per a un element (l'última regla que hi apunta; sense herència ni especificitat fina)
function webProp(doc, el, p) { let v = null; for (const r of doc.css.rules) if (r.decls && r.decls[p] != null && r.sel.some(s => webMatch(el, s))) v = r.decls[p]; if (el.attrs.style) el.attrs.style.split(';').forEach(x => { const c = x.indexOf(':'); if (c > 0 && x.slice(0, c).trim().toLowerCase() === p) v = x.slice(c + 1).trim(); }); return v; }
function webDoc(html, css) {
  const H = webParse(html || ''), inner = webAll(H.root).filter(e => e.t === 'style').map(e => e.css || '').join('\n');
  return { html: H, css: webCSS((css || '') + '\n' + inner), els: webAll(H.root) };
}
/* ---------- Comprovacions ----------
   { k: 'tag', t: 'h1', min?: 1, max?, text?: 'conté' } · { k: 'in', t: 'li', p: 'ul', min? } (dins de) · { k: 'attr', t: 'img', a: 'alt', v?: 'valor o /regex/' , min? }
   { k: 'text', t: 'h1', min?: 3 } (text de com a mínim N lletres) · { k: 'order', a: 'h1', b: 'p' } · { k: 'css', s: 'h1', p: 'color', v?: '/regex/' } (una regla per a aquest selector)
   { k: 'styled', t: 'h1', p: 'color', v? } (l'element té la propietat, vingui d'on vingui) · { k: 'prop', p: 'font-family', v? } (alguna regla la fa servir)
   { k: 'media', max?: 600 } (@media) · { k: 'class', c: 'targeta', min? } (elements amb aquesta classe) · { k: 'id', id } · { k: 'link', href?: '/regex/', min? }
   { k: 'clean' } (sense errors: totes les etiquetes ben tancades) · { k: 'cssclean' } · { k: 'notag', t } · { k: 'rules', min } · { k: 'lang' } (<html lang>) · { k: 'title' } */
const webRx = v => typeof v === 'string' && v.length > 2 && v[0] === '/' && v.lastIndexOf('/') > 0 ? new RegExp(v.slice(1, v.lastIndexOf('/')), v.slice(v.lastIndexOf('/') + 1) || 'i') : null;
const webEq = (got, v) => { if (v == null) return got != null && String(got).trim() !== ''; if (got == null) return false; const r = webRx(v); return r ? r.test(String(got)) : String(got).trim().toLowerCase() === String(v).toLowerCase(); };
function webCheck(doc, c) {
  const E = doc.els, of = t => E.filter(e => e.t === t);
  switch (c.k) {
    case 'notext': return !(c.t ? of(c.t) : E).some(e => webTxt(e).toLowerCase().includes(String(c.text).toLowerCase()));
    case 'tag': { const l = of(c.t).filter(e => !c.text || webTxt(e).toLowerCase().includes(c.text.toLowerCase())); return l.length >= (c.min ?? 1) && (c.max == null || l.length <= c.max); }
    case 'in': return of(c.t).filter(e => { let p = e.parent; while (p && p.t !== c.p) p = p.parent; return !!p; }).length >= (c.min ?? 1);
    case 'attr': return of(c.t).filter(e => webEq(e.attrs[c.a], c.v)).length >= (c.min ?? 1);
    case 'text': return of(c.t).some(e => webTxt(e).length >= (c.min ?? 1));
    case 'order': { const a = E.find(e => e.t === c.a), b = E.find(e => e.t === c.b); return !!(a && b && E.indexOf(a) < E.indexOf(b)); }
    case 'css': return doc.css.rules.some(r => r.sel && r.sel.some(s => s.toLowerCase() === c.s.toLowerCase()) && (c.p ? webEq(r.decls[c.p], c.v) : true) && (!c.media || r.media));
    case 'styled': return of(c.t).some(e => webEq(webProp(doc, e, c.p), c.v));
    case 'prop': return doc.css.rules.some(r => r.decls && webEq(r.decls[c.p], c.v));
    case 'media': return doc.css.rules.some(r => r.media && (!c.max || new RegExp(`max-width\\s*:\\s*${c.max}`).test(r.media)));
    case 'class': return E.filter(e => (e.attrs.class || '').split(/\s+/).includes(c.c)).length >= (c.min ?? 1);
    case 'id': return E.some(e => e.attrs.id === c.id);
    case 'link': return of('a').filter(e => e.attrs.href && webEq(e.attrs.href, c.href) && (!c.text || webTxt(e))).length >= (c.min ?? 1);
    case 'clean': return !doc.html.errs.some(e => e.k === 'open' || e.k === 'close' || e.k === 'lt');
    case 'cssclean': return !doc.css.errs.length;
    case 'notag': return !of(c.t).length;
    case 'rules': return doc.css.rules.filter(r => r.sel).length >= c.min;
    case 'lang': return of('html').some(e => e.attrs.lang);
    case 'title': return of('title').some(e => webTxt(e));
  }
  return false;
}
// el text de cada comprovació (si el repte no en porta un de propi)
function webCheckTxt(c) {
  const tag = t => `<code>&lt;${t}&gt;</code>`;
  switch (c.k) {
    case 'notext': return L(`Ja no queda «${esc(c.text)}» (l'has canviat pel teu text)`, `Ya no queda «${esc(c.text)}» (lo has cambiado por tu texto)`);
    case 'tag': return (c.min ?? 1) > 1 ? L(`Hi ha almenys ${c.min} ${tag(c.t)}`, `Hay al menos ${c.min} ${tag(c.t)}`) : c.text ? L(`Hi ha un ${tag(c.t)} amb «${esc(c.text)}»`, `Hay un ${tag(c.t)} con «${esc(c.text)}»`) : L(`Hi ha un ${tag(c.t)}`, `Hay un ${tag(c.t)}`);
    case 'in': return L(`Hi ha ${c.min > 1 ? c.min + ' ' : ''}${tag(c.t)} dins de ${tag(c.p)}`, `Hay ${c.min > 1 ? c.min + ' ' : ''}${tag(c.t)} dentro de ${tag(c.p)}`);
    case 'attr': return L(`${tag(c.t)} té l'atribut <code>${c.a}</code>`, `${tag(c.t)} tiene el atributo <code>${c.a}</code>`);
    case 'text': return L(`${tag(c.t)} té text`, `${tag(c.t)} tiene texto`);
    case 'order': return L(`${tag(c.a)} va abans de ${tag(c.b)}`, `${tag(c.a)} va antes de ${tag(c.b)}`);
    case 'css': return L(`Una regla <code>${esc(c.s)} { ${c.p || ''}${c.p ? ': …' : ''} }</code>`, `Una regla <code>${esc(c.s)} { ${c.p || ''}${c.p ? ': …' : ''} }</code>`);
    case 'styled': return L(`${tag(c.t)} té <code>${c.p}</code>`, `${tag(c.t)} tiene <code>${c.p}</code>`);
    case 'prop': return L(`Fas servir <code>${c.p}</code>`, `Usas <code>${c.p}</code>`);
    case 'media': return L('Hi ha una regla <code>@media</code> per al mòbil', 'Hay una regla <code>@media</code> para el móvil');
    case 'class': return L(`Hi ha ${c.min > 1 ? c.min + ' elements' : 'un element'} amb la classe <code>.${c.c}</code>`, `Hay ${c.min > 1 ? c.min + ' elementos' : 'un elemento'} con la clase <code>.${c.c}</code>`);
    case 'id': return L(`Hi ha un element amb l'id <code>#${c.id}</code>`, `Hay un elemento con el id <code>#${c.id}</code>`);
    case 'link': return L(`Hi ha ${c.min > 1 ? c.min + ' enllaços' : 'un enllaç'} <code>&lt;a href&gt;</code>`, `Hay ${c.min > 1 ? c.min + ' enlaces' : 'un enlace'} <code>&lt;a href&gt;</code>`);
    case 'clean': return L('Totes les etiquetes estan ben tancades', 'Todas las etiquetas están bien cerradas');
    case 'cssclean': return L('El CSS no té errors', 'El CSS no tiene errores');
    case 'notag': return L(`No hi ha cap ${tag(c.t)}`, `No hay ningún ${tag(c.t)}`);
    case 'rules': return L(`Hi ha almenys ${c.min} regles de CSS`, `Hay al menos ${c.min} reglas de CSS`);
    case 'lang': return L('<code>&lt;html&gt;</code> diu l\'idioma (lang)', '<code>&lt;html&gt;</code> dice el idioma (lang)');
    case 'title': return L('La pàgina té <code>&lt;title&gt;</code>', 'La página tiene <code>&lt;title&gt;</code>');
  }
  return c.k;
}
const webRun = (st, html, css) => { const d = webDoc(html, css); return (st.checks || []).map(c => !!webCheck(d, c)); };
// errors explicats (per a l'ajuda mentre escriuen)
function webErrTxt(d) {
  const e = d.html.errs.find(x => x.k !== 'unknown') || d.html.errs[0] || d.css.errs[0]; if (!e) return '';
  if (e.k === 'open') return L(`L'etiqueta <code>&lt;${e.t}&gt;</code> de la línia ${e.line} no està tancada: falta <code>&lt;/${e.t}&gt;</code>.`, `La etiqueta <code>&lt;${e.t}&gt;</code> de la línea ${e.line} no está cerrada: falta <code>&lt;/${e.t}&gt;</code>.`);
  if (e.k === 'close') return L(`A la línia ${e.line} es tanca <code>&lt;/${e.t}&gt;</code>, però no s'havia obert.`, `En la línea ${e.line} se cierra <code>&lt;/${e.t}&gt;</code>, pero no se había abierto.`);
  if (e.k === 'unknown') return L(`<code>&lt;${e.t}&gt;</code> (línia ${e.line}) no és una etiqueta d'HTML. Està ben escrita?`, `<code>&lt;${e.t}&gt;</code> (línea ${e.line}) no es una etiqueta de HTML. ¿Está bien escrita?`);
  if (e.k === 'lt') return L(`Hi ha un «&lt;» sol a la línia ${e.line}.`, `Hay un «&lt;» suelto en la línea ${e.line}.`);
  if (e.k === 'brace') return L(`Al CSS falta tancar una clau <code>}</code>${e.sel ? ` (a <code>${esc(e.sel)}</code>)` : ''}.`, `En el CSS falta cerrar una llave <code>}</code>${e.sel ? ` (en <code>${esc(e.sel)}</code>)` : ''}.`);
  if (e.k === 'decl') return L(`Al CSS, <code>${esc(e.d)}</code> no té el format <code>propietat: valor;</code>`, `En el CSS, <code>${esc(e.d)}</code> no tiene el formato <code>propiedad: valor;</code>`);
  return '';
}
/* ---------- La pàgina per a la vista prèvia ---------- */
function webPage(html, css, o = {}) {
  const base = `<style>html{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.45;color:#1d2433}body{margin:12px}img{max-width:100%}${o.extra || ''}</style>`;
  const h = String(html || '');
  if (/<head[\s>]/i.test(h)) return h.replace(/<head[^>]*>/i, m => m + base + `<style>${css || ''}</style>`);
  if (/<html[\s>]/i.test(h)) return h.replace(/<html[^>]*>/i, m => m + `<head><meta charset="utf-8">${base}<style>${css || ''}</style></head>`);
  return `<!doctype html><html><head><meta charset="utf-8">${base}<style>${css || ''}</style></head><body>${h}</body></html>`;
}

/* =====================================================================================================================
   Interfície: l'editor (HTML i CSS, amb colors), la vista prèvia (mòbil / ordinador) i les comprovacions
   ===================================================================================================================== */
// colors del codi (s'escriu sobre una capa de sota: el textarea és transparent)
function webHL(code, lang) {
  const e = esc(code);
  if (lang === 'css') return e.replace(/(\/\*[\s\S]*?\*\/)/g, '<i class="wc">$1</i>').replace(/([^{}\n][^{}]*?)(\{)/g, '<i class="ws">$1</i>$2').replace(/([\w-]+)(\s*:)(?![^{]*\{)/g, '<i class="wp">$1</i>$2').replace(/(:\s*)([^;{}\n]+)(;)/g, '$1<i class="wv">$2</i>$3');
  return e.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<i class="wc">$1</i>').replace(/(&lt;\/?)([a-zA-Z][\w-]*)([\s\S]*?)(\/?&gt;)/g, (m, a, t, at, b) => `<i class="wt">${a}${t}</i>${at.replace(/([\w-]+)(=)(&quot;[^&]*?&quot;|"[^"]*")/g, '<i class="wa">$1</i>$2<i class="wv">$3</i>')}<i class="wt">${b}</i>`);
}
let WB = null, WB_T = null;
function wbMake(st, o = {}) {
  WB = { st, html: o.html ?? st.html ?? '', css: o.css ?? st.css ?? '', tab: st.tab || (st.html == null && st.css != null ? 'css' : 'html'), dev: 'mob', solved: false, tries: 0, mode: o.mode || 'edit', onDone: null };
  if (st.tabs && !st.tabs.includes(WB.tab)) WB.tab = st.tabs[0];
  return WB;
}
const wbTabs = () => WB.st.tabs || (WB.st.css != null || (WB.st.checks || []).some(c => ['css', 'styled', 'prop', 'media', 'rules', 'cssclean'].includes(c.k)) ? ['html', 'css'] : ['html']);
function wbHTML() {
  const tabs = wbTabs(), ro = WB.mode !== 'edit', checks = WB.st.checks || [], res = webRun(WB.st, WB.html, WB.css);
  const snips = (WB.st.snips || []).filter(x => typeof x === 'string' ? WB.tab === 'html' || x.includes('{') || x.includes(':') : (x.tab || 'html') === WB.tab);
  return `<div class="tstage wstage"><div class="wedit"><div class="wtabs">${tabs.map(t => `<button class="${t === WB.tab ? 'on' : ''}" onclick="wbTab('${t}')">${t === 'html' ? 'HTML' : 'CSS'}<small>${t === 'html' ? 'index.html' : 'estil.css'}</small></button>`).join('')}<span class="wlang">${L('codi', 'código')}</span></div>
      <div class="wcode"><div class="wln" id="wln"></div><div class="warea"><pre class="whl" id="whl" aria-hidden="true"></pre><textarea id="wta" spellcheck="false" autocapitalize="off" autocomplete="off" ${ro ? 'readonly' : ''}></textarea></div></div>
      ${snips.length && !ro ? `<div class="wsnips">${snips.map((x, i) => { const t = (typeof x === 'string' ? x : x.t).replace('|', ''); return `<button onclick="wbSnip(${(WB.st.snips || []).indexOf(x)})">${esc(t.length > 26 ? t.slice(0, 24) + '…' : t)}</button>`; }).join('')}</div>` : ''}
      <p class="werr" id="werr"></p></div>
    <div class="wview"><div class="wbar"><span class="wdots"><i></i><i></i><i></i></span><span class="wurl">${esc(WB.st.url || 'la-meva-web.numi')}</span><span class="wdev"><button class="${WB.dev === 'mob' ? 'on' : ''}" onclick="wbDev('mob')" aria-label="${L('Mòbil', 'Móvil')}">📱</button><button class="${WB.dev === 'pc' ? 'on' : ''}" onclick="wbDev('pc')" aria-label="${L('Ordinador', 'Ordenador')}">💻</button></span></div>
      <div class="wframe d-${WB.dev}"><iframe id="wfr" sandbox="" title="${L('Vista prèvia', 'Vista previa')}"></iframe></div>
      ${checks.length ? `<ul class="wchecks" id="wchecks">${checks.map((c, i) => `<li class="${res[i] ? 'ok' : ''}"><span>${res[i] ? TIC.ok : '○'}</span>${c.txt ? tval(c.txt) : webCheckTxt(c)}</li>`).join('')}</ul>` : ''}
      <p class="tsay" id="tsay" aria-live="polite"></p></div></div>`;
}
function wbMount() {
  const ta = document.getElementById('wta'); if (!ta) return;
  ta.value = WB.tab === 'css' ? WB.css : WB.html;
  const sync = () => { const v = ta.value; document.getElementById('whl').innerHTML = webHL(v, WB.tab) + '\n'; document.getElementById('wln').innerHTML = v.split('\n').map((_, i) => `<i>${i + 1}</i>`).join(''); document.getElementById('whl').scrollTop = ta.scrollTop; document.getElementById('wln').scrollTop = ta.scrollTop; };
  ta.oninput = () => { if (WB.tab === 'css') WB.css = ta.value; else WB.html = ta.value; sync(); clearTimeout(WB_T); WB_T = setTimeout(wbUpdate, 260); };
  ta.onscroll = () => { document.getElementById('whl').scrollTop = ta.scrollTop; document.getElementById('wln').scrollTop = ta.scrollTop; };
  // tabulador i tancament automàtic d'etiquetes (en escriure «>»)
  ta.onkeydown = e => { if (e.key === 'Tab') { e.preventDefault(); wbInsert('  '); } };
  ta.addEventListener('beforeinput', e => { if (e.data === '>' && WB.tab === 'html' && WB.st.autoclose !== false) { const s0 = ta.selectionStart, before = ta.value.slice(0, s0), m = before.match(/<([a-zA-Z][\w-]*)(\s[^<>]*)?$/); if (m && !WEB_VOID.has(m[1].toLowerCase())) { e.preventDefault(); wbInsert('></' + m[1] + '>', 1); } } });
  sync(); wbUpdate(true);
}
function wbInsert(txt, caret) { const ta = document.getElementById('wta'); if (!ta) return; const a = ta.selectionStart, b = ta.selectionEnd; ta.value = ta.value.slice(0, a) + txt + ta.value.slice(b); const pos = a + (caret != null ? caret : txt.length); ta.selectionStart = ta.selectionEnd = pos; ta.focus(); ta.dispatchEvent(new Event('input')); }
// fragments per inserir (útil al mòbil): «<h1>|</h1>» → el cursor va on hi ha la barra
function wbSnip(i) { const x = WB.st.snips[i], t = typeof x === 'string' ? x : x.t, c = t.indexOf('|'); wbInsert(t.replace('|', ''), c < 0 ? undefined : c); SFX.tap && SFX.tap(); }
function wbTab(t) { WB.tab = t; wbRedraw(); }
function wbDev(d) { WB.dev = d; const f = document.querySelector('.wframe'); if (f) f.className = 'wframe d-' + d; document.querySelectorAll('.wdev button').forEach(b => b.classList.toggle('on', b.getAttribute('onclick').includes(`'${d}'`))); }
function wbRedraw() { const el = document.querySelector('.wstage'); if (!el) return; el.outerHTML = wbHTML(); wbMount(); }
function wbUpdate(first) {
  const fr = document.getElementById('wfr'); if (fr) fr.srcdoc = webPage(WB.html, WB.css);
  const d = webDoc(WB.html, WB.css), res = (WB.st.checks || []).map(c => !!webCheck(d, c));
  const ul = document.getElementById('wchecks'); if (ul) [...ul.children].forEach((li, i) => { const was = li.classList.contains('ok'); li.classList.toggle('ok', res[i]); li.firstChild.innerHTML = res[i] ? TIC.ok : '○'; if (res[i] && !was && !first) { li.classList.add('pop'); SFX.tap && SFX.tap(); } });
  const er = document.getElementById('werr'); if (er) er.innerHTML = webErrTxt(d) ? `⚠️ ${webErrTxt(d)}` : '';
  if (WB.mode === 'edit' && res.length && res.every(Boolean) && !WB.solved && !first) { WB.solved = true; SFX.win && SFX.win(); typeof confetti === 'function' && confetti(80); const s = document.getElementById('tsay'); if (s) { s.className = 'tsay ok'; s.innerHTML = WB.st.done ? tval(WB.st.done) : L('Molt bé! La pàgina fa tot el que demana el repte.', '¡Muy bien! La página hace todo lo que pide el reto.'); } WB.onDone && WB.onDone(); }
  else if (WB.solved && !res.every(Boolean)) WB.solved = false;
}
/* ---------- Tipus de pas de Web ----------
   web: repte { q, html?, css?, tabs?, checks: [...], snips?, sol: { html, css }, hint, url? } · wcreate: projecte { …, name, crit } (es desa)
   wspot: troba la línia amb l'error { q, html|css, bad: número de línia (des de 1), ex } · wquiz: quina vista prèvia fa aquest codi? { q, code: { html, css }, opts: [{ html, css }], a } */
function wbStage(st) {
  const q = st.q ? `<div class="tsq2"><span class="tsqc">${charSVG('numi', 'idle')}</span><div><p>${tval(st.q)}</p>${st.crit ? `<ul class="tcrit">${st.crit.map(c => `<li>${tval(c)}</li>`).join('')}</ul>` : ''}</div></div>` : '';
  $('#tsb').innerHTML = q + wbHTML(); $('#tsb').classList.add('wide'); wbMount();
}
function wbHintBtn(st) {
  if (document.getElementById('thint') || !(st.hint || st.sol)) return;
  const f = document.getElementById('tsf'), b = document.createElement('button'); b.className = 'btn ghost'; b.id = 'thint'; b.textContent = L('Una pista', 'Una pista');
  b.onclick = () => { const s = document.getElementById('tsay'); if (st.hint && !b.dataset.k) { b.dataset.k = 1; if (s) { s.className = 'tsay'; s.innerHTML = `💡 ${tval(st.hint)}`; } b.textContent = L('Mostra una solució', 'Muestra una solución'); return; }
    if (st.sol) { WB.html = st.sol.html ?? WB.html; WB.css = st.sol.css ?? WB.css; wbRedraw(); if (s) { s.className = 'tsay'; s.innerHTML = L('Aquí tens una solució. Llegeix-la línia a línia i compara-la amb la teva.', 'Aquí tienes una solución. Léela línea a línea y compárala con la tuya.'); } wbUpdate(); b.remove(); } };
  f.insertBefore(b, f.firstChild);
}
// codi bilingüe: html, css i la solució poden ser { ca: '…', es: '…' } (la pàgina d'exemple en la llengua de l'alumne/a)
const webL = (v, lang) => v && typeof v === 'object' && ('ca' in v || 'es' in v) ? ((lang || (typeof LANG !== 'undefined' ? LANG : 'ca')) === 'es' ? v.es ?? v.ca : v.ca ?? v.es) : v;
function webLoc(st, lang) {
  const o = { ...st }; for (const k of ['html', 'css', 'page']) if (k in o) o[k] = webL(o[k], lang);
  if (o.sol) o.sol = { html: webL(o.sol.html, lang), css: webL(o.sol.css, lang) }; if (o.code) o.code = { html: webL(o.code.html, lang), css: webL(o.code.css, lang) };
  if (o.opts) o.opts = o.opts.map(x => x && typeof x === 'object' && !Array.isArray(x) ? { html: webL(x.html, lang), css: webL(x.css, lang) } : x); return o;
}
if (typeof TSTEP !== 'undefined') {
  TSTEP.web = function (st) { st = webLoc(st); wbMake(st); WB.onDone = () => tContinue(); wbStage(st); tFoot(L('Continua', 'Continúa'), tNext, false); setTimeout(() => wbHintBtn(st), 90000); const ta = document.getElementById('wta'); if (ta) ta.addEventListener('input', () => { WB.tries++; if (WB.tries === 40) wbHintBtn(st); }); };
  TSTEP.wcreate = function (st) {
    st = webLoc(st); TSTEP.web(st);
    WB.onDone = () => tFoot(L('Desa-ho i continua', 'Guárdalo y continúa'), () => { const t = TS_(); t.port.push({ id: 'pj' + Date.now().toString(36), kind: 'web', sid: TSS.id, t: st.name || TSS.s.t, html: WB.html, css: WB.css, d: today() }); if (t.port.length > 60) t.port.shift(); save(); toast(L('Pàgina desada a «Projectes»!', '¡Página guardada en «Proyectos»!')); tNext(); }, true);
  };
  TSTEP.wspot = function (st) {
    st = webLoc(st); const code = st.html ?? st.css, lang = st.html != null ? 'html' : 'css';   // amb css i `page` (html de la pàgina), la vista prèvia ensenya l'efecte
    $('#tsb').innerHTML = `<div class="tcol"><div class="tqh"><span class="tqbit">${bitChar('think')}</span><h2 class="tsq">${tval(st.q)}</h2></div><div class="wspot">${code.split('\n').map((l, i) => `<button class="wsl" data-i="${i + 1}"><i>${i + 1}</i><code>${webHL(l, lang) || ' '}</code></button>`).join('')}</div>
      ${st.preview !== false ? `<div class="wframe mini"><iframe sandbox="" srcdoc="${esc(webPage(st.html || st.page || '', st.css || (lang === 'css' ? code : '')))}"></iframe></div>` : ''}<div class="tfb" id="tfb"></div></div>`;
    document.querySelectorAll('.wsl').forEach(b => b.onclick = () => { if (TSS.ready) return; TSS.ready = true; const ok = +b.dataset.i === st.bad; b.classList.add(ok ? 'ok' : 'ko'); if (!ok) document.querySelector(`.wsl[data-i="${st.bad}"]`).classList.add('ok');
      $('#tfb').innerHTML = `<div class="tfbox ${ok ? 'ok' : 'ko'}"><b>${ok ? L('Molt bé!', '¡Muy bien!') : L('No és aquesta línia.', 'No es esta línea.')}</b> ${st.ex ? tval(st.ex) : ''}</div>`; ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko(); tContinue(); });
    tFoot(L('Toca la línia', 'Toca la línea'), () => { }, false);
  };
  TSTEP.wquiz = function (st) {
    st = webLoc(st);
    const order = shuffle(st.opts.map((_, i) => i)); let pick = null;
    $('#tsb').innerHTML = `<div class="tcol"><div class="tqh"><span class="tqbit">${bitChar('think')}</span><h2 class="tsq">${tval(st.q)}</h2></div>
      ${st.code ? `<pre class="wpre">${st.code.html != null ? webHL(st.code.html, 'html') : ''}${st.code.css ? (st.code.html ? '\n\n' : '') + webHL(st.code.css, 'css') : ''}</pre>` : ''}
      <div class="topts grid wqopts">${order.map((i, k) => `<button class="topt wqo" data-i="${i}"><span class="tol">${'ABCD'[k]}</span><span class="wframe mini"><iframe sandbox="" tabindex="-1" srcdoc="${esc(webPage(st.opts[i].html || '', st.opts[i].css || ''))}"></iframe></span></button>`).join('')}</div><div class="tfb" id="tfb"></div></div>`;
    document.querySelectorAll('.wqo').forEach(b => b.onclick = () => { if (TSS.ready) return; pick = +b.dataset.i; document.querySelectorAll('.wqo').forEach(x => x.classList.toggle('on', x === b)); tFoot(L('Comprova', 'Comprueba'), check); });
    const check = () => { if (pick === null) return; TSS.ready = true; const ok = pick === st.a; document.querySelectorAll('.wqo').forEach(x => { const i = +x.dataset.i; if (i === st.a) x.classList.add('ok'); else if (i === pick) x.classList.add('ko'); });
      $('#tfb').innerHTML = `<div class="tfbox ${ok ? 'ok' : 'ko'}"><b>${ok ? L('Molt bé!', '¡Muy bien!') : L('No ben bé.', 'No exactamente.')}</b> ${st.ex ? tval(st.ex) : ''}</div>`; ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko(); tContinue(); };
    tFoot(L('Comprova', 'Comprueba'), check, false);
  };
}
/* ---------- Demos (targetes de teoria i diapositives): el codi i el resultat, un al costat de l'altre ---------- */
var TMEDIA = typeof TMEDIA !== 'undefined' ? TMEDIA : {};
TMEDIA.web = {
  html: m => (m = webLoc(m), `<div class="wdemo"><pre class="wpre">${m.html != null ? webHL(m.html, 'html') : ''}${m.css ? (m.html ? '\n\n' : '') + webHL(m.css, 'css') : ''}</pre><div class="wframe mini"><iframe sandbox="" srcdoc="${esc(webPage(m.html || '', m.css || ''))}"></iframe></div></div>`),
  slide: m => TMEDIA.web.html(m)
};
if (typeof TPORT !== 'undefined') TPORT.web = {
  thumb: p => `<span class="wthumb"><iframe sandbox="" tabindex="-1" srcdoc="${esc(webPage(p.html, p.css))}"></iframe></span>`,
  open: p => { wbMake({ html: p.html, css: p.css, tabs: ['html', 'css'] }, { mode: 'view' }); return `<div class="tsbody wide">${wbHTML()}</div>`; },
  mount: () => wbMount()
};
var TVALID = typeof TVALID !== 'undefined' ? TVALID : {};
TVALID.web = TVALID.wcreate = st => { const out = []; if (!st.checks || !st.checks.length) out.push('el repte no té comprovacions (checks)'); if (!st.sol) return out.concat('falta la solució (sol: { html, css })');
  const d = webDoc(st.sol.html ?? st.html ?? '', st.sol.css ?? st.css ?? ''); (st.checks || []).forEach((c, i) => { if (!webCheck(d, c)) out.push(`la solució no passa la comprovació ${i + 1} (${c.k}${c.t ? ' ' + c.t : ''}${c.s ? ' ' + c.s : ''}${c.p ? ' ' + c.p : ''})`); });
  if (d.html.errs.some(e => e.k !== 'unknown') && (st.checks || []).some(c => c.k === 'clean')) out.push('la solució té errors d\'HTML');
  const d0 = webDoc(st.html ?? '', st.css ?? ''); if ((st.checks || []).length && st.checks.every(c => webCheck(d0, c))) out.push('el codi de partida ja passa totes les comprovacions');
  return out; };
TVALID.wspot = st => { const code = st.html ?? st.css; if (code == null) return ['falta el codi']; const n = code.split('\n').length; return st.bad >= 1 && st.bad <= n ? [] : [`bad (${st.bad}) fora de rang (1-${n})`]; };
TVALID.wquiz = st => (!st.opts || st.opts.length < 2 || !(st.a >= 0 && st.a < st.opts.length)) ? ['opcions o resposta incorrectes'] : [];
TVALID['media:web'] = m => (m.html == null && m.css == null) ? ['la demo web no té codi'] : [];

// el codi pot ser bilingüe: es comprova en català i en castellà
for (const k of ['web', 'wcreate', 'wspot', 'wquiz']) if (TVALID[k]) { const f = TVALID[k]; TVALID[k] = st => { const a = [].concat(f(webLoc(st, 'ca')) || []), b = [].concat(f(webLoc(st, 'es')) || []).filter(m => !a.includes(m)).map(m => '(es) ' + m); return a.concat(b); }; }
