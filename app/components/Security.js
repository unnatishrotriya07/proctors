import styles from "./Security.module.css";

const ITEMS = [
  {
    description: "Your curriculum and configuration stay under school control.",
    title: "School-controlled setup",
  },
  {
    description:
      "Teachers review generated insights before they reach reports.",
    title: "Human oversight",
  },
  {
    description:
      "Student data is handled with privacy-first practices and secure access.",
    title: "Privacy & secure access",
  },
  {
    description:
      "AI supports teachers — assessment judgment stays with educators.",
    title: "Responsible AI use",
  },
];

export default function Security() {
  return (
    <section className="section" id="trust">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="label label--accent">Trust &amp; responsibility</p>
          <h2>Schools trust us with their students. We act like it.</h2>
          <p>
            A school-facing product needs a visible trust layer — here is how
            Proctors approaches data, oversight and responsibility.
          </p>
        </div>
        <ul className={styles.grid}>
          {ITEMS.map((item, i) => (
            <li
              className={`glass-panel reveal ${styles.item}`}
              key={item.title}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span aria-hidden="true" className={styles.shield}>
                ✓
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
