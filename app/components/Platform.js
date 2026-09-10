import styles from "./Platform.module.css";

const STAGES = [
  {
    description:
      "Import curriculum, configure grade and subject, define learning outcomes.",
    step: "01",
    title: "Prepare",
  },
  {
    description:
      "AI conducts a one-on-one assessment. Students explain their thinking in natural language while follow-ups adapt to each response.",
    step: "02",
    title: "Converse",
  },
  {
    description:
      "Proctors identifies patterns and misconceptions, mapped to curriculum outcomes — teachers see evidence, not just scores.",
    step: "03",
    title: "Understand",
  },
  {
    description:
      "Generate HPC-ready reports, identify next steps for each learner, and use insights in classroom planning.",
    step: "04",
    title: "Act",
  },
];

export default function Platform() {
  return (
    <section className="section section--alt" id="how-it-works">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="label label--accent">Platform</p>
          <h2>A complete assessment loop, designed around the classroom.</h2>
          <p>
            Four connected stages take your curriculum from configuration to
            classroom action — in the same week.
          </p>
        </div>
        <ol className={styles.stages}>
          {STAGES.map((stage, i) => (
            <li
              className={`glass-panel reveal ${styles.stage}`}
              key={stage.step}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span aria-hidden="true" className={styles.step}>
                {stage.step}
              </span>
              <h3 className={styles.title}>{stage.title}</h3>
              <p className={styles.desc}>{stage.description}</p>
              {i < STAGES.length - 1 && (
                <span aria-hidden="true" className={styles.link} />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
