import React from 'react';
import { Quote, Star } from 'lucide-react';
import { ScrollReveal, ScrollRevealStagger } from '@/components/ui/ScrollReveal';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "The caregiver assigned to my mother has been nothing short of extraordinary. She's patient, warm, and attentive in ways we didn't expect. We finally feel at ease knowing Mum is in good hands.",
    author: "Sandra M.",
    location: "Toronto, ON",
    service: "Personal Support Services"
  },
  {
    quote: "After my father's hip surgery, PN Support helped him transition home safely. They coordinated everything — medication schedules, physiotherapy reminders, meals. I can't recommend them enough.",
    author: "Kevin O.",
    location: "Mississauga, ON",
    service: "Post-Hospital Recovery"
  },
  {
    quote: "Our family needed respite care on short notice and PN Support came through within 48 hours. Compassionate, professional, and truly caring. This team genuinely changes lives.",
    author: "Amara & James T.",
    location: "Oakville, ON",
    service: "Respite Care"
  }
];

export const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrow}>Client Stories</span>
            <div className={styles.eyebrowLine} />
          </div>
          <h2 className={styles.headline}>
            Trusted by families<br />across the GTA.
          </h2>
        </ScrollReveal>

        <ScrollRevealStagger className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={16} className={styles.star} fill="currentColor" />
                ))}
              </div>
              <Quote size={28} className={styles.quoteIcon} />
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <span className={styles.name}>{t.author}</span>
                <span className={styles.meta}>{t.location} · {t.service}</span>
              </div>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
};
