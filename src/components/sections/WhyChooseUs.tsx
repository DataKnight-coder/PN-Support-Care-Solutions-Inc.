import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, ScrollRevealStagger } from '@/components/ui/ScrollReveal';
import styles from './WhyChooseUs.module.css';

export const WhyChooseUs = () => {
  const pillars = [
    {
      title: 'Personalized Care',
      description: 'Support shaped entirely around your individual routines, preferences, and clinical needs — never a generic template.'
    },
    {
      title: 'Professional Caregivers',
      description: 'Carefully screened, experienced, and compassionate professionals dedicated to elevating the standard of every interaction.'
    },
    {
      title: 'Flexible & Adaptive',
      description: 'Care that adapts to your changing schedule and evolving requirements. No rigid contracts — just genuine, responsive support.'
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrow}>Why Choose Us</span>
            <div className={styles.eyebrowLine} />
          </div>
          <h2 className={styles.headline}>
            Care built around you,<br />not the other way around.
          </h2>
          <p className={styles.description}>
            We don't believe in one-size-fits-all care. Every client receives a plan built exclusively around their life, goals, and dignity.
          </p>
        </ScrollReveal>

        <ScrollRevealStagger className={styles.grid}>
          {pillars.map((pillar, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.cardNumber}>0{index + 1}</span>
              <h3 className={styles.cardTitle}>{pillar.title}</h3>
              <p className={styles.cardDesc}>{pillar.description}</p>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
};
