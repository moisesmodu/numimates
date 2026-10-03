import { neon } from '@neondatabase/serverless';
export const sql = neon(process.env.DATABASE_URL);
export const cleanCode = c => String(c || '').toUpperCase().replace(/[^A-Z0-9-]/g, '').slice(0, 20);
export function body(req) { try { return typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {}); } catch { return {}; } }
export function summary(s) {
  const st = s.stats || {};
  return { xp: s.xp | 0, streak: s.streak | 0, best: s.best | 0, last_day: s.lastDay || null, lessons: st.lessons | 0, answers: st.answers | 0, correct: st.correct | 0, course: s.course | 0 };
}
export function ok(res, data, status = 200) { res.setHeader('Cache-Control', 'no-store'); res.status(status).json(data); }
import { scryptSync, randomBytes, timingSafeEqual, createHash, createHmac, randomInt } from 'crypto';
export const cleanUser = u => String(u || '').trim().toLowerCase();
export const validUser = u => /^[a-z0-9._-]{3,20}$/.test(u);
export const validPass = p => typeof p === 'string' && p.length >= 4 && p.length <= 60;
export function hashPass(p) { const salt = randomBytes(16).toString('hex'); return salt + ':' + scryptSync(p, salt, 32).toString('hex'); }
export function checkPass(p, h) {
  if (!h || typeof p !== 'string') return false;
  const [salt, hex] = h.split(':'), a = Buffer.from(hex, 'hex'), b = scryptSync(p, salt, 32);
  return a.length === b.length && timingSafeEqual(a, b);
}
export const slow = () => new Promise(r => setTimeout(r, 700));

// --- Límit d'intents fallits (codis d'alumne, contrasenyes, codis de classe) ---
// Es compta per IP i, si n'hi ha, també per compte. Una escola surt a internet amb una sola IP,
// per això els límits per IP són generosos i els de compte, més estrictes.
export const ipOf = req => String(req.headers['x-real-ip'] || String(req.headers['x-forwarded-for'] || '').split(',')[0] || 'local').trim().slice(0, 64);
// per als límits, una IPv6 compta pel seu /64 (una sola connexió en té milions: si no, n'hi hauria prou canviant d'adreça)
const ipKey = req => {
  const ip = ipOf(req).toLowerCase(), v4 = ip.match(/(\d{1,3}(?:\.\d{1,3}){3})$/);
  if (!ip.includes(':')) return ip; if (v4) return v4[1];
  const [h, t = ''] = ip.replace(/%.*$/, '').split('::'), a = h ? h.split(':') : [], z = t ? t.split(':') : [];
  return [...a, ...Array(Math.max(0, 8 - a.length - z.length)).fill('0'), ...z].slice(0, 4).map(x => x.replace(/^0+(?=.)/, '')).join(':') + '::/64';
};
export async function blocked(req, b, max, mins = 15, acct = null, maxAcct = Math.ceil(max / 2)) {
  if (b === 'codi' && await codesHot()) return true;
  const r = await sql`SELECT count(*) FILTER (WHERE k = ${'ip:' + ipKey(req)})::int AS ip, count(*) FILTER (WHERE k = ${'ac:' + acct})::int AS ac
    FROM mates.fails WHERE b = ${b} AND t > now() - make_interval(mins => ${mins}) AND k IN (${'ip:' + ipKey(req)}, ${'ac:' + acct})`;
  return r[0].ip >= max || (acct != null && r[0].ac >= maxAcct);
}
// els registres d'intents (amb la IP) s'esborren sempre al cap d'un dia
export async function note(req, b) {
  await sql`INSERT INTO mates.fails (k, b) VALUES (${'ip:' + ipKey(req)}, ${b})`;
  // neteja dels registres de més d'un dia: de tant en tant, no a cada petició
  if (Math.random() < 0.02) await sql`DELETE FROM mates.fails WHERE t < now() - interval '1 day'`;
}
export async function fail(req, b, acct = null) {
  await note(req, b);
  if (acct != null) await sql`INSERT INTO mates.fails (k, b) VALUES (${'ac:' + acct}, ${b})`;
  await slow();
}
export const tooMany = res => ok(res, { error: 'massa' }, 429);

