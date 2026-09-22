import Link from "next/link";
import { GradientWave } from "@/components/ui/gradient-wave";
import LegalLayout from "../components/LegalLayout";
import LegalSection from "../components/LegalSection";
import styles from "../legal.module.css";

export const metadata = {
  description:
    "Terms of Service governing institutional and student access to the Proctors conversational AI assessment platform.",
  title: "Terms of Service — Proctors",
};

const termsSections = [
  { id: "intro", number: "", title: "Overview" },
  { id: "definitions", number: "01", title: "Definitions" },
  { id: "service", number: "02", title: "Description of Service" },
  { id: "eligibility", number: "03", title: "Eligibility & Registration" },
  { id: "responsibilities", number: "04", title: "School Responsibilities" },
  { id: "student-participation", number: "05", title: "Student Participation" },
  { id: "acceptable-use", number: "06", title: "Acceptable Use" },
  { id: "ai-limitations", number: "07", title: "AI Limitations" },
  { id: "intellectual-property", number: "08", title: "Intellectual Property" },
  { id: "third-party", number: "09", title: "Third-Party Services" },
  { id: "pilot-program", number: "10", title: "Pilot Program & Fees" },
  { id: "data-protection", number: "11", title: "Data Protection" },
  { id: "confidentiality", number: "12", title: "Confidentiality" },
  { id: "disclaimers", number: "13", title: "Disclaimers" },
  { id: "liability", number: "14", title: "Limitation of Liability" },
  { id: "indemnification", number: "15", title: "Indemnification" },
  { id: "termination", number: "16", title: "Termination" },
  { id: "governing-law", number: "17", title: "Governing Law" },
  { id: "changes", number: "18", title: "Changes to Terms" },
  { id: "contact", number: "19", title: "Contact Us" },
];

