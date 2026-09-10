import styles from "./TeacherInsight.module.css";

const PROFILE = [
  {
    label: "Strengths",
    value: "Explains reasoning clearly; tests ideas against examples.",
  },
  {
    label: "Emerging misconceptions",
    value: "Overgeneralises linear patterns to non-linear series.",
  },
  {
    label: "Communication & reasoning",
    value: "Verbal reasoning strong; written justification developing.",
  },
  {
    label: "Recommended next step",
    value: "Pair with a counter-example task in Friday's class.",
  },
];

const CLASS_PATTERNS = [
  "Pattern overgeneralisation · 8 students",
  "Strong peer explainers · 5 students",
];

export default function TeacherInsight() {
  return (
    <section className="section" id="insight">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className="label label--accent">Teacher insight</p>
            <h2 className={styles.heading}>
              From student conversation to teacher action.
            </h2>
            <p className={styles.lede}>
              Teachers should not have to interpret hundreds of disconnected
              responses. Proctors surfaces the patterns that matter and turns
              them into clear next steps.
            </p>
            <ul className={styles.points}>
              <li>Strengths and misconceptions per student</li>
              <li>Communication and reasoning evidence</li>
              <li>Class-level patterns at a glance</li>
            </ul>
          </div>
          <div className={styles.reportWrap}>
            <div className={`glass-panel reveal ${styles.report}`}>
              <div className={styles.reportHead}>
                <div>
                  <p className={styles.reportKicker}>Learning profile</p>
                  <h3 className={styles.reportName}>
                    Aarav · Grade 7 · Mathematics
                  </h3>
                </div>
                <span className="badge badge--blue">HPC-ready</span>
              </div>
              <dl className={styles.rows}>
                {PROFILE.map((row) => (
                  <div className={styles.row} key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
              <div className={styles.reportFoot}>
                {CLASS_PATTERNS.map((pattern) => (
                  <span className="badge badge--slate" key={pattern}>
                    {pattern}
                  </span>
                ))}
              </div>
            </div>
            <div className={`${styles.floatNote} ${styles.floatA}`}>
              Next step ready for Friday&apos;s class
            </div>
            <div className={`${styles.floatNote} ${styles.floatB}`}>
              Evidence linked to outcome
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
