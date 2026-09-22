import Link from "next/link";
import { GradientWave } from "@/components/ui/gradient-wave";
import LegalLayout from "../components/LegalLayout";
import LegalSection from "../components/LegalSection";
import styles from "../legal.module.css";

export const metadata = {
  description:
    "Student data stays with your school. Proctors does not sell or share student records. Data handling strictly aligned to India's DPDP Act 2023.",
  title: "Privacy Policy & Student Data Protection — Proctors",
};

const privacySections = [
  { id: "intro", number: "", title: "DPDP Act Overview" },
  { id: "scope", number: "01", title: "Scope" },
  { id: "info-collected", number: "02", title: "Information We Collect" },
  { id: "how-we-use", number: "03", title: "How We Use Information" },
  { id: "legal-basis", number: "04", title: "Legal Basis & Consent" },
  { id: "children-data", number: "05", title: "Children's Data Protections" },
  { id: "sub-processors", number: "06", title: "Third-Party Providers" },
  { id: "security", number: "07", title: "Storage, Security & Transfers" },
  { id: "data-retention", number: "08", title: "Data Retention" },
  { id: "data-sharing", number: "09", title: "Data Sharing & Disclosure" },
  { id: "your-rights", number: "10", title: "Your Rights" },
  { id: "cookies", number: "11", title: "Cookies & Technologies" },
  {
    id: "breach-notification",
    number: "12",
    title: "Data Breach Notification",
  },
  { id: "grievance-officer", number: "13", title: "Grievance Officer" },
  { id: "policy-changes", number: "14", title: "Policy Updates" },
  { id: "related-policies", number: "15", title: "Related Policies" },
];