// --- Clau de dispositiu (comptes d'alumne amb contrasenya) ---
// Si l'alumne té contrasenya, el codi sol ja no dona accés al compte: cada dispositiu rep una clau secreta en entrar
// amb usuari i contrasenya (o en posar-la), i l'envia a la capçalera x-alumne. Es guarda només el resum (sha-256).
// Sense contrasenya, el codi continua sent la clau (és el que fan servir els infants a l'aula).
let TOKT = null;
const tokTable = () => TOKT || (TOKT = sql`CREATE TABLE IF NOT EXISTS mates.alumne_tok (hash text PRIMARY KEY, code text NOT NULL, created timestamptz NOT NULL DEFAULT now(), last timestamptz NOT NULL DEFAULT now())`
  .then(() => sql`CREATE INDEX IF NOT EXISTS alumne_tok_code ON mates.alumne_tok (code)`).catch(e => { TOKT = null; throw e; }));
const sha = t => createHash('sha256').update(String(t)).digest('hex');
export async function issueTok(res, code) {
  await tokTable(); const t = randomBytes(24).toString('base64url');
  await sql`INSERT INTO mates.alumne_tok (hash, code) VALUES (${sha(t)}, ${code})`;
  // com a molt 20 dispositius per compte (els més antics es tanquen)
  await sql`DELETE FROM mates.alumne_tok WHERE code = ${code} AND hash NOT IN (SELECT hash FROM mates.alumne_tok WHERE code = ${code} ORDER BY last DESC LIMIT 20)`;
  res.setHeader('x-alumne-new', t); return t;
}
export async function dropToks(code) { await tokTable(); await sql`DELETE FROM mates.alumne_tok WHERE code = ${code}`; }
// true si la petició pot continuar; si no, ja ha respost 401 { error: 'clau' }
const hasTok = async (req, code) => { const t = String(req.headers['x-alumne'] || '').slice(0, 100);
  return !!t && (await sql`UPDATE mates.alumne_tok SET last = now() WHERE hash = ${sha(t)} AND code = ${code} RETURNING 1`).length > 0; };
export async function alumneOk(req, res, code, passHash) {
  await tokTable();
  if (await hasTok(req, code)) return true;
  if (!passHash) {
    // sense contrasenya el codi continua obrint el compte (l'aula); si el compte encara no té cap dispositiu amb clau,
    // el primer que hi arriba la rep (comptes d'abans de les claus). Les accions delicades demanen la clau: alumneStrict.
    if (!(await sql`SELECT 1 FROM mates.alumne_tok WHERE code = ${code} LIMIT 1`).length) await issueTok(res, code);
    return true;
  }
  // amb contrasenya, la clau només s'obté entrant amb usuari i contrasenya (login) o posant-la (account)
  await fail(req, 'clau', code); ok(res, { error: 'clau' }, 401); return false;
}
// Accions delicades (vincular un adult, posar usuari i contrasenya, pagar o cancel·lar): cal la clau del dispositiu.
// Endevinar un codi ja no n'hi ha prou per quedar-se un compte. Respon 403 { error: 'dispositiu' } si no la té.
export async function alumneStrict(req, res, code) {
  await tokTable();
  if (await hasTok(req, code)) return true;
  await fail(req, 'clau', code); ok(res, { error: 'dispositiu' }, 403); return false;
}

