import Link from 'next/link';
import styles from '../legal.module.css';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { GradientWave } from '@/components/ui/gradient-wave';

export const metadata = {
  title: 'Privacy Policy & Student Data Protection — Proctors',
  description: "Learn how Proctors handles student data with strict adherence to India's Digital Personal Data Protection Act, 2023 (DPDP Act).",
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
              <span className={styles.badge}>DPDP Act Aligned</span>
              <h1 className={styles.title}>Privacy Policy &amp; Student Data Protection</h1>
              <div className={styles.metaRow}>
                <span>Last Updated: September 2026</span>
                <span>•</span>
                <span>India DPDP Act (2023) Aligned</span>
              </div>
            </header>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Our Commitment to Student Privacy</h2>
              <p className={styles.text}>
                Proctors (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;Platform&rdquo;) provides AI-powered conversational assessment infrastructure to schools. We believe that student data belongs strictly to the educational institution and the student.
              </p>
              <p className={styles.text}>
                This Privacy Policy explains how personal and academic data is collected, processed, and safeguarded in strict alignment with India&apos;s <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Institutional Data Roles</h2>
              <p className={styles.text}>
                Under the DPDP Act, the partnering School acts as the <strong>Data Fiduciary</strong>, determining the purpose and scope of classroom assessments. Proctors acts exclusively as the <strong>Data Processor</strong>, handling student assessment responses solely upon the instructions of the School.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Information We Process</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span><strong>Educator Details:</strong> Name, professional email address, school affiliation, and grade/subject assignments for teacher dashboard access.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span><strong>Student Assessment Sessions:</strong> Audio recordings of student responses and clean text transcripts generated during dialogue sessions.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span><strong>Diagnostic Evaluation Data:</strong> Conceptual depth indicators, Bloom&apos;s Taxonomy tagging, and HPC rubric evidence generated for teacher review.</span>
                </li>
              </ul>
              <p className={styles.text} style={{ marginTop: '12px' }}>
                We do NOT require students to create persistent personal accounts, enter personal phone numbers, or submit biometric credentials.
              </p>
            </section>

            <section id="student-data" className={styles.section}>
              <h2 className={styles.sectionTitle}>4. Student Data Guarantees</h2>
              <div className={styles.callout}>
                Student data stays with your school. Proctors does not sell or share student records with third parties under any circumstances.
              </div>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span><strong>No Sale or Monetization:</strong> We never sell, rent, license, or barter student data, transcripts, or assessment recordings to third parties, data brokers, or advertisers.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span><strong>No Advertisements or Profiling:</strong> Proctors is 100% ad-free. Student data is never used to build advertising profiles or deliver behavioral marketing.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span><strong>No Public AI Training:</strong> Student audio recordings and transcripts are never fed into public foundation models for public training without explicit institutional consent.</span>
                </li>
              </ul>
            </section>

            <section id="security" className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Security Architecture</h2>
              <p className={styles.text}>
                We implement robust technical and organizational measures to safeguard school and student information:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span><strong>Tokenized Assessment Links:</strong> Sessions are distributed through secure, time-bounded (24-hour) single-use cryptographic tokens.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span><strong>Encryption Standards:</strong> All data is encrypted in transit via TLS 1.3 and at rest utilizing industry-standard AES-256 encryption.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span><strong>Role-Based Access:</strong> Only authenticated teachers and academic administrators can access their assigned classroom insight reports.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletDot} />
                  <span><strong>Human Review Audit Trail:</strong> Any score adjustments or teacher overrides are logged with immutable timestamps for institutional transparency.</span>
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>6. Data Retention &amp; Deletion</h2>
              <p className={styles.text}>
                Assessment data and audio files are retained strictly for the duration requested by the School to fulfill its academic evaluation requirements or compliance term.
              </p>
              <p className={styles.text}>
                Schools may request complete, permanent deletion of their students&apos; data, transcripts, and evaluation logs at any time by contacting our data protection desk. Upon contract completion, data is automatically purged in accordance with institutional data retention schedules.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>7. Contact &amp; Grievance Redressal</h2>
              <p className={styles.text}>
                For privacy questions, audit requests, or DPDP Act compliance inquiries, please contact our Data Protection Officer at:
              </p>
              <div className={styles.contactBox}>
                <p>
                  <strong>Proctors Data Protection &amp; Compliance Team</strong><br />
                  Email: <a href="mailto:hello@proctors.in">hello@proctors.in</a><br />
                  New Delhi, India
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>

      <Footer />
    </>
  );
}
