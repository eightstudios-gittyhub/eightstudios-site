"use client";

import { useEffect, useRef } from "react";
import styles from "./ContactSection.module.css";

const INSTAGRAM_USERNAME = "eight888studios";
const INSTAGRAM_APP_URL = `instagram://user?username=${INSTAGRAM_USERNAME}`;
const INSTAGRAM_WEB_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;
const EMAIL_HREF =
  "mailto:eight888studios@gmail.com?subject=Eight%20Studios%20Inquiry";

export default function ContactSection() {
  const fallbackTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (fallbackTimeoutRef.current) {
        window.clearTimeout(fallbackTimeoutRef.current);
      }
    };
  }, []);

  const handleInstagramClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (fallbackTimeoutRef.current) {
      window.clearTimeout(fallbackTimeoutRef.current);
    }

    window.location.href = INSTAGRAM_APP_URL;

    fallbackTimeoutRef.current = window.setTimeout(() => {
      window.location.href = INSTAGRAM_WEB_URL;
    }, 650);
  };

  return (
    <section className={styles.contactSection} aria-label="Contact Eight Studios">
      <a
        href={INSTAGRAM_WEB_URL}
        onClick={handleInstagramClick}
        className={styles.instagramButton}
        aria-label="Message on Instagram @eight888studios"
      >
        <span className={styles.instagramIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.6A4.15 4.15 0 0 0 3.6 7.75v8.5a4.15 4.15 0 0 0 4.15 4.15h8.5a4.15 4.15 0 0 0 4.15-4.15v-8.5a4.15 4.15 0 0 0-4.15-4.15h-8.5Zm8.95 1.2a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Z" />
          </svg>
        </span>
        <span className={styles.buttonLabel}>Instagram · @eight888studios</span>
      </a>

      <a href={EMAIL_HREF} className={styles.emailRow}>
        eight888studios@gmail.com
      </a>
    </section>
  );
}
