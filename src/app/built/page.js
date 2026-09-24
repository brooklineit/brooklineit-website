import Image from 'next/image';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import s from './report.module.css';

export const metadata = pageMetadata({
  title: 'Built, not bought',
  description:
    'The eight systems Brookline IT built and runs for its clients around the clock — nightly server rounds, account monitoring every 15 minutes, a phishing line that answers in minutes, and backups verified on the server itself.',
  path: '/built',
  socialTitle: 'Built, not bought · Brookline IT',
  socialDescription:
    'The tools behind the quiet, and why we built them ourselves. A report for Brookline IT clients, September 2026.',
});

/* The eight systems, in report order. `short` is the contents-index cadence,
   `cadence` the fuller one on the entry itself. */
const SYSTEMS = [
  {
    num: '01',
    id: 'night-shift',
    title: 'Night Shift',
    short: 'Nightly',
    cadence: 'Runs 1 AM, every night',
    body:
      'A technician that does rounds while your building is dark. Every server every night, every computer every week: disk space, backups, crashed services, protection status. Routine problems are fixed on the spot from a strict safe list. Anything bigger is waiting in our queue with the evidence attached before you have had coffee.',
    moment:
      'In its first week it flagged a server drive running out of room and a database license that had quietly expired on a client’s server. Both were waiting for us in the morning with the evidence attached.',
  },
  {
    num: '02',
    id: 'second-tech',
    title: 'Second Tech',
    short: 'Every 30 min',
    cadence: 'Every 30 minutes, 7 AM to 7 PM',
    body:
      'Every new request is investigated by our tools before a person reads it. It pulls the machine’s history, the account’s sign-ins, and past tickets, then runs a second pass whose only job is to argue with the first one. Nothing gets written down as a fact unless a tool proved it. We start from evidence, not a guess.',
    moment:
      'A client’s printer stopped after a network change. Second Tech connected to the computer that used it, found the printer healthy but at a new address, found another device sitting on its old one, and ruled out the driver and the print queue. It was printing again that evening.',
  },
  {
    num: '03',
    id: 'security-watch',
    title: 'Security Watch',
    short: 'Every 15 min',
    cadence: 'Every 15 minutes, all day, all night',
    body:
      'Antivirus watches your computer. This watches your accounts. Across every Microsoft account we manage it looks for sign-ins from places you have never been, bursts of outgoing mail that look like a hijacked mailbox, and sign-ins from addresses with a bad reputation. It also runs a daily posture check on the whole company for the settings attackers love to find left open.',
    moment:
      'Our account monitoring showed a client’s account being probed from overseas and out of state over a week, then quietly locked out of its own tools. The account was reset and the person was back in the same evening, before they knew there had been a problem.',
  },
  {
    num: '04',
    id: 'phish-line',
    title: 'The Phish Line',
    short: '24/7',
    cadence: 'Answers in minutes, 24/7',
    body:
      'Report a suspicious email and you get a plain-English verdict back, usually within minutes, day or night. Safe, spam, or phishing, and what to do. It also coaches your team when they press the wrong button, because releasing a real phish from quarantine is the mistake that hurts. If your team does not have this yet, we are rolling it out to every client.',
    moment:
      'A client reported a suspicious form late one evening. Minutes later they had the answer: legitimate, safe to open.',
  },
  {
    num: '05',
    id: 'console',
    title: 'The Console',
    short: 'Always on',
    cadence: '100+ tools, one screen, works from a phone',
    body:
      'This is the one built around how we work. We built a single control room that reaches every client’s Microsoft accounts, every managed computer, the networks we manage, and every ticket. From a phone, we can lock a compromised account, reset its sign-in, pull its history, trace an email, and run a script on any computer in your building. No laptop, no VPN, no ‘let me get back to the office.’',
    moment:
      'A fake invoice for a serious sum landed in a client’s accounts payable inbox, written to look like the owner had already approved it. We pulled it, swept every other mailbox in the company for copies, and blocked the sender, all the same day, without touching a single computer in the office.',
  },
  {
    num: '06',
    id: 'heartbeat',
    title: 'Server & Backup Heartbeat',
    short: 'Every 15 min',
    cadence: 'Every 15 minutes',
    body:
      'Every server we manage is checked around the clock for one thing, is it still talking to us, and every night for another, did last night’s backup actually run and finish. Not a green light in a vendor console. The job itself, on the server, in the last 24 hours.',
    moment:
      'A backup job showed green in its vendor console for months while backing up an empty folder. We caught it in a review this summer and fixed it, and it is the reason every server’s backup is now checked every night.',
  },
  {
    num: '07',
    id: 'promise-tracker',
    title: 'The Promise Tracker',
    short: '3× a day',
    cadence: '3 times a day, every weekday',
    body:
      'If we tell you ‘I’ll get back to you tomorrow,’ a system reads that sentence and holds us to it. Overdue promises are surfaced to us before you have to chase. It even has a check on itself, so it cannot go quiet without us knowing.',
    moment: 'It is the reason a ‘we’ll check in 48 hours’ actually gets checked in 48 hours.',
  },
  {
    num: '08',
    id: 'patch-engine',
    title: 'The Patch Engine',
    short: 'Daily — monthly',
    cadence: 'Daily, weekly, monthly lanes',
    body:
      'Security fixes go out daily, application updates weekly, and everything else monthly, on a schedule your team never notices. Servers have their own lane on Sunday mornings, outside working hours. Even in a record month like this September, it was just another Tuesday.',
    moment:
      'Microsoft’s September 8 release closed 974 vulnerabilities. Every supported Windows computer and server we manage had it installed. No downtime.',
  },
];

