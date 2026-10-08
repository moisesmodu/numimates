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
// o.live (la vista prèvia gran): els enllaços es poden provar. Un guió nostre, amb «nonce», fa que els enllaços #id
// facin el salt dins de la pàgina i que la resta ensenyin on portarien (sense sortir de la vista prèvia). La política
// de seguretat (CSP) del principi impedeix que s'executi cap altre guió: el codi de l'alumne/a continua sense scripts.
function webLive(nonce) {
  const T = JSON.stringify({ go: L('Aquest enllaç porta a', 'Este enlace lleva a'), pub: L('A la web publicada, t\'hi portaria.', 'En la web publicada, te llevaría allí.'), no: L('No hi ha cap element amb aquest id a la pàgina:', 'No hay ningún elemento con este id en la página:') }).replace(/</g, '\\u003c');
  return `<meta http-equiv="Content-Security-Policy" content="script-src 'nonce-${nonce}'; object-src 'none'; form-action 'none'"><script nonce="${nonce}">(function(){var T=${T};var box=null,tm=0;
function tip(a,b,bad){if(!box){var h=document.createElement('numi-tip');document.documentElement.appendChild(h);var r=h.attachShadow({mode:'closed'});r.innerHTML='<style>div{position:fixed;left:10px;right:10px;bottom:34px;z-index:2147483647;font:700 14px/1.35 system-ui,sans-serif;color:#fff;background:rgba(20,32,74,.94);border-radius:12px;padding:10px 12px;box-shadow:0 10px 26px rgba(0,0,0,.3);transition:opacity .25s,transform .25s;opacity:0;transform:translateY(8px)}div.on{opacity:1;transform:none}div.bad{background:rgba(180,80,26,.95)}b{font-family:ui-monospace,Menlo,Consolas,monospace;background:rgba(255,255,255,.16);border-radius:5px;padding:0 5px}small{display:block;font-weight:600;opacity:.8;margin-top:2px}</style><div></div>';box=r.querySelector('div');}
box.className=bad?'bad':'';box.innerHTML='';var t=document.createElement('span');t.textContent=a+' ';var c=document.createElement('b');c.textContent=b;box.appendChild(t);box.appendChild(c);if(!bad){var s=document.createElement('small');s.textContent=T.pub;box.appendChild(s);}void box.offsetWidth;box.className+=' on';clearTimeout(tm);tm=setTimeout(function(){box.className=box.className.replace(' on','');},2600);}
document.addEventListener('click',function(e){var a=e.target&&e.target.closest?e.target.closest('a[href]'):null;if(!a)return;var h=a.getAttribute('href')||'';e.preventDefault();
if(h.charAt(0)==='#'){var id=h.slice(1);try{id=decodeURIComponent(id);}catch(x){}var el=id?document.getElementById(id):null;if(el){el.scrollIntoView({behavior:'smooth',block:'start'});}else if(!id){window.scrollTo({top:0,behavior:'smooth'});}else{tip(T.no,'id="'+id+'"',true);}return;}
tip(T.go,h,false);},true);
document.addEventListener('submit',function(e){e.preventDefault();},true);})();<\/script>`;
}
function webPage(html, css, o = {}) {
  const base = `<style>html{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.45;color:#1d2433;scroll-behavior:smooth}body{margin:12px}img{max-width:100%}${o.extra || ''}</style>`;
  let h = String(html || '');
  if (o.live) { const pre = webLive(o.live); const d = h.match(/^\s*(<!--[\s\S]*?-->\s*)*<!doctype[^>]*>/i); h = d ? d[0] + pre + h.slice(d[0].length) : /<(html|head)[\s>]/i.test(h) ? pre + h : h; if (!/<(html|head)[\s>]/i.test(String(html || '')) && !d) return `<!doctype html><html><head><meta charset="utf-8">${pre}${base}<style>${css || ''}</style></head><body>${h}</body></html>`; }
  if (/<head[\s>]/i.test(h)) return h.replace(/<head[^>]*>/i, m => m + base + `<style>${css || ''}</style>`);
  if (/<html[\s>]/i.test(h)) return h.replace(/<html[^>]*>/i, m => m + `<head><meta charset="utf-8">${base}<style>${css || ''}</style></head>`);
  return `<!doctype html><html><head><meta charset="utf-8">${base}<style>${css || ''}</style></head><body>${h}</body></html>`;
}
// la pàgina completa per descarregar-la (per publicar-la): amb viewport i les imatges de Numi amb adreça completa
function webFile(html, css, title) {
  let h = String(html || '');
  const org = typeof location !== 'undefined' && /^https?:/.test(location.origin) ? location.origin + '/' : '';
  if (org) h = h.replace(/(src|href)=(["'])(img\/tech\/web\/)/g, `$1=$2${org}$3`);
  const meta = '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">';
  const base = 'html{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.45;color:#1d2433}body{margin:12px}img{max-width:100%}';
  const st = `<style>\n${base}\n${css || ''}\n</style>`;
  if (/<head[\s>]/i.test(h)) return h.replace(/<head[^>]*>/i, m => m + '\n' + (/<meta[^>]+viewport/i.test(h) ? '' : meta) + '\n' + st);
  if (/<html[\s>]/i.test(h)) return h.replace(/<html[^>]*>/i, m => `${m}\n<head>\n${meta}\n<title>${esc(title || 'Web')}</title>\n${st}\n</head>`);
  return `<!doctype html>\n<html lang="${typeof LANG !== 'undefined' ? LANG : 'ca'}">\n<head>\n${meta}\n<title>${esc(title || 'Web')}</title>\n${st}\n</head>\n<body>\n${h}\n</body>\n</html>\n`;
}

/* =====================================================================================================================
   Interfície: un editor de codi de veritat (pestanyes de fitxers, números de línia, colors, línia actual, barra
   d'estat), la vista prèvia dins d'un aparell (mòbil amb illa i barra d'estat, o finestra d'ordinador amb pestanya) i
   la llista de comprovacions que es marca sola mentre escriuen.
   · Mòbil (< 900 px): codi a dalt, vista prèvia a sota i les comprovacions en una barra que es desplega.
   · Ordinador: codi a l'esquerra; aparell i comprovacions a la dreta.
   · L'aparell simula l'amplada de debò (375 px el mòbil, 960 px l'ordinador) i s'escala per cabre: les regles
     @media (max-width: 600px) funcionen igual que en un mòbil o un ordinador de veritat.
   ===================================================================================================================== */
const WI = {
  lock: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3.2" y="7" width="9.6" height="7" rx="2" fill="currentColor"/><path d="M5.4 7V5.2a2.6 2.6 0 0 1 5.2 0V7" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
  warn: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.8 15 14H1z" fill="currentColor"/><path d="M8 6v3.6M8 11.6v.1" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="2.5" width="11" height="19" rx="2.8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10.4 18.4h3.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  laptop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4.5" width="16" height="11.5" rx="1.8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M1.8 19.2h20.4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  reload: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.2 12.5a7.2 7.2 0 1 1-2.1-5.6M19.4 3.8v4.4H15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 6 8.5 12l6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  fwd: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  img: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4.5" width="18" height="15" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="10" r="1.8" fill="currentColor"/><path d="m4.5 17.5 5-5 3.5 3.5 2.5-2.5 4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  reset: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.6 12a7.4 7.4 0 1 0 2.2-5.3M4.4 3.6v4.6H9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  dl: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5v11m-4.6-4.4L12 14.7l4.6-4.6M4.5 19.5h15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6.5 6.5 11 11m0-11-11 11" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  ok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="wtk" d="m6.2 12.6 3.7 3.6 7.9-8.4" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  chev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6.5 14.5 5.5-5.5 5.5 5.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  globe: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.3" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M1.9 8h12.2M8 1.7c2.2 2.1 2.2 10.5 0 12.6M8 1.7c-2.2 2.1-2.2 10.5 0 12.6" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>',
  bars: '<svg viewBox="0 0 18 12" aria-hidden="true"><rect x="0" y="8" width="3" height="4" rx="1" fill="currentColor"/><rect x="5" y="5.5" width="3" height="6.5" rx="1" fill="currentColor"/><rect x="10" y="3" width="3" height="9" rx="1" fill="currentColor"/><rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor"/></svg>',
  wifi: '<svg viewBox="0 0 16 12" aria-hidden="true"><path d="M1 4.2a10 10 0 0 1 14 0M3.4 6.8a6.6 6.6 0 0 1 9.2 0M5.8 9.3a3.2 3.2 0 0 1 4.4 0" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="8" cy="11" r="1" fill="currentColor"/></svg>',
  batt: '<svg viewBox="0 0 26 12" aria-hidden="true"><rect x=".8" y=".8" width="21.4" height="10.4" rx="3" fill="none" stroke="currentColor" stroke-width="1.3" opacity=".55"/><rect x="2.6" y="2.6" width="15" height="6.8" rx="1.6" fill="currentColor"/><path d="M23.7 4.2v3.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".55"/></svg>'
};
// les imatges pròpies que poden fer servir a les pàgines (la galeria de l'editor)
const WEB_IMGS = [['gat', 'gat', 'gato'], ['gos', 'gos', 'perro'], ['tortuga', 'tortuga', 'tortuga'], ['guineu', 'guineu', 'zorro'], ['lloro', 'lloro', 'loro'], ['peix', 'peix', 'pez'], ['balena', 'balena', 'ballena'], ['ocell', 'ocell', 'pájaro'], ['papallona', 'papallona', 'mariposa'], ['drac', 'drac', 'dragón'],
  ['robot', 'robot', 'robot'], ['coet', 'coet', 'cohete'], ['planeta', 'planeta', 'planeta'], ['espai', 'espai', 'espacio'], ['consola', 'consola', 'consola'], ['guitarra', 'guitarra', 'guitarra'], ['pizza', 'pizza', 'pizza'], ['fruita', 'fruita', 'fruta'], ['galetes', 'galetes', 'galletas'], ['pastis', 'pastís', 'pastel'],
  ['poma', 'poma', 'manzana'], ['platan', 'plàtan', 'plátano'], ['tomaquet', 'tomàquet', 'tomate'], ['pa', 'pa', 'pan'], ['sopa', 'sopa', 'sopa'], ['platja', 'platja', 'playa'], ['muntanya', 'muntanya', 'montaña'], ['bosc', 'bosc', 'bosque'], ['castell', 'castell', 'castillo'], ['ciutat', 'ciutat', 'ciudad'],
  ['pont', 'pont', 'puente'], ['seu-vella', 'Seu Vella', 'Seu Vella'], ['llibre', 'llibre', 'libro'], ['estrella', 'estrella', 'estrella'], ['pilota', 'pilota', 'pelota'], ['avatar', 'avatar', 'avatar'], ['icona-casa', 'icona casa', 'icono casa'], ['icona-cor', 'icona cor', 'icono corazón'], ['icona-correu', 'icona correu', 'icono correo'], ['icona-lupa', 'icona lupa', 'icono lupa']];

// i les icones de Numi (img/ic), que també es poden fer servir
const WEB_ICS = 'apple balloon banana basketball bell book books brain bulb calendar car cat castle chick cloud comet compass cookie crown cupcake detective diamond dog dragon eagle envelope fire flag flask flower football fox headphones key leaf lemon lion lock magnifier map masks medal moon octopus owl pencil puzzle rabbit racecar robot rocket school shield snowflake sparkles star stopwatch strawberry sun target trophy turtle volcano wave wolf'.split(' ');
/* ---------- Colors del codi: un analitzador de fitxes (HTML amb CSS dins de <style>, i CSS sol) ----------
   Torna fitxes { c: classe, t: text, sw?: color de la mostra }. Les classes: wpu (signes), wt (etiqueta), wa (atribut),
   wv (valor), wx (text), we (entitat), wc (comentari), wd (doctype), wbl (buit per omplir: ___ o ???), ws (selector),
   wsc (.classe), wsi (#id), wsp (:hover), wat (@media), wp (propietat), wnum (número), wu (unitat), wcol (color). */
const WEB_COLN = new Set('black white red green blue yellow orange purple pink brown gray grey navy teal crimson tomato coral olive maroon magenta violet indigo gold silver lime aqua cyan fuchsia beige ivory khaki lavender salmon plum orchid tan turquoise skyblue lightblue lightgreen lightgray lightgrey lightyellow lightpink darkgreen darkblue darkred darkorange darkviolet darkcyan darkgray darkgrey hotpink deeppink royalblue seagreen chocolate steelblue slateblue midnightblue forestgreen limegreen mintcream honeydew aliceblue azure snow linen wheat peru sienna firebrick orangered goldenrod yellowgreen springgreen aquamarine powderblue cornflowerblue dodgerblue deepskyblue mediumpurple rebeccapurple thistle mistyrose peachpuff papayawhip lemonchiffon whitesmoke gainsboro dimgray transparent'.split(' '));
function webTok(code, lang) {
  const out = [], P = (c, t) => { if (t) out.push({ c, t }); };
  const blanks = (t, c) => { let i = 0; t.replace(/_{3,}|\?{3,}/g, (m, k) => { P(c, t.slice(i, k)); P('wbl', m); i = k + m.length; return m; }); P(c, t.slice(i)); };
  const text = t => { let i = 0; t.replace(/&#?[a-z0-9]+;/gi, (m, k) => { blanks(t.slice(i, k), 'wx'); P('we', m); i = k + m.length; return m; }); blanks(t.slice(i), 'wx'); };
  const val = t => { const re = /(#[0-9a-f]{3,8})(?![\w-])|(-?\d*\.?\d+)([a-z%]+)?|((?:rgb|hsl)a?\([^)]*\))|("[^"]*"?|'[^']*'?)|(!important)|([a-z-]+)|(_{3,}|\?{3,})/gi; let i = 0, m;
    while ((m = re.exec(t))) { P('wv', t.slice(i, m.index)); i = re.lastIndex;
      if (m[1] || m[4] || (m[7] && WEB_COLN.has(m[7].toLowerCase()))) out.push({ c: 'wv wcol', t: m[0], sw: m[0] });
      else if (m[2] != null) { P('wnum', m[2]); P('wu', m[3]); } else if (m[5]) P('wv', m[5]); else if (m[6]) P('wim', m[6]); else if (m[8]) P('wbl', m[8]); else P('wv', m[0]); }
    P('wv', t.slice(i)); };
  const sel = t => { if (/^\s*@/.test(t)) { const m = t.match(/^(\s*)(@[\w-]*)([\s\S]*)$/); P('', m[1]); P('wat', m[2]); m[3].replace(/([\w-]+)(\s*:\s*)|(\d+)([a-z%]*)|([^\w]+|[\w-]+)/gi, (z, a, b, n, u, o) => { if (a) { P('wp', a); P('wpu', b); } else if (n) { P('wnum', n); P('wu', u); } else P(/^(and|screen|not|only|all|print)$/i.test(o) ? 'wat' : 'wpu', o); return z; }); return; }
    t.replace(/(\.[\w-]+)|(#[\w-]+)|(::?[\w-]+(?:\([^)]*\))?)|([a-z][\w-]*|\*)|([^.#:a-z*]+)|([\s\S])/gi, (z, c, id, ps, el) => { P(c ? 'wsc' : id ? 'wsi' : ps ? 'wsp' : el ? 'ws' : 'wpu', z); return z; }); };
  const css = s => { const stack = []; let i = 0, mode = 'sel', at = false;
    while (i < s.length) {
      if (s.startsWith('/*', i)) { const j = s.indexOf('*/', i + 2), e = j < 0 ? s.length : j + 2; P('wc', s.slice(i, e)); i = e; continue; }
      const ch = s[i];
      if (ch === '{') { P('wpu', ch); stack.push(at ? 'at' : 'rule'); mode = at ? 'sel' : 'prop'; at = false; i++; continue; }
      if (ch === '}') { P('wpu', ch); stack.pop(); mode = stack[stack.length - 1] === 'rule' ? 'prop' : 'sel'; i++; continue; }
      if (mode === 'sel') { let j = i; while (j < s.length && !'{}'.includes(s[j]) && !s.startsWith('/*', j)) j++; const h = s.slice(i, j); at = /^\s*@/.test(h); sel(h); i = j; continue; }
      if (mode === 'prop') { if (ch === ':') { P('wpu', ch); mode = 'val'; i++; continue; } if (ch === ';') { P('wpu', ch); i++; continue; }
        let j = i; while (j < s.length && !':;{}'.includes(s[j]) && !s.startsWith('/*', j)) j++; const h = s.slice(i, j), m = h.match(/^(\s*)([\s\S]*?)(\s*)$/); P('', m[1]); blanks(m[2], 'wp'); P('', m[3]); i = j; continue; }
      let j = i; while (j < s.length && !';{}'.includes(s[j]) && !s.startsWith('/*', j)) j++; val(s.slice(i, j)); if (s[j] === ';') { P('wpu', ';'); j++; mode = 'prop'; } i = j;
    } };
  const attrs = t => t.replace(/(\s+)|([^\s=\/>"']+)(\s*=\s*)?("[^"]*"?|'[^']*'?|[^\s>"']+)?|([\s\S])/g, (z, sp, a, eq, v, o) => { if (sp) P('', sp); else if (a) { P('wa', a); if (eq) P('wpu', eq); if (v) { const q = /^["']/.test(v) ? v[0] : ''; if (q) P('wv', q); blanks(v.slice(q ? 1 : 0, v.endsWith(q) && q && v.length > 1 ? -1 : undefined), 'wv'); if (q && v.length > 1 && v.endsWith(q)) P('wv', q); } } else P('wpu', o); return z; });
  if (lang === 'css') { css(String(code || '')); return out; }
  const s = String(code || ''); let i = 0;
  while (i < s.length) {
    if (s.startsWith('<!--', i)) { const j = s.indexOf('-->', i + 4), e = j < 0 ? s.length : j + 3; P('wc', s.slice(i, e)); i = e; continue; }
    if (s[i] === '<' && /[a-z\/!]/i.test(s[i + 1] || '')) {
      const g = s.indexOf('>', i), n = s.indexOf('<', i + 1), e = g < 0 || (n >= 0 && n < g) ? (n < 0 ? s.length : n) : g + 1, src = s.slice(i, e);
      if (src[1] === '!') { P('wd', src); i = e; continue; }
      const m = src.match(/^<(\/?)([a-z][\w-]*)([\s\S]*?)(\/?>)?$/i);
      if (!m) { text(src); i = e; continue; }
      P('wpu', '<' + m[1]); P('wt', m[2]); attrs(m[3]); P('wpu', m[4] || ''); i = e;
      if (!m[1] && m[2].toLowerCase() === 'style' && m[4]) { const k = s.toLowerCase().indexOf('</style', i), ce = k < 0 ? s.length : k; css(s.slice(i, ce)); i = ce; }
      continue;
    }
    let j = s.indexOf('<', i + 1); if (j < 0) j = s.length; text(s.slice(i, j)); i = j;
  }
  return out;
}
const webSw = v => /^(#[0-9a-f]{3,8}|[a-z]+|(rgb|hsl)a?\([\d\s.,%\/deg]+\))$/i.test(v) ? v : 'transparent';
const webTokHTML = k => k.c ? `<i class="${k.c}"${k.sw ? ` style="--sw:${webSw(k.sw)}"` : ''}>${esc(k.t)}</i>` : esc(k.t);
// el codi amb colors (una sola cadena, amb els salts de línia)
function webHL(code, lang) { return webTok(code, lang).map(webTokHTML).join(''); }
// el codi amb colors, línia a línia (les fitxes que travessen línies es parteixen)
function webLines(code, lang) {
  const lines = [''];
  for (const k of webTok(code, lang)) k.t.split('\n').forEach((p, i) => { if (i) lines.push(''); if (p) lines[lines.length - 1] += webTokHTML({ ...k, t: p }); });
  return lines;
}
/* ---------- L'estat de l'editor ---------- */
let WB = null, WB_T = null, WB_E = null, WB_RO = null;
function wbMake(st, o = {}) {
  WB = { st, html: o.html ?? st.html ?? '', css: o.css ?? st.css ?? '', tab: st.tab || (st.html == null && st.css != null ? 'css' : 'html'), dev: WB && WB.devKeep ? WB.dev : 'mob', devKeep: !!(WB && WB.devKeep), solved: false, tries: 0, mode: o.mode || 'edit', onDone: null, open: false, front: 'a', p: o.p || null };
  if (st.tabs && !st.tabs.includes(WB.tab)) WB.tab = st.tabs[0];
  return WB;
}
const WB_CSSK = ['css', 'styled', 'prop', 'media', 'rules', 'cssclean'];
const wbTabs = () => WB.st.tabs || (WB.st.css != null || (WB.st.checks || []).some(c => WB_CSSK.includes(c.k)) ? ['html', 'css'] : ['html']);
const wbIsCss = t => !/^\s*</.test(t) && (/[{}]/.test(t) || /^\s*[\w-]+\s*:/.test(t) || /^\s*@/.test(t));
const wbUrl = () => { const u = String(WB.st.url || 'la-meva-web.numi'), m = u.match(/^(https?:\/\/)?([^\/]+)(.*)$/) || [, '', u, '']; return { safe: !/^http:\/\//.test(u), host: m[2], path: m[3] || '' }; };
const wbWantsImg = () => { const st = WB.st; return WB.mode === 'free' || st.k === 'wcreate' || (st.checks || []).some(c => c.t === 'img' || c.t === 'figure' || c.t === 'picture') || /<img/i.test(WB.html) || (st.snips || []).some(x => /<img/.test(typeof x === 'string' ? x : x.t)); };
function wbHTML() {
  const tabs = wbTabs(), ro = WB.mode === 'view', checks = WB.mode === 'edit' ? WB.st.checks || [] : [], res = webRun({ checks }, WB.html, WB.css);
  const all = WB.st.snips || [], snips = all.filter(x => { const t = typeof x === 'string' ? x : x.t; return tabs.length < 2 || (typeof x === 'string' ? (wbIsCss(t) ? 'css' : 'html') : (x.tab || 'html')) === WB.tab; });
  const u = wbUrl(), nok = res.filter(Boolean).length, done = checks.length && nok === checks.length;
  const next = checks.findIndex((c, i) => !res[i]);
  const ctxt = c => c.txt ? tval(c.txt) : webCheckTxt(c);
  const tab = t => `<button class="wtab ${t === WB.tab ? 'on' : ''} f-${t}" onclick="wbTab('${t}')"><span class="wfi">${t === 'html' ? '&lt;/&gt;' : '#'}</span>${t === 'html' ? 'index.html' : 'estil.css'}</button>`;
  return `<div class="tstage wstage m-${WB.mode}${checks.length ? ' has-chk' : ''}" data-dev="${WB.dev}">
    <div class="wedit"><div class="wwin">
      <div class="wtabs">${tabs.map(tab).join('')}<span class="wsp"></span>
        ${!ro && wbWantsImg() && WB.tab === 'html' ? `<button class="wtool" onclick="wbGal()" title="${L('Imatges', 'Imágenes')}" aria-label="${L('Imatges', 'Imágenes')}">${WI.img}<span>${L('Imatges', 'Imágenes')}</span></button>` : ''}
        ${WB.mode === 'free' ? `<button class="wtool" onclick="wbDownload()" title="${L('Descarrega la web', 'Descarga la web')}" aria-label="${L('Descarrega la web', 'Descarga la web')}">${WI.dl}<span>${L('Descarrega', 'Descarga')}</span></button>` : ''}
        ${!ro ? `<button class="wtool ico" onclick="wbReset()" title="${L('Torna a començar', 'Vuelve a empezar')}" aria-label="${L('Torna a començar', 'Vuelve a empezar')}">${WI.reset}</button>` : ''}</div>
      <div class="wcode"><div class="warea"><div class="whl" id="whl" aria-hidden="true"></div><textarea id="wta" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" aria-label="${L('Editor de codi', 'Editor de código')}" ${ro ? 'readonly' : ''}></textarea></div><div class="wgal" id="wgal" hidden></div></div>
      ${snips.length && !ro ? `<div class="wsnips">${snips.map(x => { const t = (typeof x === 'string' ? x : x.t).replace('|', ''), lang = typeof x === 'string' ? (wbIsCss(t) ? 'css' : 'html') : (x.tab || 'html'); return `<button onclick="wbSnip(${all.indexOf(x)})" title="${esc(t)}">${webHL(t.length > 30 ? t.slice(0, 28) + '…' : t, lang)}</button>`; }).join('')}</div>` : ''}
      <div class="wstat"><button class="wst" id="werr" onclick="wbErrShow()"></button><span class="wpos" id="wpos"></span><span class="wlg">${WB.tab === 'css' ? 'CSS' : 'HTML'}</span></div>
    </div></div>
    <div class="wview">
      <div class="wdevice" id="wdev"><div class="wbody">
        <div class="wchrome">
          <span class="wdots"><i></i><i></i><i></i></span>
          <span class="wptab"><span class="wfav">${WI.globe}</span><b id="wptitle">${esc(u.host)}</b></span>
          <span class="wstatus"><b>9:41</b><span class="wisl"></span><span class="wsig">${WI.bars}${WI.wifi}${WI.batt}</span></span>
          <span class="wnav">${WI.back}${WI.fwd}</span>
          <span class="wurl ${u.safe ? '' : 'nosafe'}">${u.safe ? WI.lock : WI.warn}${u.safe ? '' : `<em>${L('No segur', 'No seguro')}</em>`}<span class="wuh">${esc(u.host)}</span><span class="wup">${esc(u.path)}</span></span>
          <button class="wrl" onclick="wbUpdate('reload')" aria-label="${L('Torna a carregar', 'Vuelve a cargar')}">${WI.reload}</button>
        </div>
        <div class="wscreen" id="wscreen"><iframe class="on" id="wfa" sandbox="allow-scripts" title="${L('Vista prèvia', 'Vista previa')}"></iframe><iframe id="wfb" sandbox="allow-scripts" tabindex="-1" aria-hidden="true" title=""></iframe><span class="wglass"></span></div>
      </div></div>
      <div class="wvbar"><span class="wlive" id="wlive"><i></i>${L('Vista prèvia', 'Vista previa')}</span><span class="wdevs" role="group" aria-label="${L('Pantalla', 'Pantalla')}"><button class="${WB.dev === 'mob' ? 'on' : ''}" data-d="mob" onclick="wbDev('mob')" aria-label="${L('Mòbil', 'Móvil')}" title="${L('Mòbil', 'Móvil')}">${WI.phone}<span>${L('Mòbil', 'Móvil')}</span></button><button class="${WB.dev === 'pc' ? 'on' : ''}" data-d="pc" onclick="wbDev('pc')" aria-label="${L('Ordinador', 'Ordenador')}" title="${L('Ordinador', 'Ordenador')}">${WI.laptop}<span>${L('Ordinador', 'Ordenador')}</span></button></span></div>
      ${checks.length ? `<div class="wchk ${done ? 'all' : ''} ${WB.open ? 'open' : ''}" id="wchk" style="--p:${(nok / checks.length).toFixed(3)}">
        <button class="wchh" onclick="wbChk()" aria-expanded="${WB.open}"><span class="wring"><svg viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="15.5"/><circle class="wrf" cx="18" cy="18" r="15.5" pathLength="100"/></svg><b id="wcount">${nok}/${checks.length}</b></span>
          <span class="wchn"><small>${L('Comprovacions', 'Comprobaciones')}</small><span id="wnext">${done ? L('Tot a punt!', '¡Todo listo!') : ctxt(checks[next])}</span></span><span class="wpbar"><i></i></span><span class="wchv">${WI.chev}</span></button>
        <ul class="wchecks" id="wchecks">${checks.map((c, i) => `<li class="${res[i] ? 'ok' : ''}" style="--i:${i}"><span class="wck">${WI.ok}</span><span class="wct">${ctxt(c)}</span></li>`).join('')}</ul></div>` : ''}
      <div class="tsay wsay" id="tsay" aria-live="polite"></div>
    </div></div>`;
}
function wbMount() {
  const ta = document.getElementById('wta'); if (!ta) return;
  ta.value = WB.tab === 'css' ? WB.css : WB.html;
  const hl = document.getElementById('whl');
  const cur = () => ta.value.slice(0, ta.selectionStart).split('\n').length;
  const pos = () => { const n = cur(), c = ta.selectionStart - ta.value.lastIndexOf('\n', ta.selectionStart - 1); const p = document.getElementById('wpos'); if (p) p.textContent = L(`Línia ${n}, col. ${c}`, `Línea ${n}, col. ${c}`); hl.querySelectorAll('.wl.cur').forEach(x => x.classList.remove('cur')); const l = hl.children[n - 1]; if (l) l.classList.add('cur'); };
  const sync = () => { hl.innerHTML = webLines(ta.value, WB.tab).map((l, i) => `<div class="wl"><b class="wn">${i + 1}</b>${l || '​'}</div>`).join(''); hl.scrollTop = ta.scrollTop; pos(); };
  ta.oninput = () => { if (WB.tab === 'css') WB.css = ta.value; else WB.html = ta.value; sync(); clearTimeout(WB_T); WB_T = setTimeout(wbUpdate, 240); wbErr(true); };
  ta.onscroll = () => { hl.scrollTop = ta.scrollTop; };
  ['keyup', 'click', 'focus'].forEach(e => ta.addEventListener(e, pos)); WB.pos = pos;
  ta.onkeydown = e => {
    if (e.key === 'Tab') { e.preventDefault(); wbInsert('  '); return; }
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing && WB.mode !== 'view') {   // manté el sagnat (i el fa créixer després d'obrir una etiqueta o una clau)
      const a = ta.selectionStart, before = ta.value.slice(0, a), line = before.slice(before.lastIndexOf('\n') + 1), ind = (line.match(/^\s*/) || [''])[0], after = ta.value.slice(ta.selectionEnd);
      const open = /\{\s*$/.test(line) || (/<([a-z][\w-]*)[^<>]*>\s*$/i.test(line) && !WEB_VOID.has((line.match(/<([a-z][\w-]*)[^<>]*>\s*$/i) || [])[1].toLowerCase()) && !/<\/[a-z][\w-]*>\s*$/i.test(line));
      if (!ind && !open) return;
      e.preventDefault();
      if (open && /^\s*(<\/|\})/.test(after)) { wbInsert('\n' + ind + '  ' + '\n' + ind, 1 + ind.length + 2); return; }
      wbInsert('\n' + ind + (open ? '  ' : '')); }
  };
  // tancament automàtic d'etiquetes (en escriure «>»)
  ta.addEventListener('beforeinput', e => { if (e.data === '>' && WB.tab === 'html' && WB.st.autoclose !== false) { const s0 = ta.selectionStart, before = ta.value.slice(0, s0), m = before.match(/<([a-zA-Z][\w-]*)(\s[^<>]*)?$/); if (m && !WEB_VOID.has(m[1].toLowerCase()) && !ta.value.slice(ta.selectionEnd).startsWith('</' + m[1])) { e.preventDefault(); wbInsert('></' + m[1] + '>', 1); } } });
  const sn = document.querySelector('.wsnips'); if (sn) sn.onwheel = e => { if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && sn.scrollWidth > sn.clientWidth) { sn.scrollLeft += e.deltaY; e.preventDefault(); } };
  sync(); wbFrames(); WB.lastPage = null; wbUpdate(true); wbErr(false);
  if (WB_RO) WB_RO.disconnect();
  const sc = document.getElementById('wscreen'); if (sc && typeof ResizeObserver === 'function') { WB_RO = new ResizeObserver(() => wbScale()); WB_RO.observe(sc); }
  wbScale();
}
function wbInsert(txt, caret) { const ta = document.getElementById('wta'); if (!ta || ta.readOnly) return; const a = ta.selectionStart, b = ta.selectionEnd; ta.focus(); ta.setSelectionRange(a, b);
  // execCommand conserva el «desfés» del navegador; si no hi és, s'escriu a mà
  let ok = false; try { ok = document.execCommand && document.execCommand('insertText', false, txt); } catch (e) { ok = false; }
  if (!ok || ta.value.slice(a, a + txt.length) !== txt) { ta.value = ta.value.slice(0, a) + txt + ta.value.slice(b); ta.dispatchEvent(new Event('input')); }
  const p = a + (caret != null ? caret : txt.length); ta.selectionStart = ta.selectionEnd = p; }
// fragments per inserir (útil al mòbil): «<h1>|</h1>» → el cursor va on hi ha la barra
function wbSnip(i) { const x = WB.st.snips[i], t = typeof x === 'string' ? x : x.t, c = t.indexOf('|'), lang = typeof x === 'string' ? (wbIsCss(t) ? 'css' : 'html') : (x.tab || 'html'); if (wbTabs().length > 1 && lang !== WB.tab) { wbTab(lang); } wbInsert(t.replace('|', ''), c < 0 ? undefined : c); SFX.tap && SFX.tap(); }
function wbTab(t) { if (t === WB.tab) return; WB.tab = t; wbRedraw(); }
function wbDev(d) { WB.dev = d; WB.devKeep = true; const s = document.querySelector('.wstage'); if (s) s.dataset.dev = d; document.querySelectorAll('.wdevs button').forEach(b => b.classList.toggle('on', b.dataset.d === d)); wbScale(); SFX.tap && SFX.tap(); }
function wbRedraw() { const el = document.querySelector('.wstage'); if (!el) return; el.outerHTML = wbHTML(); wbMount(); }
function wbChk() { WB.open = !WB.open; const c = document.getElementById('wchk'); if (c) { c.classList.toggle('open', WB.open); c.querySelector('.wchh').setAttribute('aria-expanded', WB.open); } }
// l'aparell fa servir l'amplada de debò (375 o 960 px) i la pàgina s'escala per cabre a la pantalla
function wbScale() {
  const sc = document.getElementById('wscreen'); if (!sc) return; const W = sc.clientWidth, H = sc.clientHeight; if (!W || !H) return;
  const vw = WB.dev === 'pc' ? Math.max(W, 960) : 375, s = Math.min(1, W / vw);
  sc.querySelectorAll('iframe').forEach(f => { f.style.width = vw + 'px'; f.style.height = Math.ceil(H / s) + 'px'; f.style.transform = s < 1 ? `scale(${s.toFixed(4)})` : ''; });
  sc.style.setProperty('--vs', s.toFixed(3));
}
// dues vistes prèvies, una davant de l'altra: es dibuixa la nova al darrere i, quan ja és a punt, es posa al davant (sense parpelleig)
function wbFrames() { ['wfa', 'wfb'].forEach(id => { const f = document.getElementById(id); if (f) f.onload = () => { if (f.dataset.v !== String(WB && WB.v)) return; const o = document.getElementById(id === 'wfa' ? 'wfb' : 'wfa'); f.classList.add('on'); f.removeAttribute('aria-hidden'); f.tabIndex = 0; if (o) { o.classList.remove('on'); o.setAttribute('aria-hidden', 'true'); o.tabIndex = -1; } }; }); }
function wbUpdate(first) {
  if (!WB) return;
  if (!WB.nonce) WB.nonce = Math.random().toString(36).slice(2, 12);
  const empty = !String(WB.html).trim(), page = empty ? webPage(`<div style="height:90vh;display:grid;place-items:center;text-align:center;color:#8A94B5;font:600 15px/1.45 system-ui,sans-serif"><div><div style="font-size:34px;margin-bottom:6px">✏️</div>${L("Escriu codi a l'editor:<br>la pàgina sortirà aquí.", 'Escribe código en el editor:<br>la página saldrá aquí.')}</div></div>`, '') : webPage(WB.html, WB.css, { live: WB.nonce }), init = first === true; first = init;
  if (page !== WB.lastPage || init || arguments[0] === 'reload') {
    WB.lastPage = page; WB.v = (WB.v || 0) + 1;
    const a = document.getElementById('wfa'), b = document.getElementById('wfb');
    if (a && b) { const back = a.classList.contains('on') ? b : a; back.dataset.v = String(WB.v); back.srcdoc = page; }
    const lv = document.getElementById('wlive'); if (lv && !first) { lv.classList.remove('beat'); void lv.offsetWidth; lv.classList.add('beat'); }
  }
  const d = webDoc(WB.html, WB.css), checks = WB.mode === 'edit' ? WB.st.checks || [] : [], res = checks.map(c => !!webCheck(d, c));
  const t = d.els.find(e => e.t === 'title'), pt = document.getElementById('wptitle'); if (pt) pt.textContent = (t && webTxt(t)) || (d.els.find(e => e.t === 'h1') && webTxt(d.els.find(e => e.t === 'h1'))) || wbUrl().host;
  const ul = document.getElementById('wchecks');
  if (ul) { let pop = false; [...ul.children].forEach((li, i) => { const was = li.classList.contains('ok'); li.classList.toggle('ok', res[i]); if (res[i] && !was && !first) { li.classList.remove('pop'); void li.offsetWidth; li.classList.add('pop'); pop = true; } });
    const n = res.filter(Boolean).length, box = document.getElementById('wchk'), all = n === res.length;
    if (box) { box.style.setProperty('--p', (n / res.length).toFixed(3)); box.classList.toggle('all', all); if (pop) { box.classList.remove('bump'); void box.offsetWidth; box.classList.add('bump'); SFX.tap && SFX.tap(); } }
    const c = document.getElementById('wcount'); if (c) c.textContent = `${n}/${res.length}`;
    const nx = document.getElementById('wnext'), k = res.indexOf(false); if (nx) nx.innerHTML = all ? L('Tot a punt!', '¡Todo listo!') : (checks[k].txt ? tval(checks[k].txt) : webCheckTxt(checks[k])); }
  if (WB.mode === 'edit' && res.length && res.every(Boolean) && !WB.solved && !first) { WB.solved = true; SFX.win && SFX.win(); typeof confetti === 'function' && confetti(80); wbSay(WB.st.done ? tval(WB.st.done) : L('Molt bé! La pàgina fa tot el que demana el repte.', '¡Muy bien! La página hace todo lo que pide el reto.'), 'ok'); WB.onDone && WB.onDone(); }
  else if (WB.solved && !res.every(Boolean)) WB.solved = false;
  if (WB.mode === 'free' && !first && WB.p) wbAutosave();
}
// la barra d'estat: els errors d'escriptura (surten quan deixen d'escriure una estona, per no molestar mentre escriuen)
function wbErr(wait) {
  clearTimeout(WB_E); const go = () => { const b = document.getElementById('werr'); if (!b || !WB) return; const d = webDoc(WB.html, WB.css), m = webErrTxt(d);
    b.className = 'wst ' + (m ? 'bad' : 'good'); b.innerHTML = m ? `${WI.warn}<span>${m}</span>` : `${WI.ok}<span>${WB.tab === 'css' ? L('CSS ben escrit', 'CSS bien escrito') : L('Etiquetes ben tancades', 'Etiquetas bien cerradas')}</span>`; b.dataset.m = m ? 1 : ''; };
  if (wait) { const b = document.getElementById('werr'); if (b && b.classList.contains('good')) { /* mentre escriuen, no es mostra cap error nou */ } WB_E = setTimeout(go, 1100); } else go();
}
function wbErrShow() { const b = document.getElementById('werr'); if (b && b.dataset.m) wbSay('⚠️ ' + webErrTxt(webDoc(WB.html, WB.css)), 'warn'); }
// el missatge d'en Numi a sobre de la vista prèvia (pistes, errors i el «molt bé»)
function wbSay(html, kind = '') { const s = document.getElementById('tsay'); if (!s) return; if (!html) { s.innerHTML = ''; s.className = 'tsay wsay'; return; }
  s.className = 'tsay wsay show ' + kind; s.innerHTML = `<span class="wsayt">${html}</span><button class="wsayx" onclick="wbSay('')" aria-label="${L('Tanca', 'Cierra')}">${WI.x}</button>`;
  const id = (wbSay.n = (wbSay.n || 0) + 1); if (kind === 'ok') setTimeout(() => { if (wbSay.n === id && s.isConnected) s.classList.add('fade'); setTimeout(() => { if (wbSay.n === id && s.isConnected) wbSay(''); }, 400); }, 5000); }
function wbReset() { if (!confirm(L('Vols tornar al codi del principi? Perdràs els canvis.', '¿Quieres volver al código del principio? Perderás los cambios.'))) return; const st = WB.st; WB.html = WB.p ? WB.p.html0 ?? st.html ?? '' : st.html ?? ''; WB.css = WB.p ? WB.p.css0 ?? st.css ?? '' : st.css ?? ''; wbRedraw(); wbUpdate(); }
// la galeria d'imatges: toca'n una i s'escriu el camí on és el cursor
function wbGal() { const g = document.getElementById('wgal'); if (!g) return; if (!g.hidden) { g.hidden = true; return; }
  g.innerHTML = `<div class="wgh"><b>${L('Imatges per a la teva web', 'Imágenes para tu web')}</b><small>${L('Toca-ne una: s\'escriu el camí on tens el cursor (dins de <code>src=""</code>).', 'Toca una: se escribe la ruta donde tienes el cursor (dentro de <code>src=""</code>).')}</small><button onclick="wbGal()" aria-label="${L('Tanca', 'Cierra')}">${WI.x}</button></div>
    <div class="wgs"><h4>${L('Dibuixos', 'Dibujos')} <code>img/tech/web/</code></h4><div class="wgg">${WEB_IMGS.map(([f, ca, es]) => `<button onclick="wbGalPick('img/tech/web/${f}.svg')"><img src="img/tech/web/${f}.svg" alt="" loading="lazy"><span>${L(ca, es)}</span><code>${f}.svg</code></button>`).join('')}</div>
    <h4>${L('Icones', 'Iconos')} <code>img/ic/</code></h4><div class="wgg ic">${WEB_ICS.map(f => `<button onclick="wbGalPick('img/ic/${f}.webp')"><img src="img/ic/${f}.webp" alt="" loading="lazy"><code>${f}.webp</code></button>`).join('')}</div></div>`; g.hidden = false; }
function wbGalPick(f) { const g = document.getElementById('wgal'); if (g) g.hidden = true; const ta = document.getElementById('wta'); if (!ta) return; const a = ta.selectionStart, before = ta.value.slice(0, a);
  const inSrc = /src\s*=\s*["'][^"']*$/i.test(before); wbInsert(inSrc ? f : `<img src="${f}" alt="">`, inSrc ? undefined : `<img src="${f}" alt="`.length); }
function wbDownload() { const p = WB.p, name = String((p && tval(p.t)) || 'web').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'web';
  const blob = new Blob([webFile(WB.html, WB.css, p && tval(p.t))], { type: 'text/html' }), a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name + '.html'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 400);
  toast(L('Web descarregada: és un fitxer .html que pots obrir amb qualsevol navegador.', 'Web descargada: es un archivo .html que puedes abrir con cualquier navegador.')); }
let WB_S = null;
function wbAutosave() { clearTimeout(WB_S); WB_S = setTimeout(() => { const p = WB && WB.p; if (!p) return; if (p.html0 == null) { p.html0 = p.html; p.css0 = p.css; } p.html = WB.html; p.css = WB.css; p.d = today(); save(); const b = document.getElementById('wlive'); if (b) b.dataset.saved = '1'; }, 700); }

/* ---------- Tipus de pas de Web ----------
   web: repte { q, html?, css?, tabs?, checks: [...], snips?, sol: { html, css }, hint, url? } · wcreate: projecte { …, name, crit } (es desa)
   wspot: troba la línia amb l'error { q, html|css, bad: número de línia (des de 1), ex } · wquiz: quina vista prèvia fa aquest codi? { q, code: { html, css }, opts: [{ html, css }], a } */
function wbStage(st) {
  const q = st.q ? `<div class="tsq2 wq"><span class="tsqc">${charSVG('numi', 'idle')}</span><div><p>${tval(st.q)}</p>${st.crit ? `<ul class="tcrit">${st.crit.map(c => `<li>${tval(c)}</li>`).join('')}</ul>` : ''}</div></div>` : '';
  $('#tsb').innerHTML = q + wbHTML(); $('#tsb').classList.add('wide'); wbMount();
}
function wbHintBtn(st) {
  if (document.getElementById('thint') || !(st.hint || st.sol) || !document.querySelector('.wstage') || !WB || WB.st !== st) return;
  const f = document.getElementById('tsf'); if (!f) return; const b = document.createElement('button'); b.className = 'btn ghost'; b.id = 'thint'; b.textContent = L('Una pista', 'Una pista');
  b.onclick = () => { if (st.hint && !b.dataset.k) { b.dataset.k = 1; wbSay(`💡 ${tval(st.hint)}`, 'hint'); b.textContent = L('Mostra una solució', 'Muestra una solución'); return; }
    if (st.sol) { WB.html = st.sol.html ?? WB.html; WB.css = st.sol.css ?? WB.css; wbRedraw(); wbUpdate(); wbSay(L('Aquí tens una solució. Llegeix-la línia a línia i compara-la amb la teva.', 'Aquí tienes una solución. Léela línea a línea y compárala con la tuya.'), 'hint'); b.remove(); } };
  f.insertBefore(b, f.firstChild);
}
// codi bilingüe: html, css i la solució poden ser { ca: '…', es: '…' } (la pàgina d'exemple en la llengua de l'alumne/a)
const webL = (v, lang) => v && typeof v === 'object' && ('ca' in v || 'es' in v) ? ((lang || (typeof LANG !== 'undefined' ? LANG : 'ca')) === 'es' ? v.es ?? v.ca : v.ca ?? v.es) : v;
function webLoc(st, lang) {
  const o = { ...st }; for (const k of ['html', 'css', 'page']) if (k in o) o[k] = webL(o[k], lang);
  if (o.sol) o.sol = { html: webL(o.sol.html, lang), css: webL(o.sol.css, lang) }; if (o.code) o.code = { html: webL(o.code.html, lang), css: webL(o.code.css, lang) };
  if (o.opts) o.opts = o.opts.map(x => x && typeof x === 'object' && !Array.isArray(x) ? { html: webL(x.html, lang), css: webL(x.css, lang) } : x); return o;
}
// una finestra de navegador petita amb la pàgina (opcions de wquiz, demos, wspot)
const webMini = (html, css, url, cls = '') => `<span class="wmini ${cls}"><span class="wmbar"><i></i><i></i><i></i>${url ? `<span>${WI.lock}${esc(url)}</span>` : '<span></span>'}</span><span class="wmscr"><iframe sandbox="" tabindex="-1" aria-hidden="true" srcdoc="${esc(webPage(html || '', css || ''))}"></iframe></span></span>`;
// el codi en una finestra d'editor (només per llegir), amb números de línia
const webCodeWin = (code, cls = '') => { const parts = []; if (code.html != null && code.html !== '') parts.push(['html', code.html]); if (code.css) parts.push(['css', code.css]);
  return `<div class="wcwin ${cls}"><div class="wcwt">${parts.map(([t], i) => `<span class="wtab ${i ? '' : 'on'} f-${t}"><span class="wfi">${t === 'html' ? '&lt;/&gt;' : '#'}</span>${t === 'html' ? 'index.html' : 'estil.css'}</span>`).join('')}</div><div class="wcwb">${parts.map(([t, c], i) => `${i ? `<div class="wcsep"><span class="wfi f-css">#</span>estil.css</div>` : ''}${webLines(c, t).map((l, k) => `<div class="wl"><b class="wn">${k + 1}</b>${l || '​'}</div>`).join('')}`).join('')}</div></div>`; };
if (typeof TSTEP !== 'undefined') {
  TSTEP.web = function (st) { const orig = TSS.st; st = webLoc(st); wbMake(st); WB.onDone = () => tContinue(); wbStage(st); tFoot(L('Continua', 'Continúa'), tNext, false);
    const hint = () => { if (TSS.st === orig) wbHintBtn(st); }; setTimeout(hint, 90000); const ta = document.getElementById('wta'); if (ta) ta.addEventListener('input', () => { WB.tries++; if (WB.tries === 40) hint(); }); };
  TSTEP.wcreate = function (st) {
    TSTEP.web(st); const sl = WB.st;
    WB.onDone = () => tFoot(L('Desa-ho i continua', 'Guárdalo y continúa'), () => { const t = TS_(); t.port.push({ id: 'pj' + Date.now().toString(36), kind: 'web', sid: TSS.id, t: sl.name || TSS.s.t, html: WB.html, css: WB.css, url: sl.url || '', d: today() }); if (t.port.length > 60) t.port.shift(); save(); toast(L('Pàgina desada a «Projectes»!', '¡Página guardada en «Proyectos»!')); tNext(); }, true);
  };
  TSTEP.wspot = function (st) {
    st = webLoc(st); const code = st.html ?? st.css, lang = st.html != null ? 'html' : 'css';   // amb css i `page` (html de la pàgina), la vista prèvia ensenya l'efecte
    const lines = webLines(code, lang), pv = st.preview !== false;
    $('#tsb').innerHTML = `<div class="tcol wspotw ${pv ? 'pv' : ''}"><div class="tqh"><span class="tqbit">${bitChar('think')}</span><h2 class="tsq">${tval(st.q)}</h2></div>
      <div class="wspotg"><div class="wcwin wspot"><div class="wcwt"><span class="wtab on f-${lang}"><span class="wfi">${lang === 'html' ? '&lt;/&gt;' : '#'}</span>${lang === 'html' ? 'index.html' : 'estil.css'}</span><span class="wspoth">${L('Toca la línia', 'Toca la línea')}</span></div>
        <div class="wcwb">${lines.map((l, i) => `<button class="wsl wl" data-i="${i + 1}"><b class="wn">${i + 1}</b><code>${l || '​'}</code><span class="wslm"></span></button>`).join('')}</div></div>
      ${pv ? webMini(st.html || st.page || '', st.css || (lang === 'css' ? code : ''), '', 'wspv') : ''}</div><div class="tfb" id="tfb"></div></div>`;
    $('#tsb').classList.add('wide');
    document.querySelectorAll('.wsl').forEach(b => b.onclick = () => { if (TSS.ready) return; TSS.ready = true; const ok = +b.dataset.i === st.bad; b.classList.add(ok ? 'ok' : 'ko'); b.querySelector('.wslm').innerHTML = ok ? WI.ok : WI.x; document.querySelector('.wspot').classList.add('done');
      if (!ok) { const g = document.querySelector(`.wsl[data-i="${st.bad}"]`); g.classList.add('ok'); g.querySelector('.wslm').innerHTML = WI.ok; }
      $('#tfb').innerHTML = `<div class="tfbox ${ok ? 'ok' : 'ko'}"><b>${ok ? L('Molt bé!', '¡Muy bien!') : L(`No és aquesta línia: és la ${st.bad}.`, `No es esta línea: es la ${st.bad}.`)}</b> ${st.ex ? tval(st.ex) : ''}</div>`; ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko(); tContinue(); });
    tFoot(L('Toca la línia', 'Toca la línea'), () => { }, false);
  };
  TSTEP.wquiz = function (st) {
    st = webLoc(st);
    const order = shuffle(st.opts.map((_, i) => i)); let pick = null;
    $('#tsb').innerHTML = `<div class="tcol wquizw"><div class="tqh"><span class="tqbit">${bitChar('think')}</span><h2 class="tsq">${tval(st.q)}</h2></div>
      <div class="wquizg ${st.code ? '' : 'nocode'}">${st.code ? webCodeWin(st.code, 'wqcode') : ''}
      <div class="topts grid wqopts n${st.opts.length}">${order.map((i, k) => `<button class="topt wqo" data-i="${i}" aria-label="${L('Opció', 'Opción')} ${'ABCD'[k]}"><span class="tol">${'ABCD'[k]}</span>${webMini(st.opts[i].html || '', st.opts[i].css || '')}<span class="wqmk"></span></button>`).join('')}</div></div><div class="tfb" id="tfb"></div></div>`;
    $('#tsb').classList.add('wide');
    document.querySelectorAll('.wqo').forEach(b => b.onclick = () => { if (TSS.ready) return; pick = +b.dataset.i; document.querySelectorAll('.wqo').forEach(x => x.classList.toggle('on', x === b)); SFX.tap && SFX.tap(); tFoot(L('Comprova', 'Comprueba'), check); });
    const check = () => { if (pick === null) return; TSS.ready = true; const ok = pick === st.a; document.querySelectorAll('.wqo').forEach(x => { const i = +x.dataset.i; if (i === st.a) { x.classList.add('ok'); x.querySelector('.wqmk').innerHTML = WI.ok; } else if (i === pick) { x.classList.add('ko'); x.querySelector('.wqmk').innerHTML = WI.x; } else x.classList.add('dim'); });
      $('#tfb').innerHTML = `<div class="tfbox ${ok ? 'ok' : 'ko'}"><b>${ok ? L('Molt bé!', '¡Muy bien!') : L('No ben bé.', 'No exactamente.')}</b> ${st.ex ? tval(st.ex) : ''}</div>`; ok ? (SFX.ok && SFX.ok(), TSS.ok++) : SFX.ko && SFX.ko(); tContinue(); };
    tFoot(L('Comprova', 'Comprueba'), check, false);
  };
}
/* ---------- Demos (targetes de teoria i diapositives): el codi i el resultat, un al costat de l'altre ---------- */
var TMEDIA = typeof TMEDIA !== 'undefined' ? TMEDIA : {};
TMEDIA.web = {
  html: m => (m = webLoc(m), `<div class="wdemo">${webCodeWin({ html: m.html, css: m.css })}<span class="wdarr" aria-hidden="true"><svg viewBox="0 0 40 24"><path d="M2 12h30m-8-8 8 8-8 8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>${webMini(m.html || '', m.css || '', m.url || '', 'wdpv')}</div>`),
  slide: m => TMEDIA.web.html(m).replace('class="wdemo"', 'class="wdemo slide"')
};
if (typeof TPORT !== 'undefined') TPORT.web = {
  thumb: p => `<span class="wthumb"><iframe sandbox="" tabindex="-1" aria-hidden="true" srcdoc="${esc(webPage(p.html, p.css))}"></iframe></span>`,
  // el projecte es pot continuar millorant (es desa sol) i descarregar com un fitxer .html per publicar-lo
  open: p => { wbMake({ html: p.html, css: p.css, tabs: ['html', 'css'], url: p.url || 'la-meva-web.numi', snips: [] }, { mode: 'free', p }); return `<div class="tsbody wide wport">${wbHTML()}</div>`; },
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
// la línia i la columna del cursor (un sol detector per a tota l'app)
if (typeof document !== 'undefined' && document.addEventListener) document.addEventListener('selectionchange', () => { const a = document.activeElement; if (a && a.id === 'wta' && WB && WB.pos) WB.pos(); });

/* ---------- Solucionari del professor: afegeix les files dels passos web a l'objecte que fa TSOLGEN()
   (o = { idSessió: [{ n, k, q, a }] }). L'HTML i el CSS de la solució, la línia de l'error o la vista prèvia bona. ---------- */
const WEB_SOLK = { web: ['Repte de codi', 'Reto de código'], wcreate: ['Projecte', 'Proyecto'], wspot: ['Troba la línia', 'Encuentra la línea'], wquiz: ['Vista prèvia', 'Vista previa'] };
function webSolHTML(st0) {
  const st = webLoc(st0), ex = st.ex ? `<p class="soex">${tval(st.ex)}</p>` : '', pre = (t, c) => c ? `<p class="soop"><b>${t}</b></p><pre class="socode">${esc(c)}</pre>` : '';
  const strip = h => String(h || '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim();
  switch (st.k) {
    case 'web': case 'wcreate': { if (!st.sol) return null; const h = st.sol.html ?? st.html, c = st.sol.css ?? st.css;
      const changedH = h != null && h !== st.html, changedC = c != null && c !== st.css;
      return `${st.k === 'wcreate' ? `<p class="soop">${L('Projecte obert: aquesta és una solució possible. Comproveu que es compleixen les comprovacions de l\'app.', 'Proyecto abierto: esta es una solución posible. Comprobad que se cumplen las comprobaciones de la app.')}</p>` : `<p class="soop">${L('Una solució possible (n\'hi pot haver d\'altres que també passin les comprovacions):', 'Una solución posible (puede haber otras que también pasen las comprobaciones):')}</p>`}${changedH || !changedC ? pre('HTML', h) : ''}${changedC ? pre('CSS', c) : ''}${st.crit && st.crit.length ? `<ul>${st.crit.map(x => `<li>${tval(x)}</li>`).join('')}</ul>` : ''}`; }
    case 'wspot': { const code = st.html ?? st.css, line = String(code || '').split('\n')[st.bad - 1] || '';
      return `<p class="soa">${L('La línia', 'La línea')} <b>${st.bad}</b>: <code>${esc(line.trim())}</code></p>${ex}`; }
    case 'wquiz': { const o = st.opts[st.a] || {}; return `<p class="soa">${L('La vista prèvia que mostra:', 'La vista previa que muestra:')} <b>${esc(strip(o.html).slice(0, 140))}</b>${o.css ? ` <small>(CSS: <code>${esc(String(o.css).replace(/\s+/g, ' ').slice(0, 120))}</code>)</small>` : ''}</p>${ex}`; }
  }
  return null;
}
function webSolRows(o) {
  const strip = h => String(h || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(), short = (h, n = 150) => { const t = strip(h); return t.length > n ? t.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : t; };
  for (const C of TECH) for (const u of C.units) for (const s of (u.s || [])) { if (!s.steps) continue; const rows = o[s.id] || [];
    s.steps.forEach((st, i) => { if (!WEB_SOLK[st.k] || rows.some(r => r.n === i + 1)) return; let a = null; try { a = webSolHTML(st); } catch (e) { a = `<p class="soop">(${esc(e.message)})</p>`; } if (a == null) return; rows.push({ n: i + 1, k: L(...WEB_SOLK[st.k]), q: short(tval(st.q || st.name || '')), a }); });
    if (rows.length) o[s.id] = rows.sort((x, y) => x.n - y.n); }
  return o;
}

/* ---------- Codi d'exemple en l'idioma de l'alumne/a: webTr(objecte, [[català, castellà], …]) converteix els camps
   html, css i page (també dins de sol, code, opts i media) en getters que, en castellà, tradueixen els textos de la
   pàgina (una sola passada, primer els més llargs). Les etiquetes, els atributs i el CSS no es toquen. ---------- */
function webTr(root, dict) {
  const map = new Map(dict), keys = dict.map(d => d[0]).sort((a, b) => b.length - a.length);
  const re = keys.length ? new RegExp(keys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g') : null;
  const tr = v => typeof v === 'string' && re ? v.replace(re, m => map.get(m)) : v;
  const es = () => typeof LANG !== 'undefined' && LANG === 'es';
  const conv = o => { if (!o || typeof o !== 'object') return;
    for (const k of ['html', 'css', 'page']) { const d = Object.getOwnPropertyDescriptor(o, k); if (!d) continue;
      if (typeof d.value === 'string') { const v = d.value; Object.defineProperty(o, k, { get: () => es() ? tr(v) : v, enumerable: true, configurable: true }); }
      else if (d.get) { const g = d.get; Object.defineProperty(o, k, { get: () => es() ? tr(g.call(o)) : g.call(o), enumerable: true, configurable: true }); } }
    for (const k of ['sol', 'code', 'media']) { const d = Object.getOwnPropertyDescriptor(o, k); if (d && d.value && typeof d.value === 'object') conv(d.value); }
    for (const k of ['opts', 'cards', 'steps', 's', 'slides']) { const d = Object.getOwnPropertyDescriptor(o, k); if (d && Array.isArray(d.value)) d.value.forEach(conv); } };
  conv(root); return root;
}
