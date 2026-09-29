/* Zona de famílies (app.numimates.com/families). Hi entra un adult amb un enllaç que rep per correu (sense contrasenya)
   i hi veu el progrés dels fills que ha afegit amb el seu codi. En afegir un fill, l'adult dona l'autorització
   (obligatòria per a menors de 14 anys, art. 7 LOPDGDD): en queda la data i la IP.
   Accions (POST /api/account?f=…): link · enter · data · add · remove */
import { createHash, randomBytes } from 'crypto';
import { sql, body, cleanCode, cleanUser, ok, blocked, fail, note, tooMany, ipOf, plaOf } from './_lib.js';
import { famToken, famOf, who } from './_auth.js';
import { subOf } from './_stripe.js';
import { MAIL_OK, sendMail } from './_mail.js';

const ORIGINS = ['https://app.numimates.com', 'https://pro.numimates.com', 'https://ment.numimates.com', 'https://mates-numi.vercel.app', 'http://localhost:5176', 'http://127.0.0.1:5176'];
const hash = t => createHash('sha256').update(t).digest('hex');
const cleanMail = m => String(m || '').trim().toLowerCase().slice(0, 160);
const validMail = m => /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[a-z]{2,}$/i.test(m);

let ready = null;
const tables = () => ready || (ready = sql`CREATE TABLE IF NOT EXISTS mates.families (id serial PRIMARY KEY, email text UNIQUE NOT NULL, lang text, created_at timestamptz NOT NULL DEFAULT now(), last_login timestamptz)`
  .then(() => sql`CREATE TABLE IF NOT EXISTS mates.familia_fills (familia_id int NOT NULL REFERENCES mates.families(id) ON DELETE CASCADE, code text NOT NULL, consent_at timestamptz NOT NULL DEFAULT now(), consent_ip text, created_at timestamptz NOT NULL DEFAULT now(), PRIMARY KEY (familia_id, code))`)
  .then(() => sql`CREATE TABLE IF NOT EXISTS mates.familia_links (token_hash text PRIMARY KEY, email text NOT NULL, code text, lang text, consent_ip text, expires timestamptz NOT NULL, used boolean NOT NULL DEFAULT false)`)
  .catch(e => { ready = null; throw e; }));

// l'alumne pel codi o pel nom d'usuari
async function student(v) {
  const c = cleanCode(v), u = cleanUser(v);
  const r = await sql`SELECT code, name FROM mates.alumnes WHERE active AND (code = ${c} OR username = ${u}) LIMIT 1`;
  return r[0] || null;
}

function mailText(lang, link) {
  const es = lang === 'es';
  const subject = es ? 'Tu enlace para entrar en Numi Mates' : "El teu enllaç per entrar a Numi Mates";
  const hi = es ? 'Hola,' : 'Hola,';
  const p1 = es ? 'Pulsa el botón para entrar en la zona de familias de Numi Mates y ver cómo avanza tu hijo o hija.' : 'Prem el botó per entrar a la zona de famílies de Numi Mates i veure com avança el teu fill o filla.';
  const btn = es ? 'Entrar en Numi Mates' : 'Entra a Numi Mates';
  const p2 = es ? 'El enlace caduca en 30 minutos y solo sirve una vez. Si no lo has pedido tú, puedes ignorar este correo.' : "L'enllaç caduca d'aquí a 30 minuts i només serveix una vegada. Si no l'has demanat tu, pots ignorar aquest correu.";
  const sign = es ? 'El equipo de Numi Mates' : "L'equip de Numi Mates";
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;max-width:480px;margin:0 auto;padding:24px;color:#2B1A38">
    <p style="font-size:22px;font-weight:800;color:#602B7A;margin:0 0 20px">numi mates</p>
    <p style="font-size:16px;line-height:1.5">${hi}</p><p style="font-size:16px;line-height:1.5">${p1}</p>
    <p style="margin:24px 0"><a href="${link}" style="background:#602B7A;color:#fff;text-decoration:none;font-weight:700;padding:14px 22px;border-radius:12px;display:inline-block">${btn}</a></p>
    <p style="font-size:13px;line-height:1.5;color:#6A5F78">${p2}</p><p style="font-size:14px;margin-top:24px">${sign}</p></div>`;
  return { subject, html, text: `${hi}\n\n${p1}\n\n${link}\n\n${p2}\n\n${sign}` };
}

async function link(req, res, b) {
  const email = cleanMail(b.email), lang = b.lang === 'es' ? 'es' : 'ca';
  if (!validMail(email)) return ok(res, { error: 'correu' }, 400);
  if (await blocked(req, 'familia-link', 12, 60, email, 5)) return tooMany(res);
  let code = null;
  if (b.code) {
    if (b.consent !== true) return ok(res, { error: 'consentiment' }, 400);
    if (await blocked(req, 'codi', 40)) return tooMany(res);
    const a = await student(b.code);
    if (!a) { await fail(req, 'codi'); return ok(res, { error: 'no trobat' }, 404); }
    code = a.code;
  } else if (!(await sql`SELECT 1 FROM mates.families WHERE email = ${email}`).length) {
    // sense fill i sense compte: no diem si el correu existeix; simplement no s'envia res
    await note(req, 'familia-link'); return ok(res, { ok: true });
  }
  const t = randomBytes(24).toString('base64url'), origin = ORIGINS.includes(req.headers.origin) ? req.headers.origin : ORIGINS[0];
  await sql`INSERT INTO mates.familia_links (token_hash, email, code, lang, consent_ip, expires) VALUES (${hash(t)}, ${email}, ${code}, ${lang}, ${code ? ipOf(req) : null}, now() + interval '30 minutes')`;
  await note(req, 'familia-link'); await sql`INSERT INTO mates.fails (k, b) VALUES (${'ac:' + email}, 'familia-link')`;
  const url = `${origin}${/localhost|127\.0\.0\.1/.test(origin) ? '/families.html' : '/families'}#t=${t}`;
  // sense Resend configurat, o si ho demana l'administrador (suport a una família), l'enllaç es torna a la resposta
  const adm = req.headers['x-docent'] ? !!(await who(req))?.admin : false;
  if (adm || (!MAIL_OK() && process.env.VERCEL_ENV !== 'production')) return ok(res, { ok: true, dev: url });
  if (!MAIL_OK()) return ok(res, { error: 'correu-off' }, 503);
  try { await sendMail({ to: email, ...mailText(lang, url) }); } catch (e) { console.error('mail', e.message); return ok(res, { error: 'correu-off' }, 502); }
  return ok(res, { ok: true });
}

