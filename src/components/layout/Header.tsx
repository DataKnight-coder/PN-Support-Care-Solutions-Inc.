"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Care Services', href: '/services' },
    { name: 'Areas We Serve', href: '/locations' },
    { name: 'Care Journal', href: '/care-journal' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>

        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/logos/logo.jpg"
            alt="PN Support Care Solutions"
            width={44}
            height={44}
            className={styles.logoImage}
            priority
          />
          <div className={styles.logoText}>
            <span className={styles.logoPrimary}>PN Support</span>
            <span className={styles.logoSecondary}>Care Solutions</span>
          </div>
        </Link>

        {/* Desktop Navigation — pill-style */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={styles.navLink}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.desktopActions}>
          <a href="tel:647-470-3892" className={styles.phoneLink}>
            <Phone size={15} strokeWidth={2} />
            <span>647-470-3892</span>
          </a>
          <Link href="/consultation" className={styles.ctaButton}>
            Book Consultation
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className={styles.mobileActions}>
          <a href="tel:647-470-3892" className={styles.mobilePhoneBtn} aria-label="Call us">
            <Phone size={18} />
          </a>
          <button
            className={styles.menuToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav>
          <ul className={styles.mobileNavList}>
            {[{ name: 'Home', href: '/' }, ...navLinks, { name: 'Contact', href: '/contact' }].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.mobileMenuFooter}>
          <Link
            href="/consultation"
            className={styles.mobileCtaButton}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </header>
  );
};
