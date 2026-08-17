import React from 'react';
import Link from 'next/link';
import { UserPlus, Heart, Brain, Clock, Activity, Home, ArrowRight } from 'lucide-react';
import { ScrollReveal, ScrollRevealStagger } from '@/components/ui/ScrollReveal';
import styles from './FeaturedServices.module.css';

export const FeaturedServices = () => {
  const services = [
    {
      title: 'Personal Support Services',
      description: 'Respectful assistance with daily activities, personal hygiene, and maintaining a comfortable home environment.',
      href: '/services/personal-support',
      icon: <UserPlus size={22} />
    },
    {
      title: 'Companion Care',
      description: 'Meaningful social interaction, engagement, and emotional support to prevent isolation and encourage activity.',
      href: '/services/companion-care',
      icon: <Heart size={22} />
    },
    {
      title: "Dementia & Alzheimer's Care",
      description: 'Specialized, compassionate support focused on safety, familiarity, and dignity for individuals living with memory loss.',
      href: '/services/dementia-care',
      icon: <Brain size={22} />
    },
    {
      title: 'Respite Care',
      description: 'Temporary, dependable relief for family caregivers, allowing you to rest while knowing your loved one is safe.',
      href: '/services/respite-care',
      icon: <Clock size={22} />
    },
    {
      title: 'Post-Hospital Recovery',
      description: 'Transitional care to support healing, manage new routines, and prevent readmission after a hospital stay.',
      href: '/services/post-hospital-care',
      icon: <Activity size={22} />
    },
    {
      title: 'Live-in Care',
      description: 'Around-the-clock peace of mind with a dedicated caregiver residing in the home to provide continuous support.',
      href: '/services/live-in-care',
      icon: <Home size={22} />
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrow}>Care Services</span>
            <div className={styles.eyebrowLine} />
          </div>
          <h2 className={styles.headline}>A complete range of<br />home care, built around you.</h2>
          <p className={styles.subheadline}>
            Whether you need daily support or just a few hours a week, we build a plan that adapts to your life — not the other way around.
          </p>
        </ScrollReveal>

        <ScrollRevealStagger className={styles.grid}>
          {services.map((service, index) => (
            <Link key={index} href={service.href} className={styles.card}>
              <div className={styles.iconCircle}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <span className={styles.cardArrow}>
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </ScrollRevealStagger>

        <div className={styles.footer}>
          <Link href="/services" className={styles.allServicesLink}>
            View all 12 care services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
