import styles from "./Security.module.css";

const ITEMS = [
  {
    description:
      "Data handling aligned to India's DPDP Act. Student records stay with your school — never sold or shared.",
    title: "Student data privacy",
  },
  {
    description:
      "Your curriculum and configuration stay under school control, with role-based access.",
    title: "School-controlled setup",
  },
  {
    description:
      "Reports below a confidence threshold are flagged for teacher review — judgment stays with educators.",
    title: "Human oversight",
  },
  {
    description:
      "Secure tokenized access and responsible AI use — assessment judgment stays with teachers.",
    title: "Secure access & responsible AI",
  },
];

export default function Security() {
  return (
    <section className="section" id="trust">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="label label--accent">Trust &amp; responsibility</p>
          <h2>Schools trust us with their students. We act like it.</h2>
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
