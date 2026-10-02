/* Informe per correu a les famílies (setmanal o mensual).
   - A qui: els adults de la zona de famílies (mates.families) per a cada fill que hi tenen (mates.familia_fills), amb el
     correu ja confirmat (enllaç) i l'autorització donada. Cada família tria: setmanal (per defecte), mensual o cap.
   - Quan: el setmanal, a partir del diumenge a les 18 h (hora de Madrid) i cobreix de dilluns a diumenge; el mensual,
     a partir del dia 1 i cobreix el mes anterior. Ho envia el cron dels correus (api/mails.js), en lots.
   - Interruptor general a mates.ajustos ('informes' → { on }): APAGAT per defecte. No s'envia res a cap família fins que
     l'administrador l'encén al panell (Correus → Informe a les famílies), després de veure'n la mostra.
   - Cada enviament desa una foto de les xifres (mates.informes) per poder dir quantes lliçons ha fet des de l'anterior. */
import { createHmac, timingSafeEqual } from 'crypto';
import { sql } from './_lib.js';
import { MAIL_OK } from './_mail.js';
import { UNIT_T } from './_units.js';

const BASE = 'https://app.numimates.com', WEB = 'https://numimates.com';
let READY = null;
export const informeTables = () => READY || (READY = sql`CREATE TABLE IF NOT EXISTS mates.ajustos (k text PRIMARY KEY, v jsonb NOT NULL DEFAULT '{}', updated_at timestamptz NOT NULL DEFAULT now())`
  .then(() => sql`CREATE TABLE IF NOT EXISTS mates.informes (code text NOT NULL, familia_id int NOT NULL, periode text NOT NULL, xp int, lessons int, answers int, correct int, status text NOT NULL DEFAULT 'enviat', sent_at timestamptz NOT NULL DEFAULT now(), PRIMARY KEY (code, familia_id, periode))`)
  .then(() => sql`ALTER TABLE mates.families ADD COLUMN IF NOT EXISTS informe text NOT NULL DEFAULT 'setmanal'`)
  .catch(e => { READY = null; throw e; }));
export async function ajust(k) { await informeTables(); const r = await sql`SELECT v FROM mates.ajustos WHERE k = ${k}`; return r[0] ? r[0].v : null; }
export async function setAjust(k, v) { await informeTables(); await sql`INSERT INTO mates.ajustos (k, v) VALUES (${k}, ${JSON.stringify(v)}::jsonb) ON CONFLICT (k) DO UPDATE SET v = EXCLUDED.v, updated_at = now()`; }

/* ---------- preferències des del correu (sense entrar enlloc): enllaç signat per família ---------- */
const sig = id => createHmac('sha256', process.env.SESSION_SECRET || 'x').update('informe:' + id).digest('base64url').slice(0, 22);
export const prefTok = id => Buffer.from(String(id)).toString('base64url') + '.' + sig(id);
export function prefOf(t) {
  const [a, s] = String(t || '').split('.'); if (!a || !s) return null;
  const id = Buffer.from(a, 'base64url').toString(); if (!/^\d+$/.test(id)) return null;
  const x = Buffer.from(sig(id)), y = Buffer.from(s);
  return x.length === y.length && timingSafeEqual(x, y) ? +id : null;
}

