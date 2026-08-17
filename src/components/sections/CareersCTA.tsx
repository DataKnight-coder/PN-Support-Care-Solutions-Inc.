import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import styles from './CareersCTA.module.css';

export const CareersCTA = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.inner}>
            {/* Left: content */}
            <div className={styles.content}>
              <span className={styles.eyebrow}>Join Our Team</span>
              <h2 className={styles.headline}>
                Build a meaningful career in care.
              </h2>
              <p className={styles.description}>
                We are always looking for compassionate, dedicated Personal Support Workers and Nurses across the GTA. If you believe in care that truly makes a difference, we want to hear from you.
              </p>
              <ul className={styles.benefits}>
                <li>Competitive compensation</li>
                <li>Flexible scheduling</li>
                <li>Ongoing training &amp; professional development</li>
                <li>A supportive, mission-driven team</li>
              </ul>
              <Link href="/careers" className={styles.ctaLink}>
                View Open Positions <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right: image */}
            <div className={styles.imagePanel}>
              <Image
                src="/images/careers_team_1786972986372.jpg"
                alt="Diverse team of PN Support Care professionals"
                fill
                className={styles.image}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
