import styles from "./Features.module.css";

const FEATURES = [
  {
    description:
      "Proctor conducts a structured voice or text dialogue with each student — asking one well-chosen question, listening to the response, and following up precisely where it matters. Not a chatbot. Not a quiz. A bounded, curriculum-grounded academic conversation managed by a compiled AI state machine.",
    eyebrow: "Core feature",
    icon: "🎙",
    outcome:
      "Every student gets an experience that feels like being asked, not tested — which is exactly when students think most honestly.",
    title: "Conversational AI Assessment Engine",
  },
  {
    description:
      "The platform ingests NCERT PDFs, parses them by chapter and section, and generates questions mapped to CBSE and state board syllabi — tagged by Bloom's Taxonomy level (recall, application, analysis) and citing the source text.",
    eyebrow: "Content intelligence",
    icon: "📚",
    outcome:
      "Every question Proctor asks is grounded in what your students already studied. No new content to create. No mismatch with what was taught.",
    title: "NCERT & Board-Aligned Question Bank",
  },
  {
    description:
      "A self-hosted speech stack (Kokoro TTS + Whisper STT) handles primary voice interaction, with the browser's native Web Speech API as a fallback when local services are unavailable.",
    eyebrow: "Accessibility and reliability",
    icon: "🗣",
    outcome:
      "Consistent voice assessment across the range of devices and connectivity conditions common in Tier 2/3 schools — with no interruption to a student's session.",
    title: "Dual Speech Engine",
  },
  {
    description:
      "Every assessment transcript runs through an asynchronous pipeline: cleanup, concept mapping, gap detection, and final report compilation — with a four-tier AI fallback chain (Groq → OpenAI → Gemini → deterministic local evaluator) so no evaluation fails because of a provider outage.",
    eyebrow: "Reliability under scale",
    icon: "⚙️",
    outcome:
      "Consistent, reviewable evaluations for every student — even at 300 assessments a week.",
    title: "Automated 11-Step Evaluation Pipeline",
  },
  {
    description:
      "Insight reports surface per-student conceptual gaps, communication quality, and understanding depth — not just a percentage. Teachers receive a readable report for every student in the class, in the same week the chapter was taught.",
    eyebrow: "Actionable data, not raw scores",
    icon: "📊",
    outcome:
      "Thirty diagnostic conversations a teacher doesn't have time to hold, turned into a report worth reading — without adding to evening workload.",
    title: "Teacher Insight Dashboard",
  },
  {
    description:
      "Proctors auto-generates structured evidence of communication, reasoning, and conceptual understanding — mapped directly to PARAKH's Holistic Progress Card criteria. No manual logging. No end-of-term scramble.",
    eyebrow: "Board and regulatory readiness",
    icon: "📋",
    outcome:
      "Board-ready documentation, generated automatically as assessments happen — not compiled under pressure at the end of term.",
    title: "HPC-Aligned Compliance Reports",
  },
  {
    description:
      "Reports below a confidence threshold are automatically flagged and routed to a teacher review queue — with raw and cleaned transcripts, audio playback, and score-override capability. Every override is logged in an audit trail.",
    eyebrow: "Teacher stays in control",
    icon: "🔍",
    outcome:
      "No automated report leaves without a confidence check. The teacher's judgment is always the final layer.",
    title: "Human Review Panel",
  },
  {
    description:
      "Assessments are delivered via 24-hour tokenized links with role-based access control — assigned by class or individual, with automated email invites. No student accounts to create. No app to download.",
    eyebrow: "Student access, simplified",
    icon: "🔐",
    outcome:
      "Students access their assessment securely from any device, with nothing to install and no credentials to remember.",
    title: "Secure Assessment Distribution",
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="label label--accent">Platform Features</p>
          <h2>
            Everything a school needs to run AI-powered individual assessment —
            at classroom scale.
          </h2>
        </div>
        <div className={styles.grid}>
          {FEATURES.map((f) => (
            <article
              className={`glass-panel reveal ${styles.card}`}
              key={f.title}
            >
              <span aria-hidden="true" className={styles.icon}>
                {f.icon}
              </span>
              <p className={styles.eyebrow}>{f.eyebrow}</p>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.desc}>{f.description}</p>
              <p className={styles.outcome}>
                <strong>What you get:</strong> {f.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
