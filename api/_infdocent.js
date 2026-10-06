import { sql } from './_lib.js';
import { sendMail, MAIL_OK } from './_mail.js';
import { ajust, periodNow } from './_informe.js';
import { UNIT_T } from './_units.js';
import { SK_T } from './_skills.js';
// Informe setmanal per correu a cada docent: com ha anat la setmana als seus grups.
// S'envia el dilluns (cron de mails.js) si l'administrador l'ha encès; cada docent el pot apagar al seu compte.
let READY = null;
export const infDocTables = () => READY || (READY = sql`ALTER TABLE mates.docents ADD COLUMN IF NOT EXISTS informe boolean NOT NULL DEFAULT true`
  .then(() => sql`CREATE TABLE IF NOT EXISTS mates.informes_doc (docent_id int NOT NULL, periode text NOT NULL, status text NOT NULL DEFAULT 'reservat', sent_at timestamptz, PRIMARY KEY (docent_id, periode))`)
  .catch(e => { READY = null; throw e; }));

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ca = s => String(s || '').split('|')[0];
const iso = d => d.toISOString().slice(0, 10);
const fdate = d => new Date(d + 'T12:00:00Z').toLocaleDateString('ca-ES', { day: 'numeric', month: 'short', timeZone: 'UTC' });
const unitName = uid => { const [c, n] = String(uid).replace(/^c/, '').split('-'); return `${['1r', '2n', '3r', '4t', '5è', '6è', '1r ESO', '2n ESO', '3r ESO', '4t ESO'][c - 1] || ''} · U${n} · ${ca(UNIT_T[uid]) || uid}`; };

// dades d'un grup per a la setmana [from, to]
async function grupWeek(g, from, to) {
  const A = await sql`SELECT code, name, last_day::text AS last_day, state->'days' AS days, state->'deures' AS deures, state->'exams' AS exams, state->'stats'->'sk' AS sk
    FROM mates.alumnes WHERE grup_id = ${g.id} AND active ORDER BY name`;
  const inWeek = d => d >= from && d <= to;
  const act = A.filter(a => Array.isArray(a.days) && a.days.some(d => inWeek(String(d)))).length;
  const prevFrom = iso(new Date(new Date(from + 'T12:00:00Z').getTime() - 7 * 864e5)), prevTo = iso(new Date(new Date(to + 'T12:00:00Z').getTime() - 7 * 864e5));
  const actPrev = A.filter(a => Array.isArray(a.days) && a.days.some(d => String(d) >= prevFrom && String(d) <= prevTo)).length;
  // tasques que vencien aquesta setmana o que encara són obertes
  const T = await sql`SELECT id, titol, kind, n, fins::text AS fins, alumnes FROM mates.tasques WHERE grup_id = ${g.id} AND NOT tancada AND fins >= ${from} AND inici <= ${to} ORDER BY fins`;
  const tasks = T.map(t => { const who = A.filter(a => !t.alumnes || t.alumnes.includes(a.code)); const done = who.filter(a => { const x = (a.deures || {})[t.id]; return x && x.n && x.k >= x.n; }).length; return { t, n: who.length, done }; });
  // a vigilar: una setmana o més sense entrar, o encallats a la porta
  const toD = new Date(to + 'T12:00:00Z').getTime(), idle = a => a.last_day ? Math.round((toD - new Date(a.last_day + 'T12:00:00Z').getTime()) / 864e5) : null;
  const watch = [];
  A.forEach(a => {
    const i = idle(a); if (i == null || i >= 8) { watch.push([a.name, i == null ? 'encara no ha començat' : `fa ${i} dies que no entra`]); return; }
    const st = Object.entries(a.exams || {}).find(([, x]) => x && x.tries >= 2 && (x.best || 0) < 75);
    if (st) watch.push([a.name, `no supera la porta (${unitName(st[0])})`]);
  });
  // l'habilitat amb més errors (dades acumulades de la classe)
  const agg = {}; A.forEach(a => Object.entries(a.sk || {}).forEach(([k, v]) => { if (!Array.isArray(v) || ['sprint', 'flash', 'chain'].includes(k)) return; const x = agg[k] ||= [0, 0]; x[0] += +v[0] || 0; x[1] += +v[1] || 0; }));
  const worst = Object.entries(agg).filter(([, x]) => x[1] >= 30).map(([k, x]) => [k, Math.round(100 * (1 - x[0] / x[1]))]).sort((a, b) => b[1] - a[1])[0];
  return { g, n: A.length, act, actPrev, tasks, watch: watch.slice(0, 6), more: Math.max(0, watch.length - 6), worst };
}

