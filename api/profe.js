import { sql, ok, body, cleanCode, validPass, hashPass } from './_lib.js';
import { timingSafeEqual } from 'crypto';
const same = (a, b) => { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && timingSafeEqual(x, y); };
export default async function handler(req, res) {
  const pass = req.headers['x-profe'] || '';
  if (!process.env.PROFE_PASS || !same(pass, process.env.PROFE_PASS)) { await new Promise(r => setTimeout(r, 600)); return ok(res, { error: 'contrasenya' }, 401); }
  if (req.method === 'POST') {
    const b = body(req), code = cleanCode(b.code);
    if (b.action === 'setpass') {
      if (!validPass(b.password)) return ok(res, { error: 'contrasenya-format' }, 400);
      const r = await sql`UPDATE mates.alumnes SET pass_hash = ${hashPass(b.password)} WHERE code = ${code} AND username IS NOT NULL RETURNING code`;
      return ok(res, r.length ? { ok: true } : { error: 'sense usuari' }, r.length ? 200 : 404);
    }
    if (b.action === 'unlock') { await sql`UPDATE mates.alumnes SET state = jsonb_set(state, '{unlockAll}', to_jsonb(${!!b.value}::boolean)) WHERE code = ${code}`; return ok(res, { ok: true }); }
    if (b.action === 'off') { await sql`UPDATE mates.alumnes SET active = false WHERE code = ${code}`; return ok(res, { ok: true }); }
    return ok(res, { error: 'acció' }, 400);
  }
  const rows = await sql`SELECT code, username, name, course, survey, xp, streak, best, last_day, lessons, answers, correct, created_at, updated_at,
    state->'srw' AS srw, state->'tests' AS tests, state->'lang' AS lang, state->'stats'->'bests' AS bests, state->'unlockAll' AS unlock_all, state->'week' AS week, state->'stats'->'sk' AS sk, state->'reco' AS reco, state->'school' AS school, state->'album' AS album, state->'stats'->'bwins' AS bwins FROM mates.alumnes WHERE active ORDER BY streak DESC, xp DESC`;
  const battles = await sql`SELECT b.code, b.kind, b.course, b.status, b.created_at, b.start_at,
    COALESCE(json_agg(json_build_object('name', j.name, 'correct', j.correct, 'ms', j.ms, 'done', j.done, 'finished', j.finished, 'card', j.card) ORDER BY j.correct DESC, j.ms) FILTER (WHERE j.sid IS NOT NULL), '[]') AS players
    FROM mates.batalles b LEFT JOIN mates.batalla_jug j USING (code) WHERE b.created_at > now() - interval '30 days' GROUP BY b.code ORDER BY b.created_at DESC LIMIT 60`;
  return ok(res, { rows, battles });
}
