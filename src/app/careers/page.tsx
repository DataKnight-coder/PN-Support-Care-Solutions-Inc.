import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ApplicationForm } from './ApplicationForm';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: '/careers' },
  title: 'Careers | Join PN Support Care Solutions',
  description: 'Build a meaningful career in home care. PN Support Care Solutions is hiring compassionate PSWs, nurses, and caregivers in the Greater Toronto Area.',
};

export default function CareersPage() {
  const benefits = [
    'Competitive compensation and direct deposit',
    'Flexible scheduling (Full-time, Part-time, Casual)',
    'Ongoing paid training and professional development',
    'A supportive, respectful leadership team',
    'Safe working environments with clear care plans',
    'WSIB coverage and full insurance protection'
  ];

  return (
    <>
      <section className="page-hero" style={{ backgroundColor: 'var(--color-deep-navy)', color: 'var(--color-white)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Breadcrumbs items={[{ label: 'Careers' }]} />
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-white)', margin: 'var(--spacing-6) 0' }}>
            Build a meaningful career in care.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-soft-aqua)', opacity: 0.9, lineHeight: 1.6 }}>
            We are always looking for compassionate, dedicated professionals who share our commitment to elevating the standard of home care in the GTA.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--spacing-16) 0', backgroundColor: 'var(--color-warm-ivory)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-12)' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-12)' }}>
              
              <div>
                <h2 style={{ fontSize: '2rem', color: 'var(--color-deep-navy)', marginBottom: 'var(--spacing-6)' }}>Why Join Our Team?</h2>
                <p style={{ fontSize: '1.125rem', color: 'var(--color-charcoal)', lineHeight: 1.6, marginBottom: 'var(--spacing-6)' }}>
                  Home care is physically and emotionally demanding work. We believe that to provide exceptional care to our clients, we must first provide exceptional support to our caregivers. At PN Support, you are never just a number on a schedule; you are a valued, respected professional.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                  {benefits.map((benefit, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-3)', fontSize: '1.0625rem', color: 'var(--color-charcoal)' }}>
                      <CheckCircle2 size={20} color="var(--color-care-teal)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: '2rem', color: 'var(--color-deep-navy)', marginBottom: 'var(--spacing-6)' }}>Apply Online</h2>
                <ApplicationForm />
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
