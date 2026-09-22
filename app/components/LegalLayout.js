"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  ArrowUp,
  FileText,
  Layers,
  Mail,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "../legal.module.css";
import Footer from "./Footer";

export default function LegalLayout({
  activeTab = "terms", // "terms" | "privacy"
  badge = "",
  title = "",
  description = "",
  lastUpdated = "September 2026",
  sections = [],
  children,
}) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const mobileNavRef = useRef(null);

  // Top reading progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    restDelta: 0.001,
    stiffness: 200,
  });

  // Track active section and back-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      // Determine active section by heading positions
      const sectionElements = sections
        .map((s) => document.getElementById(s.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 140;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Center active pill in mobile navigation list
  useEffect(() => {
    if (!(activeSection && mobileNavRef.current)) {
      return;
    }
    const activeBtn = mobileNavRef.current.querySelector(
      `.${styles.mobileNavPillActive}`
    );
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeSection]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <motion.div
        aria-hidden="true"
        className={styles.progressBar}
        style={{ scaleX }}
      />

      <div className={styles.legalWrapper}>
        <div className={styles.container}>
          {/* Floating Top Navigation */}
          <nav aria-label="Legal Navigation" className={styles.topBar}>
            <Link
              aria-label="Proctors Home"
              className={styles.brandLink}
              href="/"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Proctors" className={styles.logoImg} src="/logo.png" />
            </Link>

            {/* Segmented Switcher */}
            <div className={styles.segmentedControl}>
              <Link
                className={`${styles.segmentBtn} ${
                  activeTab === "terms" ? styles.segmentActive : ""
                }`}
                href="/terms"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Terms of Service</span>
              </Link>
              <Link
                className={`${styles.segmentBtn} ${
                  activeTab === "privacy" ? styles.segmentActive : ""
                }`}
                href="/privacy"
              >
                <Shield className="h-3.5 w-3.5" />
                <span>Privacy Policy</span>
              </Link>
            </div>

            <Link className={styles.backLink} href="/">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </nav>

          {/* Hero Header */}
          <header className={styles.heroHeader}>
            {badge && <span className={styles.heroBadge}>{badge}</span>}
            <h1 className={styles.heroTitle}>{title}</h1>
            {description && <p className={styles.heroDesc}>{description}</p>}

            <div className={styles.metaCapsule}>
              <div className={styles.metaItem}>
                <span className={styles.metaDot} />
                <span>Last updated: {lastUpdated}</span>
              </div>
              <span className={styles.metaDivider}>•</span>
              <div className={styles.metaItem}>
                <span>India DPDP Act Aligned</span>
              </div>
              <span className={styles.metaDivider}>•</span>
              <div className={styles.metaItem}>
                <span>NEP 2020 &amp; PARAKH Ready</span>
              </div>
            </div>
          </header>

          {/* Mobile Table of Contents Quick Scroller */}
          {sections.length > 0 && (
            <div className={styles.mobileNavPills}>
              <div className={styles.mobileNavHeader}>
                <div className={styles.mobileNavLabel}>Jump to section:</div>
                <span className={styles.mobileStackHint}>
                  <Layers className="h-3 w-3" />
                  <span>Stacking folio</span>
                </span>
              </div>
              <div className={styles.mobileNavList} ref={mobileNavRef}>
                {sections.map((s) => (
                  <button
                    className={`${styles.mobileNavPill} ${
                      activeSection === s.id ? styles.mobileNavPillActive : ""
                    }`}
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    type="button"
                  >
                    {s.number && (
                      <span className={styles.mobileNavNum}>{s.number}</span>
                    )}
                    <span>{s.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Main Layout Grid */}
          <div className={styles.mainGrid}>
            {/* Desktop Sticky Sidebar */}
            {sections.length > 0 && (
              <aside className={styles.sidebar}>
                <div className={styles.sidebarInner}>
                  <div className={styles.sidebarHeader}>
                    <p className={styles.sidebarTitle}>Contents</p>
                    <span className={styles.sidebarCount}>
                      {sections.length} sections
                    </span>
                  </div>

                  <nav aria-label="Table of Contents" className={styles.tocNav}>
                    {sections.map((s) => {
                      const isActive = activeSection === s.id;
                      return (
                        <button
                          className={`${styles.tocItem} ${
                            isActive ? styles.tocItemActive : ""
                          }`}
                          key={s.id}
                          onClick={() => scrollToSection(s.id)}
                          type="button"
                        >
                          {s.number && (
                            <span className={styles.tocNum}>{s.number}</span>
                          )}
                          <span className={styles.tocLabel}>{s.title}</span>
                        </button>
                      );
                    })}
                  </nav>

                  <div className={styles.sidebarFooter}>
                    <div className={styles.sidebarContact}>
                      <Mail className="h-3.5 w-3.5 text-accent" />
                      <div>
                        <p className={styles.sidebarContactTitle}>Questions?</p>
                        <a
                          className={styles.sidebarContactEmail}
                          href="mailto:hello@proctors.in"
                        >
                          hello@proctors.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            )}

            {/* Document Content */}
            <main className={styles.contentColumn}>
              {children}

              {/* Related Policies Footer Card */}
              <div className={styles.relatedCard}>
                <h3 className={styles.relatedTitle}>
                  Related Policies &amp; Governance
                </h3>
                <p className={styles.relatedText}>
                  Our governance documents work together to ensure comprehensive
                  student data protection, regulatory compliance under the DPDP
                  Act 2023, and clear service expectations.
                </p>
                <div className={styles.relatedLinksGrid}>
                  <Link
                    className={`${styles.relatedLinkTile} ${
                      activeTab === "terms" ? styles.relatedLinkDisabled : ""
                    }`}
                    href="/terms"
                  >
                    <FileText className="h-4 w-4 text-accent" />
                    <div>
                      <p className={styles.relatedLinkTitle}>
                        Terms of Service
                      </p>
                      <p className={styles.relatedLinkDesc}>
                        Platform rights, institutional roles, and pilot
                        guidelines
                      </p>
                    </div>
                  </Link>

                  <Link
                    className={`${styles.relatedLinkTile} ${
                      activeTab === "privacy" ? styles.relatedLinkDisabled : ""
                    }`}
                    href="/privacy"
                  >
                    <Shield className="h-4 w-4 text-accent" />
                    <div>
                      <p className={styles.relatedLinkTitle}>Privacy Policy</p>
                      <p className={styles.relatedLinkDesc}>
                        DPDP Act compliance, student protections, and
                        sub-processors
                      </p>
                    </div>
                  </Link>

                  <Link
                    className={styles.relatedLinkTile}
                    href="/privacy#student-data"
                  >
                    <Shield className="h-4 w-4 text-accent" />
                    <div>
                      <p className={styles.relatedLinkTitle}>
                        Student Data Policy
                      </p>
                      <p className={styles.relatedLinkDesc}>
                        Tokenized links, no passwords, and zero data sales
                      </p>
                    </div>
                  </Link>

                  <Link
                    className={styles.relatedLinkTile}
                    href="/privacy#security"
                  >
                    <Shield className="h-4 w-4 text-accent" />
                    <div>
                      <p className={styles.relatedLinkTitle}>
                        Security &amp; Speech
                      </p>
                      <p className={styles.relatedLinkDesc}>
                        Kokoro TTS, Whisper STT, and teacher audit trail
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          aria-label="Back to top"
          className={styles.floatingTopBtn}
          onClick={scrollToTop}
          type="button"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      <Footer />
    </>
  );
}
