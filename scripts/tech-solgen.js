/* Generador del solucionari de Numi Tech (eina de desenvolupament; no la carrega l'app).
   S'injecta a l'app en mode revisió (?v=tech&revisio=1) i TSOLGEN() torna, per a cada sessió, la resposta de cada pas
   a partir de les dades del mateix pas: opció correcta, ordre, calaixos, programa solució, bloc equivocat…
   Ho fa servir scripts/tech-sol.mjs, que escriu tech-sol.js (el carreguen el panell del professor i imprimeix.html). */
function TSOLGEN() {
  const strip = h => String(h || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  const short = (h, n = 150) => { const t = strip(h); return t.length > n ? t.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : t; };
  const tv = v => typeof v === 'function' ? v() : tx(v || '');
  const ul = a => `<ul>${a.map(x => `<li>${x}</li>`).join('')}</ul>`;
  const ol = a => `<ol>${a.map(x => `<li>${x}</li>`).join('')}</ol>`;
  // programes d'en Bit: llista de blocs de colors (amb els bucles i les condicions niats)
  const bitChips = l => (l || []).map(b => `<span class="sob c-${BIT_CAT[b.k]}">${bitLabel(b)}</span>${b.b ? `<span class="soin">${bitChips(b.b)}</span>${b.e ? `<span class="soelse">${L('si no', 'si no')}</span><span class="soin">${bitChips(b.e)}</span>` : ''}` : ''}`).join('');
  const bitProg = (st, prog, fns, evs) => {
    BIT_FNCTX = st.fnName || null; BIT_VCTX = (st.w && st.w.vname) || null;
    try {
      const p = q => typeof q === 'string' ? TQ(q) : q;
      let h = `<div class="soh"><b>${evs ? L('Quan comença', 'Al empezar') : L('Programa', 'Programa')}</b>${bitChips(p(prog))}</div>`;
      for (const [f, l] of Object.entries(fns || {})) h += `<div class="soh fn"><b>${L('Funció', 'Función')} ${typeof bitFName === 'function' ? bitFName(f) : f}</b>${bitChips(p(l))}</div>`;
      for (const [e, l] of Object.entries(evs || {})) h += `<div class="soh ev"><b>${L(`Quan premo ${e}`, `Al pulsar ${e}`)}</b>${bitChips(p(l))}</div>`;
      return `<div class="soprog">${h}</div>`;
    } finally { BIT_FNCTX = null; BIT_VCTX = null; }
  };
  const roboProg = (st, src) => { try { return `<div class="soprog rob">${rbDemoChips(RQ(src), st)}</div>`; } catch (e) { return ''; } };
  const stageProg = (st, src) => { try { return `<div class="soprog stg">${sgDemoChips(SQ(src), st)}</div>`; } catch (e) { return ''; } };
  const ex = st => st.ex ? `<p class="soex">${tv(st.ex)}</p>` : '';
  const crit = st => st.crit && st.crit.length ? `<p class="soop">${L('Activitat oberta. Comproveu que:', 'Actividad abierta. Comprobad que:')}</p>${ul(st.crit.map(tv))}` : `<p class="soop">${L('Activitat oberta: no hi ha una única resposta.', 'Actividad abierta: no hay una única respuesta.')}</p>`;
  const mark = (prog, key) => { let f = null; const w = l => (Array.isArray(l) ? l : []).forEach(b => { if (b[key]) f = f || b; w(b.b); w(b.e); }); if (Array.isArray(prog)) w(prog); else Object.values(prog || {}).forEach(v => Array.isArray(v) ? w(v) : Object.values(v || {}).forEach(s => (s || []).forEach(w))); return f; };
  const KIND = { quiz: ['Pregunta', 'Pregunta'], seq: ['Ordenar', 'Ordenar'], dsort: ['Classificar', 'Clasificar'], predict: ['Predir', 'Predecir'], rpredict: ['Predir', 'Predecir'],
    build: ['Repte', 'Reto'], robo: ['Repte', 'Reto'], stage: ['Repte', 'Reto'], parsons: ['Blocs barrejats', 'Bloques mezclados'], spot: ['Troba el bloc', 'Encuentra el bloque'], rspot: ['Troba el bloc', 'Encuentra el bloque'], sspot: ['Troba el bloc', 'Encuentra el bloque'],
    dspot: ['Troba les pistes', 'Encuentra las pistas'], dchat: ['Xat', 'Chat'], dpriv: ['Privadesa', 'Privacidad'], dpass: ['Contrasenya', 'Contraseña'], dai: ['Entrena la IA', 'Entrena la IA'],
    create: ['Projecte', 'Proyecto'], screate: ['Projecte', 'Proyecto'], rcreate: ['Projecte', 'Proyecto'], design: ['Dissenya', 'Diseña'], rdesign: ['Dissenya', 'Diseña'], mybuild: ['Programa el teu repte', 'Programa tu reto'], rmybuild: ['Programa la missió', 'Programa la misión'] };
  const ans = (st, C) => {
    switch (st.k) {
      case 'quiz': return `<p class="soa"><b>${tv(st.opts[st.a])}</b></p>${ex(st)}`;
      case 'seq': return ol(st.items.map(tv)) + ex(st);
      case 'dsort': return `<div class="sobins">${st.bins.map((b, k) => `<div><b>${(st.binIco || [])[k] || ''} ${tv(b)}</b>${ul(st.items.filter(it => it.b === k).map(it => tv(it.t) + (it.ex ? ` <small>— ${tv(it.ex)}</small>` : '')))}</div>`).join('')}</div>${ex(st)}`;
      case 'predict': case 'rpredict': return `<p class="soa">${L('Resposta', 'Respuesta')}: <b>${esc(String(st.a))}</b></p>${ex(st)}`;
      case 'build': return st.sol ? bitProg(st, st.sol, st.solFns, st.solEv) + (st.solPress ? `<p class="soex">${L('Botons que cal prémer', 'Botones que hay que pulsar')}: <b>${st.solPress.split('').join(' → ')}</b></p>` : '') + `<p class="soop">${L('És una solució possible: n\'hi pot haver d\'altres que també funcionin.', 'Es una solución posible: puede haber otras que también funcionen.')}</p>` : crit(st);
      case 'parsons': return st.sol ? bitProg(st, st.sol) : '';
      case 'robo': return st.sol ? roboProg(st, st.sol) + `<p class="soop">${L('És una solució possible: n\'hi pot haver d\'altres que també funcionin.', 'Es una solución posible: puede haber otras que también funcionen.')}</p>` : crit(st);
      case 'stage': return st.sol ? stageProg(st, st.sol) + `<p class="soop">${L('És una solució possible: n\'hi pot haver d\'altres que també funcionin.', 'Es una solución posible: puede haber otras que también funcionen.')}</p>` : crit(st);
      case 'spot': { const p = typeof st.prog === 'string' ? TQ(st.prog) : st.prog, b = mark(p, 'x'); return `${b ? `<p class="soa">${L('El bloc', 'El bloque')}: <span class="sob c-${BIT_CAT[b.k]}">${bitLabel(b)}</span></p>` : ''}${ex(st)}`; }
      case 'rspot': { const P = RQ(st.prog), b = mark(P, 'x'); return `${b ? `<p class="soa">${L('El bloc', 'El bloque')}: <span class="sob c-${RB_CAT[b.k]}">${rbLabel(b, undefined, st)}</span></p>` : ''}${ex(st)}`; }
      case 'sspot': { const P = SQ(st.prog), b = mark(P, 'mk'); return `${b ? `<p class="soa">${L('El bloc', 'El bloque')}: <span class="sob c-${SG_CAT[b.k]}">${sgLabel(b, undefined, st)}</span></p>` : ''}${ex(st)}`; }
      case 'dspot': return `${ul(Object.values(st.clues || {}).map(tv))}${ex(st)}`;
      case 'dchat': { const good = []; (st.nodes || []).forEach(n => (n.opts || []).forEach(o => { if (o.good !== false && (o.good || !(n.opts || []).some(x => x.good))) good.push(tv(o.t)); }));
        const best = (st.nodes || []).flatMap(n => (n.opts || []).filter(o => o.good).map(o => tv(o.t)));
        return `<p class="soop">${L('Respostes que porten a un bon final', 'Respuestas que llevan a un buen final')}:</p>${ul((best.length ? best : good).map(t => `«${t}»`))}`; }
      case 'dpriv': return ul((st.fields || []).map(f => { const lab = { all: L('Tothom', 'Todo el mundo'), friends: L('Amics', 'Amigos'), me: L('Només jo', 'Solo yo') }; return `<b>${tv(f.t)}</b>: ${[].concat(f.ok || []).map(k => lab[k] || k).join(' / ')}`; })) + ex(st);
      case 'dpass': return `<p class="soop">${L('Una contrasenya llarga, sense dades personals: per exemple, quatre paraules que no tinguin res a veure («Cactus-Núvol-Sopa-Trompeta»).', 'Una contraseña larga, sin datos personales: por ejemplo, cuatro palabras que no tengan nada que ver («Cactus-Nube-Sopa-Trompeta»).')}</p>${st.tip ? `<p class="soex">${tv(st.tip)}</p>` : ''}`;
      case 'dai': return `<p class="soop">${L('Cada alumne/a entrena la seva IA: no hi ha una única resposta. Fixeu-vos que justifiquin per què la IA s\'equivoca amb els casos nous.', 'Cada alumno/a entrena su IA: no hay una única respuesta. Fijaos en que justifiquen por qué la IA se equivoca con los casos nuevos.')}</p>${ex(st)}`;
      case 'create': case 'screate': case 'rcreate': case 'design': case 'rdesign': case 'mybuild': case 'rmybuild': return crit(st);
      default: return null;   // història, teoria, pausa activa, emocions, valoració, diploma… no tenen resposta
    }
  };
  const out = {};
  for (const C of TECH) for (const u of C.units) for (const s of (u.s || [])) {
    if (!s.steps) continue;
    const rows = [];
    s.steps.forEach((st, i) => { let a = null; try { a = ans(st, C); } catch (e) { a = `<p class="soop">(${esc(e.message)})</p>`; } if (a == null) return;
      a = a.replace(/<span class="tbi">[\s\S]*?<\/svg><\/span>/g, '').replace(/<svg[\s\S]*?<\/svg>/g, '').replace(/\s+/g, ' ');   // sense les icones: el solucionari ha de ser lleuger
      rows.push({ n: i + 1, k: tx((KIND[st.k] || [st.k, st.k]).join('|')), q: short(tv(st.q || st.name || '')), a }); });
    if (rows.length) out[s.id] = rows;
  }
  return out;
}
