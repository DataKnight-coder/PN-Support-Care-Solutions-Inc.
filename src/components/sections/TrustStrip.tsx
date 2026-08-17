"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './TrustStrip.module.css';
import { ScrollRevealStagger } from '@/components/ui/ScrollReveal';

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + increment, target);
          setCount(Math.floor(current));
          if (current >= target) clearInterval(timer);
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={styles.statNumber}>
      {count}<span className={styles.statSuffix}>{suffix}</span>
    </span>
  );
}

export const TrustStrip = () => {
  const stats = [
    { value: 12, suffix: '+', label: 'Care Services Offered' },
    { value: 6,  suffix: '',  label: 'GTA Communities Served' },
    { value: 24, suffix: '/7', label: 'Available for Families' },
    { value: 100, suffix: '%', label: 'Client-Centred Care' },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollRevealStagger className={styles.grid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
};
