import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Phone } from 'lucide-react';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Compassionate home care you can <span className={styles.highlight}>trust</span>
          </h1>
          <p className={styles.subtitle}>
            Dependable, personalized care services across the Greater Toronto Area to keep your loved ones safe, comfortable, and independent at home.
          </p>
          <div className={styles.actions}>
            <Link href="/consultation">
              <Button variant="primary" size="lg">Book a Free Consultation</Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">Explore Care Services</Button>
            </Link>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/hero_care_1786972966174.jpg" 
            alt="Compassionate caregiver assisting a senior woman at home" 
            fill 
            className={styles.image} 
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};
