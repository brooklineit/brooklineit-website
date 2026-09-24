import { pageMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = pageMetadata({
  title: 'Built, not bought',
  description:
    'The eight systems Brookline IT built and runs for its clients around the clock — nightly server rounds, account monitoring every 15 minutes, a phishing line that answers in minutes, and backups verified on the server itself.',
  path: '/built',
  socialTitle: 'Built, not bought · Brookline IT',
  socialDescription:
    'The tools behind the quiet, and why we built them ourselves. A report for Brookline IT clients, September 2026.',
});

/* The eight systems, in the order they appear in the September 2026 client report. */
const SYSTEMS = [
  {
    num: '01',
    title: 'Night Shift',
    cadence: 'Runs 1 AM, every night',
    body:
      'A technician that does rounds while your building is dark. Every server every night, every computer every week: disk space, backups, crashed services, protection status. Routine problems are fixed on the spot from a strict safe list. Anything bigger is waiting in our queue with the evidence attached before you have had coffee.',
    moment:
      'In its first week it flagged a server drive running out of room and a database license that had quietly expired on a client’s server. Both were waiting for us in the morning with the evidence attached.',
  },
  {
    num: '02',
    title: 'Second Tech',
    cadence: 'Every 30 minutes, 7 AM to 7 PM',
    body:
      'Every new request is investigated by our tools before a person reads it. It pulls the machine’s history, the account’s sign-ins, and past tickets, then runs a second pass whose only job is to argue with the first one. Nothing gets written down as a fact unless a tool proved it. We start from evidence, not a guess.',
    moment:
      'A client’s printer stopped after a network change. Second Tech connected to the computer that used it, found the printer healthy but at a new address, found another device sitting on its old one, and ruled out the driver and the print queue. It was printing again that evening.',
  },
  {
    num: '03',
    title: 'Security Watch',
    cadence: 'Every 15 minutes, all day, all night',
    body:
      'Antivirus watches your computer. This watches your accounts. Across every Microsoft account we manage it looks for sign-ins from places you have never been, bursts of outgoing mail that look like a hijacked mailbox, and sign-ins from addresses with a bad reputation. It also runs a daily posture check on the whole company for the settings attackers love to find left open.',
    moment:
      'Our account monitoring showed a client’s account being probed from overseas and out of state over a week, then quietly locked out of its own tools. The account was reset and the person was back in the same evening, before they knew there had been a problem.',
  },
  {
    num: '04',
    title: 'The Phish Line',
    cadence: 'Answers in minutes, 24/7',
    body:
      'Report a suspicious email and you get a plain-English verdict back, usually within minutes, day or night. Safe, spam, or phishing, and what to do. It also coaches your team when they press the wrong button, because releasing a real phish from quarantine is the mistake that hurts. If your team does not have this yet, we are rolling it out to every client.',
    moment:
      'A client reported a suspicious form late one evening. Minutes later they had the answer: legitimate, safe to open.',
  },
  {
    num: '05',
    title: 'The Console',
    cadence: '100+ tools, one screen, works from a phone',
    body:
      'This is the one built around how we work. We built a single control room that reaches every client’s Microsoft accounts, every managed computer, the networks we manage, and every ticket. From a phone, we can lock a compromised account, reset its sign-in, pull its history, trace an email, and run a script on any computer in your building. No laptop, no VPN, no “let me get back to the office.”',
    moment:
      'A fake invoice for a serious sum landed in a client’s accounts payable inbox, written to look like the owner had already approved it. We pulled it, swept every other mailbox in the company for copies, and blocked the sender, all the same day, without touching a single computer in the office.',
  },
  {
    num: '06',
    title: 'Server & Backup Heartbeat',
    cadence: 'Every 15 minutes',
    body:
      'Every server we manage is checked around the clock for one thing, is it still talking to us, and every night for another, did last night’s backup actually run and finish. Not a green light in a vendor console. The job itself, on the server, in the last 24 hours.',
    moment:
      'A backup job showed green in its vendor console for months while backing up an empty folder. We caught it in a review this summer and fixed it, and it is the reason every server’s backup is now checked every night.',
  },
  {
    num: '07',
    title: 'The Promise Tracker',
    cadence: '3 times a day, every weekday',
    body:
      'If we tell you “I’ll get back to you tomorrow,” a system reads that sentence and holds us to it. Overdue promises are surfaced to us before you have to chase. It even has a check on itself, so it cannot go quiet without us knowing.',
    moment: 'It is the reason a “we’ll check in 48 hours” actually gets checked in 48 hours.',
  },
  {
    num: '08',
    title: 'The Patch Engine',
    cadence: 'Daily, weekly, monthly lanes',
    body:
      'Security fixes go out daily, application updates weekly, and everything else monthly, on a schedule your team never notices. Servers have their own lane on Sunday mornings, outside working hours. Even in a record month like this September, it was just another Tuesday.',
    moment:
      'Microsoft’s September 8 release closed 974 vulnerabilities. Every supported Windows computer and server we manage had it installed. No downtime.',
  },
];

const STATS = [
  { val: '7', label: 'Systems we built ourselves' },
  { val: '100+', label: 'Tools in our control room' },
  { val: '15 min', label: 'How often your accounts are checked' },
  { val: '365', label: 'Nights a year of rounds' },
];

function System({ num, title, cadence, body, moment }) {
  return (
    <article
      style={{
        background: 'var(--white)',
        border: '1px solid var(--warm-100)',
        borderRadius: 16,
        padding: 'clamp(24px, 4vw, 40px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap', marginBottom: 6 }}>
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 13,
            fontWeight: 500,
            color: 'var(--green-600)',
            letterSpacing: '0.04em',
          }}
        >
          {num}
        </span>
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(22px, 3vw, 28px)',
            fontWeight: 700,
            color: 'var(--warm-800)',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          {title}
        </h2>
      </div>

      <div
        className="tag"
        style={{ color: 'var(--warm-400)', marginBottom: 16 }}
      >
        {cadence}
      </div>

      <p style={{ maxWidth: 'none', marginBottom: 24 }}>{body}</p>

      <div
        style={{
          background: 'var(--warm-50)',
          borderRadius: 12,
          padding: 'clamp(18px, 3vw, 24px)',
          borderLeft: '3px solid var(--green-500)',
        }}
      >
        <div className="tag" style={{ marginBottom: 8 }}>
          Real moment
        </div>
        <p style={{ maxWidth: 'none', marginBottom: 0, fontSize: 15 }}>{moment}</p>
      </div>
    </article>
  );
}

