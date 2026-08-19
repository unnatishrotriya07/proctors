'use client';
import { useState } from 'react';
import styles from './Conversion.module.css';

const roles = [
  'Principal',
  'Academic Director',
  'Teacher',
  'Trustee / School Owner',
  'Other',
];

export default function Conversion() {
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    // Honeypot check
    if (e.target.website.value) return;

    setLoading(true);
    const data = new FormData(e.target);

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
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
    <section id="demo" className="section">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <p className="label">Get Started</p>
            <h2 className={styles.heading}>
              Bring conversational assessment to your school.
            </h2>
            <p className={styles.subtext}>
              We&apos;ll walk you through Proctors using your school&apos;s
              actual board and curriculum. No setup required.
            </p>

            <div className={styles.loginPrompt}>
              Already using Proctors?{' '}
              <a
                href="https://app.proctors.in"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.loginLink}
              >
                Sign in to your school account →
              </a>
            </div>
          </div>

          <div className={styles.formWrap}>
            {status === 'success' ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3>Thank you.</h3>
                <p>
                  We&apos;ll reach out within one business day to schedule your
                  school demo.
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

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={styles.input}
                      placeholder="Your name"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="school" className={styles.label}>School Name *</label>
                    <input
                      id="school"
                      name="school"
                      type="text"
                      required
                      className={styles.input}
                      placeholder="School name"
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="city" className={styles.label}>City *</label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      className={styles.input}
                      placeholder="City"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="role" className={styles.label}>Your Role *</label>
                    <select id="role" name="role" required className={styles.input}>
                      <option value="">Select role</option>
                      {roles.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>Work Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={styles.input}
                    placeholder="you@school.edu"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="phone" className={styles.label}>Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={styles.input}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className={styles.consent}>
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className={styles.checkbox}
                  />
                  <label htmlFor="consent" className={styles.consentLabel}>
                    I agree to Proctors&apos; Privacy Policy and consent to being contacted about this request.
                  </label>
                </div>

                {status === 'error' && (
                  <p className={styles.errorMsg}>
                    Something went wrong. Please email us at{' '}
                    <a href="mailto:hello@proctors.in">hello@proctors.in</a>
                  </p>
                )}

                <button
                  type="submit"
                  className={`btn btn--primary ${styles.submit}`}
                  disabled={loading}
                >
                  {loading ? 'Sending…' : 'Request a School Demo →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
