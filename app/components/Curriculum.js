import styles from "./Curriculum.module.css";

const CARDS = [
  {
    description:
      "Assessments are built from the chapters and concepts your school already teaches — nothing extra to study.",
    title: "Your curriculum",
  },
  {
    description:
      "Every response is mapped to defined learning outcomes, so evidence stays structured and comparable.",
    title: "Learning outcomes",
  },
  {
    description:
      "Conversation evidence rolls up into HPC-ready insight reports that reflect how each student learns.",
    title: "NEP 2020 and HPC-ready insight",
  },
];

export default function Curriculum() {
  return (
    <section className="section section--alt" id="curriculum">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="label label--accent">Curriculum &amp; NEP 2020</p>
          <h2>
            Grounded in your curriculum. Ready for the way schools report
            learning.
          </h2>
          <p>
            Proctors is not a generic chatbot. Every assessment is grounded in
            your academic framework and supports broader learning evidence.
          </p>
        </div>
        <div className={styles.cards}>
          {CARDS.map((card, i) => (
            <div
              className={`glass-panel reveal ${styles.card}`}
              key={card.title}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span aria-hidden="true" className={styles.node} />
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.desc}>{card.description}</p>
            </div>
          ))}
        </div>
        <p className={styles.note}>
          Wording on alignment and reporting reflects current product capability
          — ask us for specifics on a walkthrough.
        </p>
      </div>
    </section>
  );
}
