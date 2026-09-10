"use client";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import styles from "./RequestPilot.module.css";

const INCLUDED = [
  "Full platform access for one subject and grade band",
  "AI-generated assessments from your existing curriculum",
  "Per-student insight reports for your teaching team",
  "Direct access to the founding team for feedback and support",
];

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
      _subject: "New Pilot Application — Proctors",
      _template: "table",
      assessmentMethod: form.assessmentMethod.value,
      email: form.email.value,
      name: form.name.value,
      phone: form.phone.value,
      role: form.role.value,
      school: form.school.value,
      state: form.state.value,
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
    <section className="section" id="pilot">
      <div className="container">
        <div className={`glass-panel reveal ${styles.panel}`}>
          <div aria-hidden="true" className={styles.glow} />
          <div className={styles.grid}>
            <div className={styles.copy}>
              <p className="label label--accent">Free Pilot</p>
              <h2 className={styles.heading}>
                See Proctor with your school&apos;s own curriculum.
              </h2>
              <p className={styles.lede}>
                We&apos;re running a structured free pilot with a small cohort
                of design-partner schools. Pilot schools receive full platform
                access, hands-on onboarding support, and first-mover pricing
                when the paid phase begins.
              </p>
              <ul className={styles.ticks}>
                {INCLUDED.map((item) => (
                  <li key={item}>{item}</li>
                ))}
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
                    We&apos;ve received your pilot application and will reach
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
                    <label className="field-label" htmlFor="pilot-school">
                      School Name
                    </label>
                    <input
                      className="field-input"
                      id="pilot-school"
                      name="school"
                      placeholder="School name and city"
                      required
                      type="text"
                    />
                  </div>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className="field-label" htmlFor="pilot-name">
                        Your Name
                      </label>
                      <input
                        className="field-input"
                        id="pilot-name"
                        name="name"
                        placeholder="Your full name"
                        required
                        type="text"
                      />
                    </div>
                    <div className={styles.field}>
                      <label className="field-label" htmlFor="pilot-role">
                        Role
                      </label>
                      <input
                        className="field-input"
                        id="pilot-role"
                        name="role"
                        placeholder="Principal, Coordinator, Teacher…"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className="field-label" htmlFor="pilot-email">
                        Email
                      </label>
                      <input
                        className="field-input"
                        id="pilot-email"
                        name="email"
                        placeholder="you@school.edu"
                        required
                        type="email"
                      />
                    </div>
                    <div className={styles.field}>
                      <label className="field-label" htmlFor="pilot-phone">
                        Phone
                      </label>
                      <input
                        className="field-input"
                        id="pilot-phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className="field-label" htmlFor="pilot-state">
                        State
                      </label>
                      <input
                        className="field-input"
                        id="pilot-state"
                        name="state"
                        placeholder="e.g. Maharashtra"
                        type="text"
                      />
                    </div>
                    <div className={styles.field}>
                      <label className="field-label" htmlFor="pilot-assessment">
                        Current Assessment Method
                      </label>
                      <input
                        className="field-input"
                        id="pilot-assessment"
                        name="assessmentMethod"
                        placeholder="Written tests, worksheets…"
                        type="text"
                      />
                    </div>
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
                    {loading ? "Submitting…" : "Apply for the Free Pilot →"}
                  </button>
                  <p className={styles.privacy}>
                    We don&apos;t share your data with anyone. Student records
                    stay with your school.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
