import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import styles from './FeaturedStory.module.css';

export const FeaturedStory = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.inner}>

            {/* Left — full-bleed photography */}
            <div className={styles.imagePanel}>
              <Image
                src="/images/featured_story_1786972976294.jpg"
                alt="Caregiver providing compassionate home support"
                fill
                className={styles.image}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className={styles.imageTint} />
            </div>

            {/* Right — editorial content */}
            <div className={styles.contentPanel}>
              <span className={styles.eyebrow}>Our Philosophy</span>
              <h2 className={styles.headline}>
                Supporting independence without compromising dignity.
              </h2>
              <p className={styles.description}>
                We know that inviting a caregiver into your home requires immense trust. That's why we focus on more than just physical support — we focus on the whole person.
              </p>
              <p className={styles.paragraphTwo}>
                Whether it's helping prepare a favourite meal, offering a steady hand during a morning walk, or simply being a dependable companion — our caregivers are trained to honour the boundaries and preferences of every individual in their care.
              </p>
              <div className={styles.signature}>
                <span className={styles.sigName}>The PN Support Care Team</span>
                <span className={styles.sigRole}>Serving the Greater Toronto Area</span>
              </div>
              <Link href="/about" className={styles.ctaLink}>
                Learn about our approach <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
