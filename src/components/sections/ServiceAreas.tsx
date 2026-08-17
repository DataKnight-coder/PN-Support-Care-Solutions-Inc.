import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, ScrollRevealStagger } from '@/components/ui/ScrollReveal';
import styles from './ServiceAreas.module.css';

export const ServiceAreas = () => {
  const locations = [
    { name: 'Toronto', region: 'City of Toronto' },
    { name: 'Mississauga', region: 'Peel Region' },
    { name: 'Oakville', region: 'Halton Region' },
    { name: 'Burlington', region: 'Halton Region' },
    { name: 'Milton', region: 'Halton Region' },
    { name: 'Hamilton', region: 'Hamilton CMA' },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrow}>Service Coverage</span>
            <div className={styles.eyebrowLine} />
          </div>
          <h2 className={styles.headline}>
            Serving families across<br />the Greater Toronto Area.
          </h2>
        </ScrollReveal>

        <div className={styles.inner}>
          {/* Left — location cards */}
          <ScrollRevealStagger className={styles.locationsGrid}>
            {locations.map((loc) => (
              <Link
                key={loc.name}
                href={`/locations/${loc.name.toLowerCase()}`}
                className={styles.locationCard}
              >
                <span className={styles.locationName}>{loc.name}</span>
                <span className={styles.locationRegion}>{loc.region}</span>
              </Link>
            ))}
          </ScrollRevealStagger>

          {/* Right — coverage panel */}
          <ScrollReveal direction="right">
            <div className={styles.mapPanel}>
              <h3 className={styles.mapTitle}>Our Coverage Area</h3>
              <p className={styles.mapDescription}>
                PN Support Care Solutions operates throughout the Greater Toronto Area, providing dependable home and community care to families across the region's most populated communities.
              </p>
              <div className={styles.coverageNote}>
                <div className={styles.coverageDot} />
                <span className={styles.coverageText}>Serving 6 major GTA communities</span>
              </div>
              <div className={styles.coverageNote}>
                <div className={styles.coverageDot} />
                <span className={styles.coverageText}>Available 24 hours, 7 days a week</span>
              </div>
              <div className={styles.coverageNote}>
                <div className={styles.coverageDot} />
                <span className={styles.coverageText}>Flexible scheduling — hours or full-time</span>
              </div>
              <Link href="/locations" className={styles.viewAllLink}>
                View all service areas <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