export default function TermsPage() {
  return (
    <>
      <div aria-hidden="true" className="sticky-bg-wrapper">
        <GradientWave />
      </div>

      <LegalLayout
        activeTab="terms"
        badge="Platform Governance"
        description="These Terms govern access to and use of the Proctors platform, AI-powered conversational assessment engine, dashboards, and related services."
        lastUpdated="September 2026"
        sections={termsSections}
        title="Terms of Service"
      >
        {/* Intro */}
        <LegalSection id="intro" title="Agreement to Terms">
          <p>
            Welcome to Proctors (&ldquo;Proctors,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;). These Terms of Service
            (&ldquo;Terms&rdquo;) govern access to and use of the Proctors
            platform, including our website, AI-powered conversational
            assessment engine, dashboards, and related services (collectively,
            the &ldquo;Platform&rdquo; or &ldquo;Service&rdquo;).
          </p>
          <div className={styles.callout}>
            By accessing or using the Platform, you agree to be bound by these
            Terms. If you are using the Platform on behalf of a school or
            institution, you represent that you have authority to bind that
            institution to these Terms.
          </div>
        </LegalSection>

        {/* 1. Definitions */}
        <LegalSection id="definitions" number="01" title="Definitions">
          <p>
            The following defined terms establish the operational and legal
            scope throughout this agreement:
          </p>
          <div className={styles.definitionsGrid}>
            <div className={styles.definitionTile}>
              <h4 className={styles.definitionTerm}>&ldquo;School&rdquo;</h4>
              <p className={styles.definitionDesc}>
                Refers to the educational institution that has registered for
                and/or subscribed to the Platform.
              </p>
            </div>
            <div className={styles.definitionTile}>
              <h4 className={styles.definitionTerm}>
                &ldquo;Authorized User&rdquo;
              </h4>
              <p className={styles.definitionDesc}>
                Refers to any teacher, administrator, or academic staff member
                of a School who is granted access to the Platform.
              </p>
            </div>
            <div className={styles.definitionTile}>
              <h4 className={styles.definitionTerm}>&ldquo;Student&rdquo;</h4>
              <p className={styles.definitionDesc}>
                Refers to any student of a School who participates in an
                assessment delivered through the Platform.
              </p>
            </div>
            <div className={styles.definitionTile}>
              <h4 className={styles.definitionTerm}>
                &ldquo;Assessment&rdquo;
              </h4>
              <p className={styles.definitionDesc}>
                Refers to a voice- or text-based conversational session
                conducted by Proctor&apos;s AI engine with a Student.
              </p>
            </div>
            <div className={styles.definitionTile}>
              <h4 className={styles.definitionTerm}>&ldquo;Content&rdquo;</h4>
              <p className={styles.definitionDesc}>
                Refers to any data, text, audio, transcripts, reports, or other
                material generated, uploaded, or processed through the Platform.
              </p>
            </div>
          </div>
        </LegalSection>

        {/* 2. Description of Service */}
        <LegalSection id="service" number="02" title="Description of Service">
          <p>
            Proctors is a curriculum-native, AI-powered conversational
            assessment platform for schools. Authorized Users assign Assessments
            linked to curriculum chapters. Students complete Assessments through
            a one-on-one voice or text dialogue with an AI system. The Platform
            processes these interactions and generates per-student insight
            reports, including reports formatted to align with PARAKH&apos;s
            Holistic Progress Card (HPC) framework.
          </p>
          <div className={styles.callout}>
            <strong>Teacher Authority Guarantee:</strong> The Platform is a tool
            to support teacher judgment. It does not replace, override, or
            substitute the professional assessment and decision-making authority
            of a School&apos;s teaching staff.
          </div>
        </LegalSection>

        {/* 3. Eligibility and Account Registration */}
        <LegalSection
          id="eligibility"
          number="03"
          title="Eligibility and Account Registration"
        >
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>3.1 Institutional Eligibility:</strong> The Platform is
                intended for use by schools, their authorized staff, and their
                enrolled students, in connection with a School&apos;s
                subscription or pilot agreement with Proctors.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>3.2 Staff Credentials:</strong> Authorized Users must
                provide accurate registration information and are responsible
                for maintaining the confidentiality of their login credentials.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>3.3 Frictionless Student Access:</strong> Student access
                to Assessments is provisioned by the School through tokenized,
                time-limited links. Students do not create independent accounts
                or passwords.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>3.4 Suspension Rights:</strong> Proctors reserves the
                right to suspend or terminate access for any account used in
                violation of these Terms.
              </span>
            </li>
          </ul>
        </LegalSection>

        {/* 4. School and Institutional Responsibilities */}
        <LegalSection
          id="responsibilities"
          number="04"
          title="School and Institutional Responsibilities"
        >
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>4.1 Consent:</strong> The School is responsible for
                obtaining any consents required under applicable law — including
                parental or guardian consent for the collection and processing
                of a Student&apos;s personal data, in accordance with
                India&apos;s Digital Personal Data Protection Act, 2023
                (&ldquo;DPDP Act&rdquo;) and any other applicable education or
                child-data regulations — before enrolling Students on the
                Platform.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>4.2 Accuracy of Roster Data:</strong> The School is
                responsible for the accuracy of student and class roster data
                uploaded to or entered into the Platform.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>4.3 Appropriate Use:</strong> The School is responsible
                for ensuring Authorized Users use the Platform in a manner
                consistent with its intended educational purpose and these
                Terms.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>4.4 Curriculum Content:</strong> Where the School
                provides curriculum materials for question generation, the
                School represents that it has the right to use and share that
                content with Proctors for this purpose.
              </span>
            </li>
          </ul>
        </LegalSection>

        {/* 5. Student Participation */}
        <LegalSection
          id="student-participation"
          number="05"
          title="Student Participation"
        >
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>5.1 Low-Stakes Academic Dialogues:</strong> Assessments
                are designed as low-stakes, conversational academic dialogues.
                Students are not penalized within the Assessment for exploratory
                or incorrect mid-conversation responses.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>5.2 Response Processing:</strong> Audio and/or text
                responses provided by a Student during an Assessment are
                processed by the Platform, including by third-party AI service
                providers, as described in our{" "}
                <Link
                  className="font-semibold text-accent underline"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>5.3 Inquiries &amp; Concerns:</strong> Students (or
                their parents/guardians, as applicable) may raise concerns about
                an Assessment through their School, which can escalate the
                matter to Proctors&apos; support team.
              </span>
            </li>
          </ul>
        </LegalSection>

        {/* 6. Acceptable Use */}
        <LegalSection id="acceptable-use" number="06" title="Acceptable Use">
          <p>You agree not to:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Use the Platform for any purpose other than legitimate
                educational assessment;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Attempt to circumvent, disable, or interfere with security
                features of the Platform;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Share tokenized assessment links with anyone other than the
                intended Student;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Upload content that is unlawful, infringing, or that you do not
                have the right to share;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Attempt to extract, scrape, or reverse-engineer the
                Platform&apos;s underlying models, question banks, or evaluation
                logic;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Use the Platform to generate, store, or transmit any content
                that could harm, harass, or endanger a minor.
              </span>
            </li>
          </ul>
        </LegalSection>

        {/* 7. AI-Generated Content and Limitations */}
        <LegalSection
          id="ai-limitations"
          number="07"
          title="AI-Generated Content and Limitations"
        >
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>7.1 AI Engine Operations:</strong> Proctor&apos;s
                assessments, follow-up questions, and insight reports are
                generated using artificial intelligence, including large
                language models operated by third-party providers (see Section
                9).
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>7.2 Advisory Nature:</strong> AI-generated content may
                occasionally be inaccurate, incomplete, or fail to fully capture
                a Student&apos;s understanding. Insight reports are intended to{" "}
                <strong>support</strong>, not replace, teacher judgment. Schools
                and teachers remain responsible for final academic and reporting
                decisions, including HPC entries.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>7.3 Human Review Queue:</strong> Reports flagged below
                an internal confidence threshold are routed to a human (teacher)
                review queue before being treated as final. Proctors does not
                guarantee that every report is reviewed by a human unless
                flagged by this process.
              </span>
            </li>
          </ul>
        </LegalSection>

        {/* 8. Intellectual Property */}
        <LegalSection
          id="intellectual-property"
          number="08"
          title="Intellectual Property"
        >
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>8.1 Proctors IP:</strong> Proctors retains all rights,
                title, and interest in the Platform, including its software,
                question-generation engine, evaluation pipeline, branding, and
                underlying technology.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>8.2 School Ownership:</strong> The School retains
                ownership of its curriculum materials and Student-generated
                Content, subject to the license granted in Section 8.3.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>8.3 Service License:</strong> The School grants Proctors
                a limited, non-exclusive license to process curriculum materials
                and Student Content solely to provide, maintain, and improve the
                Service, as further described in our{" "}
                <Link
                  className="font-semibold text-accent underline"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>8.4 Aggregated &amp; De-identified Data:</strong>{" "}
                Aggregated, de-identified data derived from use of the Platform
                may be used by Proctors to improve its question generation,
                evaluation models, and reporting features, provided such data
                cannot reasonably be used to identify an individual Student.
              </span>
            </li>
          </ul>
        </LegalSection>

        {/* 9. Third-Party Services */}
        <LegalSection id="third-party" number="09" title="Third-Party Services">
          <p>
            The Platform relies on third-party AI and infrastructure providers
            (including but not limited to Groq, OpenAI, and Google Gemini) as
            part of its automated evaluation pipeline, and a self-hosted speech
            stack with the browser&apos;s native speech API as a fallback. These
            providers process data solely to deliver the requested functionality
            and are bound by data processing terms consistent with applicable
            law. Details are available in our{" "}
            <Link
              className="font-semibold text-accent underline"
              href="/privacy"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              className="font-semibold text-accent underline"
              href="/privacy#security"
            >
              Security Overview
            </Link>
            .
          </p>
        </LegalSection>

        {/* 10. Pilot Program and Fees */}
        <LegalSection
          id="pilot-program"
          number="10"
          title="Pilot Program and Fees"
        >
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>10.1 Free Pilot Cohort:</strong> Schools participating
                in the free pilot program receive Platform access as described
                at the time of enrollment, at no cost, for the agreed pilot
                scope (subject, grade band, and duration).
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>10.2 Post-Pilot Access:</strong> Following the pilot
                period, continued access to the Platform will be subject to a
                separate paid subscription agreement, pricing for which will be
                communicated to pilot schools in advance.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>10.3 Pilot Modification:</strong> Proctors reserves the
                right to modify, suspend, or discontinue the pilot program at
                its discretion, with reasonable notice to participating Schools.
              </span>
            </li>
          </ul>
        </LegalSection>

        {/* 11. Data Protection */}
        <LegalSection id="data-protection" number="11" title="Data Protection">
          <p>
            Our collection, use, and handling of personal data — including
            Student data — is governed by our{" "}
            <Link
              className="font-semibold text-accent underline"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference. In the event
            of a conflict between these Terms and the Privacy Policy on
            data-handling matters, the Privacy Policy governs.
          </p>
        </LegalSection>

        {/* 12. Confidentiality */}
        <LegalSection id="confidentiality" number="12" title="Confidentiality">
          <p>
            Each party agrees to keep confidential any non-public information
            disclosed by the other party in connection with the Service, using
            at least the same degree of care it uses to protect its own
            confidential information, and not less than reasonable care.
          </p>
        </LegalSection>

        {/* 13. Disclaimers */}
        <LegalSection id="disclaimers" number="13" title="Disclaimers">
          <div className={styles.callout}>
            <strong>
              13.1 &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;:
            </strong>{" "}
            THE PLATFORM IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
            AVAILABLE.&rdquo; TO THE MAXIMUM EXTENT PERMITTED BY LAW, PROCTORS
            DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES
            OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </div>
          <p>
            <strong>13.2 Accuracy &amp; Uptime:</strong> Proctors does not
            warrant that the Platform will be uninterrupted, error-free, or that
            AI-generated evaluations will be free of inaccuracy.
          </p>
        </LegalSection>

        {/* 14. Limitation of Liability */}
        <LegalSection
          id="liability"
          number="14"
          title="Limitation of Liability"
        >
          <p>
            To the maximum extent permitted by applicable law, Proctors shall
            not be liable for any indirect, incidental, special, consequential,
            or punitive damages, or any loss of data, revenue, or goodwill,
            arising out of or related to use of the Platform. Proctors&apos;
            aggregate liability arising out of these Terms shall not exceed the
            fees paid by the School to Proctors in the twelve (12) months
            preceding the claim, or, during the free pilot period, shall be
            limited to the maximum extent permitted by law.
          </p>
        </LegalSection>

        {/* 15. Indemnification */}
        <LegalSection id="indemnification" number="15" title="Indemnification">
          <p>
            The School agrees to indemnify and hold Proctors harmless from
            claims arising out of (a) the School&apos;s breach of these Terms,
            (b) the School&apos;s failure to obtain required consents, or (c)
            misuse of the Platform by its Authorized Users.
          </p>
        </LegalSection>

        {/* 16. Termination */}
        <LegalSection id="termination" number="16" title="Termination">
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>16.1 General Termination:</strong> Either party may
                terminate a School&apos;s access to the Platform in accordance
                with the applicable pilot or subscription agreement.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>16.2 Immediate Termination for Cause:</strong> Proctors
                may suspend or terminate access immediately in the event of a
                material breach of these Terms, including misuse that
                compromises Student safety or data security.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>16.3 Post-Termination Data Retention:</strong> Upon
                termination, Proctors will handle retained data in accordance
                with the data retention terms of our{" "}
                <Link
                  className="font-semibold text-accent underline"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </li>
          </ul>
        </LegalSection>

        {/* 17. Governing Law and Dispute Resolution */}
        <LegalSection
          id="governing-law"
          number="17"
          title="Governing Law and Dispute Resolution"
        >
          <p>
            These Terms are governed by the laws of India. Any disputes arising
            under these Terms shall be subject to the exclusive jurisdiction of
            the courts at Bengaluru, Karnataka, India, unless otherwise agreed
            in a separate written agreement between the parties.
          </p>
        </LegalSection>

        {/* 18. Changes to These Terms */}
        <LegalSection id="changes" number="18" title="Changes to These Terms">
          <p>
            We may update these Terms from time to time. Material changes will
            be communicated to registered Schools via email or in-platform
            notice. Continued use of the Platform after changes take effect
            constitutes acceptance of the revised Terms.
          </p>
        </LegalSection>

        {/* 19. Contact Us */}
        <LegalSection id="contact" number="19" title="Contact Us">
          <p>For questions about these Terms, contact us at:</p>
          <div className={styles.callout}>
            <strong>Email:</strong>{" "}
            <a
              className="font-semibold text-accent underline"
              href="mailto:hello@proctors.in"
            >
              hello@proctors.in
            </a>
          </div>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
