import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, href, icon }) => {
  return (
    <Link href={href} className={styles.card}>
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.action}>
        <span>Learn more</span>
        <ArrowRight size={16} />
      </div>
    </Link>
  );
};
