import styles from './Shift.module.css';

const traditional = [
  { label: 'Method', value: 'Question → Answer → Score' },
  { label: 'What is tested', value: 'Recall & memorisation' },
  { label: 'Output', value: 'A number or grade' },
  { label: 'Misconceptions', value: 'Remain hidden' },
  { label: 'Teacher effort', value: 'Manual grading of answers' },
];

const proctors = [
  { label: 'Method', value: 'Question → Dialogue → Insight' },
  { label: 'What is tested', value: 'Reasoning & understanding' },
  { label: 'Output', value: 'Diagnostic clarity' },
  { label: 'Misconceptions', value: 'Surfaced and named precisely' },
  { label: 'Teacher effort', value: 'Review AI-generated diagnostics' },
];

export default function Shift() {
  return (
    <section id="difference" className="section">
      <div className="container">
        <div className={styles.header}>
          <p className="label">The Difference</p>
          <h2 className={styles.heading}>Beyond right or wrong.</h2>
          <p className={styles.subtext}>
            A score tells you <em>what</em> a student got wrong. Proctors tells
            you <em>why</em> — and exactly where their understanding breaks down.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Traditional */}
          <div className={`${styles.col} ${styles.colTraditional}`}>
            <div className={styles.colHeader}>
              <div className={styles.colBadge + ' ' + styles.colBadgeGrey}>
                Traditional Assessment
              </div>
            </div>
            <ul className={styles.rows}>
              {traditional.map((row) => (
                <li key={row.label} className={styles.row}>
                  <span className={styles.rowLabel}>{row.label}</span>
                  <span className={styles.rowValue}>{row.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className={styles.divider} aria-hidden="true">
            <div className={styles.dividerLine} />
            <div className={styles.dividerIcon}>vs</div>
            <div className={styles.dividerLine} />
          </div>

          {/* Proctors */}
          <div className={`${styles.col} ${styles.colProctors}`}>
            <div className={styles.colHeader}>
              <div className={styles.colBadge + ' ' + styles.colBadgeBlue}>
                <span className={styles.colDot} />
                Proctors
              </div>
            </div>
            <ul className={styles.rows}>
              {proctors.map((row) => (
                <li key={row.label} className={`${styles.row} ${styles.rowHighlight}`}>
                  <span className={styles.rowLabel}>{row.label}</span>
                  <span className={styles.rowValue}>{row.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Flow diagram */}
        <div className={styles.flow}>
          {['Student learns curriculum', 'Proctors assesses understanding', 'Student explains & responds', 'proctor evaluates reasoning', 'Teacher receives diagnostic insight'].map(
            (step, i, arr) => (
              <div key={step} className={styles.flowItem}>
                <div className={styles.flowStep}>
                  <div className={styles.flowNum}>{String(i + 1).padStart(2, '0')}</div>
                  <p className={styles.flowLabel}>{step}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className={styles.flowArrow} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M11 5l5 5-5 5" stroke="var(--border-strong)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
