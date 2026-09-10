import GlassCard from "@/components/ui/GlassCard";
import styles from "./BuiltFor.module.css";

const audiences = [
  {
    body: "HPC-aligned evidence — communication, reasoning, understanding — for every student, every chapter, generated instead of hand-noted.",
    role: "For Schools",
    tag: "Leadership & Compliance",
    title: "See what your board already expects.",
  },
  {
    body: "Every student gets a diagnostic exchange, and you get a report worth reading the same week — not more grading to add to your evening.",
    role: "For Teachers",
    tag: "Classroom & Diagnostics",
    title: "Thirty conversations you never have time for.",
  },
  {
    body: "One question, one thoughtful follow-up, no clock running. It feels like a conversation, because it is one.",
    role: "For Students",
    tag: "Experience & Learning",
    title: "It feels like being asked, not tested.",
  },
];

export default function BuiltFor() {
  return (
    <section className="section" id="for-schools">
      <div className="container">
        <div className={styles.header}>
          <p className="label label--accent">Built For</p>
          <h2 className={styles.heading}>
            Clarity for leadership. Time for teachers. Encouragement for
            students.
          </h2>
        </div>

        <div className={styles.grid}>
          {audiences.map((item) => (
            <GlassCard className={styles.card} key={item.role}>
              <div className={styles.cardTop}>
                <span className="badge badge--blue">{item.role}</span>
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
              {item.outcome && (
                <p className={styles.outcome}>→ {item.outcome}</p>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