/* ---------- mateixos criteris que la zona de famílies (families.js): sentits matemàtics i idees per a casa ---------- */
const SENT = { num: 'els números|los números', mes: 'la mesura|la medida', esp: "l'espai i la geometria|el espacio y la geometría", alg: "l'àlgebra i el raonament|el álgebra y el razonamiento", est: "les dades i l'atzar|los datos y el azar" };
function skillSent(sk) {
  const n = sk.split(':')[0];
  if (/^v\.(balance|pattern|maze)$/.test(n)) return 'alg';
  if (n === 'v.frac') return 'num';
  if (/^v\./.test(n)) return 'esp';
  if (/^(me\.clock|me\.units|me\.money|me\.perim|g\.clock|g\.coins|g\.ruler|geo\.area|me\.cal|me\.time|me\.smd)$/.test(n)) return 'mes';
  if (/^(me\.shape|g\.shape|geo\.angle|vol|e\.|geo\.pyth|geo\.thales|trig|geo\.tri|geo\.quad|geo\.lines|geo\.poly)/.test(n)) return 'esp';
  if (/^(geo\.circle|geo\.vol2)$/.test(n)) return 'mes';
  if (/^(l\.|g\.seq|pc\.|g\.repeat|alg\.|fn\.|seq\.)/.test(n)) return 'alg';
  if (/^(stat|at\.|prob2)/.test(n)) return 'est';
  return 'num';
}
const TIPS = {
  num: ["Al supermercat, demaneu-li que calculi quant costaran dues coses juntes abans d'arribar a la caixa.|En el súper, pedidle que calcule cuánto costarán dos cosas juntas antes de llegar a la caja.", "Jugueu a endevinar números: un pensa un número i l'altre el troba fent preguntes de «més gran o més petit».|Jugad a adivinar números: uno piensa un número y el otro lo encuentra con preguntas de «mayor o menor»."],
  mes: ["Quan cuineu, deixeu-li mesurar els ingredients: grams, litres i mitges tasses.|Cuando cocinéis, dejadle medir los ingredientes: gramos, litros y medias tazas.", "Pregunteu-li quant falta per a una hora concreta: «si ara són les 5 i quart, quant queda per a les 6?».|Preguntadle cuánto falta para una hora concreta: «si ahora son las 5 y cuarto, ¿cuánto queda para las 6?»."],
  esp: ["Busqueu formes pel carrer: quants triangles, rectangles o cercles trobeu de camí a l'escola?|Buscad formas por la calle: ¿cuántos triángulos, rectángulos o círculos encontráis camino del cole?", "Feu-li explicar un camí amb girs: «dues a la dreta, una endavant…». És geometria de veritat.|Pedidle que explique un camino con giros: «dos a la derecha, una adelante…». Es geometría de verdad."],
  alg: ["Proposeu-li sèries: 2, 4, 8… quin ve després? Que en faci una per a vosaltres.|Proponedle series: 2, 4, 8… ¿cuál sigue? Que invente una para vosotros.", "Amagueu un número en una suma («quant he de sumar a 7 per fer 12?»): és la primera equació.|Esconded un número en una suma («¿cuánto tengo que sumar a 7 para hacer 12?»): es la primera ecuación."],
  est: ["Feu un petit recompte a casa (fruites, colors de cotxes…) i mireu junts quin surt més.|Haced un pequeño recuento en casa (frutas, colores de coches…) y mirad juntos cuál sale más.", "Amb un dau, pregunteu-li què és més fàcil que surti: un 6 o un número parell.|Con un dado, preguntadle qué es más fácil que salga: un 6 o un número par."]
};
const MEDAL = { esforc: ["Ha treballat a fons", 'Ha trabajado a fondo', '💪'], ajuda: ['Ha ajudat els companys', 'Ha ayudado a los compañeros', '🤝'], idees: ['Idees originals', 'Ideas originales', '💡'], millora: ['Ha millorat molt', 'Ha mejorado mucho', '📈'], repte: ['Ha superat un repte', 'Ha superado un reto', '🏔️'], atencio: ['Molt atent a classe', 'Muy atento en clase', '👀'], calcul: ['Càlcul brillant', 'Cálculo brillante', '🧮'], constancia: ['Constància', 'Constancia', '📅'] };
const COURSE = ['1r de primària|1.º de primaria', '2n de primària|2.º de primaria', '3r de primària|3.º de primaria', '4t de primària|4.º de primaria', '5è de primària|5.º de primaria', '6è de primària|6.º de primaria', "1r d'ESO|1.º de ESO", "2n d'ESO|2.º de ESO", "3r d'ESO|3.º de ESO", "4t d'ESO|4.º de ESO"];

/* ---------- dates (hora de Madrid) ---------- */
const iso = d => d.toISOString().slice(0, 10);
function madridNow() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, weekday: 'short' }).formatToParts(new Date()).map(x => [x.type, x.value]));
  return { date: new Date(`${p.year}-${p.month}-${p.day}T12:00:00Z`), hour: +p.hour % 24, dow: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday) };
}
const addDays = (d, n) => { const x = new Date(d); x.setUTCDate(x.getUTCDate() + n); return x; };
// període que toca ara: setmanal = última setmana tancada (dl–dg, a partir del dg a les 18 h); mensual = el mes anterior
export function periodNow(kind) {
  const m = madridNow();
  if (kind === 'mensual') {
    const first = new Date(Date.UTC(m.date.getUTCFullYear(), m.date.getUTCMonth(), 1, 12)), from = new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth() - 1, 1, 12));
    return { key: 'M' + iso(from).slice(0, 7), from, to: addDays(first, -1), kind };
  }
  // diumenge de referència: avui si és diumenge després de les 18 h; si no, el diumenge passat
  let sun = addDays(m.date, -m.dow); if (m.dow === 0 && m.hour < 18) sun = addDays(sun, -7);
  return { key: 'S' + iso(sun), from: addDays(sun, -6), to: sun, kind: 'setmanal' };
}