const STATS = [
  { val: '7', label: 'Systems we built\nourselves' },
  { val: '100+', label: 'Tools in our\ncontrol room' },
  { val: '15 min', label: 'How often your\naccounts are checked' },
  { val: '365', label: 'Nights a year\nof rounds' },
];

/* Bars are placed as a percentage of a 24-hour day. */
const DAY = [
  { label: 'Security Watch', start: 0, end: 24 },
  { label: 'Server & Backup Heartbeat', start: 0, end: 24 },
  { label: 'The Phish Line', start: 0, end: 24 },
  { label: 'The Console', start: 0, end: 24 },
  { label: 'Second Tech', start: 7, end: 19 },
  { label: 'Night Shift', start: 1, end: 1.6, accent: true },
];

function System({ num, id, title, cadence, body, moment }) {
  return (
    <section className={s.system} id={id}>
      <div className={s.systemHead}>
        <span className={s.systemNum}>{num}</span>
        <h2 className={s.systemTitle}>{title}</h2>
        <span className={s.pill}>{cadence}</span>
      </div>
      <p className={s.systemBody}>{body}</p>
      <div className={s.moment}>
        <div className={s.momentLabel}>Real moment</div>
        <p className={s.momentText}>{moment}</p>
      </div>
    </section>
  );
}

