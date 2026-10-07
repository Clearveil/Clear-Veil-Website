/**
 * POST /api/contact — runs as a Vercel serverless function.
 *
 * 1. Drops bots (honeypot field filled, or submitted faster than a human can type).
 * 2. Validates the fields.
 * 3. Emails the submission to CONTACT_TO_EMAIL via Resend, with Reply-To set to
 *    the visitor so you can just hit "reply".
 *
 * Env vars (see .env.example): RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
 */
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const clean = (v: unknown, max: number) => String(v ?? '').trim().slice(0, max);
const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400);
  }

  // Spam checks: pretend success so bots don't learn anything.
  // t = milliseconds the visitor spent on the form, measured in their browser
  const elapsed = Number(data.t);
  // Real visitors always send it (the form only submits via its script); bots that
  // post directly, fill the hidden field, or submit in under 2.5s are dropped quietly.
  if (clean(data.fax, 200) || !Number.isFinite(elapsed) || elapsed < 2500) {
    return json({ ok: true });
  }

  const name = clean(data.name, 120);
  const email = clean(data.email, 200);
  const business = clean(data.business, 200);
  const budget = clean(data.budget, 60);
  const referral = clean(data.referral, 200);
  const message = clean(data.message, 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: 'Please fill in your name, a valid email and a short message.' }, 422);
  }

  const env = (k: string) => process.env[k] ?? import.meta.env[k];
  const apiKey = env('RESEND_API_KEY');
  const to = env('CONTACT_TO_EMAIL');
  const from = env('CONTACT_FROM_EMAIL');

  const rows: [string, string][] = [
    ['Name', name],
    ['Email', email],
    ['Business / website', business || '—'],
    ['Monthly ad budget', budget || '—'],
    ['Heard about us / Referral', referral || '—'],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${message}`;

  if (!apiKey || !to || !from) {
    // Local development without keys: log it so the form can still be tested.
    if (import.meta.env.DEV) {
      console.log('\n[contact form — not emailed, no RESEND_API_KEY]\n' + text + '\n');
      return json({ ok: true, dev: true });
    }
    console.error('Contact form: missing RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL');
    return json({ ok: false, error: "Sorry, the form isn't working right now." }, 500);
  }

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:15px;color:#111;line-height:1.5">
      <h2 style="margin:0 0 16px;font-weight:600">New enquiry from the website</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows.map(([k, v]) => `<tr><td style="color:#666;padding-right:16px">${k}</td><td>${escape(v)}</td></tr>`).join('')}
      </table>
      <p style="margin:20px 0 0;white-space:pre-wrap">${escape(message)}</p>
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const { data: sent, error } = await resend.emails.send({
      from,
      to: to.split(',').map((s: string) => s.trim()),
      replyTo: email,
      subject: `New enquiry: ${name}${business ? ` (${business})` : ''}`,
      text,
      html,
    });
    if (error) throw new Error(error.message);
    // Resend's message ID: proof of delivery handoff, searchable in Resend → Emails
    console.log('Contact form: sent via Resend', sent?.id);
    return json({ ok: true });
  } catch (err) {
    console.error('Contact form: Resend error', err);
    return json({ ok: false, error: "Sorry, your message didn't send." }, 502);
  }
};