// --- Autorització de la família (menors de 14 anys, art. 7 LOPDGDD) ---
// Columna alumnes.consent: 'pending' (perfil nou d'un menor que espera el sí d'un adult), 'ok' (un adult ho ha autoritzat) o null
// (no cal: adults, Numi Ment, alumnes d'una escola; o comptes d'abans, que tenen marge fins a CONSENT_LEGACY).
export const CONSENT_LEGACY = '2026-10-03';   // sense marge: des del 03/10/2026 els comptes antics de menors també necessiten el permís
export const CONSENT_AGE = 14;                 // art. 7 LOPDGDD (si la llei la puja a 16, només cal canviar-la aquí i a app.js)
export function isMinor(a) {
  if (!a || a.grup_id || a.pla === 'escola') return false;                       // l'escola en té el permís de les famílies
  const st = a.state || {}, sv = a.survey || {}, age = +(sv.age ?? st.age);
  if ((st.variant || sv.variant) === 'ment' && !(age < 18)) return false;      // Numi Ment: adults (l'any de naixement el diu)
  return !(age >= CONSENT_AGE);                                                  // sense edat coneguda: com a menor
}
// Contractar (pagar) des de l'app: només adults (Numi Ment o 18 anys o més). Si no, ho fa la família des del correu o la zona de famílies.
export function adultOnly(a) {
  const st = a.state || {}, sv = a.survey || {}, age = +(sv.age ?? st.age);
  if ((st.variant || sv.variant) === 'ment' && !(age < 18)) return false;
  return !(age >= 18);
}
// true si el compte ja pot desar al núvol i fer servir les funcions en línia
export function consentOk(a) {
  if (!isMinor(a) || a.consent === 'ok') return true;
  if (a.consent === 'pending') return false;
  return new Date() < new Date(CONSENT_LEGACY);                                  // comptes d'abans: marge
}
let CONS = null;
// columnes noves sense bloquejar la taula a cada arrencada: primer es mira si ja hi són
export const consentCols = () => CONS || (CONS = (async () => {
  const have = new Set((await sql`SELECT table_name || '.' || column_name AS c FROM information_schema.columns WHERE table_schema = 'mates' AND table_name IN ('alumnes', 'familia_links', 'families', 'consent_log')`).map(r => r.c));
  if (!have.has('alumnes.consent')) await sql`ALTER TABLE mates.alumnes ADD COLUMN IF NOT EXISTS consent text, ADD COLUMN IF NOT EXISTS consent_at timestamptz`;
  if (!have.has('alumnes.pla_inici')) await sql`ALTER TABLE mates.alumnes ADD COLUMN IF NOT EXISTS pla_inici date`;   // inici de la subscripció actual (desistiment)
  if (!have.has('alumnes.pending_since')) {
    // des de quan espera el permís (els 30 dies per esborrar-lo es compten des d'aquí, no des de l'alta)
    await sql`ALTER TABLE mates.alumnes ADD COLUMN IF NOT EXISTS pending_since timestamptz`;
    await sql`UPDATE mates.alumnes SET pending_since = COALESCE(created_at, now()) WHERE consent = 'pending' AND pending_since IS NULL`;
    // comptes antics de menors sense permís (fora d'escola i de Numi Ment): passen a esperar-lo des d'avui
    await sql`UPDATE mates.alumnes SET consent = 'pending', pending_since = now() WHERE consent IS NULL AND grup_id IS NULL AND COALESCE(pla, 'free') <> 'escola'
      AND COALESCE(state->>'variant', survey->>'variant', 'mates') <> 'ment'
      AND NOT (COALESCE(survey->>'age', '') ~ '^[0-9]{1,3}$' AND (survey->>'age')::int >= ${CONSENT_AGE})`;
  }
  if (!have.has('consent_log.code')) await sql`CREATE TABLE IF NOT EXISTS mates.consent_log (id serial PRIMARY KEY, code text NOT NULL, email_hash text, ip text, kind text NOT NULL, at timestamptz NOT NULL DEFAULT now())`;
  if (have.has('familia_links.email') && !have.has('familia_links.created')) await sql`ALTER TABLE mates.familia_links ADD COLUMN IF NOT EXISTS created timestamptz NOT NULL DEFAULT now(), ADD COLUMN IF NOT EXISTS kid text`;
  if (have.has('families.email') && !have.has('families.promo')) await sql`ALTER TABLE mates.families ADD COLUMN IF NOT EXISTS promo boolean NOT NULL DEFAULT false`;
  if (!have.has('familia_links.email') || !have.has('families.email')) CONS = null;   // la zona de famílies encara no té taules: es tornarà a mirar
})().catch(e => { CONS = null; throw e; }));
// prova del consentiment (data, IP i un resum del correu): es conserva bloquejada encara que s'esborri el compte
export async function logConsent(code, email, ip, kind) {
  await consentCols();
  try { await sql`INSERT INTO mates.consent_log (code, email_hash, ip, kind) VALUES (${code}, ${email ? createHash('sha256').update(String(email).toLowerCase()).digest('hex').slice(0, 32) : null}, ${ip || null}, ${kind})`; } catch (e) { console.error('consent_log', e.message); }
}
// enllaç signat per retirar un permís des del correu de confirmació (família + alumne)
export const revokeTok = (fam, code) => `${fam}.${code}.` + createHmac('sha256', process.env.SESSION_SECRET || 'x').update(`revoca:${fam}:${code}`).digest('base64url').slice(0, 22);
export function revokeOf(t) {
  const [f, c, sg] = String(t || '').split('.'); if (!f || !c || !sg) return null;
  const ok = revokeTok(+f, c).split('.')[2]; return ok.length === sg.length && timingSafeEqual(Buffer.from(ok), Buffer.from(sg)) ? { fam: +f, code: c } : null;
}
// retira el permís d'un adult: si ja no en queda cap, el perfil del menor torna a esperar-ne (i en 30 dies s'esborra)
export async function withdrawConsent(fam, code) {
  await sql`DELETE FROM mates.familia_fills WHERE familia_id = ${fam} AND code = ${code}`;
  if (!(await sql`SELECT 1 FROM mates.familia_fills WHERE code = ${code} LIMIT 1`).length)
    await sql`UPDATE mates.alumnes SET consent = 'pending', pending_since = now() WHERE code = ${code} AND consent = 'ok' AND grup_id IS NULL`;
  await logConsent(code, null, null, 'retirat');
}
// per als endpoints en línia (batalles, xat, canvis, lliga): 403 { error: 'permis' } si encara falta el sí de la família
export async function consentGuard(res, code) {
  await consentCols();
  const a = (await sql`SELECT consent, grup_id, pla, survey, state->>'variant' AS variant FROM mates.alumnes WHERE code = ${code}`)[0];
  if (!a || consentOk({ ...a, state: { variant: a.variant } })) return true;
  ok(res, { error: 'permis' }, 403); return false;
}

