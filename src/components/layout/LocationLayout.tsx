import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/sections/CTABanner';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { ChevronDown } from 'lucide-react';
import styles from './LocationLayout.module.css';

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePreview {
  title: string;
  description: string;
  href: string;
}

interface LocationLayoutProps {
  cityName: string;
  heroHeadline: string;
  heroDescription: string;
  localIntro: string;
  services: ServicePreview[];
  whoWeSupportText: string;
  localContext: string;
  faqs: FAQ[];
  nearbyLocations?: { name: string; href: string }[];
}

export const LocationLayout: React.FC<LocationLayoutProps> = ({
  cityName,
  heroHeadline,
  heroDescription,
  localIntro,
  services,
  whoWeSupportText,
  localContext,
  faqs,
  nearbyLocations = []
}) => {
  return (
    <>
      {/* Local Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>LOCAL CARE SERVICES</span>
            <h1 className={styles.title}>{heroHeadline}</h1>
            <p className={styles.intro}>{heroDescription}</p>
            <div className={styles.actions}>
              <Link href="/consultation">
                <Button size="lg" variant="primary">Book a Consultation in {cityName}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Intro */}
      <section className={styles.introSection}>
        <div className={`container ${styles.introContainer}`}>
          <h2 className={styles.sectionTitle}>Providing Compassionate Care in {cityName}</h2>
          <p className={styles.introText}>{localIntro}</p>
        </div>
      </section>

      {/* Services Available */}
      <section className={styles.servicesSection}>
        <div className={`container ${styles.servicesContainer}`}>
          <h2 className={styles.sectionTitle}>Home Care Services Available in {cityName}</h2>
          <div className={styles.serviceGrid}>
            {services.map((service, idx) => (
              <ServiceCard 
                key={idx}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Who We Support & Why Choose Us (Split) */}
      <section className={styles.splitSection}>
        <div className={`container ${styles.splitContainer}`}>
          <div className={styles.splitBlock}>
            <h2 className={styles.sectionTitle}>Who We Support in {cityName}</h2>
            <p className={styles.splitText}>{whoWeSupportText}</p>
            <ul className={styles.supportList}>
              <li>Seniors choosing to age in place</li>
              <li>Individuals living with dementia</li>
              <li>Patients recovering post-hospitalization</li>
              <li>Families requiring reliable respite care</li>
            </ul>
          </div>
          <div className={styles.splitBlock}>
            <h2 className={styles.sectionTitle}>Why Families Choose PN Support</h2>
            <ul className={styles.whyList}>
              <li>
                <strong>Personalized Approach:</strong> Care plans tailored to your specific routines and preferences.
              </li>
              <li>
                <strong>Professional Caregivers:</strong> Highly vetted, compassionate professionals from the {cityName} area.
              </li>
              <li>
                <strong>Flexible Scheduling:</strong> Support that scales from a few hours a week to 24/7 care.
              </li>
              <li>
                <strong>Local Focus:</strong> Deeply committed to the GTA community and responsive to local needs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Local Context & FAQs */}
      <section className={styles.contextFaqSection}>
        <div className={`container ${styles.contextFaqContainer}`}>
          
          <div className={styles.contextBlock}>
            <h2 className={styles.sectionTitle}>Our Commitment to {cityName}</h2>
            <p className={styles.contextText}>{localContext}</p>
            
            {nearbyLocations.length > 0 && (
              <div className={styles.nearbyBlock}>
                <h3>Also Serving Nearby Areas</h3>
                <div className={styles.nearbyGrid}>
                  {nearbyLocations.map((loc, idx) => (
                    <Link key={idx} href={loc.href} className={styles.nearbyLink}>
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className={styles.faqBlock}>
            <h2 className={styles.sectionTitle}>{cityName} Home Care FAQs</h2>
            <div className={styles.faqList}>
              {faqs.map((faq, idx) => (
                <details key={idx} className={styles.faqItem}>
                  <summary className={styles.faqSummary}>
                    {faq.question}
                    <ChevronDown size={20} className={styles.faqIcon} />
                  </summary>
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      <CTABanner 
        title={`Ready to start care in ${cityName}?`}
        description="Contact our team today to schedule a free, no-obligation care consultation in your home."
      />
    </>
  );
};
