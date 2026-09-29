import { sql, body, summary, ok, cleanUser, validUser, validPass, hashPass, cleanState, blocked, note, tooMany } from './_lib.js';
import { randomInt } from 'crypto';
// Paraules dels codis secrets (PARAULA-0000). Com més n'hi ha, més difícil és endevinar el codi d'un altre.
const WORDS = [
  'GUINEU', 'DRAC', 'ROBOT', 'TORTUGA', 'ESTEL', 'COMETA', 'CARGOL', 'LLEO', 'TIGRE', 'BALENA', 'PANDA', 'LLOP', 'FOCA', 'DOFI', 'MUSSOL', 'PINGUI', 'LLAMP', 'PLANETA',
  'CASTELL', 'VOLCA', 'COET', 'GALAXIA', 'CACTUS', 'PIRATA', 'BRUIXOLA', 'FLAMENC', 'ESQUIROL', 'GIRAFA', 'KOALA', 'LLAMA', 'CAMALEO', 'ORCA', 'TAURO', 'COLIBRI',
  'CANGUR', 'ELEFANT', 'ZEBRA', 'MARMOTA', 'CRANC', 'MEDUSA', 'ABELLA', 'FORMIGA', 'TEMPESTA', 'AURORA', 'METEOR', 'SATURN', 'LLUNA', 'ICEBERG', 'OASI', 'SELVA', 'DUNA',
  'CASCADA', 'TRITO', 'SIRENA', 'GEGANT', 'FOLLET', 'LINX', 'CORB', 'GAVINA', 'TAIGA'];
export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req), name = String(b.name || '').trim().slice(0, 30), state = b.state;
  if (!name || !state || typeof state !== 'object' || Array.isArray(state)) return ok(res, { error: 'dades' }, 400);
  if (JSON.stringify(state).length > 300000) return ok(res, { error: 'massa gran' }, 413);
  // una classe sencera es pot registrar alhora des de la mateixa xarxa: el límit és per a abusos, no per a l'aula
  if (await blocked(req, 'registre', 120, 60)) return tooMany(res);
  await note(req, 'registre');
  cleanState(state);
  // l'enquesta inicial és petita (curs, edat, com se sent…): res de guardar objectes grans ni d'altres tipus
  const survey = b.survey && typeof b.survey === 'object' && !Array.isArray(b.survey) && JSON.stringify(b.survey).length <= 2000 ? b.survey : null;
  let user = null, hash = null;
  if (b.username) {
    user = cleanUser(b.username);
    if (!validUser(user)) return ok(res, { error: 'usuari-format' }, 400);
    if (!validPass(b.password)) return ok(res, { error: 'contrasenya-format' }, 400);
    if ((await sql`SELECT 1 FROM mates.alumnes WHERE username = ${user}`).length) return ok(res, { error: 'usuari-ocupat' }, 409);
    hash = hashPass(b.password);
  }
  for (let i = 0; i < 8; i++) {
    const code = WORDS[randomInt(WORDS.length)] + '-' + randomInt(1000, 10000);
    state.code = code; if (user) state.username = user; state.unlockAll = false;
    const s = summary(state);
    const r = await sql`INSERT INTO mates.alumnes (code, name, course, survey, state, xp, streak, best, last_day, lessons, answers, correct, username, pass_hash)
      VALUES (${code}, ${name}, ${s.course}, ${JSON.stringify(survey)}, ${JSON.stringify(state)}, ${s.xp}, ${s.streak}, ${s.best}, ${s.last_day}, ${s.lessons}, ${s.answers}, ${s.correct}, ${user}, ${hash})
      ON CONFLICT (code) DO NOTHING RETURNING code`;
    if (r.length) return ok(res, { code, username: user });
  }
  return ok(res, { error: 'codi' }, 500);
}