// Fre global: si en 15 minuts hi ha massa codis equivocats entre totes les IP (algú provant-ne molts des de moltes
// adreces), es frenen les entrades per codi fins que baixi. Una aula normal no hi arriba mai.
export async function codesHot() {
  const r = await sql`SELECT count(*)::int AS n FROM mates.fails WHERE b = 'codi' AND t > now() - interval '15 minutes'`;
  return r[0].n >= 1500;
}
// per als endpoints que només tenen el codi: busca la contrasenya i aplica alumneOk
export async function alumneGuard(req, res, code) {
  const r = (await sql`SELECT pass_hash FROM mates.alumnes WHERE code = ${code}`)[0];
  return !r || alumneOk(req, res, code, r.pass_hash);
}

// --- Estat de l'alumne: el guardem tal com arriba, però els camps que es pinten al panell o a l'app
// han de tenir el tipus correcte (números com a números, dates com a dates). Tot el que no ho compleixi es descarta.
const num = v => (typeof v === 'number' && Number.isFinite(v)) ? v : (typeof v === 'string' && v !== '' && Number.isFinite(+v)) ? +v : undefined;
const isObj = v => v && typeof v === 'object' && !Array.isArray(v);
const day = v => (typeof v === 'string' && /^\d{4}-\d{2}-\d{2}/.test(v)) ? v.slice(0, 10) : undefined;
export function cleanState(s) {
  for (const k of ['xp', 'gems', 'streak', 'best', 'freeze', 'goal', 'course', 'baseCourse', 'maxCourse']) if (k in s) { const n = num(s[k]); if (n === undefined) delete s[k]; else s[k] = n; }
  if ('lastDay' in s && s.lastDay !== null && !day(s.lastDay)) delete s.lastDay;
  if (typeof s.name === 'string') s.name = s.name.slice(0, 30);
  if ('days' in s) s.days = Array.isArray(s.days) ? s.days.map(day).filter(Boolean).slice(-400) : [];
  if ('tests' in s) s.tests = Array.isArray(s.tests) ? s.tests.filter(isObj).filter(t => num(t.pct) !== undefined).slice(-60)
    .map(t => ({ ...t, date: day(t.date) || null, pct: Math.round(num(t.pct)), ok: num(t.ok), n: num(t.n), course: num(t.course), kind: t.kind === 'evo' ? 'evo' : 'inicial' })) : [];
  if ('exams' in s) s.exams = isObj(s.exams) ? Object.fromEntries(Object.entries(s.exams).filter(([k, x]) => /^c\d{1,2}-\d{1,2}$/.test(k) && isObj(x))
    .map(([k, x]) => [k, { ...x, best: num(x.best) ?? 0, last: num(x.last) ?? 0, tries: num(x.tries) ?? 0, d: day(x.d) || null }])) : {};
  if (isObj(s.stats)) {
    for (const k of ['answers', 'correct', 'perfect', 'lessons', 'trains', 'combo', 'bestCombo', 'sprintBest', 'games', 'bwins']) if (k in s.stats) s.stats[k] = num(s.stats[k]) ?? 0;
    if ('sk' in s.stats) s.stats.sk = isObj(s.stats.sk) ? Object.fromEntries(Object.entries(s.stats.sk).filter(([, v]) => Array.isArray(v)).map(([k, v]) => [k.slice(0, 40), [num(v[0]) ?? 0, num(v[1]) ?? 0]])) : {};
  }
  if (isObj(s.week)) { s.week.xp = num(s.week.xp) ?? 0; if (typeof s.week.id !== 'string' || !/^\d{4}-W\d{2}$/.test(s.week.id)) delete s.week.id; }
  if (isObj(s.school) && 'ui' in s.school) s.school.ui = num(s.school.ui) ?? 0;
  if (isObj(s.daily)) s.daily.xp = num(s.daily.xp) ?? 0;
  return s;
}

