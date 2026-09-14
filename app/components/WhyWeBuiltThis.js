import GlassCard from "@/components/ui/GlassCard";
import styles from "./WhyWeBuiltThis.module.css";

export default function WhyWeBuiltThis() {
  return (
    <section className="section" id="why-we-built-this">
      <div className="container">
        <div className={styles.wrapper}>
          <p className="label label--accent">Why We Built This</p>
          <h2 className={styles.heading}>
            Curriculum is already the opportunity. We just wanted to use more of
            it.
          </h2>
          <GlassCard className={styles.contentBox} hoverEffect={false}>
            <p className={styles.paragraph}>
              Every student in India studies a curriculum built to teach them to
              think, reason, and communicate — not only to recall. Most
              assessment doesn&apos;t get to measure that part, not because it
              isn&apos;t important, but because there has never been a scalable
              way to have that conversation with every student.
            </p>
            <p className={styles.paragraph}>
              We built Proctors because we believe that gap is closeable, using
              the curriculum a school already teaches, without turning learning
              into one more app for a student to open. We&apos;re early.
              We&apos;re working with a small number of schools first, on
              purpose, because we&apos;d rather earn this claim with evidence
              than make it before we have any.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
