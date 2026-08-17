import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import styles from './CTABanner.module.css';

interface CTABannerProps {
  label?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: 'primary' | 'secondary' | 'light';
}

export const CTABanner: React.FC<CTABannerProps> = ({
  label = "Ready to get started?",
  title = "Let's find the right care for your family.",
  description = "Book a complimentary consultation today. We'll listen, answer your questions, and build a plan together — no pressure, no commitment.",
  primaryButtonText = "Book a Free Consultation",
  primaryButtonHref = "/consultation",
  secondaryButtonText = "Call 647-470-3892",
  secondaryButtonHref = "tel:647-470-3892",
  variant = 'primary'
}) => {
  return (
    <section className={`${styles.section} ${styles[`variant-${variant}`]}`}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.container}>
            <div className={styles.content}>
              <span className={styles.label}>{label}</span>
              <h2 className={styles.title}>{title}</h2>
              {description && <p className={styles.description}>{description}</p>}
            </div>
            <div className={styles.actions}>
              <Link href={primaryButtonHref} className={styles.primaryBtn}>
                {primaryButtonText} <ArrowRight size={18} />
              </Link>
              {secondaryButtonText && secondaryButtonHref && (
                <a href={secondaryButtonHref} className={styles.secondaryAction}>
                  {secondaryButtonText}
                </a>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
