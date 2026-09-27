import { sql, body, cleanCode, cleanUser, validUser, validPass, hashPass, ok } from './_lib.js';
// Crea o canvia l'usuari i la contrasenya d'un alumne (el codi fa de clau) · o comprova si un usuari està lliure.
export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req), user = cleanUser(b.username);
  if (b.check) return ok(res, { free: validUser(user) && !(await sql`SELECT 1 FROM mates.alumnes WHERE username = ${user}`).length });
  const code = cleanCode(b.code);
  if (!code || !validUser(user)) return ok(res, { error: 'usuari-format' }, 400);
  if (!validPass(b.password)) return ok(res, { error: 'contrasenya-format' }, 400);
  const taken = await sql`SELECT code FROM mates.alumnes WHERE username = ${user}`;
  if (taken.length && taken[0].code !== code) return ok(res, { error: 'usuari-ocupat' }, 409);
  const r = await sql`UPDATE mates.alumnes SET username = ${user}, pass_hash = ${hashPass(b.password)}, state = jsonb_set(state, '{username}', to_jsonb(${user}::text)) WHERE code = ${code} AND active RETURNING code`;
  if (!r.length) return ok(res, { error: 'no trobat' }, 404);
  return ok(res, { ok: true, username: user });
}