// Supressió de veritat d'un alumne (dret de supressió, fi del contracte amb un centre o caducitat): s'esborra l'alumne
// i el que el vincula a famílies; a batalles i intercanvis s'hi treu el nom i el codi.
export async function eraseStudent(code) {
  try { await sql`DELETE FROM mates.batalla_jug WHERE sid = ${code}`; } catch (e) { }
  try { await sql`UPDATE mates.canvis SET a_sid = NULL, a_name = '—' WHERE a_sid = ${code}`; await sql`UPDATE mates.canvis SET b_sid = NULL, b_name = '—' WHERE b_sid = ${code}`; } catch (e) { }
  try { await sql`DELETE FROM mates.medalles WHERE code = ${code}`; } catch (e) { }
  try { await sql`DELETE FROM mates.informes WHERE code = ${code}`; } catch (e) { }
  try { await sql`DELETE FROM mates.familia_fills WHERE code = ${code}`; await sql`DELETE FROM mates.familia_links WHERE code = ${code}`; } catch (e) { }
  try { await sql`DELETE FROM mates.xat_us WHERE code = ${code}`; await sql`DELETE FROM mates.fails WHERE k = ${'ac:' + code}`; } catch (e) { }
  try { await sql`UPDATE mates.batalles SET host = NULL WHERE host = ${code}`; } catch (e) { }
  try { await sql`DELETE FROM mates.alumne_tok WHERE code = ${code}`; } catch (e) { }
  try { await sql`DELETE FROM mates.lliga WHERE code = ${code}`; await sql`DELETE FROM mates.lliga_premis WHERE code = ${code}`; } catch (e) { }
  await sql`DELETE FROM mates.alumnes WHERE code = ${code}`;
}

