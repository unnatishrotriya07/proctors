import styles from './WhyNow.module.css';
import GlassCard from '@/components/ui/GlassCard';

const badges = [
  'NEP 2020',
  'PARAKH',
  'Holistic Progress Card',
  'CBSE & State Board Aligned',
];

export default function WhyNow() {
  return (
    <section id="why-now" className={`section section--alt`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <p className="label label--accent">Why Now</p>
            <h2 className={styles.heading}>
              Built for what your board is already asking of you.
            </h2>
            <GlassCard hoverEffect={false} className={styles.body}>
              <p>
                NEP 2020 asked schools to assess more than marks.
                PARAKH and the Holistic Progress Card made that expectation formal.
              </p>
              <p>
                Most schools are meeting it with paper logs and a teacher&apos;s notes —
                hand-kept, every class, every term.
              </p>
              <p>
                Proctors doesn&apos;t ask you to change how you teach.
                It gives you a way to show what your students already know.
              </p>
            </GlassCard>
          </div>

          <GlassCard variant="pill" hoverEffect={false} className={styles.referenceStrip}>
            {badges.map((b) => (
              <div key={b} className={styles.badgeItem}>
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
