/**
 * Meta Conversions API (server-side events).
 *
 * The browser pixel misses visitors whose browser blocks it (Safari, Edge,
 * iOS privacy settings, ad blockers). Sending the same event from the server
 * recovers them. Both copies share an `event_id`, so Meta counts each lead once.
 *
 * Personal details are SHA-256 hashed here, before anything leaves the server,
 * as Meta requires. Never throws: tracking must never break the contact form.
 *
 * Env: PUBLIC_META_PIXEL_ID, META_CAPI_TOKEN (secret)
 *      META_TEST_EVENT_CODE (optional, only while testing in Events Manager)
 */
import { createHash } from 'node:crypto';

const GRAPH_VERSION = 'v26.0';

const sha256 = (v: string) => createHash('sha256').update(v.trim().toLowerCase()).digest('hex');
const env = (k: string): string | undefined => process.env[k] ?? (import.meta.env as Record<string, string | undefined>)[k];

const readCookie = (header: string | null, name: string) =>
  header?.split(';').map((c) => c.trim()).find((c) => c.startsWith(`${name}=`))?.slice(name.length + 1);

export async function sendMetaEvent(opts: {
  request: Request;
  eventName: 'Lead' | 'Contact' | 'Schedule';
  eventId?: string;
  sourceUrl?: string;
  email?: string;
  name?: string;
  customData?: Record<string, unknown>;
}): Promise<void> {
  const pixelId = env('PUBLIC_META_PIXEL_ID');
  const token = env('META_CAPI_TOKEN');
  if (!pixelId || !token) return; // not configured: silently skip

  const { request, eventName, eventId, sourceUrl, email, name, customData } = opts;
  const headers = request.headers;
  const cookies = headers.get('cookie');
  const [first, ...rest] = (name ?? '').trim().split(/\s+/);
  const last = rest.join(' ');

  const userData: Record<string, unknown> = {
    client_ip_address: headers.get('x-forwarded-for')?.split(',')[0]?.trim() || undefined,
    client_user_agent: headers.get('user-agent') || undefined,
    fbp: readCookie(cookies, '_fbp'), // browser id set by the pixel
    fbc: readCookie(cookies, '_fbc'), // ad click id, when they came from an ad
    em: email ? [sha256(email)] : undefined,
    fn: first ? [sha256(first)] : undefined,
    ln: last ? [sha256(last)] : undefined,
    country: [sha256('us')],
  };

  const body: Record<string, unknown> = {
    data: [{
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      action_source: 'website',
      event_source_url: sourceUrl || headers.get('referer') || undefined,
      user_data: userData,
      custom_data: customData,
    }],
  };
  const testCode = env('META_TEST_EVENT_CODE');
  if (testCode) body.test_event_code = testCode;

  try {
    const res = await fetch(`https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(token)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(3000),
    });
    const out = await res.json().catch(() => ({}));
    if (!res.ok) console.error('Meta CAPI: rejected', res.status, JSON.stringify(out));
    else console.log('Meta CAPI: sent', eventName, `received=${out.events_received}`, testCode ? '(test)' : '');
  } catch (err) {
    console.error('Meta CAPI: failed', (err as Error).message);
  }
}
