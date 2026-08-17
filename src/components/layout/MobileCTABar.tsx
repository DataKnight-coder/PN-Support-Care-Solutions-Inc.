import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import styles from './MobileCTABar.module.css';

export const MobileCTABar = () => {
  return (
    <div className={styles.mobileCTABar}>
      <div className={styles.container}>
        <a href="tel:647-470-3892" className={styles.callButton}>
          <Phone size={20} />
          <span>Call Us</span>
        </a>
        <Link href="/consultation" className={styles.consultButton}>
          Book Consultation
        </Link>
      </div>
    </div>
  );
};
