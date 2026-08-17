import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import styles from './JournalPreview.module.css';

const articles = [
  {
    category: 'Dementia Care',
    title: 'A Practical Guide to Dementia Home Care for GTA Families',
    excerpt: 'Understanding the signs that an older adult may need additional support and how to create safer, more consistent home routines.',
    href: '/care-journal/dementia-home-care-guide',
    image: '/images/journal_dementia_1786973008581.jpg',
    featured: true
  },
  {
    category: 'Home Safety',
    title: 'Aging Safely and Independently at Home',
    excerpt: 'Practical strategies for fall prevention, nutrition, and home safety.',
    href: '/care-journal/aging-safely-at-home',
    image: '/images/journal_safety_1786973019680.jpg',
    featured: false
  },
  {
    category: 'Family Caregiving',
    title: 'Preparing for a Safe Hospital Discharge',
    excerpt: 'Essential steps to ensure a comfortable and safe recovery environment after a hospital stay.',
    href: '/care-journal/safe-hospital-discharge',
    image: '/images/journal_discharge_1786973031666.jpg',
    featured: false
  }
];

export const JournalPreview = () => {
  const [featured, ...rest] = articles;
  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.eyebrowRow}>
            <div className={styles.left}>
              <span className={styles.eyebrow}>Care Journal</span>
              <div className={styles.eyebrowLine} />
            </div>
            <h2 className={styles.headline}>Expert guidance<br />for families.</h2>
            <Link href="/care-journal" className={styles.viewAll}>
              Read all articles <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className={styles.grid}>
            {/* Featured large card */}
            <Link href={featured.href} className={`${styles.card} ${styles.cardFeatured}`}>
              <div className={styles.imageWrap}>
                <Image src={featured.image} alt={featured.title} fill className={styles.image} sizes="(max-width: 768px) 100vw, 55vw" />
              </div>
              <div className={styles.content}>
                <span className={styles.category}>{featured.category}</span>
                <h3 className={styles.cardTitle}>{featured.title}</h3>
                <p className={styles.excerpt}>{featured.excerpt}</p>
                <span className={styles.readMore}>Read article <ArrowRight size={14} /></span>
              </div>
            </Link>

            {/* Side cards */}
            {rest.map((article, i) => (
              <Link key={i} href={article.href} className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image src={article.image} alt={article.title} fill className={styles.image} sizes="(max-width: 768px) 100vw, 30vw" />
                </div>
                <div className={styles.content}>
                  <span className={styles.category}>{article.category}</span>
                  <h3 className={styles.cardTitle}>{article.title}</h3>
                  <span className={styles.readMore}>Read article <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
