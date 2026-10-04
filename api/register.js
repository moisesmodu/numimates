import { sql, body, summary, ok, cleanUser, validUser, validPass, hashPass, cleanState, blocked, note, tooMany, newStudentCode, issueTok, isMinor, consentCols, fail } from './_lib.js';
// Alta d'un perfil nou. Si és d'un menor de 14 anys (Numi Mates o Pro), al servidor NOMÉS hi queda un codi intern i l'edat:
// ni nom ni progrés fins que un adult ho autoritzi des del correu (consent = 'pending'). El progrés es queda al dispositiu.
export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req), name = String(b.name || '').trim().slice(0, 30), state = b.state;
  if (!name || !state || typeof state !== 'object' || Array.isArray(state)) return ok(res, { error: 'dades' }, 400);
  if (JSON.stringify(state).length > 300000) return ok(res, { error: 'massa gran' }, 413);
  // una classe sencera es pot registrar alhora des de la mateixa xarxa: el límit és per a abusos, no per a l'aula
  if (await blocked(req, 'registre', 60, 60)) return tooMany(res);
  await note(req, 'registre'); await consentCols();
  cleanState(state);
  // l'enquesta inicial és petita (curs, edat, com se sent…): res de guardar objectes grans ni d'altres tipus
  const survey = b.survey && typeof b.survey === 'object' && !Array.isArray(b.survey) && JSON.stringify(b.survey).length <= 2000 ? b.survey : null;
  const variant = ['mates', 'pro', 'ment', 'tech'].includes(b.variant) ? b.variant : ['mates', 'pro', 'ment', 'tech'].includes(state.variant) ? state.variant : 'mates';
  const age = survey && Number.isFinite(+survey.age) ? +survey.age : null;
  // amb el codi de classe (AULA-XXXX) l'alumne entra directament al grup del seu professor: el centre o l'extraescolar
  // té el permís de les famílies, com quan el docent fa l'alta des del panell
  let grup = null;
  if (b.classe) {
    if (await blocked(req, 'aula', 30)) return tooMany(res);
    const codi = String(b.classe).toUpperCase().replace(/[^A-Z0-9-]/g, '').replace(/^AULA(?=[A-Z0-9]{4}$)/, 'AULA-');
    grup = (await sql`SELECT g.id, g.nom, g.curs, g.tema, g.opts, c.nom AS centre FROM mates.grups g JOIN mates.centres c ON c.id = g.centre_id WHERE g.codi = ${codi} AND g.actiu`)[0] || null;
    if (!grup) { await fail(req, 'aula'); return ok(res, { error: 'codi-classe' }, 404); }
    if ((await sql`SELECT count(*)::int AS n FROM mates.alumnes WHERE grup_id = ${grup.id} AND active`)[0].n >= 45) return ok(res, { error: 'ple' }, 409);
  }
  const minor = !grup && isMinor({ survey: { age, variant }, state: { variant } });
  let user = null, hash = null;
  if (b.username && !minor) {
    user = cleanUser(b.username);
    if (!validUser(user)) return ok(res, { error: 'usuari-format' }, 400);
    if (!validPass(b.password)) return ok(res, { error: 'contrasenya-format' }, 400);
    if ((await sql`SELECT 1 FROM mates.alumnes WHERE username = ${user}`).length) return ok(res, { error: 'usuari-ocupat' }, 409);
    hash = hashPass(b.password);
  }
  for (let i = 0; i < 8; i++) {
    const code = newStudentCode();
    let r;
    if (minor) {
      const st = { code, variant, lang: state.lang === 'es' ? 'es' : 'ca', unlockAll: false };
      r = await sql`INSERT INTO mates.alumnes (code, name, course, survey, state, consent, pending_since) VALUES (${code}, '', ${summary(state).course}, ${JSON.stringify({ age, variant })}, ${JSON.stringify(st)}, 'pending', now())
        ON CONFLICT (code) DO NOTHING RETURNING code`;
    } else {
      state.code = code; state.variant = variant; if (user) state.username = user; state.unlockAll = false;
      const s = summary(state);
      r = await sql`INSERT INTO mates.alumnes (code, name, course, survey, state, xp, streak, best, last_day, lessons, answers, correct, username, pass_hash, grup_id, pla)
        VALUES (${code}, ${name}, ${s.course}, ${JSON.stringify(survey)}, ${JSON.stringify(state)}, ${s.xp}, ${s.streak}, ${s.best}, ${s.last_day}, ${s.lessons}, ${s.answers}, ${s.correct}, ${user}, ${hash}, ${grup ? grup.id : null}, ${grup ? 'escola' : 'free'})
        ON CONFLICT (code) DO NOTHING RETURNING code`;
    }
    // aquest dispositiu rep la seva clau: és la que permet les accions delicades (convidar un adult, pagar, posar contrasenya)
    if (r.length) { await issueTok(res, code); return ok(res, { code, username: user, consent: minor ? 'pending' : 'ok', ...(grup ? { grup: { nom: grup.nom, centre: grup.centre, curs: grup.curs, tema: grup.tema, opts: grup.opts } } : {}) }); }
  }
  return ok(res, { error: 'codi' }, 500);
}
