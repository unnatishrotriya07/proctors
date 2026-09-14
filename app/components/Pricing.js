import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section className="section section--alt" id="pricing">
      <div className="container">
        <div className={`glass-panel reveal ${styles.card}`}>
          <p className="label label--accent">Pricing</p>
          <h2 className={styles.heading}>Founding-cohort pricing.</h2>
          <p className={styles.body}>
            Proctors is onboarding a founding cohort of design-partner schools
            on a structured free pilot. Pilot schools get full platform access,
            hands-on onboarding, and first-mover pricing when the paid phase
            begins. Full pricing details coming soon — apply for the pilot to
            lock in founding terms.
          </p>
          <a className="btn btn--primary" href="#pilot">
            Apply for the Free Pilot →
          </a>
        </div>
      </div>
    </section>
  );
}
