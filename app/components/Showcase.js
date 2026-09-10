import styles from "./Showcase.module.css";

const INSIGHTS = [
  { label: "Learning outcome", value: "Pattern recognition" },
  { label: "Confidence", value: "Developing" },
  { label: "Evidence", value: "Explains rule with partial accuracy" },
  {
    label: "Suggested next step",
    value: "Ask the student to test the rule against a new example",
  },
];

export default function Showcase() {
  return (
    <section className="section" id="product">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="label label--accent">Product</p>
          <h2>One conversation becomes evidence.</h2>
          <p>
            Watch how a student&apos;s explanation turns into structured insight
            — live, while the conversation happens.
          </p>
        </div>
        <div className={`glass-panel reveal ${styles.shell}`}>
          <div className={styles.topbar}>
            <div className={styles.subject}>
              <span className={`badge badge--blue ${styles.subjectBadge}`}>
                Mathematics
              </span>
              <span className={styles.grade}>Grade 7 · Number patterns</span>
            </div>
            <span className={styles.status}>
              <span aria-hidden="true" className={styles.statusDot} />
              Assessment in progress
            </span>
          </div>
          <div className={styles.body}>
            <div
              aria-label="Sample assessment conversation"
              className={styles.chat}
              role="log"
            >
              <div className={styles.msgAi}>
                <p className={styles.msgRole}>Proctors</p>
                <p>“Can you explain how you arrived at that answer?”</p>
              </div>
              <div className={styles.msgStudent}>
                <p className={styles.msgRole}>Student</p>
                <p>
                  “I thought the pattern changed because the numbers increased
                  by the same amount.”
                </p>
              </div>
              <div className={styles.msgAi}>
                <p className={styles.msgRole}>Proctors</p>
                <p>
                  “Good start. Can you test that rule against the next number in
                  the series?”
                </p>
              </div>
            </div>
            <aside
              aria-label="Real-time interpretation"
              className={styles.insight}
            >
              <p className={styles.insightTitle}>Real-time interpretation</p>
              <dl className={styles.insightList}>
                {INSIGHTS.map((item) => (
                  <div className={styles.insightRow} key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
          <div className={styles.bottombar}>
            <span className={styles.outcome}>
              Outcome being assessed:
              <strong>
                {" "}
                Pattern recognition · NEP 2020 · Critical thinking
              </strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
