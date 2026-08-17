import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        
        <div className={styles.grid}>
          {/* Column 1: Brand */}
          <div className={styles.columnBrand}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: 'var(--spacing-4)' }}>
              <Image src="/logos/logo.jpg" alt="PN Support Care Solutions" width={44} height={44} style={{ borderRadius: '8px', objectFit: 'contain' }} />
              <div className={styles.logo}>
                <span className={styles.logoPrimary}>PN Support</span>
                <span className={styles.logoSecondary}>Care Solutions Inc.</span>
              </div>
            </Link>
            <p className={styles.brandDescription}>
              Compassionate Home &amp; Community Care Across the GTA
            </p>
            <div className={styles.contactInfo}>
              <a href="tel:647-470-3892" className={styles.phoneLink}>647-470-3892</a>
            </div>
          </div>

          {/* Column 2: Care Services */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Care Services</h3>
            <ul className={styles.linkList}>
              <li><Link href="/services/personal-support">Personal Support</Link></li>
              <li><Link href="/services/companion-care">Companion Care</Link></li>
              <li><Link href="/services/dementia-care">Dementia Care</Link></li>
              <li><Link href="/services/respite-care">Respite Care</Link></li>
              <li><Link href="/services/palliative-care">Palliative Care</Link></li>
              <li><Link href="/services/live-in-care">Live-in Care</Link></li>
            </ul>
          </div>

          {/* Column 3: Areas We Serve */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Areas We Serve</h3>
            <ul className={styles.linkList}>
              <li><Link href="/locations/toronto">Toronto</Link></li>
              <li><Link href="/locations/mississauga">Mississauga</Link></li>
              <li><Link href="/locations/oakville">Oakville</Link></li>
              <li><Link href="/locations/milton">Milton</Link></li>
              <li><Link href="/locations/burlington">Burlington</Link></li>
              <li><Link href="/locations/hamilton">Hamilton</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/care-journal">Care Journal</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
          {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomBarContainer}`}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} PN Support Care Solutions Inc. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
