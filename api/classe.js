import { sql, body, ok, cleanCode, slow } from './_lib.js';
// L'alumne s'uneix al grup del seu docent amb el codi de classe (AULA-XXXX).
// En unir-s'hi passa al pla «escola» (el paga el centre) mentre sigui al grup.
export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req), sid = cleanCode(b.code);
  const al = (await sql`SELECT code, grup_id FROM mates.alumnes WHERE code = ${sid} AND active`)[0];
  if (!al) return ok(res, { error: 'alumne' }, 404);
  if (b.action === 'leave') { await sql`UPDATE mates.alumnes SET grup_id = NULL, pla = CASE WHEN pla = 'escola' THEN 'free' ELSE pla END WHERE code = ${sid}`; return ok(res, { ok: true }); }
  if (b.action === 'info') {
    if (!al.grup_id) return ok(res, { grup: null });
    const g = (await sql`SELECT g.nom, g.codi, c.nom AS centre FROM mates.grups g JOIN mates.centres c ON c.id = g.centre_id WHERE g.id = ${al.grup_id} AND g.actiu`)[0];
    return ok(res, { grup: g || null });
  }
  const codi = String(b.classe || '').toUpperCase().replace(/[^A-Z0-9-]/g, '').replace(/^AULA(?=[A-Z0-9]{4}$)/, 'AULA-');
  const g = (await sql`SELECT g.id, g.nom, g.codi, g.curs, c.nom AS centre FROM mates.grups g JOIN mates.centres c ON c.id = g.centre_id WHERE g.codi = ${codi} AND g.actiu`)[0];
  if (!g) { await slow(); return ok(res, { error: 'codi' }, 404); }
  await sql`UPDATE mates.alumnes SET grup_id = ${g.id}, pla = 'escola' WHERE code = ${sid}`;
  return ok(res, { ok: true, grup: { nom: g.nom, codi: g.codi, centre: g.centre, curs: g.curs } });
}
