import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  alternates: { canonical: '/locations' },
  title: 'Areas We Serve | GTA Home Care Locations',
  description: 'PN Support Care Solutions provides dependable home care services across the Greater Toronto Area, including Toronto, Mississauga, Oakville, and Hamilton.',
};

export default function LocationsHubPage() {
  const locations = [
    { name: 'Toronto', href: '/locations/toronto' },
    { name: 'Mississauga', href: '/locations/mississauga' },
    { name: 'Oakville', href: '/locations/oakville' },
    { name: 'Milton', href: '/locations/milton' },
    { name: 'Burlington', href: '/locations/burlington' },
    { name: 'Hamilton', href: '/locations/hamilton' },
  ];

  return (
    <>
      <section className="page-hero" style={{ backgroundColor: 'var(--color-warm-ivory)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Locations' }]} />
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-deep-navy)', margin: 'var(--spacing-6) 0', maxWidth: '800px' }}>
            Areas We Serve
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-charcoal)', opacity: 0.9, lineHeight: 1.6, maxWidth: '700px' }}>
            PN Support Care Solutions is proud to provide professional, compassionate home care services across the Greater Toronto Area and surrounding regions.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--spacing-16) 0', backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--spacing-6)' }}>
            {locations.map((loc, idx) => (
              <Link 
                key={idx} 
                href={loc.href} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  padding: 'var(--spacing-8)', 
                  backgroundColor: 'var(--color-soft-aqua)', 
                  borderRadius: 'var(--radius-md)', 
                  color: 'var(--color-deep-navy)', 
                  fontWeight: 600, 
                  fontSize: '1.25rem',
                  textDecoration: 'none',
                  border: '1px solid var(--color-border)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {loc.name}
              </Link>
            ))}
          </div>
          
          <div style={{ marginTop: 'var(--spacing-16)', padding: 'var(--spacing-8)', backgroundColor: 'var(--color-warm-ivory)', borderRadius: 'var(--radius-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-deep-navy)', marginBottom: 'var(--spacing-4)' }}>Don't see your city listed?</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-charcoal)', lineHeight: 1.6 }}>
              We are continually expanding our service areas across Southern Ontario. If you reside near one of our listed locations, please contact us. We may still be able to accommodate your care needs or refer you to a trusted partner.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