/* ---------- el contingut ---------- */
const T = (lang, s) => { const [ca, es] = String(s).split('|'); return lang === 'es' ? (es || ca) : ca; };
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const dayLong = (d, lang) => d.toLocaleDateString(lang === 'es' ? 'es-ES' : 'ca-ES', { day: 'numeric', month: 'long', timeZone: 'UTC' });
const monthName = (d, lang) => d.toLocaleDateString(lang === 'es' ? 'es-ES' : 'ca-ES', { month: 'long', year: 'numeric', timeZone: 'UTC' });

// k: fila de l'alumne (com a la zona de famílies) · prev: la foto de l'informe anterior (o null) · per: periodNow()
export function reportData(k, prev, per) {
  const days = new Set(Array.isArray(k.days) ? k.days : []);
  const span = [], n = Math.round((per.to - per.from) / 864e5) + 1;
  for (let i = 0; i < n; i++) span.push(iso(addDays(per.from, i)));
  const active = span.filter(d => days.has(d)).length;
  const dl = prev ? Math.max(0, (k.lessons | 0) - (prev.lessons | 0)) : null;
  const da = prev ? (k.answers | 0) - (prev.answers | 0) : 0, dc = prev ? (k.correct | 0) - (prev.correct | 0) : 0;
  const acc = da >= 10 ? Math.round(100 * dc / da) : (k.answers ? Math.round(100 * k.correct / k.answers) : null);
  const s = {}; Object.keys(SENT).forEach(x => s[x] = { c: 0, t: 0 });
  Object.entries(k.sk || {}).forEach(([key, v]) => { if (['sprint', 'flash', 'chain'].includes(key) || !Array.isArray(v)) return; const o = s[skillSent(key)]; o.c += +v[0] || 0; o.t += +v[1] || 0; });
  const withData = Object.entries(s).filter(([, o]) => o.t >= 20).map(([key, o]) => [key, Math.round(100 * o.c / o.t)]).sort((a, b) => b[1] - a[1]);
  const best = withData.length >= 2 ? withData[0] : null, weak = withData.length >= 2 ? withData[withData.length - 1] : null;
  // unitat en curs del seu curs
  const pre = 'c' + ((k.course | 0) + 1) + '-', ids = Object.keys(UNIT_T).filter(id => id.startsWith(pre)).sort((a, b) => a.split('-')[1] - b.split('-')[1]);
  const st = id => (k.prog && k.prog[id] && Array.isArray(k.prog[id].stars)) ? k.prog[id].stars : null;
  const done = id => { const x = st(id); return !!(x && x[x.length - 1] >= 2); };
  const uid = ids.find(i => !done(i) && st(i) && st(i).some(x => x > 0)) || ids.find(i => !done(i)) || null;
  const unit = uid ? { n: uid.split('-')[1], t: UNIT_T[uid], pct: (() => { const x = st(uid) || []; return x.length ? Math.round(100 * x.filter(v => v > 0).length / x.length) : 0; })() } : null;
  const medals = (k.medals || []).filter(m => { const d = iso(new Date(m.created_at)); return d >= span[0] && d <= span[span.length - 1]; });
  return { span, days, active, dl, acc, best, weak, unit, medals, tipKey: weak ? weak[0] : 'num' };
}

