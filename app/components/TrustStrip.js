import styles from "./TrustStrip.module.css";

const ITEMS = [
  "Curriculum-grounded",
  "NEP 2020 aligned",
  "HPC-ready reporting",
  "Built for teachers",
  "One-on-one for every student",
];

export default function TrustStrip() {
  return (
    <section aria-label="Proof points" className={styles.strip}>
      <div className="container">
        <ul className={styles.list}>
          {ITEMS.map((item) => (
            <li className={`badge badge--slate ${styles.chip}`} key={item}>
              <span aria-hidden="true" className={styles.dot} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
