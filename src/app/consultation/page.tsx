import { Metadata } from 'next';
import { ConsultationForm } from './ConsultationForm';

export const metadata: Metadata = {
  alternates: { canonical: '/consultation' },
  title: 'Book a Care Consultation | PN Support Care Solutions',
  description: 'Schedule a free care consultation with PN Support Care Solutions. We provide personalized home care across the Greater Toronto Area.',
};

export default function ConsultationPage() {
  return (
    <>
      <section className="page-hero" style={{ backgroundColor: 'var(--color-warm-ivory)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--color-deep-navy)' }}>
            Let's Find the Right Care for You or Your Loved One.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-charcoal)', opacity: 0.9, lineHeight: 1.6, marginTop: 'var(--spacing-6)' }}>
            Complete the form below to request a complimentary care consultation. A member of our team will review your needs and contact you to discuss how we can help.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--spacing-16) 0', backgroundColor: 'var(--color-soft-aqua)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}
