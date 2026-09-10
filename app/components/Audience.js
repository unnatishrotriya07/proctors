"use client";
import { useState } from "react";
import styles from "./Audience.module.css";

const TABS = [
  {
    id: "leaders",
    label: "For School Leaders",
    points: [
      "Consistent assessment visibility across grades",
      "Curriculum-level insight for academic decisions",
      "Clear implementation without new infrastructure",
      "Better evidence for parent and board conversations",
    ],
    title: "See how learning is progressing, school-wide.",
  },
  {
    id: "teachers",
    label: "For Teachers",
    points: [
      "Less manual interpretation of responses",
      "More useful evidence on each student",
      "Faster intervention planning",
      "Clearer classroom conversations",
    ],
    title: "Start Monday with answers, not spreadsheets.",
  },
  {
    id: "students",
    label: "For Students",
    points: [
      "A more natural assessment experience",
      "Space to explain their thinking",
      "Less pressure from one-shot testing",
      "Feedback that reflects how they learn",
    ],
    title: "Show what you know, in your own words.",
  },
];

export default function Audience() {
  const [active, setActive] = useState(TABS[0].id);
  const current = TABS.find((tab) => tab.id === active) ?? TABS[0];

  return (
    <section className="section section--alt" id="for-schools">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="label label--accent">Who it serves</p>
          <h2>Built for the whole school community.</h2>
          <p>
            Leaders get visibility, teachers get action, students get a fair
            chance to show how they think.
          </p>
        </div>
        <div aria-label="Audience views" className={styles.tabs} role="tablist">
          {TABS.map((tab) => (
            <button
              aria-selected={active === tab.id}
              className={`${styles.tab} ${active === tab.id ? styles.tabActive : ""}`}
              key={tab.id}
              onClick={() => setActive(tab.id)}
              role="tab"
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div
          aria-live="polite"
          className={`glass-panel ${styles.panel}`}
          key={current.id}
          role="tabpanel"
        >
          <h3 className={styles.panelTitle}>{current.title}</h3>
          <ul className={styles.points}>
            {current.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
