import styles from './WhatItIsnt.module.css';
import GlassCard from '@/components/ui/GlassCard';

const items = [
  {
    title: 'Not a school ERP',
    description: 'We don\'t manage fees, attendance, or transport.',
  },
  {
    title: 'Not a general-purpose AI chatbot',
    description: 'Every question Proctor asks has a curriculum purpose behind it.',
  },
  {
    title: 'Not an exam-monitoring tool',
    description: 'Despite the name, this was never built around catching cheating.',
  },
  {
    title: 'Not a personality assessment',
    description: 'Proctors looks at how a student responds to a question — never at who they are.',
  },
];

export default function WhatItIsnt() {
  return (
    <section id="what-it-isnt" className={`section section--alt`}>
      <div className="container">
        <div className={styles.header}>
          <p className="label label--accent">What Proctors Isn&apos;t</p>
          <h2 className={styles.heading}>
            Clear focus. Zero unnecessary complexity.
          </h2>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <GlassCard key={i} className={styles.card}>
              <div className={styles.iconWrap}>
                <span className={styles.crossIcon}>✕</span>
              </div>
              <div className={styles.textWrap}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
