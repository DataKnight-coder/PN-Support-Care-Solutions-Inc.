import React from 'react';
import Link from 'next/link';
import { ScrollReveal, ScrollRevealStagger } from '@/components/ui/ScrollReveal';
import styles from './HowCareWorks.module.css';

export const HowCareWorks = () => {
  const steps = [
    {
      title: 'Tell Us What You Need',
      description: 'Reach out by phone or online. Share your situation, schedule, and the type of support you are looking for — no pressure, no obligation.'
    },
    {
      title: 'Complete a Care Consultation',
      description: 'We conduct a thorough in-home or virtual assessment to understand your clinical needs, lifestyle preferences, and care environment.'
    },
    {
      title: 'Receive Your Personalized Care Plan',
      description: 'We build a tailored support strategy and carefully match you with the most compatible, qualified caregiver from our team.'
    },
    {
      title: 'Care Begins',
      description: 'Your caregiver arrives fully briefed. We maintain regular communication and adapt the plan as your needs evolve over time.'
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>

          {/* Left — headline + CTA */}
          <ScrollReveal direction="left">
            <span className={styles.eyebrow}>How It Works</span>
            <h2 className={styles.headline}>
              Starting care should feel easy, not overwhelming.
            </h2>
            <p className={styles.description}>
              Our simple, human-centred process gets you the right support quickly — with no bureaucracy, no guesswork, and no unnecessary stress.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/consultation" className={styles.primaryCta}>
                Book a Free Consultation
              </Link>
              <a href="tel:647-470-3892" className={styles.secondaryCta}>
                Or call 647-470-3892
              </a>
            </div>
          </ScrollReveal>

          {/* Right — vertical timeline */}
          <ScrollRevealStagger className={styles.steps}>
            {steps.map((step, i) => (
              <div key={i} className={styles.step}>
                <div className={styles.stepLeft}>
                  <div className={styles.stepDot}>0{i + 1}</div>
                  {i < steps.length - 1 && <div className={styles.stepLine} />}
                </div>
                <div className={styles.stepRight}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            ))}
          </ScrollRevealStagger>

        </div>
      </div>
    </section>
  );
};
