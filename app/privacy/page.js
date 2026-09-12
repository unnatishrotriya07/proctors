import Link from 'next/link';
import styles from '../legal.module.css';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { GradientWave } from '@/components/ui/gradient-wave';

export const metadata = {
  title: 'Privacy Policy & Student Data Protection — Proctors',
  description: "Student data stays with your school. Proctors does not sell or share student records. Data handling aligned to India's DPDP Act.",
};

export default function PrivacyPage() {
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
              <span className={styles.badge}>Student Data Privacy</span>
              <h1 className={styles.title}>Privacy Policy &amp; Student Data Protection</h1>
              <div className={styles.metaRow}>
                <span>Data handling aligned to India&apos;s DPDP Act</span>
              </div>
            </header>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Core Compliance Guarantee</h2>
              <div className={styles.callout}>
                Student data stays with your school. Proctors does not sell or share student records. Data handling aligned to India&apos;s DPDP Act.
              </div>
              <p className={styles.text}>
                We don&apos;t share your data with anyone. Student records stay with your school.
              </p>
            </section>

            <section id="student-data" className={styles.section}>
              <h2 className={styles.sectionTitle}>Student Data Policy</h2>
              <p className={styles.text}>
                Assessments are delivered via 24-hour tokenized links with role-based access control — assigned by class or individual, with automated email invites. No student accounts to create. No app to download.
              </p>
              <p className={styles.text}>
                Students access their assessment securely from any device, with nothing to install and no credentials to remember.
              </p>
            </section>

            <section id="security" className={styles.section}>
              <h2 className={styles.sectionTitle}>Security &amp; Speech Infrastructure</h2>
              <p className={styles.text}>
                A self-hosted speech stack (Kokoro TTS + Whisper STT) handles primary voice interaction, with the browser&apos;s native Web Speech API as a fallback when local services are unavailable.
              </p>
              <p className={styles.text}>
                Consistent voice assessment across the range of devices and connectivity conditions common in Tier 2/3 schools — with no interruption to a student&apos;s session.
              </p>
              <p className={styles.text}>
                Reports below a confidence threshold are automatically flagged and routed to a teacher review queue — with raw and cleaned transcripts, audio playback, and score-override capability. Every override is logged in an audit trail.
              </p>
              <p className={styles.text}>
                No automated report leaves without a confidence check. The teacher&apos;s judgment is always the final layer.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Standards &amp; Regulatory Alignment</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span><strong>NEP 2020 Aligned:</strong> Evaluates communication, reasoning, and conceptual understanding.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span><strong>PARAKH / HPC Ready:</strong> Auto-generates structured evidence mapped directly to Holistic Progress Card criteria.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span><strong>Student Data Privacy — DPDP Act:</strong> Strict data protection aligned to Indian regulatory standards.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span><strong>Built for Indian Schools:</strong> Grounded in NCERT, CBSE, and state board curricula.</span>
                </li>
              </ul>
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
