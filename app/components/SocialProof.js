"use client";
import {
  Award,
  BarChart2,
  Brain,
  FileCheck,
  Flag,
  Quote,
  Shield,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import styles from "./SocialProof.module.css";

const trustBadges = [
  { icon: Award, label: "NEP 2020 Aligned" },
  { icon: FileCheck, label: "PARAKH / HPC Ready" },
  { icon: Shield, label: "Student Data Privacy — DPDP Act" },
  { icon: Brain, label: "Powered by AI" },
  { icon: Flag, label: "Built for Indian Schools" },
];

export default function SocialProof() {
  return (
    <section className="section section--alt" id="trust">
      <div className="container">
        <div className={styles.header}>
          <p className="label label--accent">Early Signal</p>
          <h2 className={styles.heading}>
            Built with schools. Validated in classrooms.
          </h2>
        </div>

        <div className={styles.cardsGrid}>
          {/* Pilot School Quote */}
          <GlassCard className={styles.card} variant="blue">
            <div className={styles.quoteIconWrap}>
              <Quote className={styles.quoteIcon} />
            </div>
            <blockquote className={styles.quoteText}>
              &ldquo;Proctor asked our students questions we hadn&apos;t thought
              to ask in class. The reports showed us gaps we&apos;d missed
              entirely.&rdquo;
            </blockquote>
            <p className={styles.author}>
              — Academic Head, [School Name], [City]
            </p>
          </GlassCard>

          {/* Data Point */}
          <GlassCard className={styles.card} variant="default">
            <div className={styles.dataIconWrap}>
              <BarChart2 className={styles.dataIcon} />
            </div>
            <blockquote className={styles.quoteText}>
              &ldquo;In [X]% of assessments, students who scored identically on
              the written test showed measurably different conceptual depth when
              asked to explain.&rdquo;
            </blockquote>
          </GlassCard>
        </div>

        {/* Trust Logos / Badges Row */}
        <div className={styles.trustBadgesRow}>
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div className={styles.trustBadge} key={badge.label}>
                <Icon className={styles.badgeIcon} />
                <span>{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
