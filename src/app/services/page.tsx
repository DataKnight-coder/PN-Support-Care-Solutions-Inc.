import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  alternates: { canonical: '/services' },
  title: 'Home Care Services | PN Support Care Solutions',
  description: 'Comprehensive home care services in the GTA. We offer personal support, dementia care, respite care, companion care, and post-hospital recovery support.',
};

export default function ServicesHubPage() {
  const services = [
    { title: 'Personal Support', description: 'Respectful assistance with daily hygiene and grooming.', href: '/services/personal-support' },
    { title: 'Companion Care', description: 'Meaningful social engagement and emotional support.', href: '/services/companion-care' },
    { title: 'Dementia Care', description: 'Specialized support for memory loss and Alzheimer\'s.', href: '/services/dementia-care' },
    { title: 'Respite Care', description: 'Dependable, temporary relief for family caregivers.', href: '/services/respite-care' },
    { title: 'Live-in Care', description: 'Continuous, 24/7 supervision and support in the home.', href: '/services/live-in-care' },
    { title: 'Post-Hospital Care', description: 'Transitional recovery support following a hospital stay.', href: '/services/post-hospital-care' },
    { title: 'Palliative Care', description: 'Compassionate end-of-life comfort and family support.', href: '/services/palliative-care' },
    { title: 'Disability Support', description: 'Empowering independence for adults with physical disabilities.', href: '/services/disability-support' },
    { title: 'Light Housekeeping', description: 'Maintaining a clean, safe, and hazard-free environment.', href: '/services/light-housekeeping' },
    { title: 'Meal Preparation', description: 'Nutritious, culturally appropriate meals prepared fresh.', href: '/services/meal-preparation' },
    { title: 'Medication Reminders', description: 'Reliable prompts to ensure safe prescription adherence.', href: '/services/medication-reminders' },
    { title: 'Transportation', description: 'Accompaniment to medical appointments and errands.', href: '/services/transportation' },
  ];

  return (
    <>
      <section className="page-hero" style={{ backgroundColor: 'var(--color-warm-ivory)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Services' }]} />
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-deep-navy)', margin: 'var(--spacing-6) 0', maxWidth: '800px' }}>
            Comprehensive Care Services
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-charcoal)', opacity: 0.9, lineHeight: 1.6, maxWidth: '700px' }}>
            We provide a full spectrum of home and community care services. Whether you need a few hours of companionship a week or round-the-clock live-in care, we tailor our support to your exact needs.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--spacing-16) 0', backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-6)' }}>
            {services.map((service, idx) => (
              <ServiceCard 
                key={idx}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
