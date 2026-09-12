import Link from 'next/link';
import styles from '../legal.module.css';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { GradientWave } from '@/components/ui/gradient-wave';

export const metadata = {
  title: 'Terms of Service — Proctors',
  description: 'Terms and conditions governing the use of the Proctors AI-powered conversational assessment platform for schools.',
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
              <span className={styles.badge}>Institutional Agreement</span>
              <h1 className={styles.title}>Terms of Service</h1>
              <div className={styles.metaRow}>
                <span>Last Updated: September 2026</span>
                <span>•</span>
                <span>Proctors Technologies</span>
              </div>
            </header>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
              <p className={styles.text}>
                These Terms of Service (&ldquo;Terms&rdquo;) constitute a binding agreement between Proctors (&ldquo;Proctors&rdquo;, &ldquo;Platform&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) and the educational institution, school, or authorized academic representative (&ldquo;School&rdquo;, &ldquo;you&rdquo;) accessing or deploying our conversational AI assessment software.
              </p>
              <p className={styles.text}>
                By requesting a pilot, enrolling in an institutional program, or administering assessments through Proctors, you agree to comply with and be bound by these Terms.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Platform Services &amp; Pilot Scope</h2>
              <p className={styles.text}>
                Proctors provides a curriculum-native oral assessment platform designed for K-12 classrooms. Services include:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span>One-on-one structured voice and text academic dialogue grounded in standard syllabi (NCERT, CBSE, and State Boards).</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span>Automated multi-tier evaluation pipeline mapping student response quality against Bloom&apos;s Taxonomy levels.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span>Teacher insight dashboards and PARAKH Holistic Progress Card (HPC) compliance documentation.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span>Human review panels allowing educators to inspect transcripts and override automated evaluations.</span>
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. School Authorization &amp; Student Access</h2>
              <p className={styles.text}>
                Assessments are delivered via 24-hour tokenized links assigned by class or individual student without requiring persistent student credentials.
              </p>
              <p className={styles.text}>
                The School represents and warrants that it has the requisite institutional authority and parental consent where required under applicable educational regulations to administer academic assessments to its enrolled students.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>4. Intellectual Property &amp; Curriculum Ownership</h2>
              <p className={styles.text}>
                <strong>School Materials:</strong> The School retains all rights, title, and interest in school-specific materials, student records, and student responses generated during assessment sessions.
              </p>
              <p className={styles.text}>
                <strong>Proctors IP:</strong> The platform architecture, proprietary speech pipeline, AI evaluation state machines, diagnostic algorithms, user interfaces, and brand assets remain the exclusive intellectual property of Proctors.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Educational Role of AI &amp; Teacher Judgment</h2>
              <div className={styles.callout}>
                Proctors is an academic diagnostic and evidence-gathering instrument designed to assist educators — not an autonomous grading authority.
              </div>
              <p className={styles.text}>
                Diagnostic insights, conceptual depth scores, and compliance metrics produced by the platform are provided to inform classroom instruction. Final academic grades, report cards, and student evaluations remain under the sole judgment and responsibility of the School and its teachers.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>6. Acceptable Use Policy</h2>
              <p className={styles.text}>
                Users agree not to:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span>Reverse engineer, decompile, or attempt to extract the source code or proprietary state machines of the platform.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span>Interfere with or bypass tokenized session security, rate limits, or audio processing endpoints.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span>Submit false, unlawful, abusive, or non-educational content through assessment dialogues.</span>
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>7. Service Availability &amp; Modifications</h2>
              <p className={styles.text}>
                We endeavor to maintain continuous platform availability. Scheduled maintenance or service updates are coordinated to minimize classroom disruption. Proctors reserves the right to enhance, modify, or update features to improve pedagogical accuracy and system reliability.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>8. Termination &amp; Data Handling</h2>
              <p className={styles.text}>
                Either party may terminate a pilot or subscription agreement with 30 days&apos; written notice. Upon termination, all school-specific records and student transcripts will be archived or permanently purged in accordance with our Privacy Policy.
              </p>
            </section>

            <div className={styles.contactBox}>
              <p>
                Questions regarding these Terms of Service may be directed to{' '}
                <a href="mailto:hello@proctors.in">hello@proctors.in</a>.
              </p>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </>
  );
}
