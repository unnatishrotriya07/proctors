"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import styles from "../legal.module.css";

export default function LegalSection({
  id,
  number,
  title,
  badge,
  children,
  className = "",
  index,
}) {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  let sectionIndex = 0;
  if (index !== undefined) {
    sectionIndex = index;
  } else if (number) {
    sectionIndex = Number.parseInt(number, 10);
  }

  const handleCopyLink = () => {
    if (typeof window !== "undefined" && id) {
      const url = `${window.location.origin}${window.location.pathname}#${id}`;
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div
      className={styles.cardStackWrapper}
      id={id}
      style={{
        "--sec-index": sectionIndex,
      }}
    >
      <div className={styles.mobileStackIndicator}>
        <span className={styles.mobileStackPill}>
          <span className={styles.mobileStackDot} />
          {number ? `Article ${number}` : "Overview"}
        </span>
        <span className={styles.mobileStackTitle}>{title}</span>
      </div>

      <motion.section
        className={`${styles.sectionCard} ${className}`}
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
        transition={{
          duration: 0.38,
          ease: [0.16, 1, 0.3, 1], // Apple cubic-bezier
        }}
        viewport={{ margin: "-30px", once: true }}
        whileInView={{ opacity: 1 }}
      >
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitleRow}>
            {number && <span className={styles.sectionNumber}>{number}</span>}
            <h2 className={styles.sectionTitle}>{title}</h2>
            {badge && <span className={styles.sectionBadge}>{badge}</span>}
          </div>

          {id && (
            <button
              aria-label={`Copy link to section: ${title}`}
              className={styles.copyAnchorBtn}
              onClick={handleCopyLink}
              title="Copy anchor link"
              type="button"
            >
              {copied ? (
                <span className={styles.copiedFeedback}>
                  <Check className="h-3.5 w-3.5" />
                  <span>Copied</span>
                </span>
              ) : (
                <LinkIcon className="h-3.5 w-3.5" />
              )}
            </button>
          )}
        </div>

        <div className={styles.sectionBody}>{children}</div>
      </motion.section>
    </div>
  );
}
