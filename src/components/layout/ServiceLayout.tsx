import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/sections/CTABanner';
import styles from './ServiceLayout.module.css';

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceLayoutProps {
  title: string;
  intro: string;
  overview: string;
  whoItSupports: string[];
  whatItIncludes: string[];
  benefits: string[];
  approach: string;
  faqs: FAQ[];
  relatedServices?: { title: string; href: string }[];
  heroImage?: string;
}

export const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  intro,
  overview,
  whoItSupports,
  whatItIncludes,
  benefits,
  approach,
  faqs,
  relatedServices = [],
  heroImage
}) => {
  return (
    <>
      {/* Service Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.container}`}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>CARE SERVICES</span>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.intro}>{intro}</p>
          </div>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '21/9', marginTop: 'var(--spacing-8)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <Image 
              src={heroImage || "/images/service_banner_1786973054185.jpg"} 
              alt={title} 
              fill 
              style={{ objectFit: 'cover' }} 
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={`container ${styles.container}`}>
          <div className={styles.grid}>
            {/* Main Content Area */}
            <div className={styles.mainContent}>
              <div className={styles.card}>
                <h2>Overview</h2>
                <p>{overview}</p>
              </div>

            {/* Who It Supports & Benefits */}
            <div className={styles.splitBlock}>
              <div className={styles.listSection}>
                <h3>Who This Service Supports</h3>
                <ul className={styles.checkList}>
                  {whoItSupports.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={20} className={styles.checkIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.listSection}>
                <h3>Benefits</h3>
                <ul className={styles.checkList}>
                  {benefits.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={20} className={styles.checkIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What Support Can Include */}
            <div className={styles.sectionBlock}>
              <h2>What Support Can Include</h2>
              <div className={styles.supportGrid}>
                {whatItIncludes.map((item, idx) => (
                  <div key={idx} className={styles.supportItem}>{item}</div>
                ))}
              </div>
            </div>

            {/* Personalized Approach */}
            <div className={styles.sectionBlock}>
              <h2>Our Personalized Approach</h2>
              <p>{approach}</p>
            </div>

            {/* FAQs */}
            {faqs.length > 0 && (
              <div className={styles.sectionBlock}>
                <h2>Frequently Asked Questions</h2>
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
            )}
          </div>
          
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3>How Care Begins</h3>
              <ol className={styles.stepsList}>
                <li>Tell Us What You Need</li>
                <li>Complete a Care Consultation</li>
                <li>Receive a Personalized Care Plan</li>
                <li>Care Begins</li>
              </ol>
              <Link href="/consultation">
                <Button fullWidth variant="primary">Book a Consultation</Button>
              </Link>
            </div>

            {relatedServices.length > 0 && (
              <div className={styles.sidebarCard}>
                <h3>Related Services</h3>
                <ul className={styles.relatedList}>
                  {relatedServices.map((service, idx) => (
                    <li key={idx}>
                      <Link href={service.href} className={styles.relatedLink}>
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
          
          </div>
        </div>
      </section>

      <CTABanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": title,
            "provider": {
              "@type": "Organization",
              "name": "PN Support Care Solutions Inc."
            },
            "description": intro,
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 43.6532,
                "longitude": -79.3832
              },
              "geoRadius": "50000"
            }
          })
        }}
      />
    </>
  );
};
