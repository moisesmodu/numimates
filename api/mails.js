import { createHmac, timingSafeEqual } from 'crypto';
import { sql, ok, body } from './_lib.js';
import { who } from './_auth.js';
import { STRIPE_KEY, stripe } from './_stripe.js';
import { informeTables, informesRun, prefOf, ajust, setAjust, reportMail, periodNow, kidRow, lastSnap } from './_informe.js';
// Correus des del panell (només l'administrador): esborranys en HTML, prova, enviament ara o programat.
// Destinataris: docents, famílies (zona de famílies), contactes del web, clients de Premium (correu de Stripe)
// i una llista lliure. Cada correu porta l'enllaç de baixa (LSSI art. 21) i la capçalera List-Unsubscribe.
// Els programats els envia el cron de Vercel (vercel.json → /api/mails?cron=1, cada 10 minuts).
export const config = { maxDuration: 60 };
const BASE = 'https://app.numimates.com';
const FROM = 'Numi <hola@numimates.com>';
let READY = null;
const tables = () => READY || (READY = sql`CREATE TABLE IF NOT EXISTS mates.mails (id serial PRIMARY KEY, subject text NOT NULL DEFAULT '', html text NOT NULL DEFAULT '', aud jsonb NOT NULL DEFAULT '{}', lang text NOT NULL DEFAULT 'ca', status text NOT NULL DEFAULT 'esborrany', send_at timestamptz, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now(), sent_at timestamptz, n_total int NOT NULL DEFAULT 0, n_ok int NOT NULL DEFAULT 0, n_ko int NOT NULL DEFAULT 0, err text)`
  .then(() => sql`CREATE TABLE IF NOT EXISTS mates.mail_env (mail_id int NOT NULL REFERENCES mates.mails(id) ON DELETE CASCADE, email text NOT NULL, nom text, status text NOT NULL DEFAULT 'pendent', sent_at timestamptz, PRIMARY KEY (mail_id, email))`)
  .then(() => sql`CREATE TABLE IF NOT EXISTS mates.mail_baixes (email text PRIMARY KEY, at timestamptz NOT NULL DEFAULT now())`)
  .catch(e => { READY = null; throw e; }));

