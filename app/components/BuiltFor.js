"use client";
import { ArrowRight, Layers } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import styles from "./BuiltFor.module.css";

const audiences = [
  {
    body: "Proctors gives principals and academic heads HPC-aligned evidence of communication, reasoning, and understanding — for every student, every chapter — auto-generated instead of hand-noted. Use it to demonstrate competency-based assessment compliance at board inspections, parent meetings, and academic reviews.",
    bullets: [
      "HPC-ready reports, auto-generated from assessment data",
      "School-wide and class-level insight dashboard",
      "Audit trail for every evaluated assessment",
    ],
    role: "For School Leadership",
    subtitle:
      "See what your board already expects — without adding manual documentation work.",
  },
  {
    body: "A teacher creates an assessment in under two minutes. Proctor runs it for every student. The teacher receives per-student insight reports — what each student understood, where gaps exist, and how their communication compares — without a single extra paper to grade.",
    bullets: [
      "Assessment assignment in < 2 minutes",
      "Per-student reports in the same week",
      "Human review override for flagged assessments",
      "No additional grading workload",
    ],
    role: "For Teachers",
    subtitle:
      "Thirty diagnostic conversations you never have time to hold — turned into a report worth reading.",
  },
  {
    body: "One question, one follow-up, no clock running. A student thinks out loud, explains what they know in their own words, and is never penalised for a wrong answer mid-explanation. For students who rarely get called on in a classroom of forty, this is often the first time someone has asked them to explain something — and actually waited to hear the answer.",
    bullets: [
      "Voice or text — student's choice",
      "Works on any device, no app required",
      "Low-stakes, conversational format",
      "Built around the chapter they already know",
    ],
    role: "For Students",
    subtitle: "It feels like being asked — not tested.",
  },
];

export default function BuiltFor() {
  return (
    <section className="section" id="for-schools">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.labelRow}>
            <p className="label label--accent">Built For</p>
            <span className={styles.mobileStackHint}>
              <Layers className="h-3 w-3" />
              <span>Stacking deck</span>
            </span>
          </div>
          <h2 className={styles.heading}>
            Clarity for leadership. Time for teachers. Confidence for students.
          </h2>
        </div>

        <div className={styles.grid}>
          {audiences.map((item, index) => (
            <div
              className={styles.cardStackWrapper}
              key={item.role}
              style={{ "--card-index": index }}
            >
              <GlassCard className={styles.card}>
                <div className={styles.cardTop}>
                  <span className="badge badge--blue">{item.role}</span>
                  <span className={styles.stackIndex}>0{index + 1}</span>
                </div>
                <h3 className={styles.title}>{item.subtitle}</h3>
                <p className={styles.body}>{item.body}</p>

                <ul className={styles.bulletsList}>
                  {item.bullets.map((b) => (
                    <li className={styles.bulletItem} key={b}>
                      <ArrowRight className={styles.bulletArrow} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
