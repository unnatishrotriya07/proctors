import styles from './Difference.module.css';
import GlassCard from '@/components/ui/GlassCard';

export default function Difference() {
  return (
    <section id="difference" className="section">
      <div className="container">
        <div className={styles.header}>
          <p className="label label--accent">The Difference</p>
          <h2 className={styles.heading}>
            Two students can arrive at the same mark by entirely different routes.
          </h2>
          <p className={styles.subtext}>
            A test confirms whether an answer was correct. It rarely reveals whether the student understood why.{' '}
            <br className={styles.desktopBr} />With forty students in a classroom, there is seldom time to find out.{' '}
            <br className={styles.desktopBr} />Proctors makes that time.
          </p>
        </div>

        {/* Two-card comparison */}
        <div className={styles.comparisonWrapper}>
          <div className={styles.grid}>
            {/* Student A */}
            <GlassCard variant="grey" className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.studentBadge}>
                  <span className={styles.studentAvatar}>A</span>
                  <div>
                    <span className={styles.studentName}>Student A</span>
                    <span className={styles.studentTag}>Recall-Driven</span>
                  </div>
                </div>
                <div className={styles.scoreBadge}>Score: 8/10</div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.metricRow}>
                  <span className={styles.metricLabel}>Standard Test</span>
                  <span className={styles.metricValue}>Correct keyword</span>
                </div>
                <div className={styles.metricRow}>
                  <span className={styles.metricLabel}>Probed</span>
                  <span className={styles.metricValueMuted}>Stalls, falls back on a memorised formula</span>
                </div>
                <div className={styles.metricRow}>
                  <span className={styles.metricLabel}>Teacher Insight</span>
                  <span className={styles.tagAlert}>Gap Not Visible</span>
                </div>
              </div>
            </GlassCard>

            {/* Student B */}
            <GlassCard variant="blue" className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.studentBadge}>
                  <span className={`${styles.studentAvatar} ${styles.studentAvatarActive}`}>B</span>
                  <div>
                    <span className={styles.studentName}>Student B</span>
                    <span className={styles.studentTag}>Concept-Driven</span>
                  </div>
                </div>
                <div className={styles.scoreBadge}>Score: 8/10</div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.metricRow}>
                  <span className={styles.metricLabel}>Standard Test</span>
                  <span className={styles.metricValue}>Correct keyword</span>
                </div>
                <div className={styles.metricRow}>
                  <span className={styles.metricLabel}>Probed</span>
                  <span className={styles.metricValueHighlight}>Explains the principle clearly, in their own words</span>
                </div>
                <div className={styles.metricRow}>
                  <span className={styles.metricLabel}>Teacher Insight</span>
                  <span className={styles.tagSuccess}>Conceptual Depth Verified</span>
                </div>
              </div>
            </GlassCard>
          </div>

          <p className={styles.visualCaption}>
            Same score. Different understanding.
            <br />
            <em>Illustrative example.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
