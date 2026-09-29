import { neon } from '@neondatabase/serverless';
export const sql = neon(process.env.DATABASE_URL);
export const cleanCode = c => String(c || '').toUpperCase().replace(/[^A-Z0-9-]/g, '').slice(0, 20);
export function body(req) { try { return typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {}); } catch { return {}; } }
export function summary(s) {
  const st = s.stats || {};
  return { xp: s.xp | 0, streak: s.streak | 0, best: s.best | 0, last_day: s.lastDay || null, lessons: st.lessons | 0, answers: st.answers | 0, correct: st.correct | 0, course: s.course | 0 };
}
export function ok(res, data, status = 200) { res.setHeader('Cache-Control', 'no-store'); res.status(status).json(data); }
import { scryptSync, randomBytes, timingSafeEqual, createHash } from 'crypto';
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
  const r = await sql`SELECT count(*) FILTER (WHERE k = ${'ip:' + ipKey(req)})::int AS ip, count(*) FILTER (WHERE k = ${'ac:' + acct})::int AS ac
    FROM mates.fails WHERE b = ${b} AND t > now() - make_interval(mins => ${mins}) AND k IN (${'ip:' + ipKey(req)}, ${'ac:' + acct})`;
  return r[0].ip >= max || (acct != null && r[0].ac >= maxAcct);
}
// els registres d'intents (amb la IP) s'esborren sempre al cap d'un dia
export async function note(req, b) { await sql`INSERT INTO mates.fails (k, b) VALUES (${'ip:' + ipKey(req)}, ${b})`; await sql`DELETE FROM mates.fails WHERE t < now() - interval '1 day'`; }
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
export async function alumneOk(req, res, code, passHash) {
  if (!passHash) return true;
  await tokTable();
  const t = String(req.headers['x-alumne'] || '').slice(0, 100);
  if (t && (await sql`UPDATE mates.alumne_tok SET last = now() WHERE hash = ${sha(t)} AND code = ${code} RETURNING 1`).length) return true;
  // pas a les claus: el primer dispositiu que arriba a un compte que encara no en té cap la rep
  if (!(await sql`SELECT 1 FROM mates.alumne_tok WHERE code = ${code} LIMIT 1`).length) { await issueTok(res, code); return true; }
  await fail(req, 'clau', code); ok(res, { error: 'clau' }, 401); return false;
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

// Pla efectiu de l'alumne: «escola» si és dins d'un grup, «premium» si el té i no ha caducat, si no «free»
export function plaOf(a) {
  if (a.grup_id || a.pla === 'escola') return 'escola';
  if (a.pla === 'premium' && (!a.pla_fins || new Date(a.pla_fins) >= new Date(new Date().toISOString().slice(0, 10)))) return 'premium';
  return 'free';
}
