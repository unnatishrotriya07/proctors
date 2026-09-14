"use client";
import { TrendingUp } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import styles from "./WhyNow.module.css";

const badges = [
  "NEP 2020",
  "PARAKH",
  "Holistic Progress Card",
  "CBSE & State Board Aligned",
  "Competency-Based Assessment",
];

export default function WhyNow() {
  return (
    <section className="section section--alt" id="why-now">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <p className="label label--accent">Why Now</p>
            <h2 className={styles.heading}>
              NEP 2020 required a different kind of evidence. PARAKH made it
              official.
            </h2>
          </div>

          <GlassCard className={styles.body} hoverEffect={false}>
            <p>
              NEP 2020 asked schools to move beyond marks — to assess
              communication, reasoning, and conceptual understanding as part of
              a student’s formal record. PARAKH and the Holistic Progress Card
              turned that expectation into a compliance requirement.
            </p>
            <p>
              Most schools are meeting it today with paper logs, teacher notes,
              and manually filled forms — kept by hand, every class, every term.
              That approach does not scale, and boards know it.
            </p>
            <p>
              Proctors gives schools a way to produce that evidence
              automatically — grounded in the curriculum they already teach,
              formatted for the documentation boards already require.
            </p>

            <div className={styles.statCallout}>
              <div className={styles.statIconWrap}>
                <TrendingUp className={styles.statIcon} />
              </div>
              <div className={styles.statText}>
                <p className={styles.statMain}>
                  50% of Class 10 and 12 CBSE board questions are now
                  competency-based.
                </p>
                <p className={styles.statSub}>
                  The schools that produce competency evidence now will not be
                  caught scrambling later.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard
            className={styles.referenceStrip}
            hoverEffect={false}
            variant="pill"
          >
            {badges.map((b) => (
              <div className={styles.badgeItem} key={b}>
                <span className={styles.badgeDot}>•</span>
                <span className={styles.badgeText}>{b}</span>
              </div>
            ))}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
