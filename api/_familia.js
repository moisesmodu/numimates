/* Zona de famílies (app.numimates.com/families). Hi entra un adult amb un enllaç que rep per correu (sense contrasenya)
   i hi veu el progrés dels seus fills. Un fill s'hi afegeix NOMÉS des de la seva app (invitació amb la clau del dispositiu):
   l'adult rep el correu, marca que n'és el pare, la mare o el tutor i ho autoritza (obligatori per a menors de 14 anys,
   art. 7 LOPDGDD): en queda la data i la IP, i el perfil del menor passa de 'pending' a 'ok' i ja es pot desar al núvol.
   Accions (POST /api/account?f=…): link · enter · data · add · remove */
import { TECH_T } from './_techunits.js';
import { createHash, randomBytes } from 'crypto';
import { sql, body, cleanCode, ok, blocked, fail, note, tooMany, ipOf, plaOf, alumneStrict, consentCols, logConsent, revokeTok, withdrawConsent, eraseStudent } from './_lib.js';
import { famToken, famOf, who } from './_auth.js';
import { subOf } from './_stripe.js';
import { MAIL_OK, sendMail } from './_mail.js';
import { informeTables } from './_informe.js';

const ORIGINS = ['https://app.numimates.com', 'https://pro.numimates.com', 'https://ment.numimates.com', 'https://tech.numimates.com', 'https://mates-numi.vercel.app', 'http://localhost:5176', 'http://127.0.0.1:5176']
  .filter(o => process.env.VERCEL_ENV !== 'production' || !/localhost|127\.0\.0\.1/.test(o));   // en producció, els enllaços mai porten a localhost
const hash = t => createHash('sha256').update(t).digest('hex');
const cleanMail = m => String(m || '').trim().toLowerCase().slice(0, 160);
const validMail = m => /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[a-z]{2,}$/i.test(m);

let ready = null;
const tables = () => ready || (ready = sql`CREATE TABLE IF NOT EXISTS mates.families (id serial PRIMARY KEY, email text UNIQUE NOT NULL, lang text, created_at timestamptz NOT NULL DEFAULT now(), last_login timestamptz, promo boolean NOT NULL DEFAULT false)`
  .then(() => sql`CREATE TABLE IF NOT EXISTS mates.familia_fills (familia_id int NOT NULL REFERENCES mates.families(id) ON DELETE CASCADE, code text NOT NULL, consent_at timestamptz NOT NULL DEFAULT now(), consent_ip text, created_at timestamptz NOT NULL DEFAULT now(), PRIMARY KEY (familia_id, code))`)
  .then(() => sql`CREATE TABLE IF NOT EXISTS mates.familia_links (token_hash text PRIMARY KEY, email text NOT NULL, code text, lang text, consent_ip text, expires timestamptz NOT NULL, used boolean NOT NULL DEFAULT false, created timestamptz NOT NULL DEFAULT now(), kid text)`)
  .catch(e => { ready = null; throw e; }));

// l'alumne NOMÉS pel codi: el nom d'usuari no és secret (qualsevol el podria endevinar i veure el progrés i el codi del nen)
async function student(v) {
  const c = cleanCode(v); if (!c) return null;
  const r = await sql`SELECT code, name FROM mates.alumnes WHERE active AND code = ${c} LIMIT 1`;
  return r[0] || null;
}

