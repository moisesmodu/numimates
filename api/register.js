import { sql, body, summary, ok } from './_lib.js';
const WORDS = ['GUINEU', 'DRAC', 'ROBOT', 'TORTUGA', 'ESTEL', 'COMETA', 'CARGOL', 'LLEO', 'TIGRE', 'BALENA', 'PANDA', 'LLOP', 'FOCA', 'DOFI', 'MUSSOL', 'PINGUI', 'LLAMP', 'PLANETA'];
export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req), name = String(b.name || '').trim().slice(0, 30), state = b.state;
  if (!name || !state || typeof state !== 'object') return ok(res, { error: 'dades' }, 400);
  if (JSON.stringify(state).length > 300000) return ok(res, { error: 'massa gran' }, 413);
  for (let i = 0; i < 8; i++) {
    const code = WORDS[Math.floor(Math.random() * WORDS.length)] + '-' + String(Math.floor(1000 + Math.random() * 9000));
    state.code = code;
    const s = summary(state);
    const r = await sql`INSERT INTO mates.alumnes (code, name, course, survey, state, xp, streak, best, last_day, lessons, answers, correct)
      VALUES (${code}, ${name}, ${s.course}, ${JSON.stringify(b.survey || null)}, ${JSON.stringify(state)}, ${s.xp}, ${s.streak}, ${s.best}, ${s.last_day}, ${s.lessons}, ${s.answers}, ${s.correct})
      ON CONFLICT (code) DO NOTHING RETURNING code`;
    if (r.length) return ok(res, { code });
  }
  return ok(res, { error: 'codi' }, 500);
}