const MAILRE = /^[^\s@<>"']+@[^\s@<>"']+\.[a-z]{2,}$/i;
const clean = e => String(e || '').trim().toLowerCase();
const escH = s => String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const sig = e => createHmac('sha256', process.env.SESSION_SECRET || 'x').update('baixa:' + e).digest('base64url').slice(0, 22);
const baixaTok = e => Buffer.from(e).toString('base64url') + '.' + sig(e);
function baixaOf(t) {
  const [a, s] = String(t || '').split('.'); if (!a || !s) return null;
  const e = Buffer.from(a, 'base64url').toString(), x = Buffer.from(sig(e)), y = Buffer.from(s);
  return x.length === y.length && timingSafeEqual(x, y) && MAILRE.test(e) ? e : null;
}

// destinataris (sense duplicats ni baixes): Map correu → { nom, lang }
async function recipients(aud) {
  const out = new Map(), add = (e, nom, lang) => { e = clean(e); if (MAILRE.test(e) && !out.has(e)) out.set(e, { nom: nom || '', lang: lang || null }); };
  if (aud.docents) (await sql`SELECT email, nom FROM mates.docents WHERE actiu AND email LIKE '%@%'`).forEach(r => add(r.email, r.nom));
  if (aud.families) { try { (await sql`SELECT email, lang FROM mates.families`).forEach(r => add(r.email, '', r.lang)); } catch (e) { } }
  if (aud.contactes) { try { (await sql`SELECT mail, nom, lang FROM mates.contactes`).forEach(r => add(r.mail, r.nom, r.lang)); } catch (e) { } }
  if (aud.premium && STRIPE_KEY) {
    const cs = await sql`SELECT DISTINCT stripe_customer FROM mates.alumnes WHERE stripe_customer IS NOT NULL AND pla = 'premium'`;
    for (const c of cs) { try { const s = await stripe('customers/' + encodeURIComponent(c.stripe_customer)); if (s && !s.deleted) add(s.email, s.name, (s.preferred_locales || [])[0]); } catch (e) { } }
  }
  String(aud.extra || '').split(/[\s,;]+/).forEach(e => add(e));
  if (aud.lang === 'ca' || aud.lang === 'es') for (const [e, r] of out) if (r.lang && !String(r.lang).startsWith(aud.lang)) out.delete(e);
  const bx = new Set((await sql`SELECT email FROM mates.mail_baixes`).map(r => r.email));
  for (const e of [...out.keys()]) if (bx.has(e)) out.delete(e);
  return out;
}

// cos final: {{nom}} i peu amb la baixa
function render(m, email, nom, test) {
  const es = m.lang === 'es', link = `${BASE}/api/mails?baixa=${baixaTok(email)}`;
  let html = String(m.html || '').replace(/\{\{\s*nom\s*\}\}/g, escH(nom || ''));
  const foot = `<div style="margin:28px auto 0;max-width:600px;padding:16px;border-top:1px solid #e5e5e5;font:13px/1.5 Arial,sans-serif;color:#888;text-align:center">${es ? 'Recibes este correo de Numi (numimates.com).' : 'Reps aquest correu de Numi (numimates.com).'} <a href="${link}" style="color:#888">${es ? 'Darme de baja' : "Dona'm de baixa"}</a></div>`;
  html = /<\/body>/i.test(html) ? html.replace(/<\/body>/i, foot + '</body>') : html + foot;
  const text = html.replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|h\d|li|tr)>/gi, '\n').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\n{3,}/g, '\n\n').trim();
  return { from: FROM, reply_to: 'hola@numimates.com', to: [email], subject: (test ? '[PROVA] ' : '') + m.subject, html, text,
    headers: { 'List-Unsubscribe': `<${link}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' } };
}
async function resendBatch(items) {
  const r = await fetch('https://api.resend.com/emails/batch', { method: 'POST',
    headers: { authorization: 'Bearer ' + process.env.RESEND_API_KEY, 'content-type': 'application/json', 'user-agent': 'numimates/1.0' }, body: JSON.stringify(items) });
  if (!r.ok) throw new Error('resend ' + r.status + ' ' + (await r.text()).slice(0, 200));
  return r.json();
}

// envia el que quedi pendent d'un correu, en lots de 50, fins que s'acaba el temps
async function work(id, until) {
  const m = (await sql`SELECT * FROM mates.mails WHERE id = ${id}`)[0]; if (!m) return;
  if (m.status === 'programat') {
    await sql`UPDATE mates.mails SET status = 'enviant', updated_at = now() WHERE id = ${id} AND status = 'programat'`;
    const R = await recipients(m.aud || {});
    for (const [e, r] of R) await sql`INSERT INTO mates.mail_env (mail_id, email, nom) VALUES (${id}, ${e}, ${r.nom}) ON CONFLICT DO NOTHING`;
    await sql`UPDATE mates.mails SET n_total = (SELECT count(*) FROM mates.mail_env WHERE mail_id = ${id}) WHERE id = ${id}`;
  }
  // els lots que s'havien quedat reservats (funció tallada) tornen a la cua
  await sql`UPDATE mates.mail_env SET status = 'pendent' WHERE mail_id = ${id} AND status = 'enviant' AND sent_at < now() - interval '10 minutes'`;
  while (Date.now() < until) {
    // reserva el lot (SKIP LOCKED: si el cron i el panell coincideixen, no s'envia res dues vegades)
    const pend = await sql`UPDATE mates.mail_env SET status = 'enviant', sent_at = now() WHERE (mail_id, email) IN (SELECT mail_id, email FROM mates.mail_env WHERE mail_id = ${id} AND status = 'pendent' LIMIT 50 FOR UPDATE SKIP LOCKED) RETURNING email, nom`;
    if (!pend.length) break;
    const bx = new Set((await sql`SELECT email FROM mates.mail_baixes WHERE email = ANY(${pend.map(p => p.email)})`).map(r => r.email));
    const go = pend.filter(p => !bx.has(p.email));
    for (const p of pend.filter(p => bx.has(p.email))) await sql`UPDATE mates.mail_env SET status = 'baixa' WHERE mail_id = ${id} AND email = ${p.email}`;
    if (!go.length) continue;
    let st = 'enviat';
    try { await resendBatch(go.map(p => render(m, p.email, p.nom))); } catch (e) { st = 'error'; await sql`UPDATE mates.mails SET err = ${String(e.message).slice(0, 300)} WHERE id = ${id}`; }
    await sql`UPDATE mates.mail_env SET status = ${st}, sent_at = now() WHERE mail_id = ${id} AND email = ANY(${go.map(p => p.email)})`;
    if (st === 'error') break;
  }
  const c = (await sql`SELECT count(*) FILTER (WHERE status = 'enviat')::int AS ok, count(*) FILTER (WHERE status = 'error')::int AS ko, count(*) FILTER (WHERE status IN ('pendent', 'enviant'))::int AS pend FROM mates.mail_env WHERE mail_id = ${id}`)[0];
  await sql`UPDATE mates.mails SET n_ok = ${c.ok}, n_ko = ${c.ko}, status = ${c.pend ? 'enviant' : 'enviat'}, sent_at = CASE WHEN ${!c.pend} THEN now() ELSE sent_at END, updated_at = now() WHERE id = ${id}`;
}

const page = (t, p) => `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t}</title><body style="font:18px/1.5 system-ui,sans-serif;max-width:520px;margin:12vh auto;padding:0 20px;color:#222;text-align:center"><h1 style="font-size:26px">${t}</h1><p>${p}</p><p><a href="https://numimates.com" style="color:#602B7A">numimates.com</a></p></body>`;

export default async function handler(req, res) {
  await tables();
  const q = req.query || {};
  // baixa (enllaç del correu o un clic des del client de correu)
  if (q.baixa) {
    const e = baixaOf(q.baixa);
    res.setHeader('content-type', 'text/html; charset=utf-8'); res.setHeader('Cache-Control', 'no-store');
    if (!e) return res.status(400).send(page('Enllaç no vàlid · Enlace no válido', "Escriu-nos a hola@numimates.com i et donarem de baixa. · Escríbenos a hola@numimates.com y te daremos de baja."));
    await sql`INSERT INTO mates.mail_baixes (email) VALUES (${e}) ON CONFLICT DO NOTHING`;
    return res.status(200).send(page("T'has donat de baixa · Te has dado de baja", `${escH(e)} ja no rebrà més correus de Numi. · ya no recibirá más correos de Numi.`));
  }
  // informe a les famílies: canviar la freqüència o deixar-lo des del mateix correu (enllaç signat, sense entrar)
  if (q.informe) {
    await informeTables();
    const fam = prefOf(q.informe), f = ['setmanal', 'mensual', 'no'].includes(q.f) ? q.f : 'no';
    res.setHeader('content-type', 'text/html; charset=utf-8'); res.setHeader('Cache-Control', 'no-store');
    if (!fam) return res.status(400).send(page('Enllaç no vàlid · Enlace no válido', 'Escriu-nos a hola@numimates.com. · Escríbenos a hola@numimates.com.'));
    await sql`UPDATE mates.families SET informe = ${f} WHERE id = ${fam}`;
    const msg = f === 'no' ? ["Ja no rebràs més informes de Numi Mates.", 'Ya no recibirás más informes de Numi Mates.'] : f === 'mensual' ? ["A partir d'ara rebràs l'informe un cop al mes.", 'A partir de ahora recibirás el informe una vez al mes.'] : ["A partir d'ara rebràs l'informe cada setmana.", 'A partir de ahora recibirás el informe cada semana.'];
    return res.status(200).send(page('Fet · Hecho', `${msg[0]} · ${msg[1]}<br><br><small>Ho pots tornar a canviar a la zona de famílies. · Lo puedes volver a cambiar en la zona de familias.</small>`));
  }
  // cron de Vercel: envia els programats que ja toquen i continua els que s'havien quedat a mitges
  if (q.cron) {
    if (!process.env.CRON_SECRET || req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) return ok(res, { error: 'permís' }, 401);
    const until = Date.now() + 45000;
    const due = await sql`SELECT id FROM mates.mails WHERE (status = 'programat' AND send_at <= now()) OR status = 'enviant' ORDER BY send_at NULLS FIRST, id LIMIT 5`;
    for (const d of due) { if (Date.now() > until) break; await work(d.id, until); }
    // informes setmanals i mensuals a les famílies (només si l'administrador els ha encès al panell)
    let inf = null;
    if (Date.now() < until) { try { inf = await informesRun(until, items => resendBatch(items.map(i => ({ from: FROM, reply_to: 'hola@numimates.com', ...i })))); } catch (e) { console.error('informes', e.message); } }
    return ok(res, { ok: true, n: due.length, inf });
  }
  const me = await who(req);
  if (!me || !me.admin) { await new Promise(r => setTimeout(r, 600)); return ok(res, { error: 'permís' }, 403); }
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req), id = +b.id || null;
  const fields = () => ({ subject: String(b.subject || '').slice(0, 200), html: String(b.html || '').slice(0, 300000), aud: b.aud && typeof b.aud === 'object' ? b.aud : {}, lang: b.lang === 'es' ? 'es' : 'ca' });

  if (b.action === 'list') {
    const r = await sql`SELECT id, subject, aud, lang, status, send_at, created_at, updated_at, sent_at, n_total, n_ok, n_ko, err FROM mates.mails ORDER BY COALESCE(sent_at, send_at, updated_at) DESC LIMIT 200`;
    const bx = (await sql`SELECT count(*)::int AS n FROM mates.mail_baixes`)[0].n;
    return ok(res, { list: r, baixes: bx, mail: !!process.env.RESEND_API_KEY, cron: !!process.env.CRON_SECRET, stripe: !!STRIPE_KEY });
  }
  if (b.action === 'get') return ok(res, { mail: (await sql`SELECT * FROM mates.mails WHERE id = ${id}`)[0] || null });
  if (b.action === 'count') { const R = await recipients(b.aud || {}); return ok(res, { n: R.size, mostra: [...R.keys()].slice(0, 8) }); }
  if (b.action === 'save') {
    const f = fields();
    if (id) {
      const r = await sql`UPDATE mates.mails SET subject = ${f.subject}, html = ${f.html}, aud = ${JSON.stringify(f.aud)}::jsonb, lang = ${f.lang}, updated_at = now() WHERE id = ${id} AND status IN ('esborrany', 'programat') RETURNING id`;
      return ok(res, r.length ? { ok: true, id } : { error: 'ja enviat' }, r.length ? 200 : 409);
    }
    const r = await sql`INSERT INTO mates.mails (subject, html, aud, lang) VALUES (${f.subject}, ${f.html}, ${JSON.stringify(f.aud)}::jsonb, ${f.lang}) RETURNING id`;
    return ok(res, { ok: true, id: r[0].id });
  }
  if (b.action === 'test') {
    const to = String(b.to || '').split(/[\s,;]+/).map(clean).filter(e => MAILRE.test(e)).slice(0, 5);
    if (!to.length) return ok(res, { error: 'correu' }, 400);
    if (!process.env.RESEND_API_KEY) return ok(res, { error: 'resend' }, 409);
    const m = fields();
    try { await resendBatch(to.map(e => render(m, e, b.nom || 'Moisés', true))); } catch (e) { return ok(res, { error: 'envia', detail: e.message }, 502); }
    return ok(res, { ok: true, n: to.length });
  }
  if (b.action === 'schedule' || b.action === 'send') {
    if (!process.env.RESEND_API_KEY) return ok(res, { error: 'resend' }, 409);
    const m = (await sql`SELECT * FROM mates.mails WHERE id = ${id}`)[0];
    if (!m || !['esborrany', 'programat'].includes(m.status)) return ok(res, { error: 'estat' }, 409);
    if (!m.subject.trim() || !m.html.trim()) return ok(res, { error: 'buit' }, 400);
    const at = b.action === 'send' ? new Date() : new Date(b.at);
    if (isNaN(at)) return ok(res, { error: 'data' }, 400);
    await sql`UPDATE mates.mails SET status = 'programat', send_at = ${at.toISOString()}, err = NULL, updated_at = now() WHERE id = ${id}`;
    if (b.action === 'send') await work(id, Date.now() + 40000);
    return ok(res, { ok: true, mail: (await sql`SELECT id, status, n_total, n_ok, n_ko, err FROM mates.mails WHERE id = ${id}`)[0] });
  }
  // ---- informe a les famílies
  if (b.action === 'inf_state') {
    await informeTables();
    const cfg = (await ajust('informes')) || {};
    const c = (await sql`SELECT count(DISTINCT ff.familia_id)::int AS fam, count(*)::int AS fills, count(*) FILTER (WHERE f.informe = 'setmanal')::int AS setm, count(*) FILTER (WHERE f.informe = 'mensual')::int AS mens FROM mates.familia_fills ff JOIN mates.families f ON f.id = ff.familia_id`)[0];
    const last = await sql`SELECT periode, count(*) FILTER (WHERE status = 'enviat')::int AS ok, count(*) FILTER (WHERE status = 'error')::int AS ko, max(sent_at) AS at FROM mates.informes GROUP BY periode ORDER BY max(sent_at) DESC LIMIT 6`;
    return ok(res, { on: !!cfg.on, mail: !!process.env.RESEND_API_KEY, ...c, last, next: periodNow('setmanal').key });
  }
  if (b.action === 'inf_set') { await setAjust('informes', { on: !!b.on, by: me.docent ? me.docent.nom : 'admin', at: new Date().toISOString() }); return ok(res, { ok: true, on: !!b.on }); }
  if (b.action === 'inf_preview' || b.action === 'inf_test') {
    await informeTables();
    const kind = b.kind === 'mensual' ? 'mensual' : 'setmanal', per = periodNow(kind), lang = b.lang === 'es' ? 'es' : 'ca';
    let k = null, prev = null;
    if (b.code) { k = await kidRow(String(b.code).trim().toUpperCase()); if (!k) return ok(res, { error: 'alumne' }, 404); }
    else {
      // mostra amb dades inventades (s'indica al panell)
      const d = i => { const x = new Date(per.to); x.setUTCDate(x.getUTCDate() - i); return x.toISOString().slice(0, 10); };
      k = { name: 'Laia', course: 3, xp: 1840, lessons: 64, answers: 520, correct: 447, days: [d(0), d(1), d(3), d(4), d(6)],
        sk: { 'mul': [120, 132], 'div:2': [70, 84], 'frac': [40, 61], 'me.clock': [33, 38], 'v.sym': [25, 29] }, prog: { 'c4-1': { stars: [3, 3, 3, 3] }, 'c4-2': { stars: [3, 2, 1, 0, 0] } },
        medals: [{ kind: 'millora', comment: 'Molt bé amb les divisions!', docent_nom: 'Marta', created_at: new Date(per.to).toISOString() }] };
      prev = { xp: 1700, lessons: 52, answers: 440, correct: 378 };
    }
    if (b.code) prev = null;
    const m = reportMail(k, prev, per, lang, 0);
    if (b.action === 'inf_preview') return ok(res, { subject: m.subject, html: m.html, sample: !b.code });
    const to = String(b.to || '').split(/[\s,;]+/).map(clean).filter(e => MAILRE.test(e)).slice(0, 3);
    if (!to.length) return ok(res, { error: 'correu' }, 400);
    if (!process.env.RESEND_API_KEY) return ok(res, { error: 'resend' }, 409);
    try { await resendBatch(to.map(e => ({ from: FROM, reply_to: 'hola@numimates.com', to: [e], subject: '[PROVA] ' + m.subject, html: m.html, text: m.text }))); } catch (e) { return ok(res, { error: 'envia', detail: e.message }, 502); }
    return ok(res, { ok: true, n: to.length });
  }
  if (b.action === 'cancel') { await sql`UPDATE mates.mails SET status = 'esborrany', send_at = NULL, updated_at = now() WHERE id = ${id} AND status = 'programat'`; return ok(res, { ok: true }); }
  if (b.action === 'resume') { await sql`UPDATE mates.mail_env SET status = 'pendent' WHERE mail_id = ${id} AND status = 'error'`; await sql`UPDATE mates.mails SET status = 'enviant', err = NULL WHERE id = ${id}`; await work(id, Date.now() + 40000); return ok(res, { ok: true }); }
  if (b.action === 'dup') { const r = await sql`INSERT INTO mates.mails (subject, html, aud, lang) SELECT subject, html, aud, lang FROM mates.mails WHERE id = ${id} RETURNING id`; return ok(res, r.length ? { ok: true, id: r[0].id } : { error: 'no trobat' }); }
  if (b.action === 'delete') { await sql`DELETE FROM mates.mails WHERE id = ${id} AND status IN ('esborrany', 'programat', 'enviat')`; return ok(res, { ok: true }); }
  return ok(res, { error: 'acció' }, 400);
}
