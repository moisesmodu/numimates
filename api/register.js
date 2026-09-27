import { sql, body, summary, ok, cleanUser, validUser, validPass, hashPass } from './_lib.js';
const WORDS = ['GUINEU', 'DRAC', 'ROBOT', 'TORTUGA', 'ESTEL', 'COMETA', 'CARGOL', 'LLEO', 'TIGRE', 'BALENA', 'PANDA', 'LLOP', 'FOCA', 'DOFI', 'MUSSOL', 'PINGUI', 'LLAMP', 'PLANETA'];
export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req), name = String(b.name || '').trim().slice(0, 30), state = b.state;
  if (!name || !state || typeof state !== 'object') return ok(res, { error: 'dades' }, 400);
  if (JSON.stringify(state).length > 300000) return ok(res, { error: 'massa gran' }, 413);
  let user = null, hash = null;
  if (b.username) {
    user = cleanUser(b.username);
    if (!validUser(user)) return ok(res, { error: 'usuari-format' }, 400);
    if (!validPass(b.password)) return ok(res, { error: 'contrasenya-format' }, 400);
    if ((await sql`SELECT 1 FROM mates.alumnes WHERE username = ${user}`).length) return ok(res, { error: 'usuari-ocupat' }, 409);
    hash = hashPass(b.password);
  }
  for (let i = 0; i < 8; i++) {
    const code = WORDS[Math.floor(Math.random() * WORDS.length)] + '-' + String(Math.floor(1000 + Math.random() * 9000));
    state.code = code; if (user) state.username = user; state.unlockAll = false;
    const s = summary(state);
    const r = await sql`INSERT INTO mates.alumnes (code, name, course, survey, state, xp, streak, best, last_day, lessons, answers, correct, username, pass_hash)
      VALUES (${code}, ${name}, ${s.course}, ${JSON.stringify(b.survey || null)}, ${JSON.stringify(state)}, ${s.xp}, ${s.streak}, ${s.best}, ${s.last_day}, ${s.lessons}, ${s.answers}, ${s.correct}, ${user}, ${hash})
      ON CONFLICT (code) DO NOTHING RETURNING code`;
    if (r.length) return ok(res, { code, username: user });
  }
  return ok(res, { error: 'codi' }, 500);
}
