/**
 * Storage for /built report views, on Netlify Blobs.
 *
 * Netlify Blobs is part of the Netlify runtime, so this needs no database and
 * no extra environment variables — the store is provisioned per site on first
 * write. One blob per recipient code keeps reads cheap: the dashboard lists a
 * dozen or so small objects rather than scanning an event log.
 *
 * Writes are read-modify-write. Two opens landing in the same millisecond
 * could lose a count; for a client mailing that goes to a few dozen people
 * that is an acceptable trade for not running a database.
 */
import { getStore } from '@netlify/blobs';

const STORE_NAME = 'built-views';

function store() {
  // `consistency: 'strong'` so a read straight after a write (our own
  // verification, and the dashboard right after someone opens the mail) sees
  // the new value rather than an eventually-consistent stale one.
  return getStore({ name: STORE_NAME, consistency: 'strong' });
}

const blobKey = (code) => `recipient/${String(code).toLowerCase()}`;

/**
 * Record one event against a recipient code.
 * @param {object} p
 * @param {string} p.code     recipient code from the link
 * @param {string} p.name     display name, or null for an unknown code
 * @param {'open'|'read'} p.event
 * @param {string} [p.userAgent]
 * @returns {Promise<object>} the updated record
 */
export async function recordView({ code, name, event, userAgent }) {
  const s = store();
  const key = blobKey(code);
  const now = new Date().toISOString();

  const existing = (await s.get(key, { type: 'json' })) ?? null;
  const rec = existing ?? {
    code: String(code).toLowerCase(),
    name: name ?? null,
    opens: 0,
    reads: 0,
    firstOpen: null,
    lastOpen: null,
    lastRead: null,
    lastUserAgent: null,
  };

  // Names can be renamed in built-recipients.js after a link is sent.
  if (name) rec.name = name;
  if (userAgent) rec.lastUserAgent = userAgent.slice(0, 200);

  if (event === 'open') {
    rec.opens += 1;
    rec.firstOpen = rec.firstOpen ?? now;
    rec.lastOpen = now;
  } else if (event === 'read') {
    rec.reads += 1;
    rec.lastRead = now;
  }

  await s.setJSON(key, rec);
  return rec;
}

/** Every recipient record we hold, newest activity first. */
export async function listViews() {
  const s = store();
  const { blobs } = await s.list({ prefix: 'recipient/' });

  const records = await Promise.all(
    blobs.map(({ key }) => s.get(key, { type: 'json' }).catch(() => null))
  );

  return records
    .filter(Boolean)
    .sort((a, b) => String(b.lastOpen ?? '').localeCompare(String(a.lastOpen ?? '')));
}
