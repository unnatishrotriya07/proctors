import styles from "./Problem.module.css";

const GAPS = [
  "How they reasoned",
  "Where they lost confidence",
  "Whether they can explain an idea",
  "What misconception shaped their answer",
  "What support a teacher should provide next",
];

const STEPS = [
  {
    description: "What the student selected — a mark, not the thinking.",
    tag: "Today",
    title: "Answer sheet",
  },
  {
    description: "Students explain their thinking in natural language.",
    tag: "With Proctors",
    title: "Conversation",
  },
  {
    description: "Patterns, misconceptions and next steps for teachers.",
    tag: "For teachers",
    title: "Actionable insight",
  },
];

export default function Problem() {
  return (
    <section className="section" id="problem">
      <div className="container">
        <div className={`section-head ${styles.head}`}>
          <p className="label label--accent">The problem</p>
          <h2>Assessment should reveal more than a score.</h2>
          <p>
            Conventional assessments show what a student selected — but not how
            they think. Teachers are left guessing about:
          </p>
        </div>
        <ul className={styles.gaps}>
          {GAPS.map((gap, i) => (
            <li
              className={`glass-panel reveal ${styles.gap}`}
              key={gap}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span aria-hidden="true" className={styles.gapMark}>
                ?
              </span>
              {gap}
            </li>
          ))}
        </ul>
        <ol aria-label="From answer sheet to insight" className={styles.flow}>
          {STEPS.map((step, i) => (
            <li className={styles.flowStep} key={step.title}>
              <div className={`glass-panel reveal ${styles.flowCard}`}>
                <p className={styles.flowTag}>{step.tag}</p>
                <h3 className={styles.flowTitle}>{step.title}</h3>
                <p className={styles.flowDesc}>{step.description}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span aria-hidden="true" className={styles.connector} />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
