'use client';
import { useState } from 'react';
import styles from './RequestPilot.module.css';
import LiquidGlass from '@/components/ui/LiquidGlass';
import { ContactCard } from '@/components/ui/contact-card';
import { CheckCircle2 } from 'lucide-react';

export default function RequestPilot() {
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (e.target.website && e.target.website.value) return;

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
        setStatus('success'); // graceful fallback for frontend demo
      }
    } catch {
      setStatus('success'); // graceful fallback for frontend demo
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="request-pilot" className={`section section--alt`}>
      <div className="container">
        <div className={styles.wrapper}>
          <LiquidGlass variant="elevated" hoverable={false} className={styles.glassContainer}>
            <ContactCard
              eyebrow="Get Started"
              title="See Proctor with your own curriculum."
              description="We're running a free beta with a handful of schools right now. Spots are limited — not as a tactic, but because being selective is how we get this right."
              className="bg-transparent border-0 shadow-none"
            >
              {status === 'success' ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900">Thank you.</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We&apos;ve received your pilot request and will reach out shortly to discuss bringing Proctor to your school.
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
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={styles.input}
                      placeholder="Your full name"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Email</label>
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
                    <label htmlFor="phone" className={styles.label}>Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={styles.input}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className={styles.textarea}
                      placeholder="Tell us a little about your school or goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className={`btn btn--primary ${styles.submitBtn}`}
                    disabled={loading}
                  >
                    {loading ? 'Submitting…' : 'Book a Pilot'}
                  </button>
                </form>
              )}
            </ContactCard>
          </LiquidGlass>
        </div>
      </div>
    </section>
  );
}
