import { timingSafeEqual } from 'node:crypto';
import { notFound } from 'next/navigation';
import { RECIPIENTS } from '@/lib/built-recipients';
import { listViews } from '@/lib/views-store';
import s from '../report.module.css';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export const metadata = {
  title: 'Report views',
  robots: { index: false, follow: false },
};

/**
 * Private dashboard: /built/views?key=<VIEWS_KEY>
 *
 * Fails closed. With no VIEWS_KEY configured, or the wrong key, it is a 404,
 * indistinguishable from a page that doesn't exist.
 */
function keyMatches(given) {
  const expected = process.env.VIEWS_KEY;
  if (!expected || typeof given !== 'string') return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

const fmt = (iso) =>
  iso
    ? new Date(iso).toLocaleString('en-US', {
        timeZone: 'America/New_York',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      })
    : '—';

function device(ua) {
  if (!ua) return '—';
  if (/iPhone|Android.+Mobile/i.test(ua)) return 'Phone';
  if (/iPad|Tablet/i.test(ua)) return 'Tablet';
  if (/Macintosh|Mac OS X/i.test(ua)) return 'Mac';
  if (/Windows/i.test(ua)) return 'Windows';
  return 'Other';
}

export default async function ViewsPage({ searchParams }) {
  if (!keyMatches(searchParams?.key)) notFound();

  const records = await listViews();
  const byCode = new Map(records.map((r) => [r.code, r]));

  // Every recipient on the list, opened or not, so silence is visible too,
  // most recent activity first. Test links and any code that isn't on the list
  // (an old or mistyped link) go underneath and don't count toward the totals.
  const byRecent = (a, b) => {
    if (!!b.lastOpen !== !!a.lastOpen) return b.lastOpen ? 1 : -1;
    return String(b.lastOpen ?? '').localeCompare(String(a.lastOpen ?? ''));
  };
  const listed = Object.entries(RECIPIENTS)
    .map(([code, name]) => ({ opens: 0, reads: 0, ...byCode.get(code), code, name }))
    .sort(byRecent);
  const other = records.filter((r) => !(r.code in RECIPIENTS)).sort(byRecent);
  const rows = [...listed, ...other];

  const opened = listed.filter((r) => r.opens > 0).length;
  const readThrough = listed.filter((r) => r.reads > 0).length;

  const th = {
    textAlign: 'left',
    fontFamily: 'var(--mono)',
    fontSize: 10,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--warm-400)',
    fontWeight: 500,
    padding: '10px 12px',
    borderBottom: '1px solid var(--warm-200)',
    whiteSpace: 'nowrap',
  };
  const td = {
    padding: '12px',
    borderBottom: '1px solid var(--warm-100)',
    fontSize: 14,
    color: 'var(--warm-600)',
    whiteSpace: 'nowrap',
  };

  return (
    <div className={`${s.sheet} report-sheet`}>
      <header className={s.masthead}>
        <div className={s.sectionTitle}>Built, not bought &mdash; views</div>
        <div className={s.mastheadMeta}>Private</div>
      </header>

      <p className={s.intro} style={{ marginTop: 24 }}>
        <strong>{opened}</strong> of {Object.keys(RECIPIENTS).length} recipients have opened it;{' '}
        <strong>{readThrough}</strong> read through to &ldquo;Why we did this.&rdquo; An open means the
        page was on screen for 3 seconds; a read means they scrolled to the closing section.
      </p>

      <div style={{ overflowX: 'auto', marginTop: 24 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--white)' }}>
          <thead>
            <tr>
              <th style={th}>Recipient</th>
              <th style={th}>Opens</th>
              <th style={th}>Read to end</th>
              <th style={th}>First opened</th>
              <th style={th}>Last opened</th>
              <th style={th}>Device</th>
              <th style={th}>Code</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.code}>
                <td style={{ ...td, color: 'var(--warm-800)', fontWeight: 600 }}>
                  {r.name ?? <em style={{ color: 'var(--warm-400)' }}>Unknown code</em>}
                </td>
                <td style={td}>{r.opens || '—'}</td>
                <td style={{ ...td, color: r.reads ? 'var(--green-600)' : td.color }}>
                  {r.reads ? `Yes · ${fmt(r.lastRead)}` : '—'}
                </td>
                <td style={td}>{fmt(r.firstOpen)}</td>
                <td style={td}>{fmt(r.lastOpen)}</td>
                <td style={td}>{device(r.lastUserAgent)}</td>
                <td style={{ ...td, fontFamily: 'var(--mono)', fontSize: 12 }}>{r.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={s.colophon} style={{ textTransform: 'none', letterSpacing: 0 }}>
        Times are Eastern. Refresh for the latest.
      </p>
    </div>
  );
}
