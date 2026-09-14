"use client";
import { BarChart3, FileSpreadsheet, Mic } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import styles from "./PlatformSnapshot.module.css";
import RobotDisplay from "./RobotDisplay";

const highlights = [
  {
    desc: "Voice + text assessment delivered as a one-on-one dialogue — not a quiz, not a form.",
    icon: Mic,
    title: "Conversational AI",
  },
  {
    desc: "Questions auto-generated from your board's chapters, tagged by Bloom's Taxonomy level.",
    icon: FileSpreadsheet,
    title: "NCERT Question Engine",
  },
  {
    desc: "Per-student reports on conceptual depth, communication, and identified gaps — HPC-aligned.",
    icon: BarChart3,
    title: "Insight Reports",
  },
];

export default function PlatformSnapshot() {
  return (
    <section
      className={`section section--alt ${styles.sectionWrapper}`}
      id="product"
    >
      {/* Anchor alias so #proctor continues to work */}
      <span aria-hidden="true" className={styles.anchorOffset} id="proctor" />
      <div className="container">
        {/* Top: 2-Column Product Intro with 3D Robot */}
        <div className={styles.introGrid}>
          <div className={styles.introContent}>
            <p className="label label--accent">What Proctors Is</p>
            <h2 className={styles.heading}>
              A curriculum-native AI assessment platform — built for Indian
              schools, scaled for classrooms of 40.
            </h2>
            <div className={styles.paragraphs}>
              <p>
                Most assessment platforms measure whether a student got an
                answer right. Proctors measures whether a student understood
                why.
              </p>
              <p>
                The platform sits directly on top of the curriculum your school
                already teaches. After a chapter is covered in class, a teacher
                assigns a Proctor assessment. Every student — not just the fast
                ones, not just the ones who raise their hand — gets a private,
                voice-based AI dialogue built around that exact chapter. Proctor
                asks, listens, follows up, and produces a per-student insight
                report the teacher receives the same week.
              </p>
            </div>
          </div>

          <div className={styles.robotWrapper}>
            <RobotDisplay />
          </div>
        </div>

        {/* 3-Column Highlight Row (visual cards) */}
        <div className={styles.highlightGrid}>
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard
                className={styles.highlightCard}
                key={item.title}
                variant="default"
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconCircle}>
                    <Icon className={styles.cardIcon} />
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
