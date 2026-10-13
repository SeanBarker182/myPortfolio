import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const MAX = { name: 120, email: 200, type: 60, message: 5000, extra: 2000 };

function clean(v: unknown, max: number): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });
}

async function verifyTurnstile(token: string, ip: string | undefined): Promise<boolean> {
  const secret = import.meta.env.TURNSTILE_SECRET_KEY;
  // Without a secret configured, only allow submissions in dev so the form can be exercised locally.
  if (!secret) return import.meta.env.DEV;
  if (!token) return false;
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ secret, response: token, remoteip: ip }),
  });
  const data = (await res.json().catch(() => ({}))) as { success?: boolean };
  return data.success === true;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json(400, { error: 'Bad request.' });
  }

  // Honeypot: bots fill every field.
  if (clean(body.website, 50)) return json(200, { ok: true });

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const type = clean(body.type, MAX.type) || 'Not specified';
  const message = clean(body.message, MAX.message);
  const extra = clean(body.extra, MAX.extra);

  if (!name || !email || !message) return json(400, { error: 'Name, email, and a message are required.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json(400, { error: 'That email address does not look right.' });

  let ip: string | undefined;
  try {
    ip = clientAddress;
  } catch {
    ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  }
  if (!(await verifyTurnstile(clean(body.turnstile, 4000), ip))) {
    return json(400, { error: 'Could not verify you are human. Please try again.' });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.CONTACT_TO_EMAIL;
  const from = import.meta.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    if (import.meta.env.DEV) {
      console.log('[contact] (dev, no Resend configured)', { name, email, type, message, extra });
      return json(200, { ok: true });
    }
    return json(500, { error: 'The contact form is not configured yet. Email me directly instead.' });
  }

  const resend = new Resend(apiKey);
  const text = [
    `From: ${name} <${email}>`,
    `Type: ${type}`,
    '',
    message,
    extra ? `\n---\nAnything else:\n${extra}` : '',
  ].join('\n');

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `[seanbarker.dev] ${type} · ${name}`,
    text,
  });
  if (error) {
    console.error('[contact] resend error', error);
    return json(502, { error: 'Could not send right now. Please try again in a minute.' });
  }
  return json(200, { ok: true });
};
