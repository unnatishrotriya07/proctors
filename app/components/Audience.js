"use client";
import { useState } from "react";
import styles from "./Audience.module.css";

const TABS = [
  {
    body: "Proctors gives principals and academic heads HPC-aligned evidence of communication, reasoning, and understanding — for every student, every chapter — auto-generated instead of hand-noted. Use it to demonstrate competency-based assessment compliance at board inspections, parent meetings, and academic reviews.",
    id: "leadership",
    label: "For School Leadership",
    points: [
      "HPC-ready reports, auto-generated from assessment data",
      "School-wide and class-level insight dashboard",
      "Audit trail for every evaluated assessment",
    ],
    tagline:
      "See what your board already expects — without adding manual documentation work.",
    title: "Clarity for leadership.",
  },
  {
    body: "A teacher creates an assessment in under two minutes. Proctor runs it for every student. The teacher receives per-student insight reports — what each student understood, where gaps exist, and how their communication compares — without a single extra paper to grade.",
    id: "teachers",
    label: "For Teachers",
    points: [
      "Assessment assignment in < 2 minutes",
      "Per-student reports in the same week",
      "Human review override for flagged assessments",
      "No additional grading workload",
    ],
    tagline:
      "Thirty diagnostic conversations you never have time to hold — turned into a report worth reading.",
    title: "Time for teachers.",
  },
  {
    body: "One question, one follow-up, no clock running. A student thinks out loud, explains what they know in their own words, and is never penalised for a wrong answer mid-explanation. For students who rarely get called on in a classroom of forty, this is often the first time someone has asked them to explain something — and actually waited to hear the answer.",
    id: "students",
    label: "For Students",
    points: [
      "Voice or text — student's choice",
      "Works on any device, no app required",
      "Low-stakes, conversational format",
      "Built around the chapter they already know",
    ],
    tagline: "It feels like being asked — not tested.",
    title: "Confidence for students.",
  },
];

export default function Audience() {
  const [active, setActive] = useState(TABS[0].id);
  const current = TABS.find((tab) => tab.id === active) ?? TABS[0];

  return (
    <section className="section" id="for-schools">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="label label--accent">Built For</p>
          <h2>
            Clarity for leadership. Time for teachers. Confidence for students.
          </h2>
        </div>
        <div aria-label="Audience views" className={styles.tabs} role="tablist">
          {TABS.map((tab) => (
            <button
              aria-selected={active === tab.id}
              className={`${styles.tab} ${active === tab.id ? styles.tabActive : ""}`}
              key={tab.id}
              onClick={() => setActive(tab.id)}
              role="tab"
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div
          aria-live="polite"
          className={`glass-panel ${styles.panel}`}
          key={current.id}
          role="tabpanel"
        >
          <h3 className={styles.panelTitle}>{current.title}</h3>
          <p className={styles.tagline}>{current.tagline}</p>
          <p className={styles.body}>{current.body}</p>
          <ul className={styles.points}>
            {current.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
