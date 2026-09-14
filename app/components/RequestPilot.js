"use client";
import { AlertCircle, Check, CheckCircle2, Lock } from "lucide-react";
import { useState } from "react";
import LiquidGlass from "@/components/ui/LiquidGlass";
import styles from "./RequestPilot.module.css";

const pilotPerks = [
  "Full platform access for one subject and grade band",
  "AI-generated assessments from your existing curriculum",
  "Per-student insight reports for your teaching team",
  "Direct access to the founding team for feedback and support",
];

export default function RequestPilot() {
  const [status, setStatus] = useState("idle"); // idle | success | error
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    // Honeypot check
    if (e.target.website?.value) {
      return;
    }

    setLoading(true);
    setStatus("idle");

    const form = e.target;
    const payload = {
      _captcha: "false",
      _replyto: form.email.value,
      // FormSubmit hidden config fields
      _subject: "New Free Pilot Application — Proctors",
      _template: "table",
      assessmentMethod: form.assessmentMethod.value,
      email: form.email.value,
      name: form.name.value,
      phone: form.phone.value,
      role: form.role.value,
      schoolName: form.schoolName.value,
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
    <section
      className={`section section--alt ${styles.section}`}
      id="request-pilot"
    >
      {/* Anchor for pilot navigation */}
      <span aria-hidden="true" className={styles.anchorOffset} id="pilot" />
      <div className="container">
        <div className={styles.wrapper}>
          <LiquidGlass
            className={styles.glassContainer}
            hoverable={false}
            variant="elevated"
          >
            <div className={styles.layoutGrid}>
              {/* Left Column: Offer Details & Pilot Scope */}
              <div className={styles.infoCol}>
                <h2 className={styles.title}>
                  See Proctor with your school&apos;s own curriculum.
                </h2>
                <p className={styles.desc}>
                  We&apos;re running a structured free pilot with a small cohort
                  of design-partner schools. Pilot schools receive full platform
                  access, hands-on onboarding support, and first-mover pricing
                  when the paid phase begins.
                </p>

                <div className={styles.perksSection}>
                  <p className={styles.perksHeading}>
                    What the pilot includes:
                  </p>
                  <ul className={styles.perksList}>
                    {pilotPerks.map((perk) => (
                      <li className={styles.perkItem} key={perk}>
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
                  <span>
                    We don&apos;t share your data with anyone. Student records
                    stay with your school.
                  </span>
                </div>
              </div>

              {/* Right Column: Application Form */}
              <div className={styles.formCol}>
                {status === "success" ? (
                  <div className={styles.success}>
                    <div className={styles.successIcon}>
                      <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                    </div>
                    <h3 className={styles.successTitle}>
                      Application Received
                    </h3>
                    <p className={styles.successText}>
                      Thank you for applying. We will review your school&apos;s
                      curriculum context and reach out within 1 business day to
                      set up your pilot onboarding.
                    </p>
                  </div>
                ) : (
                  <form
                    className={styles.form}
                    noValidate
                    onSubmit={handleSubmit}
                  >
                    {/* Honeypot */}
                    <input
                      aria-hidden="true"
                      name="website"
                      style={{ display: "none" }}
                      tabIndex={-1}
                      type="text"
                    />

                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="pilot-school">
                        School Name
                      </label>
                      <input
                        className={styles.input}
                        id="pilot-school"
                        name="schoolName"
                        placeholder="e.g. Delhi Public School, R.K. Puram"
                        required
                        type="text"
                      />
                    </div>

                    <div className={styles.twoCol}>
                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="pilot-name">
                          Your Name
                        </label>
                        <input
                          className={styles.input}
                          id="pilot-name"
                          name="name"
                          placeholder="Dr. / Mr. / Ms. Name"
                          required
                          type="text"
                        />
                      </div>

                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="pilot-role">
                          Role
                        </label>
                        <input
                          className={styles.input}
                          id="pilot-role"
                          name="role"
                          placeholder="Principal / Academic Head"
                          required
                          type="text"
                        />
                      </div>
                    </div>

                    <div className={styles.twoCol}>
                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="pilot-email">
                          Email
                        </label>
                        <input
                          className={styles.input}
                          id="pilot-email"
                          name="email"
                          placeholder="name@school.edu.in"
                          required
                          type="email"
                        />
                      </div>

                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="pilot-phone">
                          Phone
                        </label>
                        <input
                          className={styles.input}
                          id="pilot-phone"
                          name="phone"
                          placeholder="+91 98765 43210"
                          required
                          type="tel"
                        />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="pilot-state">
                        State
                      </label>
                      <input
                        className={styles.input}
                        id="pilot-state"
                        name="state"
                        placeholder="e.g. Delhi, Maharashtra, Karnataka"
                        required
                        type="text"
                      />
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="pilot-method">
                        Current Assessment Method
                      </label>
                      <input
                        className={styles.input}
                        id="pilot-method"
                        name="assessmentMethod"
                        placeholder="e.g. Written unit tests, worksheets, standard exams"
                        required
                        type="text"
                      />
                    </div>

                    {status === "error" && (
                      <div className={styles.errorBanner}>
                        <AlertCircle className={styles.errorIcon} />
                        <span>
                          Something went wrong. Please try again or email us
                          directly at hello@proctors.in
                        </span>
                      </div>
                    )}

                    <button
                      className={`btn btn--primary ${styles.submitBtn}`}
                      disabled={loading}
                      type="submit"
                    >
                      {loading
                        ? "Submitting Application…"
                        : "Apply for the Free Pilot →"}
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