export function reportMail(k, prev, per, lang, famId) {
  const D = reportData(k, prev, per), t = s => T(lang, s), name = esc(String(k.name || '').split(' ')[0] || t('el teu fill|tu hijo'));
  const monthly = per.kind === 'mensual';
  const when = monthly ? monthName(per.from, lang) : t(`del ${dayLong(per.from, 'ca')} al ${dayLong(per.to, 'ca')}|del ${dayLong(per.from, 'es')} al ${dayLong(per.to, 'es')}`);
  const subject = monthly ? t(`Com li ha anat el mes a ${name} a Numi Mates|Cómo le ha ido el mes a ${name} en Numi Mates`) : t(`La setmana de ${name} a Numi Mates|La semana de ${name} en Numi Mates`);
  const WD = lang === 'es' ? ['L', 'M', 'X', 'J', 'V', 'S', 'D'] : ['Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds', 'Dg'];
  const tip = TIPS[D.tipKey][(new Date(per.to).getUTCDate()) % 2];
  // to de veu: anima sempre, mai retreu res
  const lead = D.active === 0
    ? t(`Aquesta ${monthly ? 'vegada' : 'setmana'} ${name} no ha entrat a Numi Mates. Passa! Cinc minuts al dia, quan us vagi bé, fan més que molta estona de cop.|Esta ${monthly ? 'vez' : 'semana'} ${name} no ha entrado en Numi Mates. ¡Pasa! Cinco minutos al día, cuando os vaya bien, hacen más que mucho rato de golpe.`)
    : D.active >= (monthly ? 12 : 4)
      ? t(`${name} ha practicat ${D.active} dies: una constància que es nota.|${name} ha practicado ${D.active} días: una constancia que se nota.`)
      : t(`${name} ha practicat ${D.active} ${D.active === 1 ? 'dia' : 'dies'}. Una estona curta cada dia és el que més ajuda.|${name} ha practicado ${D.active} ${D.active === 1 ? 'día' : 'días'}. Un rato corto cada día es lo que más ayuda.`);
  const box = (inner, bg = '#F6F1FA') => `<tr><td style="padding:0 28px 16px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${bg};border-radius:16px"><tr><td style="padding:18px 20px">${inner}</td></tr></table></td></tr>`;
  const h = s => `<p style="margin:0 0 8px;font:700 13px/1.3 Arial,sans-serif;letter-spacing:.04em;text-transform:uppercase;color:#7A4E98">${s}</p>`;
  const p = s => `<p style="margin:0;font:400 16px/1.5 Arial,sans-serif;color:#2B1A38">${s}</p>`;
  const dots = monthly ? '' : `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:12px 0 0"><tr>${D.span.map((d, i) => `<td style="padding:0 4px 0 0;text-align:center"><div style="width:34px;height:34px;line-height:34px;border-radius:17px;background:${D.days.has(d) ? '#602B7A' : '#E7DEF0'};color:${D.days.has(d) ? '#fff' : '#9A8BAA'};font:700 12px/34px Arial,sans-serif">${D.days.has(d) ? '✓' : WD[i]}</div><div style="font:600 11px Arial,sans-serif;color:#9A8BAA;margin-top:4px">${WD[i]}</div></td>`).join('')}</tr></table>`;
  const kpi = (n, l) => `<td width="33%" style="padding:0 6px 0 0;vertical-align:top"><div style="background:#fff;border-radius:14px;padding:14px 12px;text-align:center"><div style="font:800 28px/1 Arial,sans-serif;color:#2B1A38">${n}</div><div style="font:400 13px/1.3 Arial,sans-serif;color:#6A5F78;margin-top:6px">${l}</div></div></td>`;
  const kpis = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>${kpi(`${D.active}<span style="font-size:15px;color:#9A8BAA">/${D.span.length}</span>`, t('dies que ha practicat|días que ha practicado'))}${kpi(D.dl != null ? D.dl : (k.lessons | 0), D.dl != null ? t(`lliçons ${monthly ? 'aquest mes' : 'aquesta setmana'}|lecciones ${monthly ? 'este mes' : 'esta semana'}`) : t('lliçons en total|lecciones en total'))}${kpi(D.acc != null ? D.acc + '<span style="font-size:15px">%</span>' : '–', t("d'encerts|de aciertos"))}</tr></table>`;
  const unit = D.unit ? box(`${h(t('Ara treballa|Ahora trabaja'))}${p(`<b>${esc(t(COURSE[k.course | 0] || ''))} · ${t('Unitat|Unidad')} ${D.unit.n}:</b> ${esc(t(D.unit.t))}`)}<div style="margin-top:10px;height:10px;border-radius:5px;background:#E7DEF0"><div style="width:${Math.max(4, D.unit.pct)}%;height:10px;border-radius:5px;background:#602B7A"></div></div><p style="margin:6px 0 0;font:400 13px Arial,sans-serif;color:#6A5F78">${D.unit.pct}% ${t('de la unitat|de la unidad')}</p>`) : '';
  const sense = D.best && D.weak && D.best[0] !== D.weak[0] ? box(`${h(t('On va bé i on li costa més|Dónde va bien y dónde le cuesta más'))}${p(`👍 ${t('Va bé amb|Va bien con')} <b>${t(SENT[D.best[0]])}</b> (${D.best[1]}% ${t("d'encerts|de aciertos")}).`)}<div style="height:6px"></div>${p(`💪 ${t('On li costa més és|Donde más le cuesta es')} <b>${t(SENT[D.weak[0]])}</b> (${D.weak[1]}%). ${t("L'app li'n proposa més exercicis en els entrenaments.|La app le propone más ejercicios en los entrenamientos.")}`)}`) : '';
  const medals = D.medals.length ? box(`${h(t('Medalles del seu docent|Medallas de su docente'))}${D.medals.map(m => p(`${(MEDAL[m.kind] || ['', '', '🏅'])[2]} <b>${esc(lang === 'es' ? (MEDAL[m.kind] || [])[1] : (MEDAL[m.kind] || [])[0])}</b>${m.comment ? ` · «${esc(m.comment)}»` : ''}${m.docent_nom ? ` <span style="color:#6A5F78">(${esc(m.docent_nom)})</span>` : ''}`)).join('<div style="height:6px"></div>')}`, '#FFF6DE') : '';
  const idea = box(`${h(t('Una idea per a casa|Una idea para casa'))}${p(esc(t(tip)))}`, '#EAF5F1');
  const pref = `${BASE}/api/mails?informe=${prefTok(famId)}`;
  const html = `<!doctype html><html><body style="margin:0;padding:0;background:#F3EFF7"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F3EFF7"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border-radius:22px;overflow:hidden">
<tr><td style="background:#602B7A;padding:26px 28px 24px"><img src="${WEB}/img/brand/logo-numi-blanc.png" width="96" alt="Numi" style="display:block;border:0"><p style="margin:18px 0 4px;font:700 13px/1 Arial,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#E5CFF5">${monthly ? t('Informe mensual|Informe mensual') : t('Informe setmanal|Informe semanal')}</p><p style="margin:0;font:800 24px/1.2 Arial,sans-serif;color:#fff">${t(`Així ha anat ${monthly ? 'el mes' : 'la setmana'} de ${name}|Así ha ido ${monthly ? 'el mes' : 'la semana'} de ${name}`)}</p><p style="margin:6px 0 0;font:400 14px/1.4 Arial,sans-serif;color:#E5CFF5">${esc(when)}</p></td></tr>
<tr><td style="padding:24px 28px 16px">${p(esc(lead))}${dots}</td></tr>
<tr><td style="padding:0 28px 16px">${kpis}</td></tr>
${unit}${sense}${medals}${idea}
<tr><td style="padding:8px 28px 28px" align="left"><a href="${BASE}/families" style="display:inline-block;background:#602B7A;color:#fff;text-decoration:none;font:700 16px Arial,sans-serif;padding:14px 22px;border-radius:999px">${t('Veure-ho tot a la zona de famílies|Verlo todo en la zona de familias')}</a></td></tr>
</table>
<p style="max-width:560px;margin:18px auto 0;font:400 12.5px/1.6 Arial,sans-serif;color:#8A7F96;text-align:center">${t(`Reps aquest informe perquè vas confirmar que vols seguir el progrés de ${name} a Numi Mates.|Recibes este informe porque confirmaste que quieres seguir el progreso de ${name} en Numi Mates.`)}<br>
<a href="${pref}&f=${monthly ? 'setmanal' : 'mensual'}" style="color:#7A4E98">${monthly ? t('Prefereixo rebre-ho cada setmana|Prefiero recibirlo cada semana') : t('Prefereixo rebre-ho cada mes|Prefiero recibirlo cada mes')}</a> · <a href="${pref}&f=no" style="color:#7A4E98">${t('No vull rebre més informes|No quiero recibir más informes')}</a><br>Numi · numimates.com · hola@numimates.com</p>
</td></tr></table></body></html>`;
  const text = [`${monthly ? t('Informe mensual|Informe mensual') : t('Informe setmanal|Informe semanal')} · ${when}`, '', lead, '',
    `${t('Dies que ha practicat|Días que ha practicado')}: ${D.active}/${D.span.length}`, D.dl != null ? `${t('Lliçons|Lecciones')}: ${D.dl}` : '', D.acc != null ? `${t('Encerts|Aciertos')}: ${D.acc}%` : '',
    D.unit ? `${t('Ara treballa|Ahora trabaja')}: ${t(D.unit.t)} (${D.unit.pct}%)` : '', '', `${t('Una idea per a casa|Una idea para casa')}: ${t(tip)}`, '', `${BASE}/families`, '',
    `${t('Canviar la freqüència o deixar de rebre-ho|Cambiar la frecuencia o dejar de recibirlo')}: ${pref}&f=no`].filter((x, i, a) => x !== '' || a[i - 1] !== '').join('\n');
  return { subject, html, text, headers: { 'List-Unsubscribe': `<${pref}&f=no>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' }, snap: { xp: k.xp | 0, lessons: k.lessons | 0, answers: k.answers | 0, correct: k.correct | 0 } };
}