export async function infDocMail(docentId) {
  await infDocTables();
  const d = (await sql`SELECT id, nom, email FROM mates.docents WHERE id = ${docentId}`)[0]; if (!d) return null;
  const G = await sql`SELECT g.id, g.nom FROM mates.grups g WHERE g.docent_id = ${docentId} AND g.actiu AND EXISTS (SELECT 1 FROM mates.alumnes a WHERE a.grup_id = g.id AND a.active) ORDER BY g.nom`;
  if (!G.length) return null;
  const per = periodNow('setmanal'), from = iso(per.from), to = iso(per.to);
  const W = []; for (const g of G) W.push(await grupWeek(g, from, to));
  const box = (l, v, m) => `<td style="background:#F7F6F9;border-radius:8px;padding:12px 14px;vertical-align:top"><div style="font-size:12px;color:#6F6679">${l}</div><div style="font-size:22px;font-weight:800;color:#1E1724">${v}</div>${m ? `<div style="font-size:12px;color:#6F6679">${m}</div>` : ''}</td>`;
  const sec = w => {
    const dA = w.act - w.actPrev;
    return `<h2 style="font-size:18px;margin:26px 0 10px;color:#1E1724">${esc(w.g.nom)}</h2>
    <table role="presentation" width="100%" cellspacing="8" cellpadding="0" style="margin:0 -8px"><tr>${box('Actius la setmana', `${w.act} / ${w.n}`, `${dA >= 0 ? '+' : ''}${dA} respecte l'anterior`)}${w.tasks.length ? box('Tasques', `${w.tasks.reduce((s, x) => s + x.done, 0)} / ${w.tasks.reduce((s, x) => s + x.n, 0)}`, 'fetes') : ''}${box('A vigilar', w.watch.length + w.more, 'alumnes')}</tr></table>
    ${w.tasks.length ? `<p style="margin:12px 0 4px;font-weight:700">Tasques</p><ul style="margin:0;padding-left:18px;color:#3A3242">${w.tasks.map(x => `<li>${esc(x.t.titol)} · ${x.done} de ${x.n} fetes · ${x.t.fins < iso(new Date()) ? 'va vèncer' : 'venç'} el ${fdate(x.t.fins)}</li>`).join('')}</ul>` : ''}
    ${w.watch.length ? `<p style="margin:12px 0 4px;font-weight:700">A vigilar</p><ul style="margin:0;padding-left:18px;color:#3A3242">${w.watch.map(([n, why]) => `<li><b>${esc(n)}</b>: ${esc(why)}</li>`).join('')}${w.more ? `<li>i ${w.more} més</li>` : ''}</ul>` : ''}
    ${w.worst ? `<p style="margin:12px 0 4px;font-weight:700">El que més costa a la classe</p><p style="margin:0;color:#3A3242">${esc(ca((SK_T[w.worst[0]] || [])[1]) || w.worst[0])}${SK_T[w.worst[0]] ? ` (${esc(unitName(SK_T[w.worst[0]][0]))})` : ''}: ${w.worst[1]} % d'errors.</p>` : ''}`;
  };
  const subject = `Numi · com ha anat la setmana (${fdate(from)} – ${fdate(to)})`;
  const html = `<!doctype html><html lang="ca"><body style="margin:0;background:#F2F0F5;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#1E1724">
  <div style="max-width:620px;margin:0 auto;padding:24px 12px"><div style="background:#fff;border:1px solid #E4E0EA;border-radius:12px;overflow:hidden">
  <div style="background:#602B7A;color:#fff;padding:20px 26px"><div style="font-size:13px;opacity:.85">Numi · resum setmanal per al docent</div><div style="font-size:21px;font-weight:800;margin-top:4px">Del ${fdate(from)} al ${fdate(to)}</div></div>
  <div style="padding:6px 26px 26px;font-size:15px;line-height:1.5"><p style="margin:18px 0 0">Hola, ${esc(String(d.nom).split(' ')[0])}. Així ha anat la setmana:</p>
  ${W.map(sec).join('')}
  <p style="margin:26px 0 0"><a href="https://profe.numimates.com" style="display:inline-block;background:#602B7A;color:#fff;text-decoration:none;font-weight:700;border-radius:8px;padding:12px 18px">Obre el panell</a></p></div></div>
  <p style="font-size:12px;color:#6F6679;text-align:center;margin:14px 0 0">Ho reps perquè ets docent a Numi. Ho pots apagar al panell: Compte → Informe setmanal.</p></div></body></html>`;
  const text = `${subject}\n\n` + W.map(w => `${w.g.nom}: ${w.act}/${w.n} actius. ` + (w.watch.length ? 'A vigilar: ' + w.watch.map(x => x[0]).join(', ') + '.' : '')).join('\n') + '\n\nhttps://profe.numimates.com';
  return { subject, html, text, per };
}

export const infDocSend = items => Promise.all(items.map(i => sendMail({ to: i.to[0], subject: i.subject, html: i.html, text: i.text })));

// cron: el dilluns i el dimarts envia l'informe de la setmana tancada a cada docent que encara no l'hagi rebut
export async function infDocRun(until) {
  const cfg = await ajust('informe_docents'); if (!cfg || !cfg.on || !MAIL_OK()) return { off: true };
  await infDocTables();
  const per = periodNow('setmanal'); if (Date.now() - per.to.getTime() > 2.5 * 864e5) return { tard: true };
  const D = await sql`SELECT d.id FROM mates.docents d WHERE d.actiu AND d.informe AND d.email IS NOT NULL
    AND EXISTS (SELECT 1 FROM mates.grups g WHERE g.docent_id = d.id AND g.actiu)
    AND NOT EXISTS (SELECT 1 FROM mates.informes_doc i WHERE i.docent_id = d.id AND i.periode = ${per.key})
    AND NOT EXISTS (SELECT 1 FROM mates.mail_baixes b WHERE b.email = d.email) LIMIT 20`;
  let n = 0;
  for (const { id } of D) {
    if (Date.now() > until) break;
    const r = await sql`INSERT INTO mates.informes_doc (docent_id, periode) VALUES (${id}, ${per.key}) ON CONFLICT DO NOTHING RETURNING docent_id`; if (!r.length) continue;
    let st = 'enviat';
    try { const m = await infDocMail(id), to = (await sql`SELECT email FROM mates.docents WHERE id = ${id}`)[0].email; if (m) { await sendMail({ to, subject: m.subject, html: m.html, text: m.text }); n++; } else st = 'buit'; }
    catch (e) { st = 'error'; console.error('informe docent', id, e.message); }
    await sql`UPDATE mates.informes_doc SET status = ${st}, sent_at = now() WHERE docent_id = ${id} AND periode = ${per.key}`;
  }
  return { n };
}
