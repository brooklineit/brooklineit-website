/**
 * Per-recipient codes for the /built client report.
 *
 * Each person gets their own link: https://www.brooklineit.com/built?r=<code>
 * The code is only an opaque label for the dashboard at /built/views — it
 * carries no access rights, and an unknown or missing code still shows the
 * page, it just isn't attributed to anyone.
 *
 * These match the September 2026 send ("Built emails — copy and send"). A
 * forwarded link still counts against whoever it was originally sent to.
 * To add someone: pick an unused six-character code (lowercase letters and
 * digits) and add a line.
 */
export const RECIPIENTS = {
  jj8vmx: 'Jason Corby · HFMM',
  '4usfeq': 'Jason Hart · HFMM',
  '4nv6ka': 'Alyssa Sickler · Laceyville Lumber',
  '44gmqm': 'Valerie · Sickler’s Home Supply',
  mndi4v: 'Elwood · Sickler’s Home Supply',
  pjxjy6: 'Sales mailbox · Sickler’s Home Supply',
  v3en6d: 'Jamie Stuenzi · Protecall',
  gs98d2: 'Freedom Kongvold · Protecall',
  gmah9b: 'Heritage Baptist Church',
  m7xtj3: 'Sara Wasylyk · Universal Publishing',
  jz2q6g: 'Paul Madden · C.W. Grimm',
  kw8q63: 'Charles Dennis · Abington Center',
  tisuz7: 'Anna Housel · Masters Concrete',
  '2qewva': 'Mike Ednock · Masters Concrete',
  fu74a4: 'Bob Housel · Masters Concrete',
  '28d5pu': 'David Walter · DLW Partners',
  '9qsq69': 'Shipping mailbox · P-Tubes',
  h4ci7d: 'Nicola Pilone · P-Tubes',
  '9kg8dw': 'Pastor Marcos · Fleetwood Bible',
  qqsw4n: 'Executive Pastor · Fleetwood Bible',
  kiswbk: 'Pastor Drew · Fleetwood Bible',
};

/**
 * Brookline's own test link. Logged like any other code but kept off the
 * recipient list, so testing doesn't inflate the open counts. It still
 * appears on the dashboard, labelled, under the real recipients.
 */
export const TEST_CODES = { i5lqsw: 'Test link (Brookline)' };

/** Display name for a code, or null when the code isn't one of ours. */
export function recipientName(code) {
  if (!code) return null;
  const c = String(code).toLowerCase();
  return RECIPIENTS[c] ?? TEST_CODES[c] ?? null;
}

/** A code is well-formed if it could plausibly be one of ours. */
export function isValidCodeShape(code) {
  return typeof code === 'string' && /^[a-z0-9]{4,16}$/i.test(code);
}
