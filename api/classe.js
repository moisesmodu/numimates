import { sql, body, ok, cleanCode, blocked, fail, tooMany, alumneOk } from './_lib.js';
import { batTables } from './_batalla.js';
// L'alumne s'uneix al grup del seu docent amb el codi de classe (AULA-XXXX).
// En unir-s'hi passa al pla «escola» (el paga el centre) mentre sigui al grup.
export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req), sid = cleanCode(b.code);
  if (await blocked(req, 'codi', 40)) return tooMany(res);
  const al = (await sql`SELECT code, grup_id, pass_hash FROM mates.alumnes WHERE code = ${sid} AND active`)[0];
  if (!al) { await fail(req, 'codi'); return ok(res, { error: 'alumne' }, 404); }
  if (!(await alumneOk(req, res, sid, al.pass_hash))) return;
  if (b.action === 'leave') { await sql`UPDATE mates.alumnes SET grup_id = NULL, pla = CASE WHEN pla = 'escola' THEN 'free' ELSE pla END WHERE code = ${sid}`; return ok(res, { ok: true }); }
  // medalles que li ha donat el docent (les noves es marquen com a vistes en llegir-les)
  if (b.action === 'medals') {
    await batTables();
    const list = await sql`SELECT id, kind, comment, docent_nom, seen, created_at FROM mates.medalles WHERE code = ${sid} ORDER BY created_at DESC LIMIT 60`;
    if (b.seen && list.some(m => !m.seen)) await sql`UPDATE mates.medalles SET seen = true WHERE code = ${sid} AND NOT seen`;
    return ok(res, { list });
  }
  if (b.action === 'info') {
    if (!al.grup_id) return ok(res, { grup: null });
    const g = (await sql`SELECT g.nom, g.tema, g.opts, c.nom AS centre FROM mates.grups g JOIN mates.centres c ON c.id = g.centre_id WHERE g.id = ${al.grup_id} AND g.actiu`)[0];
    return ok(res, { grup: g || null });
  }
  if (await blocked(req, 'aula', 30)) return tooMany(res);
  const codi = String(b.classe || '').toUpperCase().replace(/[^A-Z0-9-]/g, '').replace(/^AULA(?=[A-Z0-9]{4}$)/, 'AULA-');
  const g = (await sql`SELECT g.id, g.nom, g.curs, g.tema, g.opts, c.nom AS centre FROM mates.grups g JOIN mates.centres c ON c.id = g.centre_id WHERE g.codi = ${codi} AND g.actiu`)[0];
  if (!g) { await fail(req, 'aula'); return ok(res, { error: 'codi' }, 404); }
  // places: un grup no pot créixer sense límit (qui conegui el codi AULA no pot omplir-lo de comptes per tenir el pla escola)
  if (al.grup_id !== g.id && (await sql`SELECT count(*)::int AS n FROM mates.alumnes WHERE grup_id = ${g.id} AND active`)[0].n >= 45) return ok(res, { error: 'ple' }, 409);
  await sql`UPDATE mates.alumnes SET grup_id = ${g.id}, pla = 'escola' WHERE code = ${sid}`;
  return ok(res, { ok: true, grup: { nom: g.nom, centre: g.centre, curs: g.curs, tema: g.tema, opts: g.opts } });
}
