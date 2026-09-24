/**
 * Per-recipient codes for the /built client report.
 *
 * Each client gets their own link: https://www.brooklineit.com/built?r=<code>
 * The code is only an opaque label for the dashboard at /built/views — it
 * carries no access rights, and an unknown or missing code still shows the
 * page, it just isn't attributed to anyone.
 *
 * To add a client: pick an unused six-character code (lowercase letters and
 * digits) and add a line. Codes are deliberately random so one client can't
 * guess another's, and so a forwarded link is still attributable to whoever
 * it was originally sent to.
 */
export const RECIPIENTS = {
  f8akmq: 'Masters Concrete',
  frlaua: 'C.W. Grimm',
  lxyuja: 'HFMM Legacy Group',
  y8vaja: 'AOS Landscaping',
  '27sd6q': 'Sickler Home Supply',
  injuza: 'Laceyville Lumber',
  earpmg: 'Universal Publishing',
  '2iugrw': 'Fleetwood Bible Church',
  zzmqxq: 'DLW Partners',
  qqlebg: 'Heritage Baptist',
  xiia9w: 'Abington Center',
  h5cemg: 'Protecall',
  mojalg: 'Precision Tubes',
  i5lqsw: 'Test link (Brookline)',
};

/** Display name for a code, or null when the code isn't one of ours. */
export function recipientName(code) {
  if (!code) return null;
  return RECIPIENTS[String(code).toLowerCase()] ?? null;
}

/** A code is well-formed if it could plausibly be one of ours. */
export function isValidCodeShape(code) {
  return typeof code === 'string' && /^[a-z0-9]{4,16}$/i.test(code);
}
