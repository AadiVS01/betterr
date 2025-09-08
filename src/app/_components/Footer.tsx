import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* SVG for Better Logo */}
        <div className={styles.content}>
          <div className={styles.companyInfo}>
            <p className={styles.text}>Better is a family of companies serving all your homeownership needs.</p>
            {/* List of company links and logos */}
          </div>
          <div className={styles.linkColumns}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Resources</h4>
              {/* Resource links */}
            </div>
            {/* Other columns for Company, Contact Us, and Legal */}
          </div>
        </div>
        <div className={styles.socials}>
          {/* Social media links */}
        </div>
        <div className={styles.legalDisclosures}>
          {/* Legal text, NMLS info, etc. */}
        </div>
      </div>
    </footer>
  );
}