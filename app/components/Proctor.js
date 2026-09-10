"use client";
import styles from "./Proctor.module.css";
import RobotDisplay from "./RobotDisplay";

export default function Proctor() {
  return (
    <section className="section section--alt" id="proctor">
      <div className="container">
        {/* Top: 2-Column Introduction (Left: Editorial / Value Pillars, Right: 3D Robot) */}
        <div className={styles.introGrid}>
          <div className={styles.introContent}>
            <p className="label label--accent">Meet Proctor</p>
            <h2 className={styles.heading}>
              The diagnostic companion that{" "}
              <em className={styles.headingItalic}>
                listens before it scores.
              </em>
            </h2>
            <p className={styles.subtext}>
              Proctor offers every student in your classroom a patient, focused,
              one-on-one academic dialogue, grounded in the very chapter they
              are already studying.
            </p>

            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <span className={styles.pillarNum}>01</span>
                <div>
                  <h3 className={styles.pillarTitle}>Curriculum-Anchored</h3>
                  <p className={styles.pillarDesc}>
                    Every question is drawn directly from your school&apos;s
                    syllabus and its CBSE/state board chapters.
                  </p>
                </div>
              </div>

              <div className={styles.pillar}>
                <span className={styles.pillarNum}>02</span>
                <div>
                  <h3 className={styles.pillarTitle}>Adaptive Follow-Up</h3>
                  <p className={styles.pillarDesc}>
                    Listens to a student&apos;s explanation and asks the one
                    follow-up that distinguishes recall from real understanding.
                  </p>
                </div>
              </div>

              <div className={styles.pillar}>
                <span className={styles.pillarNum}>03</span>
                <div>
                  <h3 className={styles.pillarTitle}>
                    Encouraging, Not a Test
                  </h3>
                  <p className={styles.pillarDesc}>
                    A low-stakes conversational format where students think out
                    loud without exam pressure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.robotWrapper}>
            <RobotDisplay />
          </div>
        </div>
      </div>
    </section>
  );
}
