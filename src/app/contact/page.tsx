import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Clock, MapPin, ArrowRight, MessageSquare } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'Contact Us | PN Support Care Solutions',
  description: 'Get in touch with PN Support Care Solutions. For general inquiries, care coordination, or to book a consultation, contact our GTA office.',
};

const contactDetails = [
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '647-470-3892',
    sub: 'Available 24/7 for care coordination',
    href: 'tel:647-470-3892',
  },
  {
    icon: <Clock size={20} />,
    label: 'Office Hours',
    value: 'Mon – Fri, 9am – 6pm',
    sub: 'Care services available 7 days a week',
    href: null,
  },
  {
    icon: <MapPin size={20} />,
    label: 'Service Area',
    value: 'Greater Toronto Area',
    sub: 'Toronto · Mississauga · Oakville · Burlington · Milton · Hamilton',
    href: '/locations',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="page-hero" style={{ background: 'var(--color-deep-navy)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/contact_hero.jpg"
            alt="PN Support Care Solutions office"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,43,73,0.93) 45%, rgba(0,43,73,0.55) 100%)' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
          <div style={{ maxWidth: '600px', marginTop: 'var(--spacing-8)' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-care-teal)', display: 'block', marginBottom: 'var(--spacing-5)' }}>
              Get in Touch
            </span>
            <h1 style={{ fontSize: 'clamp(2.75rem, 5vw, 4.75rem)', color: '#fff', lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: 'var(--spacing-6)' }}>
              We're here for you.
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: '480px' }}>
              Whether you have questions, need care guidance, or are ready to build a plan — our team is ready to listen and help.
            </p>
            <div style={{ marginTop: 'var(--spacing-8)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)', flexWrap: 'wrap' }}>
              <a href="tel:647-470-3892" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 26px', borderRadius: '999px',
                background: 'var(--color-care-teal)', color: '#fff',
                fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem',
                textDecoration: 'none'
              }}>
                <Phone size={18} /> Call 647-470-3892
              </a>
              <Link href="/consultation" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 26px', borderRadius: '999px',
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff',
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1rem',
                textDecoration: 'none'
              }}>
                Book Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Main: 2-column ─── */}
      <section style={{ padding: 'var(--spacing-24) 0', background: 'var(--color-warm-ivory)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--spacing-12)',
          }}
            className="contact-grid"
          >

            {/* LEFT — contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-care-teal)', display: 'block', marginBottom: 'var(--spacing-4)' }}>Contact Information</span>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--color-deep-navy)', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 'var(--spacing-2)' }}>
                  Talk to our care team.
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--color-charcoal)', opacity: 0.7, lineHeight: 1.7 }}>
                  For immediate care needs, we recommend using our{' '}
                  <Link href="/consultation" style={{ color: 'var(--color-care-teal)', fontWeight: 600, textDecoration: 'none' }}>
                    Care Consultation form
                  </Link>{' '}
                  so we can prepare for your specific situation.
                </p>
              </div>

              {/* Contact detail cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                {contactDetails.map((item, i) => (
                  <div key={i} style={{
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '14px',
                    padding: 'var(--spacing-6)',
                    display: 'flex',
                    gap: 'var(--spacing-4)',
                    alignItems: 'flex-start',
                  }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '10px',
                      background: 'var(--color-soft-aqua)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--color-care-teal)', flexShrink: 0
                    }}>
                      {item.icon}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-charcoal)', opacity: 0.5 }}>{item.label}</span>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-deep-navy)', textDecoration: 'none' }}>{item.value}</a>
                      ) : (
                        <span style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-deep-navy)' }}>{item.value}</span>
                      )}
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-charcoal)', opacity: 0.65 }}>{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick note */}
              <div style={{
                background: 'var(--color-deep-navy)',
                borderRadius: '14px',
                padding: 'var(--spacing-6)',
                display: 'flex',
                gap: 'var(--spacing-4)',
                alignItems: 'flex-start',
              }}>
                <MessageSquare size={20} style={{ color: 'var(--color-care-teal)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, margin: 0 }}>
                    We respond to all general inquiries within <strong style={{ color: '#fff' }}>1 business day</strong>. For urgent care needs, please call us directly.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — form */}
            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderRadius: '20px',
              padding: 'var(--spacing-10)',
            }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--color-deep-navy)', letterSpacing: '-0.02em', marginBottom: 'var(--spacing-2)' }}>
                Send Us a Message
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal)', opacity: 0.65, lineHeight: 1.6, marginBottom: 'var(--spacing-8)' }}>
                Fill out the form below and a member of our care team will follow up with you promptly.
              </p>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Responsive grid style via a style tag */}
      <style>{`
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1.3fr !important;
          }
        }
      `}</style>
    </>
  );
}
