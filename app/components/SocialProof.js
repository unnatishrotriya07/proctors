'use client';
import styles from './SocialProof.module.css';
import GlassCard from '@/components/ui/GlassCard';
import { Quote, BarChart2, Shield, Brain, Flag, Award, FileCheck } from 'lucide-react';

const trustBadges = [
  { icon: Award, label: 'NEP 2020 Aligned' },
  { icon: FileCheck, label: 'PARAKH / HPC Ready' },
  { icon: Shield, label: 'Student Data Privacy — DPDP Act' },
  { icon: Brain, label: 'Powered by AI' },
  { icon: Flag, label: 'Built for Indian Schools' },
];

export default function SocialProof() {
  return (
    <section id="trust" className="section section--alt">
      <div className="container">
        <div className={styles.header}>
          <p className="label label--accent">Early Signal</p>
          <h2 className={styles.heading}>
            Built with schools. Validated in classrooms.
          </h2>
        </div>

        <div className={styles.cardsGrid}>
          {/* Pilot School Quote */}
          <GlassCard variant="blue" className={styles.card}>
            <div className={styles.quoteIconWrap}>
              <Quote className={styles.quoteIcon} />
            </div>
            <blockquote className={styles.quoteText}>
              &ldquo;Proctor asked our students questions we hadn&apos;t thought to ask in class. The reports showed us gaps we&apos;d missed entirely.&rdquo;
            </blockquote>
            <p className={styles.author}>
              — Academic Head, [School Name], [City]
            </p>
          </GlassCard>

          {/* Data Point */}
          <GlassCard variant="default" className={styles.card}>
            <div className={styles.dataIconWrap}>
              <BarChart2 className={styles.dataIcon} />
            </div>
            <blockquote className={styles.quoteText}>
              &ldquo;In [X]% of assessments, students who scored identically on the written test showed measurably different conceptual depth when asked to explain.&rdquo;
            </blockquote>
          </GlassCard>
        </div>

        {/* Trust Logos / Badges Row */}
        <div className={styles.trustBadgesRow} aria-label="Trust and compliance standards">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className={styles.trustBadge}>
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