export default function Built() {
  return (
    <div className={`${s.sheet} report-sheet`}>
      <header className={s.masthead}>
        <Link href="/" aria-label="Brookline IT">
          <Image
            className={s.logo}
            src="/images/logo-dark.png"
            alt="Brookline IT"
            width={240}
            height={48}
            priority
          />
        </Link>
        <div className={s.mastheadMeta}>
          For our clients
          <br />
          September 2026
        </div>
      </header>

      <div className={s.eyebrow}>Scranton, PA &nbsp;&middot;&nbsp; What runs for you</div>

      <h1 className={s.title}>
        Built, <em>not bought.</em>
      </h1>
      <p className={s.deck}>The tools behind the quiet, and why we built them ourselves.</p>
      <p className={s.intro}>
        Most IT companies run the same three things: a ticket system, an antivirus, and a patching tool,
        all rented from the same vendors. We started there too. Then we built our own on top of them,
        because the off-the-shelf ones kept missing things. What follows is the current list. It is why you
        rarely have to call us.
      </p>

      <div className={s.stats}>
        {STATS.map((st) => (
          <div className={s.stat} key={st.label}>
            <div className={s.statVal}>{st.val}</div>
            <div className={s.statLabel} style={{ whiteSpace: 'pre-line' }}>
              {st.label}
            </div>
          </div>
        ))}
      </div>

      <div className={`${s.eyebrow} ${s.eyebrowMuted}`}>In this report</div>
      <nav className={s.index}>
        {SYSTEMS.map((sys) => (
          <a className={s.indexRow} href={`#${sys.id}`} key={sys.num}>
            <span className={s.indexNum}>{sys.num}</span>
            <span className={s.indexTitle}>{sys.title}</span>
            <span className={s.indexCadence}>{sys.short}</span>
          </a>
        ))}
      </nav>

      <div className={s.timeline}>
        <h2 className={s.timelineTitle}>One ordinary day, watched</h2>
        <p className={s.timelineSub}>When each system is running, midnight to midnight.</p>

        {DAY.map((row) => (
          <div className={s.trackRow} key={row.label}>
            <div className={s.trackLabel}>{row.label}</div>
            <div className={s.track}>
              <div
                className={`${s.bar}${row.accent ? ` ${s.barAccent}` : ''}`}
                style={{
                  left: `${(row.start / 24) * 100}%`,
                  width: `${((row.end - row.start) / 24) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}

        <div className={s.axis}>
          <div />
          <div className={s.axisMarks}>
            <span>12 AM</span>
            <span>6 AM</span>
            <span>Noon</span>
            <span>6 PM</span>
            <span>12 AM</span>
          </div>
        </div>

        <p className={s.timelineNote}>
          Four of the eight are watching at every hour of every day. The Promise Tracker checks three times
          a day on weekdays, and The Patch Engine runs its daily, weekly and monthly lanes &mdash; those
          three keep a calendar rather than a clock.
        </p>
      </div>

      <div className={s.sectionHead}>
        <h2 className={s.sectionTitle}>The tools</h2>
        <div className={s.sectionRule} />
        <div className={s.sectionMeta}>Eight systems, running now</div>
      </div>

      {SYSTEMS.slice(0, 5).map((sys) => (
        <System key={sys.num} {...sys} />
      ))}

      <div className={s.dark}>
        <div className={s.eyebrow}>Access &amp; accountability</div>
        <h2 className={s.darkTitle}>Who can actually use this?</h2>
        <p className={s.darkText}>
          Only us, and only through a passkey. A passkey is a cryptographic key stored in the secure chip
          of a registered device, unlocked by a face or a fingerprint. It is not a password, so it is
          extremely hard to phish and cannot be guessed or reused. Someone would need our physical phone or
          laptop, unlocked, and our face. A stolen device on its own gets nothing, and we can cut off any
          device in seconds.
        </p>
        <p className={s.darkText}>
          No client passwords or keys live on our devices. Our own access keys sit on encrypted disks
          behind hardware-bound sign-in. The device is a window into a server, and the server does the
          work. That is why we are not stuck behind a laptop to fix something: a problem reported at 4 PM
          on a Friday gets handled from wherever we are, with the same tools and the same protections,
          usually before the person who reported it has logged off.
        </p>
        <p className={s.darkText}>
          Every change we make in your Microsoft environment lands in your own audit log under a named
          identity that you granted and can revoke at any time, through Microsoft&apos;s delegated-admin
          system. Every privileged action on our side is logged as well. Our automated tools handle routine
          work from a strict safe list. They cannot touch passwords, sign-in methods or anything
          destructive. Those need a person, and they are logged.
        </p>
      </div>

      {SYSTEMS.slice(5).map((sys) => (
        <System key={sys.num} {...sys} />
      ))}

      <div className={s.sectionHead}>
        <h2 className={s.sectionTitle}>Why we did this</h2>
        <div className={s.sectionRule} />
      </div>

      <p className={s.closing} style={{ marginTop: 18 }}>
        The monitoring in this report used to require a security team and a budget to match. We built it so
        our clients get it without either. Every one of these tools exists because something once slipped
        past the store-bought version. We do not intend to let it slip twice.
      </p>
      <p className={s.closing}>
        Quiet should never mean invisible. If you ever want to see what ran for you in a given month, ask
        and we will show you.
      </p>

      <div className={s.callBar}>
        <div className={s.callBarTitle}>When something feels off, call us first.</div>
        <div className={s.callBarContact}>
          <a href="tel:+15703444900">570-344-4900</a>
          <a href="mailto:helpdesk@brooklineit.com">helpdesk@brooklineit.com</a>
        </div>
      </div>

      <div className={s.colophon}>
        <Link href="/">brooklineit.com</Link>
        <span>helpdesk@brooklineit.com &nbsp;&middot;&nbsp; 570-344-4900</span>
      </div>
    </div>
  );
}
