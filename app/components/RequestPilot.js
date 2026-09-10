"use client";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ContactCard } from "@/components/ui/contact-card";
import LiquidGlass from "@/components/ui/LiquidGlass";
import styles from "./RequestPilot.module.css";

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
      _captcha: "false", // Disable redirect captcha for AJAX mode
      _replyto: form.email.value,
      // FormSubmit hidden config fields
      _subject: "New Pilot Request — Proctors",
      _template: "table", // Clean table layout in the email
      email: form.email.value,
      message: form.message.value,
      name: form.name.value,
      phone: form.phone.value,
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
    <section className={"section section--alt"} id="request-pilot">
      <div className="container">
        <div className={styles.wrapper}>
          <LiquidGlass
            className={styles.glassContainer}
            hoverable={false}
            variant="elevated"
          >
            <ContactCard
              className="border-0 bg-transparent shadow-none"
              description="We're running a free beta with a handful of schools right now. Spots are limited — not as a tactic, but because being selective is how we get this right."
              eyebrow="Get Started"
              title="See Proctor with your own curriculum."
            >
              {status === "success" ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold font-heading text-2xl text-slate-900">
                    Thank you.
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We&apos;ve received your pilot request and will reach out
                    shortly to discuss bringing Proctor to your school.
                  </p>
                </div>
              ) : (
                <form
                  className={styles.form}
                  noValidate
                  onSubmit={handleSubmit}
                >
                  {/* Honeypot — hidden from real users */}
                  <input
                    aria-hidden="true"
                    name="website"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    type="text"
                  />

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="pilot-name">
                      Name
                    </label>
                    <input
                      className={styles.input}
                      id="pilot-name"
                      name="name"
                      placeholder="Your full name"
                      required
                      type="text"
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="pilot-email">
                      Email
                    </label>
                    <input
                      className={styles.input}
                      id="pilot-email"
                      name="email"
                      placeholder="you@school.edu"
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
                      type="tel"
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="pilot-message">
                      Message
                    </label>
                    <textarea
                      className={styles.textarea}
                      id="pilot-message"
                      name="message"
                      placeholder="Tell us a little about your school or goals..."
                      rows={3}
                    />
                  </div>

                  {status === "error" && (
                    <div className={styles.errorBanner}>
                      <AlertCircle className={styles.errorIcon} />
                      <span>
                        Something went wrong. Please try again or email us
                        directly at unnatishrotriya@proctors.in
                      </span>
                    </div>
                  )}

                  <button
                    className={`btn btn--primary ${styles.submitBtn}`}
                    disabled={loading}
                    type="submit"
                  >
                    {loading ? "Submitting…" : "Book a Pilot"}
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
