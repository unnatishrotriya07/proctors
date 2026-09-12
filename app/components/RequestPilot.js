'use client';
import { useState } from 'react';
import styles from './RequestPilot.module.css';
import LiquidGlass from '@/components/ui/LiquidGlass';
import { CheckCircle2, AlertCircle, Check, Lock } from 'lucide-react';

const pilotPerks = [
  'Full platform access for one subject and grade band',
  'AI-generated assessments from your existing curriculum',
  'Per-student insight reports for your teaching team',
  'Direct access to the founding team for feedback and support',
];

export default function RequestPilot() {
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    // Honeypot check
    if (e.target.website && e.target.website.value) return;

    setLoading(true);
    setStatus('idle');

    const form = e.target;
    const payload = {
      schoolName: form.schoolName.value,
      name: form.name.value,
      role: form.role.value,
      email: form.email.value,
      phone: form.phone.value,
      state: form.state.value,
      assessmentMethod: form.assessmentMethod.value,
      // FormSubmit hidden config fields
      _subject: 'New Free Pilot Application — Proctors',
      _captcha: 'false',
      _template: 'table',
      _replyto: form.email.value,
    };

    try {
      const res = await fetch('https://formsubmit.co/ajax/unnatishrotriya@proctors.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="request-pilot" className={`section section--alt ${styles.section}`}>
      {/* Anchor for pricing navigation */}
      <span id="pricing" className={styles.anchorOffset} aria-hidden="true" />
      <div className="container">
        <div className={styles.wrapper}>
          <LiquidGlass variant="elevated" hoverable={false} className={styles.glassContainer}>
            <div className={styles.layoutGrid}>
              {/* Left Column: Offer Details & Pilot Scope */}
              <div className={styles.infoCol}>
                <span className={styles.eyebrow}>Structured Free Pilot</span>
                <h2 className={styles.title}>
                  See Proctor with your school&apos;s own curriculum.
                </h2>
                <p className={styles.desc}>
                  We&apos;re running a structured free pilot with a small cohort of design-partner schools. Pilot schools receive full platform access, hands-on onboarding support, and first-mover pricing when the paid phase begins.
                </p>

                <div className={styles.perksSection}>
                  <p className={styles.perksHeading}>What the pilot includes:</p>
                  <ul className={styles.perksList}>
                    {pilotPerks.map((perk) => (
                      <li key={perk} className={styles.perkItem}>
                        <div className={styles.perkCheck}>
                          <Check className={styles.checkIcon} />
                        </div>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.privacyNote}>
                  <Lock className={styles.lockIcon} />
                  <span>We don&apos;t share your data with anyone. Student records stay with your school.</span>
                </div>
              </div>

              {/* Right Column: Application Form */}
              <div className={styles.formCol}>
                {status === 'success' ? (
                  <div className={styles.success}>
                    <div className={styles.successIcon}>
                      <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className={styles.successTitle}>Application Received</h3>
                    <p className={styles.successText}>
                      Thank you for applying. We will review your school&apos;s curriculum context and reach out within 1 business day to set up your pilot onboarding.
                    </p>
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit} noValidate>
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      aria-hidden="true"
                      style={{ display: 'none' }}
                    />

                    <div className={styles.field}>
                      <label htmlFor="pilot-school" className={styles.label}>School Name</label>
                      <input
                        id="pilot-school"
                        name="schoolName"
                        type="text"
                        required
                        className={styles.input}
                        placeholder="e.g. Delhi Public School, R.K. Puram"
                      />
                    </div>

                    <div className={styles.twoCol}>
                      <div className={styles.field}>
                        <label htmlFor="pilot-name" className={styles.label}>Your Name</label>
                        <input
                          id="pilot-name"
                          name="name"
                          type="text"
                          required
                          className={styles.input}
                          placeholder="Dr. / Mr. / Ms. Name"
                        />
                      </div>

                      <div className={styles.field}>
                        <label htmlFor="pilot-role" className={styles.label}>Role</label>
                        <input
                          id="pilot-role"
                          name="role"
                          type="text"
                          required
                          className={styles.input}
                          placeholder="Principal / Academic Head"
                        />
                      </div>
                    </div>

                    <div className={styles.twoCol}>
                      <div className={styles.field}>
                        <label htmlFor="pilot-email" className={styles.label}>Email</label>
                        <input
                          id="pilot-email"
                          name="email"
                          type="email"
                          required
                          className={styles.input}
                          placeholder="name@school.edu.in"
                        />
                      </div>

                      <div className={styles.field}>
                        <label htmlFor="pilot-phone" className={styles.label}>Phone</label>
                        <input
                          id="pilot-phone"
                          name="phone"
                          type="tel"
                          required
                          className={styles.input}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="pilot-state" className={styles.label}>State</label>
                      <input
                        id="pilot-state"
                        name="state"
                        type="text"
                        required
                        className={styles.input}
                        placeholder="e.g. Delhi, Maharashtra, Karnataka"
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="pilot-method" className={styles.label}>Current Assessment Method</label>
                      <input
                        id="pilot-method"
                        name="assessmentMethod"
                        type="text"
                        required
                        className={styles.input}
                        placeholder="e.g. Written unit tests, worksheets, standard exams"
                      />
                    </div>

                    {status === 'error' && (
                      <div className={styles.errorBanner}>
                        <AlertCircle className={styles.errorIcon} />
                        <span>Something went wrong. Please try again or email us directly at hello@proctors.in</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className={`btn btn--primary ${styles.submitBtn}`}
                      disabled={loading}
                    >
                      {loading ? 'Submitting Application…' : 'Apply for the Free Pilot →'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </LiquidGlass>
        </div>
      </div>
    </section>
  );
}