export default function Built() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="tag">For our clients &middot; September 2026</div>
          <h1>Built, not bought.</h1>
          <p>The tools behind the quiet, and why we built them ourselves.</p>
        </div>
      </section>

      <section className="content" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <p style={{ fontSize: 18, color: 'var(--warm-500)' }}>
            Most IT companies run the same three things: a ticket system, an antivirus, and a patching
            tool, all rented from the same vendors. We started there too. Then we built our own on top of
            them, because the off-the-shelf ones kept missing things. What follows is the current list. It
            is why you rarely have to call us.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 32,
              marginTop: 48,
              paddingTop: 40,
              borderTop: '1px solid var(--warm-100)',
            }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 'clamp(32px, 5vw, 44px)',
                    fontWeight: 700,
                    color: 'var(--green-600)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                  }}
                >
                  {s.val}
                </div>
                <div style={{ fontSize: 13, color: 'var(--warm-400)', marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="tag">Eight systems, running now</div>
          <div style={{ display: 'grid', gap: 24, marginTop: 24 }}>
            {SYSTEMS.slice(0, 5).map((s) => (
              <System key={s.num} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="content" style={{ background: 'var(--white)' }}>
        <div className="wrap">
          <div className="tag">Access &amp; accountability</div>
          <h2>Who can actually use this?</h2>
          <p>
            Only us, and only through a passkey. A passkey is a cryptographic key stored in the secure chip
            of a registered device, unlocked by a face or a fingerprint. It is not a password, so it is
            extremely hard to phish and cannot be guessed or reused. Someone would need our physical phone
            or laptop, unlocked, and our face. A stolen device on its own gets nothing, and we can cut off
            any device in seconds.
          </p>
          <p>
            No client passwords or keys live on our devices. Our own access keys sit on encrypted disks
            behind hardware-bound sign-in. The device is a window into a server, and the server does the
            work. That is why we are not stuck behind a laptop to fix something: a problem reported at 4 PM
            on a Friday gets handled from wherever we are, with the same tools and the same protections,
            usually before the person who reported it has logged off.
          </p>
          <p>
            Every change we make in your Microsoft environment lands in your own audit log under a named
            identity that you granted and can revoke at any time, through Microsoft&apos;s delegated-admin
            system. Every privileged action on our side is logged as well. Our automated tools handle
            routine work from a strict safe list. They cannot touch passwords, sign-in methods or anything
            destructive. Those need a person, and they are logged.
          </p>
        </div>
      </section>

      <section className="content">
        <div className="wrap">
          <div style={{ display: 'grid', gap: 24 }}>
            {SYSTEMS.slice(5).map((s) => (
              <System key={s.num} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="content" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="callout">
            <div className="tag">Why we did this</div>
            <h3>Quiet should never mean invisible.</h3>
            <p>
              The monitoring in this report used to require a security team and a budget to match. We built
              it so our clients get it without either. Every one of these tools exists because something
              once slipped past the store-bought version. We do not intend to let it slip twice. If you ever
              want to see what ran for you in a given month, ask and we will show you.
            </p>
          </div>
        </div>
      </section>

      <section className="page-cta" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="page-cta-box">
            <h2>When something feels off, call us first.</h2>
            <p>We would rather hear about it early than clean it up later.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a className="btn btn-dark" href="tel:+15703444900">
                570-344-4900
              </a>
              <a className="btn btn-ghost" href="mailto:helpdesk@brooklineit.com">
                helpdesk@brooklineit.com
              </a>
            </div>
            <p style={{ marginTop: 28, marginBottom: 0, fontSize: 14 }}>
              Not a client yet? <Link href="/contact" style={{ color: 'var(--green-600)', fontWeight: 500 }}>Talk to us</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
