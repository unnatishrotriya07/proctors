"use client";
import {
  BookOpenCheck,
  Cpu,
  FileCheck2,
  Headphones,
  LayoutDashboard,
  MessageSquareCode,
  ShieldCheck,
  UserCheck2,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import styles from "./Features.module.css";

const features = [
  {
    benefit:
      "Every student gets an experience that feels like being asked, not tested — which is exactly when students think most honestly.",
    desc: "Proctor conducts a structured voice or text dialogue with each student — asking one well-chosen question, listening to the response, and following up precisely where it matters. Not a chatbot. Not a quiz. A bounded, curriculum-grounded academic conversation managed by a compiled AI state machine.",
    icon: MessageSquareCode,
    subtitle: "Core feature — what Proctor actually does",
    title: "Conversational AI Assessment Engine",
  },
  {
    benefit:
      "Every question Proctor asks is grounded in what your students already studied. No new content to create. No mismatch with what was taught.",
    desc: "The platform ingests NCERT PDFs, parses them by chapter and section, and generates questions mapped to CBSE and state board syllabi — tagged by Bloom's Taxonomy level (recall, application, analysis) and citing the source text.",
    icon: BookOpenCheck,
    subtitle: "Content intelligence",
    title: "NCERT & Board-Aligned Question Bank",
  },
  {
    benefit:
      "Consistent voice assessment across the range of devices and connectivity conditions common in Tier 2/3 schools — with no interruption to a student’s session.",
    desc: "A self-hosted speech stack (Kokoro TTS + Whisper STT) handles primary voice interaction, with the browser's native Web Speech API as a fallback when local services are unavailable.",
    icon: Headphones,
    subtitle: "Accessibility and reliability",
    title: "Dual Speech Engine",
  },
  {
    benefit:
      "Consistent, reviewable evaluations for every student — even at 300 assessments a week.",
    desc: "Every assessment transcript runs through an asynchronous pipeline: cleanup, concept mapping, gap detection, and final report compilation — with a four-tier AI fallback chain (Groq → OpenAI → Gemini → deterministic local evaluator) so no evaluation fails because of a provider outage.",
    icon: Cpu,
    subtitle: "Reliability under scale",
    title: "Automated 11-Step Evaluation Pipeline",
  },
  {
    benefit:
      "Thirty diagnostic conversations a teacher doesn't have time to hold, turned into a report worth reading — without adding to evening workload.",
    desc: "Insight reports surface per-student conceptual gaps, communication quality, and understanding depth — not just a percentage. Teachers receive a readable report for every student in the class, in the same week the chapter was taught.",
    icon: LayoutDashboard,
    subtitle: "Actionable data, not raw scores",
    title: "Teacher Insight Dashboard",
  },
  {
    benefit:
      "Board-ready documentation, generated automatically as assessments happen — not compiled under pressure at the end of term.",
    desc: "Proctors auto-generates structured evidence of communication, reasoning, and conceptual understanding — mapped directly to PARAKH's Holistic Progress Card criteria. No manual logging. No end-of-term scramble.",
    icon: FileCheck2,
    subtitle: "Board and regulatory readiness",
    title: "HPC-Aligned Compliance Reports",
  },
  {
    benefit:
      "No automated report leaves without a confidence check. The teacher's judgment is always the final layer.",
    desc: "Reports below a confidence threshold are automatically flagged and routed to a teacher review queue — with raw and cleaned transcripts, audio playback, and score-override capability. Every override is logged in an audit trail.",
    icon: UserCheck2,
    subtitle: "Teacher stays in control",
    title: "Human Review Panel",
  },
  {
    benefit:
      "Students access their assessment securely from any device, with nothing to install and no credentials to remember.",
    desc: "Assessments are delivered via 24-hour tokenized links with role-based access control — assigned by class or individual, with automated email invites. No student accounts to create. No app to download.",
    icon: ShieldCheck,
    subtitle: "Student access, simplified",
    title: "Secure Assessment Distribution",
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className={styles.header}>
          <p className="label label--accent">Platform Features</p>
          <h2 className={styles.heading}>
            Everything a school needs to run AI-powered individual assessment —
            at classroom scale.
          </h2>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <GlassCard
                className={styles.featureCard}
                key={f.title}
                style={{ transitionDelay: `${(i % 2) * 50}ms` }}
                variant="default"
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    <Icon className={styles.icon} />
                  </div>
                  <div className={styles.badgeGroup}>
                    <span className={styles.featureIndex}>0{i + 1}</span>
                    <span className={styles.subtitleBadge}>{f.subtitle}</span>
                  </div>
                </div>

                <h3 className={styles.title}>{f.title}</h3>
                <p className={styles.desc}>{f.desc}</p>

                <div className={styles.benefitBox}>
                  <span className={styles.benefitLabel}>What you get:</span>
                  <p className={styles.benefitText}>{f.benefit}</p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
