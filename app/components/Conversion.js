"use client";
import { useState } from "react";
import styles from "./Conversion.module.css";

const roles = [
  "Principal",
  "Academic Director",
  "Teacher",
  "Trustee / School Owner",
  "Other",
];

export default function Conversion() {
  const [status, setStatus] = useState("idle"); // idle | success | error
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    // Honeypot check
    if (e.target.website.value) {
      return;
    }

    setLoading(true);
    const data = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        body: data,
        headers: { Accept: "application/json" },
        method: "POST",
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section" id="demo">
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
              Already using Proctors?{" "}
              <a
                className={styles.loginLink}
                href="https://app.proctors.in"
                rel="noopener noreferrer"
                target="_blank"
              >
                Sign in to your school account →
              </a>
            </div>
          </div>

          <div className={styles.formWrap}>
            {status === "success" ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3>Thank you.</h3>
                <p>
                  We&apos;ll reach out within one business day to schedule your
                  school demo.
                </p>
              </div>
            ) : (
              <form className={styles.form} noValidate onSubmit={handleSubmit}>
                {/* Honeypot */}
                <input
                  aria-hidden="true"
                  name="website"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  type="text"
                />

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      className={styles.input}
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      type="text"
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="school">
                      School Name *
                    </label>
                    <input
                      className={styles.input}
                      id="school"
                      name="school"
                      placeholder="School name"
                      required
                      type="text"
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="city">
                      City *
                    </label>
                    <input
                      className={styles.input}
                      id="city"
                      name="city"
                      placeholder="City"
                      required
                      type="text"
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="role">
                      Your Role *
                    </label>
                    <select
                      className={styles.input}
                      id="role"
                      name="role"
                      required
                    >
                      <option value="">Select role</option>
                      {roles.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">
                    Work Email *
                  </label>
                  <input
                    className={styles.input}
                    id="email"
                    name="email"
                    placeholder="you@school.edu"
                    required
                    type="email"
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className={styles.input}
                    id="phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    type="tel"
                  />
                </div>

                <div className={styles.consent}>
                  <input
                    className={styles.checkbox}
                    id="consent"
                    name="consent"
                    required
                    type="checkbox"
                  />
                  <label className={styles.consentLabel} htmlFor="consent">
                    I agree to Proctors&apos; Privacy Policy and consent to
                    being contacted about this request.
                  </label>
                </div>

                {status === "error" && (
                  <p className={styles.errorMsg}>
                    Something went wrong. Please email us at{" "}
                    <a href="mailto:hello@proctors.in">hello@proctors.in</a>
                  </p>
                )}

                <button
                  className={`btn btn--primary ${styles.submit}`}
                  disabled={loading}
                  type="submit"
                >
                  {loading ? "Sending…" : "Request a School Demo →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
