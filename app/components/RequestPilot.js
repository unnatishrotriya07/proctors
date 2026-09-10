"use client";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import styles from "./RequestPilot.module.css";

export default function RequestPilot() {
  const [status, setStatus] = useState("idle");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (e.target.website?.value) {
      return;
    }

    setLoading(true);
    setStatus("idle");

    const form = e.target;
    const payload = {
      _captcha: "false",
      _replyto: form.email.value,
      _subject: "New Walkthrough Request — Proctors",
      _template: "table",
      email: form.email.value,
      message: form.message.value,
      name: form.name.value,
      phone: form.phone.value,
      school: form.school?.value ?? "",
    };

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/unnatishrotriya@proctors.in",
        {
          body: JSON.stringify(payload),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      );

      if (res.ok) {
        setStatus("success");
        form.reset();
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
    <section className="section" id="book-walkthrough">
      <div className="container">
        <div className={`glass-panel reveal ${styles.panel}`}>
          <div aria-hidden="true" className={styles.glow} />
          <div className={styles.grid}>
            <div className={styles.copy}>
              <p className="label label--accent">Book a walkthrough</p>
              <h2 className={styles.heading}>
                Make every student visible in the learning journey.
              </h2>
              <p className={styles.lede}>
                See how Proctors can fit into your curriculum, assessment
                calendar, and teacher workflow.
              </p>
              <ul className={styles.ticks}>
                <li>Grounded in your curriculum</li>
                <li>Aligned to NEP 2020, HPC-ready</li>
                <li>Insight teachers can use the same week</li>
              </ul>
            </div>
            <div className={styles.formWrap}>
              {status === "success" ? (
                <div className={styles.success} role="status">
                  <CheckCircle2
                    aria-hidden="true"
                    className={styles.successIcon}
                  />
                  <h3>Thank you.</h3>
                  <p>
                    We&apos;ve received your walkthrough request and will reach
                    out shortly to find a time that suits your school.
                  </p>
                </div>
              ) : (
                <form
                  className={styles.form}
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <input
                    aria-hidden="true"
                    name="website"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    type="text"
                  />
                  <div className={styles.field}>
                    <label className="field-label" htmlFor="walk-name">
                      Name
                    </label>
                    <input
                      className="field-input"
                      id="walk-name"
                      name="name"
                      placeholder="Your full name"
                      required
                      type="text"
                    />
                  </div>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className="field-label" htmlFor="walk-email">
                        Email
                      </label>
                      <input
                        className="field-input"
                        id="walk-email"
                        name="email"
                        placeholder="you@school.edu"
                        required
                        type="email"
                      />
                    </div>
                    <div className={styles.field}>
                      <label className="field-label" htmlFor="walk-phone">
                        Phone
                      </label>
                      <input
                        className="field-input"
                        id="walk-phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className="field-label" htmlFor="walk-school">
                      School
                    </label>
                    <input
                      className="field-input"
                      id="walk-school"
                      name="school"
                      placeholder="School name and city"
                      type="text"
                    />
                  </div>
                  <div className={styles.field}>
                    <label className="field-label" htmlFor="walk-message">
                      Message
                    </label>
                    <textarea
                      className="field-input"
                      id="walk-message"
                      name="message"
                      placeholder="Tell us about your grades, subjects and assessment goals…"
                      rows={3}
                    />
                  </div>
                  {status === "error" && (
                    <div className={styles.errorBanner} role="alert">
                      <AlertCircle
                        aria-hidden="true"
                        className={styles.errorIcon}
                      />
                      <span>
                        Something went wrong. Please try again or email us
                        directly at unnatishrotriya@proctors.in
                      </span>
                    </div>
                  )}
                  <button
                    className={`btn btn--primary ${styles.submit}`}
                    disabled={loading}
                    type="submit"
                  >
                    {loading ? "Submitting…" : "Book a walkthrough"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
