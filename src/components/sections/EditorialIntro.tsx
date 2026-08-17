import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import styles from './EditorialIntro.module.css';

export const EditorialIntro = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          {/* Left — large statement */}
          <ScrollReveal direction="left">
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrow}>Our Approach</span>
              <div className={styles.eyebrowLine} />
            </div>
            <h2 className={styles.headline}>
              Care should adapt to the person, not the other way around.
            </h2>
          </ScrollReveal>

          {/* Right — body copy */}
          <ScrollReveal direction="right" delay={100}>
            <p className={styles.description}>
              At PN Support Care Solutions, we believe true support honours the life you've built. We don't force routines — we adapt to yours. By delivering personalized home and community care across the GTA, we help maintain independence, preserve dignity, and give families the peace of mind they deserve.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
