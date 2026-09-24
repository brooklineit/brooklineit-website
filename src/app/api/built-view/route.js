/**
 * Beacon endpoint for the /built report.
 *
 * The page posts here twice at most: once when a real person has had the page
 * open and visible for a few seconds ("open"), and once if they reach the
 * "Why we did this" heading at the foot of the report ("read"). Link scanners
 * in mail security products fetch the HTML but almost never run the page's
 * JavaScript, so this filters out most of them.
 *
 * Nothing identifying is stored: recipient code, counts, timestamps, and a
 * truncated user agent. No IP addresses.
 */
import { NextResponse } from 'next/server';
import { isValidCodeShape, recipientName } from '@/lib/built-recipients';
import { recordView } from '@/lib/views-store';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'bad json' }, { status: 400 });
  }

  const code = body?.r;
  const event = body?.event;

  if (!isValidCodeShape(code)) {
    return NextResponse.json({ ok: false, error: 'bad code' }, { status: 400 });
  }
  if (event !== 'open' && event !== 'read') {
    return NextResponse.json({ ok: false, error: 'bad event' }, { status: 400 });
  }

  try {
    const rec = await recordView({
      code,
      name: recipientName(code),
      event,
      userAgent: request.headers.get('user-agent') ?? '',
    });
    // Counts come back so a failed write can't masquerade as a success.
    return NextResponse.json({ ok: true, opens: rec.opens, reads: rec.reads });
  } catch (err) {
    console.error('built-view: store write failed', err);
    return NextResponse.json({ ok: false, error: 'store unavailable' }, { status: 500 });
  }
}
