import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HeartHandshake, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  alternates: { canonical: '/about' },
  title: 'About Us | PN Support Care Solutions',
  description: 'Learn about PN Support Care Solutions — our mission, values, and commitment to elevating home care across the Greater Toronto Area.',
};

const values = [
  {
    icon: <HeartHandshake size={22} />,
    title: 'Compassion First',
    description: 'We approach every client interaction with genuine empathy, patience, and kindness — never routine, always personal.'
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Unwavering Reliability',
    description: 'When we commit to a care schedule, families can rest assured we will be there — on time, prepared, and fully present.'
  },
  {
    icon: <Users size={22} />,
    title: 'Dignity & Respect',
    description: 'We honour the life experiences, cultural backgrounds, and personal boundaries of every individual in our care.'
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Continuous Excellence',
    description: 'We invest in the ongoing training and support of our caregivers, knowing they are the heart of everything we deliver.'
  }
];

const stats = [
  { value: '12+', label: 'Care Services' },
  { value: '6',   label: 'GTA Communities' },
  { value: '24/7', label: 'Family Support' },
  { value: '100%', label: 'Client-Centred' },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="page-hero" style={{ background: 'var(--color-deep-navy)', position: 'relative', overflow: 'hidden' }}>
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/about_hero.jpg"
            alt="PN Support Care Solutions team"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,43,73,0.92) 40%, rgba(0,43,73,0.5) 100%)' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          <div style={{ maxWidth: '640px', marginTop: 'var(--spacing-8)' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-care-teal)', display: 'block', marginBottom: 'var(--spacing-5)' }}>
              Our Story
            </span>
            <h1 style={{ fontSize: 'clamp(2.75rem, 5vw, 5rem)', color: '#fff', lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: 'var(--spacing-6)' }}>
              Elevating the standard of home care in the GTA.
            </h1>
            <p style={{ fontSize: '1.1875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: '520px' }}>
              At PN Support Care Solutions, we believe that ageing or recovering at home should never mean compromising on quality of care or quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Stats strip ─── */}
      <section style={{ background: 'var(--color-care-teal)', padding: 'var(--spacing-10) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1px', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', overflow: 'hidden' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.08)', padding: 'var(--spacing-8)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#fff', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '6px' }}>{s.value}</div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mission ─── */}
      <section style={{ padding: 'var(--spacing-24) 0', background: 'var(--color-warm-ivory)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-16)' }}>
            {/* Two-column on desktop */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-12)' }}>

              {/* Our Mission */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-10)', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--spacing-12)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-care-teal)', display: 'block', marginBottom: 'var(--spacing-4)' }}>Our Mission</span>
                  <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: 'var(--color-deep-navy)', lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '560px', marginBottom: 'var(--spacing-6)' }}>
                    Care that honours the life you've built.
                  </h2>
                  <p style={{ fontSize: '1.125rem', color: 'var(--color-charcoal)', lineHeight: 1.75, opacity: 0.8, maxWidth: '600px' }}>
                    Our mission is to provide deeply personalized, compassionate, and highly professional home care services that empower seniors and individuals with support needs to live with dignity and independence in the comfort of their own homes.
                  </p>
                </div>
              </div>

              {/* Why We Started */}
              <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--spacing-12)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-care-teal)', display: 'block', marginBottom: 'var(--spacing-4)' }}>Our Origin</span>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-deep-navy)', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 'var(--spacing-6)' }}>
                  Why we started.
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-4)', maxWidth: '720px' }}>
                  <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal)', lineHeight: 1.75, opacity: 0.8 }}>
                    Navigating the healthcare system and finding reliable home support for a loved one is often an overwhelming and frustrating experience for families. We saw a critical need in the Greater Toronto Area for a home care agency that wasn't just reliable — but genuinely empathetic.
                  </p>
                  <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal)', lineHeight: 1.75, opacity: 0.8 }}>
                    We founded PN Support Care Solutions to be the team that families can implicitly trust. We don't believe in rigid, one-size-fits-all care plans. We believe in building relationships, understanding the person behind the care requirements, and delivering support that feels like an extension of family.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Values ─── */}
      <section style={{ padding: 'var(--spacing-24) 0', background: 'var(--color-white)' }}>
        <div className="container">
          <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-care-teal)', display: 'block', marginBottom: 'var(--spacing-4)' }}>What Drives Us</span>
          <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', color: 'var(--color-deep-navy)', lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: 'var(--spacing-16)' }}>
            Our core values.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--spacing-5)' }}>
            {values.map((v, i) => (
              <div key={i} style={{
                background: 'var(--color-warm-ivory)',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                padding: 'var(--spacing-8)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-4)'
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'var(--color-soft-aqua)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-care-teal)'
                }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '1.125rem', color: 'var(--color-deep-navy)', fontFamily: 'var(--font-body)', fontWeight: 600, margin: 0 }}>{v.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal)', lineHeight: 1.65, opacity: 0.75, margin: 0 }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Commitment band ─── */}
      <section style={{ padding: 'var(--spacing-20) 0', background: 'var(--color-soft-aqua)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', alignItems: 'flex-start', maxWidth: '720px' }}>
          <blockquote style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            color: 'var(--color-deep-navy)',
            lineHeight: 1.2,
            letterSpacing: '-0.03em',
            margin: 0,
            borderLeft: '4px solid var(--color-care-teal)',
            paddingLeft: 'var(--spacing-8)'
          }}>
            "We don't just deliver care — we build relationships that make a genuine difference."
          </blockquote>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-care-teal)', fontWeight: 600, paddingLeft: 'calc(var(--spacing-8) + 4px)' }}>
            — The PN Support Care Solutions Team
          </p>
          <div style={{ paddingLeft: 'calc(var(--spacing-8) + 4px)', marginTop: 'var(--spacing-4)' }}>
            <Link href="/services" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px', borderRadius: '999px',
              background: 'var(--color-deep-navy)', color: '#fff',
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9375rem',
              textDecoration: 'none'
            }}>
              Explore our care services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner variant="secondary" />
    </>
  );
}
