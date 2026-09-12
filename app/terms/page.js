import Link from 'next/link';
import styles from '../legal.module.css';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { GradientWave } from '@/components/ui/gradient-wave';

export const metadata = {
  title: 'Terms of Service — Proctors',
  description: 'Terms of Service for Proctors — AI-Powered Conversational Assessment Platform for Schools.',
};

export default function TermsPage() {
  return (
    <>
      <div className="sticky-bg-wrapper" aria-hidden="true">
        <GradientWave />
      </div>

      <div className={styles.legalWrapper}>
        <div className={styles.container}>
          <div className={styles.topBar}>
            <Link href="/" className={styles.brandLink} aria-label="Proctors Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Proctors" className={styles.logoImg} />
            </Link>
            <Link href="/" className={styles.backLink}>
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <article className={styles.contentCard}>
            <header className={styles.header}>
              <span className={styles.badge}>Platform Terms</span>
              <h1 className={styles.title}>Terms of Service</h1>
              <div className={styles.metaRow}>
                <span>Proctors — AI-Powered Conversational Assessment Platform for Schools</span>
              </div>
            </header>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Platform Overview</h2>
              <p className={styles.text}>
                A curriculum-native AI assessment platform — built for Indian schools, scaled for classrooms of 40.
              </p>
              <p className={styles.text}>
                The platform sits directly on top of the curriculum your school already teaches. After a chapter is covered in class, a teacher assigns a Proctor assessment. Every student — not just the fast ones, not just the ones who raise their hand — gets a private, voice-based AI dialogue built around that exact chapter. Proctor asks, listens, follows up, and produces a per-student insight report the teacher receives the same week.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Standards &amp; Compliance</h2>
              <div className={styles.callout}>
                CBSE &amp; State Board Aligned • NEP 2020 Compliant • PARAKH / HPC Ready • NCERT-Grounded
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Design-Partner Pilot Terms</h2>
              <p className={styles.text}>
                We&apos;re running a structured free pilot with a small cohort of design-partner schools. Pilot schools receive full platform access, hands-on onboarding support, and first-mover pricing when the paid phase begins.
              </p>
              <p className={styles.text} style={{ fontWeight: 600, marginTop: '16px', marginBottom: '8px' }}>
                What the pilot includes:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span>Full platform access for one subject and grade band</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span>AI-generated assessments from your existing curriculum</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span>Per-student insight reports for your teaching team</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span>Direct access to the founding team for feedback and support</span>
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Secure Assessment Distribution</h2>
              <p className={styles.text}>
                Assessments are delivered via 24-hour tokenized links with role-based access control — assigned by class or individual, with automated email invites. No student accounts to create. No app to download.
              </p>
              <p className={styles.text}>
                Students access their assessment securely from any device, with nothing to install and no credentials to remember.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Human Review &amp; Teacher Oversight</h2>
              <p className={styles.text}>
                Reports below a confidence threshold are automatically flagged and routed to a teacher review queue — with raw and cleaned transcripts, audio playback, and score-override capability. Every override is logged in an audit trail.
              </p>
              <p className={styles.text}>
                No automated report leaves without a confidence check. The teacher&apos;s judgment is always the final layer.
              </p>
            </section>

            <div className={styles.contactBox}>
              <p>Contact: <a href="mailto:hello@proctors.in">hello@proctors.in</a></p>
              <p style={{ marginTop: '4px' }}>© 2026 Proctors. All rights reserved.</p>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </>
  );
}