// Conservació (política de privadesa): sol·licituds de permís sense resposta en 30 dies, comptes sense activitat en 24 mesos
// (sense subscripció ni escola), enllaços caducats i famílies sense fills ni entrades en 24 mesos. Ho crida el cron.
export async function purge() {
  await consentCols();
  const old = await sql`SELECT code FROM mates.alumnes WHERE stripe_sub IS NULL AND grup_id IS NULL AND (
      (consent = 'pending' AND COALESCE(pending_since, created_at) < now() - interval '30 days') OR updated_at < now() - interval '24 months') LIMIT 100`;
  for (const r of old) await eraseStudent(r.code);
  await sql`DELETE FROM mates.fails WHERE t < now() - interval '1 day'`;
  // registre de consentiments (prova, bloquejat): 3 anys
  try { await sql`DELETE FROM mates.consent_log WHERE at < now() - interval '3 years'`; } catch (e) { }
  // altres registres amb data de caducitat (política de privadesa)
  for (const q of [() => sql`DELETE FROM mates.contactes WHERE created_at < now() - interval '12 months'`, () => sql`DELETE FROM mates.informes WHERE sent_at < now() - interval '24 months'`,
    () => sql`DELETE FROM mates.mail_env WHERE sent_at < now() - interval '12 months'`, () => sql`DELETE FROM mates.canvis WHERE created_at < now() - interval '6 months'`,
    () => sql`DELETE FROM mates.batalla_jug WHERE joined_at < now() - interval '6 months'`, () => sql`DELETE FROM mates.batalles WHERE created_at < now() - interval '6 months'`]) { try { await q(); } catch (e) { } }
  let links = 0, fams = 0;
  try { links = (await sql`DELETE FROM mates.familia_links WHERE expires < now() - interval '1 day' RETURNING 1`).length; } catch (e) { }
  try { fams = (await sql`DELETE FROM mates.families f WHERE COALESCE(f.last_login, f.created_at) < now() - interval '24 months' AND NOT EXISTS (SELECT 1 FROM mates.familia_fills ff WHERE ff.familia_id = f.id) RETURNING 1`).length; } catch (e) { }
  return { alumnes: old.length, links, fams };
}

// Pla efectiu de l'alumne: «escola» si és dins d'un grup, «premium» si el té i no ha caducat, si no «free»
export function plaOf(a) {
  if (a.grup_id || a.pla === 'escola') return 'escola';
  if (a.pla === 'premium' && (!a.pla_fins || new Date(a.pla_fins) >= new Date(new Date().toISOString().slice(0, 10)))) return 'premium';
  return 'free';
}

// Paraules dels codis secrets (PARAULA-0000). Com més n'hi ha, més difícil és endevinar el codi d'un altre.
export const WORDS = [
  'GUINEU', 'DRAC', 'ROBOT', 'TORTUGA', 'ESTEL', 'COMETA', 'CARGOL', 'LLEO', 'TIGRE', 'BALENA', 'PANDA', 'LLOP', 'FOCA', 'DOFI', 'MUSSOL', 'PINGUI', 'LLAMP', 'PLANETA',
  'CASTELL', 'VOLCA', 'COET', 'GALAXIA', 'CACTUS', 'PIRATA', 'BRUIXOLA', 'FLAMENC', 'ESQUIROL', 'GIRAFA', 'KOALA', 'LLAMA', 'CAMALEO', 'ORCA', 'TAURO', 'COLIBRI',
  'CANGUR', 'ELEFANT', 'ZEBRA', 'MARMOTA', 'CRANC', 'MEDUSA', 'ABELLA', 'FORMIGA', 'TEMPESTA', 'AURORA', 'METEOR', 'SATURN', 'LLUNA', 'ICEBERG', 'OASI', 'SELVA', 'DUNA',
  'CASCADA', 'TRITO', 'SIRENA', 'GEGANT', 'FOLLET', 'LINX', 'CORB', 'GAVINA', 'TAIGA'];
// PARAULA-0000-0000: 60 × 9.000 × 10.000 ≈ 5.400 milions de codis (abans PARAULA-0000, només 540.000). Els antics continuen valent.
export const newStudentCode = () => WORDS[randomInt(WORDS.length)] + '-' + randomInt(1000, 10000) + '-' + String(randomInt(0, 10000)).padStart(4, '0');
