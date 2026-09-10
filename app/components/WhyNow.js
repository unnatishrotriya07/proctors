import GlassCard from "@/components/ui/GlassCard";
import styles from "./WhyNow.module.css";

const badges = [
  "NEP 2020",
  "PARAKH",
  "Holistic Progress Card",
  "CBSE & State Board Aligned",
];

export default function WhyNow() {
  return (
    <section className={"section section--alt"} id="why-now">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <p className="label label--accent">Why Now</p>
            <h2 className={styles.heading}>
              Built for what your board is already asking of you.
            </h2>
            <GlassCard className={styles.body} hoverEffect={false}>
              <p>
                <strong>NEP 2020</strong> asked schools to assess more than
                marks. <strong>PARAKH</strong> and the{" "}
                <em className={styles.italicHighlight}>
                  Holistic Progress Card
                </em>{" "}
                made that expectation formal.
              </p>
              <p>
                Most schools are meeting it with paper logs and a teacher&apos;s
                notes —{" "}
                <em className={styles.subtleItalic}>
                  hand-kept, every class, every term.
                </em>
              </p>
              <p className={styles.bodyHighlight}>
                Proctors doesn&apos;t ask you to change how you teach.{" "}
                <strong>
                  It gives you a way to show what your students already know.
                </strong>
              </p>
            </GlassCard>
          </div>

          <GlassCard
            className={styles.referenceStrip}
            hoverEffect={false}
            variant="pill"
          >
            {badges.map((b) => (
              <div className={styles.badgeItem} key={b}>
                <span className={styles.badgeDot}>•</span>
                <span className={styles.badgeText}>{b}</span>
              </div>
            ))}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