export default function PrivacyPage() {
  return (
    <>
      <div aria-hidden="true" className="sticky-bg-wrapper">
        <GradientWave />
      </div>

      <LegalLayout
        activeTab="privacy"
        badge="DPDP Act 2023 Aligned"
        description="Explaining how Proctors collects, uses, stores, shares, and protects personal data — including minors' student records — under India's Digital Personal Data Protection Act."
        lastUpdated="September 2026"
        sections={privacySections}
        title="Privacy Policy & Student Data Protection"
      >
        {/* Intro */}
        <LegalSection id="intro" title="DPDP Act Compliance & Governance Role">
          <p>
            Proctors (&ldquo;Proctors,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides an AI-powered
            conversational assessment platform for schools. This Privacy Policy
            explains how we collect, use, store, share, and protect personal
            data — including data belonging to students, many of whom are minors
            — in connection with the Proctors platform (&ldquo;Platform&rdquo;
            or &ldquo;Service&rdquo;).
          </p>
          <div className={styles.callout}>
            <strong>Core Regulatory Distinction:</strong> This Policy is drafted
            with reference to India&apos;s Digital Personal Data Protection Act,
            2023 (&ldquo;DPDP Act&rdquo;). Under the DPDP Act, Proctors
            generally acts as a <strong>Data Processor</strong> on behalf of the
            School (the <strong>Data Fiduciary</strong>) with respect to Student
            personal data, while acting as a <strong>Data Fiduciary</strong> in
            its own right for School and Authorized User account data. This
            distinction is reflected throughout this Policy.
          </div>
        </LegalSection>

        {/* 1. Scope */}
        <LegalSection id="scope" number="01" title="Scope">
          <p>This Policy applies to:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>Schools</strong> and their administrators who register
                for the Platform;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>Authorized Users</strong> (teachers, academic staff) who
                access the Platform on behalf of a School;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>Students</strong> who participate in Assessments
                delivered through the Platform, including where a Student is a
                child under the age of 18.
              </span>
            </li>
          </ul>
        </LegalSection>

        {/* 2. Information We Collect */}
        <LegalSection
          id="info-collected"
          number="02"
          title="Information We Collect"
        >
          <h3 className={styles.subHeading}>
            2.1 School and Authorized User Data
          </h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Institution name, address, and board affiliation (e.g., CBSE,
                State Board)
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Teacher/administrator name, role, email address, and phone
                number
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Curriculum materials uploaded by the School (e.g., NCERT/board
                chapter content)
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>Class rosters and grade-band information</span>
            </li>
          </ul>

          <h3 className={styles.subHeading} id="student-data">
            2.2 Student Data
          </h3>
          <div className={styles.callout}>
            <strong>Zero Account Friction:</strong> We do not require Students
            to create independent accounts, and we do not knowingly collect data
            from Students outside the context of a School-assigned Assessment.
          </div>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Student name and class/section, as provided by the School
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Audio recordings and/or text of Student responses during an
                Assessment
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>Transcripts generated from Assessment conversations</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                AI-generated evaluations, including conceptual understanding,
                communication quality, and identified learning gaps
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Assessment metadata (timestamps, chapter/topic assessed, device
                type used)
              </span>
            </li>
          </ul>

          <h3 className={styles.subHeading}>
            2.3 Automatically Collected Data
          </h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Basic technical data (IP address, browser type, device type)
                needed to deliver the tokenized assessment link and maintain
                session security
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Platform usage data (e.g., login times, feature usage) for
                Authorized Users
              </span>
            </li>
          </ul>
        </LegalSection>

        {/* 3. How We Use Information */}
        <LegalSection
          id="how-we-use"
          number="03"
          title="How We Use Information"
        >
          <p>We use collected information to:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Deliver AI-powered conversational Assessments to Students on
                behalf of their School;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Generate per-student insight reports, including reports
                formatted for HPC/PARAKH alignment;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Route low-confidence evaluations to human (teacher) review;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Maintain platform security, including tokenized access control
                and audit trails;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Provide dashboards and reporting tools to Authorized Users;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Improve and maintain the reliability of our question-generation
                and evaluation systems, using de-identified or aggregated data
                wherever feasible;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Communicate with Schools and Authorized Users about their
                account and the Service;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>Comply with applicable legal obligations.</span>
            </li>
          </ul>

          <div className={styles.callout}>
            <strong>Absolute Advertising Proscription:</strong> We do{" "}
            <strong>not</strong> use Student data for advertising, and we do{" "}
            <strong>not</strong> sell Student personal data to any third party.
          </div>
        </LegalSection>

        {/* 4. Legal Basis and Consent */}
        <LegalSection
          id="legal-basis"
          number="04"
          title="Legal Basis and Consent"
        >
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>4.1 School Role &amp; Parental Consent:</strong>{" "}
                Proctors processes Student personal data at the direction of,
                and under agreement with, the School. The School is responsible
                for establishing the lawful basis for collecting and sharing
                Student data with Proctors, including obtaining verifiable
                parental or lawful guardian consent where required under the
                DPDP Act (in particular, Section 9, which governs processing of
                children&apos;s personal data) or other applicable law.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>4.2 Direct Account Registration Consent:</strong> Where
                Proctors directly collects consent from a School or Authorized
                User (e.g., account registration), that consent is obtained
                directly and specifically for the stated purpose, in accordance
                with the DPDP Act&apos;s consent requirements.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>4.3 Consent Withdrawal:</strong> Schools may withdraw
                consent for further processing of a specific Student&apos;s data
                by contacting Proctors, subject to the practical effect this may
                have on that Student&apos;s ability to use the Platform.
              </span>
            </li>
          </ul>
        </LegalSection>

        {/* 5. Children's Data — Specific Protections */}
        <LegalSection
          id="children-data"
          number="05"
          title="Children's Data — Specific Protections"
        >
          <p>
            Because many Platform users are minors, we apply the following
            additional safeguards:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                We do not permit direct marketing or advertising to Students;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                We do not enable behavioral tracking of Students for purposes
                unrelated to delivering the Assessment;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Student access is limited to time-bound (24-hour),
                role-restricted tokenized links rather than persistent
                individual accounts;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Audio and transcript data is used strictly for evaluation and
                human-review purposes described in this Policy, and is not
                repurposed for unrelated commercial use;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Schools act as the responsible party for confirming
                parental/guardian consent has been obtained where the DPDP Act
                or other applicable law requires it before enrolling a Student.
              </span>
            </li>
          </ul>
        </LegalSection>

        {/* 6. Third-Party Service Providers */}
        <LegalSection
          id="sub-processors"
          number="06"
          title="Third-Party Service Providers"
        >
          <p>
            To deliver the Service, Proctors uses the following categories of
            third-party sub-processors:
          </p>

          <div className={styles.tableContainer}>
            <table className={styles.subTable}>
              <thead>
                <tr>
                  <th>Provider Category</th>
                  <th>Purpose</th>
                  <th>Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className={styles.categoryTag}>AI Evaluation</span>
                  </td>
                  <td>
                    Automated processing of Assessment transcripts through the
                    evaluation pipeline, with fallback redundancy
                  </td>
                  <td>
                    <span className={styles.providerBadge}>
                      Groq, OpenAI, Google Gemini
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className={styles.categoryTag}>
                      Speech Processing
                    </span>
                  </td>
                  <td>Voice-based Assessment delivery</td>
                  <td>
                    <span className={styles.providerBadge}>
                      Self-hosted speech stack (Kokoro TTS + Whisper STT);
                      browser-native Web Speech API fallback
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className={styles.categoryTag}>
                      Infrastructure &amp; Hosting
                    </span>
                  </td>
                  <td>Secure storage and hosting of Platform data</td>
                  <td>
                    <span className={styles.providerBadge}>
                      Amazon Web Services (AWS) / Vercel (Indian &amp; Regional
                      Edge Infrastructure)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className={styles.categoryTag}>Communications</span>
                  </td>
                  <td>Delivery of tokenized assessment invites</td>
                  <td>
                    <span className={styles.providerBadge}>
                      Resend / Amazon Simple Email Service (SES)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Each third-party provider is engaged under contractual terms
            requiring them to process data solely for the purpose specified,
            apply appropriate security safeguards, and not use Student data for
            their own independent purposes (such as model training on
            identifiable data), to the extent such terms are available from the
            provider. We periodically review our sub-processor list and will
            update this Policy accordingly.
          </p>
        </LegalSection>

        {/* 7. Data Storage, Security, and International Transfers */}
        <LegalSection
          id="security"
          number="07"
          title="Data Storage, Security, and International Transfers"
        >
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>7.1 Security Safeguards:</strong> We apply
                administrative, technical, and organizational safeguards
                designed to protect personal data against unauthorized access,
                alteration, disclosure, or destruction, including role-based
                access control, tokenized access links, and audit logging of
                report overrides.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>7.2 Cross-Border Safeguards:</strong> Where Assessment
                data is processed by third-party AI providers located outside
                India, such transfers are made only where permitted under the
                DPDP Act and subject to appropriate contractual safeguards with
                those providers.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>7.3 Incident Response:</strong> No system can guarantee
                absolute security. We will notify affected Schools in the event
                of a data breach affecting their Students&apos; personal data,
                in accordance with our obligations under applicable law.
              </span>
            </li>
          </ul>
        </LegalSection>

        {/* 8. Data Retention */}
        <LegalSection id="data-retention" number="08" title="Data Retention">
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>8.1 Retention Period:</strong> We retain Assessment
                transcripts, audio recordings, and insight reports for as long
                as reasonably necessary to fulfil the purposes described in this
                Policy, or as instructed by the School, or as required by
                applicable education recordkeeping or legal obligations.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>8.2 Deletion Upon Agreement Termination:</strong> Upon a
                School&apos;s termination of its agreement with Proctors, we
                will delete or anonymize Student personal data within a
                reasonable period, except where retention is required by law or
                for the resolution of disputes, unless the School requests
                earlier deletion or export.
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                <strong>8.3 On-Demand Data Export:</strong> Schools may request
                export or deletion of their Students&apos; data at any time by
                contacting us at the details below.
              </span>
            </li>
          </ul>
        </LegalSection>

        {/* 9. Data Sharing and Disclosure */}
        <LegalSection
          id="data-sharing"
          number="09"
          title="Data Sharing and Disclosure"
        >
          <p>We share personal data only:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                With the School to which a Student belongs (e.g., insight
                reports, dashboards);
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                With third-party service providers described in Section 6,
                strictly to deliver the Service;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Where required to comply with a legal obligation, court order,
                or lawful request from a public authority;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                In connection with a merger, acquisition, or sale of assets,
                subject to continued protection of personal data under
                equivalent terms.
              </span>
            </li>
          </ul>
          <div className={styles.callout}>
            We do not share Student personal data with advertisers or data
            brokers, and we do not sell personal data.
          </div>
        </LegalSection>

        {/* 10. Your Rights */}
        <LegalSection id="your-rights" number="10" title="Your Rights">
          <p>
            Subject to applicable law, including the DPDP Act, Data Principals
            (Schools, Authorized Users, and, through their School,
            Students/parents) may have the right to:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>Access a summary of personal data we hold;</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>Request correction of inaccurate or incomplete data;</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Request erasure of personal data, subject to legal retention
                requirements;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Withdraw consent for further processing, where consent is the
                basis for processing;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Nominate another individual to exercise these rights in the
                event of death or incapacity;
              </span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.bulletDot} />
              <span>
                Register a grievance regarding the handling of personal data.
              </span>
            </li>
          </ul>
          <p className="mt-3">
            Requests relating to Student data should generally be routed through
            the Student&apos;s School, which acts as the primary point of
            contact for such requests. Schools or individuals may also contact
            us directly using the details in Section 13.
          </p>
        </LegalSection>

        {/* 11. Cookies and Similar Technologies */}
        <LegalSection
          id="cookies"
          number="11"
          title="Cookies and Similar Technologies"
        >
          <p>
            Our website and Platform may use strictly necessary cookies or
            similar technologies to maintain session security and enable core
            functionality (such as tokenized assessment links). We do not use
            third-party advertising cookies on Student-facing pages.
          </p>
        </LegalSection>

        {/* 12. Data Breach Notification */}
        <LegalSection
          id="breach-notification"
          number="12"
          title="Data Breach Notification"
        >
          <p>
            In the event of a personal data breach that is likely to result in
            harm to affected individuals, we will notify the affected School(s)
            without undue delay and take reasonable steps to mitigate the
            impact, in accordance with applicable law and our agreement with the
            School.
          </p>
        </LegalSection>

        {/* 13. Grievance Officer / Contact Us */}
        <LegalSection
          id="grievance-officer"
          number="13"
          title="Grievance Officer / Contact Us"
        >
          <p>
            In accordance with the DPDP Act, questions, complaints, or requests
            regarding this Policy or the handling of personal data may be
            directed to:
          </p>
          <div className={styles.callout}>
            <p>
              <strong>Grievance Officer</strong>
            </p>
            <p>Proctors</p>
            <p>
              Email:{" "}
              <a
                className="font-semibold text-accent underline"
                href="mailto:hello@proctors.in"
              >
                hello@proctors.in
              </a>
            </p>
          </div>
          <p>
            Schools and Authorized Users may also raise concerns through their
            standard Proctors support channel.
          </p>
        </LegalSection>

        {/* 14. Changes to This Policy */}
        <LegalSection
          id="policy-changes"
          number="14"
          title="Changes to This Policy"
        >
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. Material changes
            will be communicated to registered Schools via email or in-platform
            notice, and the &ldquo;Last updated&rdquo; date above will be
            revised accordingly.
          </p>
        </LegalSection>

        {/* 15. Related Policies */}
        <LegalSection
          id="related-policies"
          number="15"
          title="Related Policies"
        >
          <p>
            This Privacy Policy should be read together with our{" "}
            <Link className="font-semibold text-accent underline" href="/terms">
              Terms of Service
            </Link>
            ,{" "}
            <Link
              className="font-semibold text-accent underline"
              href="/privacy#student-data"
            >
              Student Data Policy
            </Link>
            , and{" "}
            <Link
              className="font-semibold text-accent underline"
              href="/privacy#security"
            >
              Security Overview
            </Link>
            .
          </p>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