/* ---------- dades d'un alumne (com la zona de famílies) ---------- */
export async function kidRow(code) {
  const r = (await sql`SELECT a.code, a.name, a.course, a.xp, a.streak, a.last_day, a.lessons, a.answers, a.correct, a.active,
      a.state->'days' AS days, a.state->'stats'->'sk' AS sk, a.state->'prog' AS prog FROM mates.alumnes a WHERE a.code = ${code}`)[0];
  if (!r) return null;
  try { r.medals = await sql`SELECT kind, comment, docent_nom, created_at FROM mates.medalles WHERE code = ${code} ORDER BY created_at DESC LIMIT 20`; } catch (e) { r.medals = []; }
  return r;
}
export async function lastSnap(code, fam) { return (await sql`SELECT xp, lessons, answers, correct FROM mates.informes WHERE code = ${code} AND familia_id = ${fam} AND status = 'enviat' ORDER BY sent_at DESC LIMIT 1`)[0] || null; }

/* ---------- l'enviament (el crida el cron de api/mails.js) ---------- */
export async function informesRun(until, send) {
  await informeTables();
  const cfg = await ajust('informes');
  if (!cfg || !cfg.on || !MAIL_OK()) return { off: true };
  let n = 0;
  for (const kind of ['setmanal', 'mensual']) {
    const per = periodNow(kind);
    // només fins a 5 dies després del tancament (si el cron s'ha aturat molts dies, no s'envien informes vells)
    if (Date.now() - per.to.getTime() > 6 * 864e5) continue;
    while (Date.now() < until) {
      const rows = await sql`SELECT ff.familia_id, ff.code, f.email, f.lang FROM mates.familia_fills ff JOIN mates.families f ON f.id = ff.familia_id JOIN mates.alumnes a ON a.code = ff.code
        WHERE a.active AND f.informe = ${kind} AND (a.last_day IS NULL OR a.last_day >= (now() - interval '35 days')::date)
          AND NOT EXISTS (SELECT 1 FROM mates.informes i WHERE i.code = ff.code AND i.familia_id = ff.familia_id AND i.periode = ${per.key})
          AND NOT EXISTS (SELECT 1 FROM mates.mail_baixes b WHERE b.email = f.email) LIMIT 25`;
      if (!rows.length) break;
      const items = [], keep = [];
      for (const r of rows) {
        const k = await kidRow(r.code); if (!k) continue;
        const m = reportMail(k, await lastSnap(r.code, r.familia_id), per, r.lang === 'es' ? 'es' : 'ca', r.familia_id);
        items.push({ to: [r.email], subject: m.subject, html: m.html, text: m.text, headers: m.headers }); keep.push([r, m.snap]);
      }
      // es reserva abans d'enviar: si dues execucions coincideixen, cap informe surt dues vegades
      const mine = [];
      for (const [r, s] of keep) { const x = await sql`INSERT INTO mates.informes (code, familia_id, periode, xp, lessons, answers, correct, status) VALUES (${r.code}, ${r.familia_id}, ${per.key}, ${s.xp}, ${s.lessons}, ${s.answers}, ${s.correct}, 'enviant') ON CONFLICT DO NOTHING RETURNING code`; if (x.length) mine.push(r); }
      const go = items.filter((_, i) => mine.includes(keep[i][0]));
      if (go.length) {
        let st = 'enviat';
        try { await send(go); } catch (e) { st = 'error'; console.error('informes', e.message); }
        for (const r of mine) await sql`UPDATE mates.informes SET status = ${st}, sent_at = now() WHERE code = ${r.code} AND familia_id = ${r.familia_id} AND periode = ${per.key}`;
        if (st === 'error') return { n, error: true };
        n += go.length;
      }
    }
  }
  return { n };
}
