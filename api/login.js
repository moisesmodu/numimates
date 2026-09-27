import { sql, body, cleanCode, ok } from './_lib.js';
export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const code = cleanCode(body(req).code);
  if (!code) return ok(res, { error: 'codi' }, 400);
  const r = await sql`SELECT name, state FROM mates.alumnes WHERE code = ${code} AND active`;
  if (!r.length) return ok(res, { error: 'no trobat' }, 404);
  return ok(res, { name: r[0].name, state: r[0].state });
}
