/* Xat d'ajuda amb IA (Numi Pro i Numi Ment). POST /api/chat { code, variant, lang, ctx, messages }
   Respon en streaming (text pla). No es guarda cap conversa: només quantes preguntes fa cada alumne al dia (per limitar el cost).
   Model via Vercel AI Gateway (autenticació OIDC del projecte, sense clau). */
import { streamText, toTextStream, pipeTextStreamToResponse } from 'ai';
import { sql, body, cleanCode, ok, blocked, note, fail, tooMany, plaOf } from './_lib.js';

const MODEL = 'anthropic/claude-haiku-4.5';
const LIMIT = { free: 5, premium: 40, escola: 40 };
const clip = (s, n) => String(s || '').replace(/\s+/g, ' ').trim().slice(0, n);

let ready = null;
const tables = () => ready || (ready = sql`CREATE TABLE IF NOT EXISTS mates.xat_us (code text NOT NULL, dia date NOT NULL DEFAULT current_date, n int NOT NULL DEFAULT 0, PRIMARY KEY (code, dia))`
  .then(() => sql`DELETE FROM mates.xat_us WHERE dia < current_date - 60`).catch(e => { ready = null; throw e; }));

const SAFETY = `SAFETY RULES (always, above everything else):
- Never ask for personal data (surname, address, school, phone, e-mail, photos, social networks). If the user shares any, do not repeat it and gently say it is not needed.
- If the user mentions sadness, bullying, abuse, self-harm, violence at home or feeling unsafe: answer briefly with warmth, encourage them to talk to an adult they trust, and give these free helplines in Spain: Fundació ANAR 900 20 20 10 (24 h, for children and teenagers) and 112 for emergencies. Do not investigate further.
- No romantic, sexual, violent or hateful content, no role-play, no links, no opinions on politics or religion.
- If asked, say clearly that you are an AI assistant, not a person.`;

function instructions(v, lang, ctx) {
  const L = lang === 'es' ? 'Spanish (Castilian)' : 'Catalan';
  const where = [ctx.course && `level: ${ctx.course}`, ctx.unit && `unit: ${ctx.unit}`, ctx.lesson && `lesson: ${ctx.lesson}`].filter(Boolean).join(' · ');
  if (v === 'ment') return `You are Numi, the friendly helper inside "Numi Ment", an app with daily brain games (memory, attention, mental arithmetic, logic, sudoku, words) for adults and older people.
Answer in ${L} unless the user writes in another language (then use theirs). Speak to the user with respect and warmth ("vostè/usted" if they use it, otherwise informal). Keep answers short (max 110 words), clear, in plain text with short paragraphs.
You help with: how each game works, strategies and tricks (e.g. sudoku techniques, memory techniques, mental arithmetic tricks), and ideas for keeping the mind active in daily life (walking, social contact, learning new things, reading).
Never promise that the games prevent dementia, Alzheimer's or cognitive decline, and never give medical advice or diagnoses. If the user worries about memory loss or health, kindly recommend talking to their doctor.
${where ? `The user is now in: ${where}.` : ''}
${SAFETY}`;
  return `You are Numi, the maths tutor inside "Numi Pro", an app for secondary school students (ESO, 12–16 years old) that follows the official maths curriculum of Catalonia.
Answer in ${L} unless the student writes in another language (then use theirs). Use informal "tu". Tone: friendly, direct, never childish, never condescending.
Keep answers short (max 120 words), in plain text with short lines. Write maths with plain characters (x², √9, 3·4, 12 ÷ 4, 3/4, ≤, π); never use LaTeX. You may use **bold** for the key idea.
Only help with maths and study habits. For anything else, say in one sentence that you can only help with maths and invite them back to the topic.
Teach, do not do the homework: when the student asks for the answer to an exercise (especially the current one), do not give the final result. Give the next step, a hint, or solve a similar example with different numbers, and ask them to try. If they are still stuck after trying, walk through the method step by step but let them do the last calculation.
When they ask for an explanation of a concept, explain it with one short example.
${where ? `The student is now working on: ${where}.` : ''}${ctx.question ? `\nCurrent exercise on screen (do NOT reveal its final answer): ${ctx.question}` : ''}
${SAFETY}`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req), code = cleanCode(b.code), v = b.variant === 'ment' ? 'ment' : 'pro', lang = b.lang === 'es' ? 'es' : 'ca';
  const msgs = (Array.isArray(b.messages) ? b.messages : []).slice(-10)
    .map(m => ({ role: m && m.role === 'assistant' ? 'assistant' : 'user', content: clip(m && m.content, 700) })).filter(m => m.content);
  if (!code || !msgs.length || msgs[msgs.length - 1].role !== 'user') return ok(res, { error: 'dades' }, 400);
  if (await blocked(req, 'xat', 60)) return tooMany(res);
  if (await blocked(req, 'codi', 40)) return tooMany(res);
  await tables();
  const a = (await sql`SELECT a.code, a.pla, a.pla_fins, a.grup_id, a.active, g.opts FROM mates.alumnes a LEFT JOIN mates.grups g ON g.id = a.grup_id WHERE a.code = ${code}`)[0];
  if (!a) { await fail(req, 'codi'); return ok(res, { error: 'no trobat' }, 404); }
  if (!a.active) return ok(res, { error: 'baixa' }, 410);
  // el docent pot apagar l'assistent per a tot el grup (mode escola)
  if (a.opts && a.opts.xat === false) return ok(res, { error: 'xat-off' }, 403);
  const pla = plaOf(a), max = LIMIT[pla] || LIMIT.free;
  const n = (await sql`INSERT INTO mates.xat_us (code, n) VALUES (${code}, 1) ON CONFLICT (code, dia) DO UPDATE SET n = mates.xat_us.n + 1 RETURNING n`)[0].n;
  if (n > max) return ok(res, { error: 'limit', max, pla }, 429);
  await note(req, 'xat');
  const c = b.ctx && typeof b.ctx === 'object' ? b.ctx : {};
  const ctx = { course: clip(c.course, 60), unit: clip(c.unit, 90), lesson: clip(c.lesson, 90), question: clip(c.question, 300) };
  const result = streamText({
    model: MODEL, instructions: instructions(v, lang, ctx), messages: msgs, maxOutputTokens: 450,
    onError: ({ error }) => console.error('xat', error && error.message)
  });
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Queda', String(Math.max(0, max - n)));
  pipeTextStreamToResponse({ stream: toTextStream({ stream: result.stream }), response: res });
}
