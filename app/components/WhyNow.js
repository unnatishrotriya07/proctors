import styles from "./WhyNow.module.css";

const badges = [
  "NEP 2020",
  "PARAKH Holistic Progress Card",
  "CBSE & State Board Aligned",
  "Competency-Based Assessment",
];

export default function WhyNow() {
  return (
    <section className="section section--alt" id="why-now">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <p className="label label--accent">Why Now</p>
            <h2 className={styles.heading}>
              NEP 2020 required a different kind of evidence. PARAKH made it
              official.
            </h2>
            <div className={`glass-panel ${styles.body}`}>
              <p>
                NEP 2020 asked schools to move beyond marks — to assess
                communication, reasoning, and conceptual understanding as part
                of a student&apos;s formal record. PARAKH and the Holistic
                Progress Card turned that expectation into a compliance
                requirement.
              </p>
              <p>
                Most schools are meeting it today with paper logs, teacher
                notes, and manually filled forms — kept by hand, every class,
                every term. That approach does not scale, and boards know it.
              </p>
              <p className={styles.bodyHighlight}>
                Proctors gives schools a way to produce that evidence
                automatically —{" "}
                <strong>
                  grounded in the curriculum they already teach, formatted for
                  the documentation boards already require.
                </strong>
              </p>
            </div>
          </div>

          <div className={`glass-panel ${styles.statCard}`}>
            <p className={styles.statNumber}>50%</p>
            <p className={styles.statLabel}>
              of Class 10 and 12 CBSE board questions are now competency-based.
              {/* TODO(content): link/footnote verifiable source before launch — do not ship without citation. */}
            </p>
          </div>
          <p className={styles.closing}>
            The schools that produce competency evidence now will not be caught
            scrambling later.
          </p>

          <div className={`glass-panel ${styles.referenceStrip}`}>
            {badges.map((b) => (
              <div className={styles.badgeItem} key={b}>
                <span aria-hidden="true" className={styles.badgeDot}>
                  •
                </span>
                <span className={styles.badgeText}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
