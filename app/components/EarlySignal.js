import styles from "./EarlySignal.module.css";

// Gated per spec §7.9 + §14: set to true only when real, approved school
// quotes and pilot metrics exist. Never ship fabricated quotes/percentages.
export const SHOW_SOCIAL_PROOF = false;

const TRUST_BADGES = [
  "🏛 NEP 2020 Aligned",
  "📋 PARAKH / HPC Ready",
  "🔒 Student Data Privacy — DPDP Act",
  "🧠 Powered by AI",
  "🇮🇳 Built for Indian Schools",
];

export default function EarlySignal() {
  if (!SHOW_SOCIAL_PROOF) {
    return null;
  }
  return (
    <section className="section" id="early-signal">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="label label--accent">Early Signal</p>
          <h2>Built with schools. Validated in classrooms.</h2>
        </div>
        <div className={styles.grid}>
          <figure className={`glass-panel ${styles.quote}`}>
            <blockquote>
              “Proctor asked our students questions we hadn&apos;t thought to
              ask in class. The reports showed us gaps we&apos;d missed
              entirely.”
            </blockquote>
            <figcaption>
              — Academic Head, [School Name], [City] — placeholder, do not ship
              without a real, approved quote
            </figcaption>
          </figure>
          <div className={`glass-panel ${styles.data}`}>
            <p>
              “In [X]% of assessments, students who scored identically on the
              written test showed measurably different conceptual depth when
              asked to explain.” — placeholder, requires real pilot data before
              launch
            </p>
          </div>
        </div>
        <ul className={styles.badges}>
          {TRUST_BADGES.map((b) => (
            <li className="badge badge--slate" key={b}>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
