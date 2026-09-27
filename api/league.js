import { sql, body, cleanCode, ok } from './_lib.js';
// Lliga setmanal: només nom de pila, company i XP de la setmana. Mai codis ni altres dades.
export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req), code = cleanCode(b.code), week = String(b.week || '');
  if (!/^\d{4}-W\d{2}$/.test(week)) return ok(res, { error: 'setmana' }, 400);
  const course = Number.isInteger(b.course) ? b.course : null;
  const rows = course === null
    ? await sql`SELECT code, name, state->>'companion' AS companion, (state->'week'->>'xp')::int AS xp FROM mates.alumnes WHERE active AND state->'week'->>'id' = ${week} AND (state->'week'->>'xp')::int > 0 ORDER BY xp DESC LIMIT 30`
    : await sql`SELECT code, name, state->>'companion' AS companion, (state->'week'->>'xp')::int AS xp FROM mates.alumnes WHERE active AND course = ${course} AND state->'week'->>'id' = ${week} AND (state->'week'->>'xp')::int > 0 ORDER BY xp DESC LIMIT 30`;
  return ok(res, { rows: rows.map(r => ({ name: String(r.name).trim().split(/\s+/)[0], companion: r.companion || 'numi', xp: r.xp, me: !!code && r.code === code })) });
}