async function enter(req, res, b) {
  const t = String(b.token || '');
  if (!/^[A-Za-z0-9_-]{20,80}$/.test(t)) return ok(res, { error: 'enllaç' }, 400);
  if (await blocked(req, 'familia-enter', 30)) return tooMany(res);
  const l = (await sql`UPDATE mates.familia_links SET used = true WHERE token_hash = ${hash(t)} AND NOT used AND expires > now() RETURNING email, code, lang, consent_ip`)[0];
  if (!l) { await fail(req, 'familia-enter'); return ok(res, { error: 'enllaç' }, 410); }
  const f = (await sql`INSERT INTO mates.families (email, lang, last_login) VALUES (${l.email}, ${l.lang}, now()) ON CONFLICT (email) DO UPDATE SET last_login = now() RETURNING id`)[0];
  if (l.code) await sql`INSERT INTO mates.familia_fills (familia_id, code, consent_ip) VALUES (${f.id}, ${l.code}, ${l.consent_ip}) ON CONFLICT DO NOTHING`;
  return ok(res, { ok: true, tok: famToken(f.id), email: l.email });
}

async function data(req, res, fam) {
  const f = (await sql`SELECT email FROM mates.families WHERE id = ${fam}`)[0];
  if (!f) return ok(res, { error: 'sessió' }, 401);
  const rows = await sql`SELECT a.code, a.name, a.course, a.xp, a.streak, a.last_day, a.lessons, a.answers, a.correct, a.pla, a.pla_fins, a.grup_id,
      a.stripe_sub, a.pla_periode, a.pla_cancel, a.stripe_status, a.active, g.nom AS grup,
      a.state->'days' AS days, a.state->'exams' AS exams, a.state->'stats'->'sk' AS sk, a.state->'prog' AS prog, a.state->'companion' AS companion
    FROM mates.familia_fills ff JOIN mates.alumnes a ON a.code = ff.code LEFT JOIN mates.grups g ON g.id = a.grup_id
    WHERE ff.familia_id = ${fam} ORDER BY ff.created_at`;
  const kids = rows.filter(r => r.active).map(r => ({
    code: r.code, name: r.name, course: r.course | 0, xp: r.xp | 0, streak: r.streak | 0, last_day: r.last_day, lessons: r.lessons | 0, answers: r.answers | 0, correct: r.correct | 0,
    pla: plaOf(r), sub: subOf(r), grup: r.grup || null, companion: typeof r.companion === 'string' ? r.companion : 'numi',
    days: Array.isArray(r.days) ? r.days.slice(-60) : [], exams: r.exams && typeof r.exams === 'object' ? r.exams : {}, sk: r.sk && typeof r.sk === 'object' ? r.sk : {}, prog: r.prog && typeof r.prog === 'object' ? r.prog : {}
  }));
  return ok(res, { email: f.email, kids });
}

export default async function familia(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  await tables();
  const b = body(req), a = String(req.query.f);
  if (a === 'link') return link(req, res, b);
  if (a === 'enter') return enter(req, res, b);
  const fam = famOf(b.tok);
  if (!fam) return ok(res, { error: 'sessió' }, 401);
  if (a === 'data') return data(req, res, fam);
  if (a === 'add') {
    if (b.consent !== true) return ok(res, { error: 'consentiment' }, 400);
    if (await blocked(req, 'codi', 40)) return tooMany(res);
    const s = await student(b.code);
    if (!s) { await fail(req, 'codi'); return ok(res, { error: 'no trobat' }, 404); }
    await sql`INSERT INTO mates.familia_fills (familia_id, code, consent_ip) VALUES (${fam}, ${s.code}, ${ipOf(req)}) ON CONFLICT DO NOTHING`;
    return data(req, res, fam);
  }
  if (a === 'remove') { await sql`DELETE FROM mates.familia_fills WHERE familia_id = ${fam} AND code = ${cleanCode(b.code)}`; return data(req, res, fam); }
  return ok(res, { error: 'acció' }, 400);
}
