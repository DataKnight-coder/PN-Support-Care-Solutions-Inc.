import React from 'react';
import { ScrollReveal, ScrollRevealStagger } from '@/components/ui/ScrollReveal';
import styles from './WhoWeSupport.module.css';

export const WhoWeSupport = () => {
  const groups = [
    {
      title: 'Seniors Ageing in Place',
      description: 'Older adults who wish to remain safely and comfortably at home, maintaining their familiar routines and independence.'
    },
    {
      title: 'Individuals Living With Disabilities',
      description: 'Adults requiring personalized assistance to live independently within their home and broader community.'
    },
    {
      title: 'Post-Hospitalization Recovery',
      description: 'Patients needing transitional care and skilled support to heal safely at home after surgery, illness, or injury.'
    },
    {
      title: 'Individuals Living With Dementia',
      description: 'Those experiencing memory loss who benefit from specialized, dignified care in a familiar and safe environment.'
    },
    {
      title: 'Families Needing Respite',
      description: 'Dedicated family caregivers who need temporary, dependable relief to rest, recharge, and prevent burnout.'
    },
    {
      title: 'Ongoing Chronic Condition Support',
      description: 'People managing long-term conditions who need consistent, compassionate assistance with activities of daily living.'
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrow}>Who We Support</span>
            <div className={styles.eyebrowLine} />
          </div>
          <h2 className={styles.headline}>
            Care designed for<br />your unique reality.
          </h2>
        </ScrollReveal>

        <ScrollRevealStagger className={styles.grid}>
          {groups.map((group, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.cardIndex}>0{i + 1}</span>
              <h3 className={styles.title}>{group.title}</h3>
              <p className={styles.description}>{group.description}</p>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
};
