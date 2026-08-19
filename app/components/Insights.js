import styles from './Insights.module.css';

export default function Insights() {
  return (
    <section id="insights" className="section section--alt">
      <div className="container">
        <div className={styles.header}>
          <p className="label">For Educators & Leadership</p>
          <h2 className={styles.heading}>Diagnostic clarity for every classroom.</h2>
          <p className={styles.subtext}>
            Proctors doesn&apos;t replace teacher judgment — it gives educators
            the information they need to make it well.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left — Teacher value */}
          <div className={styles.value}>
            <div className={styles.valueGroup}>
              <h3 className={styles.valueTitle}>For Teachers</h3>
              <ul className={styles.valueList}>
                <li>Know exactly which concepts students are confused about — by name, not just by score.</li>
                <li>See which students explained clearly versus those who struggled to articulate.</li>
                <li>No manual grading of subjective written or spoken responses.</li>
                <li>Act on targeted gaps instead of re-teaching entire chapters.</li>
              </ul>
            </div>

            <div className={styles.valueGroup}>
              <h3 className={styles.valueTitle}>For Academic Leadership</h3>
              <ul className={styles.valueList}>
                <li>Class-level comprehension trends across chapters and grades.</li>
                <li>Identify learning gaps before they escalate to exams.</li>
                <li>Evidence of learning quality — not just assignment completion rates.</li>
              </ul>
            </div>
          </div>

          {/* Right — Diagnostic report composition */}
          <div className={styles.report}>
            <div className={styles.reportCard}>
              <div className={styles.reportHeader}>
                <div>
                  <p className={styles.reportTitle}>Assessment Report</p>
                  <p className={styles.reportMeta}>Grade 10 · Physics — Laws of Motion · 24 students</p>
                </div>
                <span className="badge badge--blue">Complete</span>
              </div>

              {/* Misconceptions */}
              <div className={styles.reportSection}>
                <p className={styles.sectionLabel}>Top Misconceptions Detected</p>
                <div className={styles.misconceptions}>
                  {[
                    { label: 'Centrifugal vs centripetal force', count: 14, pct: 58 },
                    { label: 'Mass vs weight distinction', count: 9, pct: 37 },
                    { label: 'Newton\'s 3rd Law application', count: 6, pct: 25 },
                  ].map((m) => (
                    <div key={m.label} className={styles.misconceptionRow}>
                      <div className={styles.misconceptionInfo}>
                        <span className={styles.misconceptionLabel}>{m.label}</span>
                        <span className={styles.misconceptionCount}>{m.count} students</span>
                      </div>
                      <div className={styles.barTrack}>
                        <div
                          className={styles.barFill}
                          style={{ width: `${m.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Articulation distribution */}
              <div className={styles.reportSection}>
                <p className={styles.sectionLabel}>Articulation Distribution</p>
                <div className={styles.distribution}>
                  {[
                    { label: 'Structured', pct: 37, color: '#2563eb' },
                    { label: 'Developing', pct: 46, color: '#6366f1' },
                    { label: 'Fragmented', pct: 17, color: '#e2e8f0' },
                  ].map((d) => (
                    <div key={d.label} className={styles.distItem}>
                      <div className={styles.distBar} style={{ background: d.color, height: `${d.pct * 1.4}px` }} />
                      <p className={styles.distLabel}>{d.label}</p>
                      <p className={styles.distPct}>{d.pct}%</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested action */}
              <div className={styles.suggestion}>
                <div className={styles.suggestionIcon}>→</div>
                <p>
                  <strong>Recommended:</strong> Revisit the conceptual distinction between centrifugal and centripetal force in the next class with 14 students who require clarification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