// invitació des de l'app: l'alumne escriu el correu d'un adult; en prémer el botó, l'adult confirma que n'és el pare,
// la mare o el tutor i dona l'autorització (en queda la data i la IP del clic, a enter()). I a partir d'aquí rep l'informe.
function inviteText(lang, link, kid) {
  const es = lang === 'es', n = String(kid || '').split(' ')[0].replace(/[<>&"']/g, '') || (es ? 'Tu hijo o hija' : 'El teu fill o filla');
  const subject = es ? `${n} te pide permiso para usar Numi Mates` : `${n} et demana permís per fer servir Numi Mates`;
  const p1 = es ? `${n} ha empezado a practicar matemáticas con Numi Mates y ha escrito tu correo. Si lo autorizas, <b>su progreso se guardará en la nube</b> (podrá seguir en otro dispositivo), podrá usar la liga y las batallas, y tú recibirás un <b>informe semanal</b>: los días que practica, cómo le van los ejercicios y una idea para ayudarle en casa. Mientras no lo autorices, su progreso solo queda en su dispositivo.` : `${n} ha començat a practicar matemàtiques amb Numi Mates i ha escrit el teu correu. Si ho autoritzes, <b>el seu progrés es desarà al núvol</b> (podrà continuar en un altre dispositiu), podrà fer servir la lliga i les batalles, i tu rebràs un <b>informe setmanal</b>: els dies que practica, com li van els exercicis i una idea per ajudar-lo a casa. Mentre no ho autoritzis, el seu progrés només es queda al seu dispositiu.`;
  const p2 = es ? 'En la página que se abre tendrás que confirmar que eres su padre, madre o tutor legal y que lo autorizas (necesario si tiene menos de 14 años). Guardamos el mínimo de datos y no hay publicidad.' : "A la pàgina que s'obre hauràs de confirmar que ets el seu pare, mare o tutor legal i que ho autoritzes (cal si té menys de 14 anys). Guardem el mínim de dades i no hi ha publicitat.";
  const btn = es ? 'Revisar y autorizar' : 'Revisa i autoritza';
  const p3 = es ? 'El enlace caduca en 7 días. Si no conoces a quien te ha invitado, ignora este correo y no recibirás nada más: si no lo autorizas, borramos tu dirección en 30 días.' : "L'enllaç caduca d'aquí a 7 dies. Si no coneixes qui t'ha convidat, ignora aquest correu i no rebràs res més: si no ho autoritzes, esborrem la teva adreça en 30 dies.";
  // primera comunicació amb l'adult (RGPD art. 14): qui som, d'on ve el correu i on hi ha la informació
  const p4 = es ? 'Responsable: Numi Mates (datos en numimates.com/es/aviso-legal), hola@numimates.com. Tu dirección nos la ha dado tu hijo o hija desde la app. Más información: numimates.com/es/privacidad' : "Responsable: Numi Mates (dades a numimates.com/avis-legal), hola@numimates.com. La teva adreça ens l'ha donat el teu fill o filla des de l'app. Més informació: numimates.com/privacitat";
  const sign = es ? 'El equipo de Numi Mates' : "L'equip de Numi Mates";
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;max-width:480px;margin:0 auto;padding:24px;color:#2B1A38">
    <p style="font-size:22px;font-weight:800;color:#602B7A;margin:0 0 20px">numi mates</p>
    <p style="font-size:16px;line-height:1.5">${p1}</p>
    <p style="margin:24px 0"><a href="${link}" style="background:#602B7A;color:#fff;text-decoration:none;font-weight:700;padding:14px 22px;border-radius:12px;display:inline-block">${btn}</a></p>
    <p style="font-size:13px;line-height:1.5;color:#6A5F78">${p2}</p><p style="font-size:13px;line-height:1.5;color:#6A5F78">${p3}</p><p style="font-size:14px;margin-top:24px">${sign}</p><p style="font-size:11.5px;line-height:1.45;color:#8A7F96;margin-top:18px">${p4}</p></div>`;
  return { subject, html, text: `${p1.replace(/<[^>]+>/g, '')}\n\n${link}\n\n${p2}\n\n${p3}\n\n${sign}\n\n${p4}` };
}
// confirmació després d'autoritzar (amb l'enllaç per retirar-ho si no ha estat aquest adult)
function okText(lang, kid, revoke) {
  const es = lang === 'es', n = String(kid || '').replace(/[<>&"']/g, '') || (es ? 'tu hijo o hija' : 'el teu fill o filla');
  const subject = es ? `Has autorizado a ${n} en Numi Mates` : `Has autoritzat ${n} a Numi Mates`;
  const p1 = es ? `Hemos registrado tu autorización para que <b>${n}</b> use Numi Mates. A partir de ahora su progreso se guarda en la nube y recibirás el informe en este correo.` : `Hem registrat la teva autorització perquè <b>${n}</b> faci servir Numi Mates. A partir d'ara el seu progrés es desa al núvol i rebràs l'informe en aquest correu.`;
  const p2 = es ? 'Si no has sido tú, o quieres retirar el permiso, pulsa aquí:' : "Si no has estat tu, o vols retirar el permís, prem aquí:";
  const btn = es ? 'Retirar el permiso' : 'Retira el permís';
  const sign = es ? 'El equipo de Numi Mates' : "L'equip de Numi Mates";
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;max-width:480px;margin:0 auto;padding:24px;color:#2B1A38"><p style="font-size:22px;font-weight:800;color:#602B7A;margin:0 0 20px">numi mates</p>
    <p style="font-size:16px;line-height:1.5">${p1}</p><p style="font-size:14px;line-height:1.5;color:#6A5F78">${p2}</p>
    <p style="margin:16px 0"><a href="${revoke}" style="color:#602B7A;font-weight:700">${btn}</a></p><p style="font-size:14px;margin-top:24px">${sign}</p></div>`;
  return { subject, html, text: `${p1.replace(/<[^>]+>/g, '')}\n\n${p2} ${revoke}\n\n${sign}` };
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
  let code = null, kid = null;
  const invite = b.invite === true && !!b.code;
  // afegir un fill escrivint el seu codi a la zona de famílies ja no es pot (amb un codi endevinat algú s'hi podria vincular):
  // es fa des de l'app del fill, que té la clau del dispositiu
  if (b.code && !invite) return ok(res, { error: 'des-de-app' }, 400);
  if (invite) {
    if (await blocked(req, 'codi', 40)) return tooMany(res);
    const a = await student(b.code);
    if (!a) { await fail(req, 'codi'); return ok(res, { error: 'no trobat' }, 404); }
    if (!(await alumneStrict(req, res, a.code))) return;
    code = a.code; kid = String(b.kid || a.name || '').replace(/[<>&"'`\\]/g, '').trim().split(/\s+/)[0].slice(0, 20) || null;
    // contra el correu brossa: com a molt 3 invitacions per fill i 3 per adreça cada dia, i 400 en total
    const n = (await sql`SELECT count(*) FILTER (WHERE code = ${code})::int AS c, count(*) FILTER (WHERE email = ${email})::int AS e, count(*)::int AS t
      FROM mates.familia_links WHERE code IS NOT NULL AND created > now() - interval '1 day'`)[0];
    if (n.c >= 3 || n.e >= 3 || n.t >= 400) return tooMany(res);
  } else if (!(await sql`SELECT 1 FROM mates.families WHERE email = ${email}`).length) {
    // sense fill i sense compte: no diem si el correu existeix; simplement no s'envia res
    await note(req, 'familia-link'); return ok(res, { ok: true });
  }
  const t = randomBytes(24).toString('base64url'), origin = ORIGINS.includes(req.headers.origin) ? req.headers.origin : ORIGINS[0];
  await sql`INSERT INTO mates.familia_links (token_hash, email, code, lang, kid, expires) VALUES (${hash(t)}, ${email}, ${code}, ${lang}, ${kid}, now() + ${invite ? '7 days' : '30 minutes'}::interval)`;
  await note(req, 'familia-link'); await sql`INSERT INTO mates.fails (k, b) VALUES (${'ac:' + email}, 'familia-link')`;
  const url = `${origin}${/localhost|127\.0\.0\.1/.test(origin) ? '/families.html' : '/families'}#t=${t}`;
  // sense Resend configurat, o si ho demana l'administrador (suport a una família), l'enllaç es torna a la resposta
  const adm = req.headers['x-docent'] ? !!(await who(req))?.admin : false;
  if (adm || (!MAIL_OK() && process.env.VERCEL_ENV !== 'production')) return ok(res, { ok: true, dev: url });
  if (!MAIL_OK()) return ok(res, { error: 'correu-off' }, 503);
  try { await sendMail({ to: email, ...(invite ? inviteText(lang, url, kid) : mailText(lang, url)) }); } catch (e) { console.error('mail', e.message); return ok(res, { error: 'correu-off' }, 502); }
  return ok(res, { ok: true });
}

async function enter(req, res, b) {
  const t = String(b.token || '');
  if (!/^[A-Za-z0-9_-]{20,80}$/.test(t)) return ok(res, { error: 'enllaç' }, 400);
  if (await blocked(req, 'familia-enter', 30)) return tooMany(res);
  // invitació d'un fill: abans de vincular-lo, l'adult ha de confirmar que n'és el pare, la mare o el tutor i que ho autoritza
  const pre = (await sql`SELECT code, kid, email FROM mates.familia_links WHERE token_hash = ${hash(t)} AND NOT used AND expires > now()`)[0];
  if (!pre) { await fail(req, 'familia-enter'); return ok(res, { error: 'enllaç' }, 410); }
  if (pre.code && b.consent !== true) return ok(res, { consent: 'cal', kid: pre.kid || null, email: pre.email });
  const l = (await sql`UPDATE mates.familia_links SET used = true WHERE token_hash = ${hash(t)} AND NOT used AND expires > now() RETURNING email, code, lang`)[0];
  if (!l) { await fail(req, 'familia-enter'); return ok(res, { error: 'enllaç' }, 410); }
  const f = (await sql`INSERT INTO mates.families (email, lang, last_login) VALUES (${l.email}, ${l.lang}, now()) ON CONFLICT (email) DO UPDATE SET last_login = now() RETURNING id`)[0];
  if (l.code) {
    await sql`INSERT INTO mates.familia_fills (familia_id, code, consent_ip) VALUES (${f.id}, ${l.code}, ${ipOf(req)}) ON CONFLICT DO NOTHING`;
    // a partir d'ara el perfil del menor es pot desar al núvol i fer servir les funcions en línia
    await sql`UPDATE mates.alumnes SET consent = 'ok', consent_at = now(), pending_since = NULL WHERE code = ${l.code} AND (consent IS NULL OR consent <> 'ok')`;
    await logConsent(l.code, l.email, ipOf(req), 'autoritzat');
    // segon correu («correu plus»): confirmació amb un enllaç per retirar-ho si no ha estat aquest adult
    if (MAIL_OK()) { const k = (await sql`SELECT kid FROM mates.familia_links WHERE token_hash = ${hash(t)}`)[0]; sendMail({ to: l.email, ...okText(l.lang, k && k.kid, `https://app.numimates.com/api/mails?revoca=${encodeURIComponent(revokeTok(f.id, l.code))}`) }).catch(e => console.error('mail ok', e.message)); }
  }
  return ok(res, { ok: true, tok: famToken(f.id), email: l.email });
}

// Numi Tech per a la zona de famílies: sessions fetes del curs, la que toca ara i com va
function techSum(t) {
  if (!t || typeof t !== 'object' || !t.s || typeof t.s !== 'object') return null;
  const c = TECH_T.courses[t.c] ? t.c : 'robot', ids = Object.keys(TECH_T.s).filter(id => TECH_T.s[id].c === c);
  const done = ids.filter(id => t.s[id] && t.s[id].done).length, next = ids.find(id => !(t.s[id] && t.s[id].done));
  if (!Object.keys(t.s).length) return { course: TECH_T.courses[c].n, done: 0, total: ids.length, next: next ? TECH_T.s[next].t : null };
  return { course: TECH_T.courses[c].n, done, total: ids.length, next: next ? TECH_T.s[next].t : null, nextU: next ? TECH_T.s[next].u : null, badges: Object.keys(t.badges || {}).length };
}
async function data(req, res, fam) {
  let f; try { f = (await sql`SELECT email, informe, promo FROM mates.families WHERE id = ${fam}`)[0]; } catch (e) { f = (await sql`SELECT email FROM mates.families WHERE id = ${fam}`)[0]; }
  if (!f) return ok(res, { error: 'sessió' }, 401);
  const rows = await sql`SELECT a.code, a.name, a.course, a.xp, a.streak, a.last_day, a.lessons, a.answers, a.correct, a.pla, a.pla_fins, a.grup_id,
      a.stripe_sub, a.pla_periode, a.pla_cancel, a.stripe_status, a.pla_inici, a.active, g.nom AS grup,
      a.state->'days' AS days, a.state->'exams' AS exams, a.state->'stats'->'sk' AS sk, a.state->'prog' AS prog, a.state->'companion' AS companion, a.state->>'variant' AS variant, (a.state->'tech') - 'port' AS tech, k.kid
    FROM mates.familia_fills ff JOIN mates.alumnes a ON a.code = ff.code LEFT JOIN mates.grups g ON g.id = a.grup_id
      LEFT JOIN LATERAL (SELECT kid FROM mates.familia_links fl WHERE fl.code = a.code AND fl.kid IS NOT NULL ORDER BY fl.created DESC LIMIT 1) k ON true
    WHERE ff.familia_id = ${fam} ORDER BY ff.created_at`;
  const kids = rows.filter(r => r.active).map(r => ({
    code: r.code, name: r.name || r.kid || '·', course: r.course | 0, xp: r.xp | 0, streak: r.streak | 0, last_day: r.last_day, lessons: r.lessons | 0, answers: r.answers | 0, correct: r.correct | 0,
    pla: plaOf(r), sub: subOf(r), app: r.variant === 'pro' ? 'Numi Pro' : r.variant === 'ment' ? 'Numi Ment' : r.variant === 'tech' ? 'Numi Tech' : 'Numi Mates', tech: techSum(r.tech), grup: r.grup || null, companion: typeof r.companion === 'string' ? r.companion : 'numi',
    days: Array.isArray(r.days) ? r.days.slice(-60) : [], exams: r.exams && typeof r.exams === 'object' ? r.exams : {}, sk: r.sk && typeof r.sk === 'object' ? r.sk : {}, prog: r.prog && typeof r.prog === 'object' ? r.prog : {}
  }));
  // medalles del docent de cada fill (la taula pot no existir encara si ningú n'ha donat cap)
  try { const md = await sql`SELECT code, kind, comment, docent_nom, created_at FROM mates.medalles WHERE code = ANY(${kids.map(k => k.code)}) ORDER BY created_at DESC`; kids.forEach(k => { k.medals = md.filter(m => m.code === k.code).slice(0, 20).map(({ code, ...m }) => m); }); } catch (e) { kids.forEach(k => { k.medals = []; }); }
  return ok(res, { email: f.email, informe: f.informe || 'setmanal', promo: !!f.promo, kids });
}

export default async function familia(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  await tables(); await informeTables(); await consentCols();
  const b = body(req), a = String(req.query.f);
  if (a === 'link') return link(req, res, b);
  if (a === 'enter') return enter(req, res, b);
  const fam = famOf(b.tok);
  if (!fam) return ok(res, { error: 'sessió' }, 401);
  if (a === 'data') return data(req, res, fam);
  // afegir un fill amb el seu codi ja no es pot des d'aquí: es fa des de l'app del fill (vegeu link)
  if (a === 'add') return ok(res, { error: 'des-de-app' }, 400);
  if (a === 'cfg') {
    if (['setmanal', 'mensual', 'no'].includes(b.informe)) await sql`UPDATE mates.families SET informe = ${b.informe} WHERE id = ${fam}`;
    // novetats i promocions de Numi: només amb el sí explícit de la família (LSSI art. 21)
    if (typeof b.promo === 'boolean') await sql`UPDATE mates.families SET promo = ${b.promo} WHERE id = ${fam}`;
    return data(req, res, fam);
  }
  if (a === 'remove') { await withdrawConsent(fam, cleanCode(b.code)); return data(req, res, fam); }
  // dret de supressió des de la zona de famílies: totes les dades d'un fill, o el compte de la família sencer
  if (a === 'erase') {
    const c = cleanCode(b.code);
    if (!(await sql`SELECT 1 FROM mates.familia_fills WHERE familia_id = ${fam} AND code = ${c}`).length) return ok(res, { error: 'no trobat' }, 404);
    if ((await sql`SELECT stripe_sub FROM mates.alumnes WHERE code = ${c}`)[0]?.stripe_sub) return ok(res, { error: 'subscripció' }, 409);
    await logConsent(c, null, null, 'esborrat'); await eraseStudent(c);
    return data(req, res, fam);
  }
  if (a === 'erase-family') {
    for (const r of await sql`SELECT code FROM mates.familia_fills WHERE familia_id = ${fam}`) await withdrawConsent(fam, r.code);
    await sql`DELETE FROM mates.families WHERE id = ${fam}`;
    return ok(res, { ok: true });
  }
  return ok(res, { error: 'acció' }, 400);
}
