import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTABanner } from '@/components/sections/CTABanner';
import { ChevronDown } from 'lucide-react';
import styles from './Faqs.module.css'; // Will create this

export const metadata: Metadata = {
  alternates: { canonical: '/faqs' },
  title: 'Frequently Asked Questions | PN Support Care Solutions',
  description: 'Answers to common questions about home care, costs, scheduling, and our caregiver screening process in the Greater Toronto Area.',
};

export default function FaqsPage() {
  const faqs = [
    {
      category: 'General Care Questions',
      questions: [
        { q: 'How quickly can home care services start?', a: 'We understand that care needs often arise unexpectedly. In most cases, we can conduct a care consultation and begin services within 24 to 48 hours of your initial contact.' },
        { q: 'Do I have to sign a long-term contract?', a: 'No. We do not require long-term commitments. Care is provided on a flexible basis, and you can adjust or cancel services with reasonable notice (typically 24-48 hours) without penalty.' },
        { q: 'What happens if my regular caregiver is sick or on vacation?', a: 'We never leave you without support. We employ a team approach, ensuring that a fully briefed, secondary caregiver is always available to step in seamlessly if your primary caregiver is unavailable.' }
      ]
    },
    {
      category: 'Our Caregivers',
      questions: [
        { q: 'How do you screen your caregivers?', a: 'Every caregiver on our team undergoes a rigorous multi-step vetting process. This includes in-depth behavioral interviews, professional reference checks, vulnerable sector police screening, and verification of all relevant certifications (such as PSW, CPR, and First Aid).' },
        { q: 'Are your caregivers bonded and insured?', a: 'Yes. All PN Support Care Solutions caregivers are fully bonded, insured, and covered by WSIB, providing you with complete peace of mind while they are in your home.' },
        { q: 'Can I interview the caregiver before they start?', a: 'During our initial consultation, we focus on matching the caregiver’s skills and personality to your needs. While formal interviews aren’t typical, we always introduce the caregiver before services begin. If the match isn’t perfect, we will gladly assign someone else.' }
      ]
    },
    {
      category: 'Costs and Funding',
      questions: [
        { q: 'Is home care covered by OHIP?', a: 'Private home care is not directly covered by OHIP. However, services may be subsidized or funded through Home and Community Care Support Services (formerly LHIN), Veterans Affairs, or long-term care insurance policies. We can help you navigate these options.' },
        { q: 'How are your services billed?', a: 'We bill on a clear, hourly or daily rate (for live-in care) with no hidden fees. Invoices are typically sent bi-weekly and can be paid via credit card, e-transfer, or pre-authorized debit.' }
      ]
    }
  ];

  return (
    <>
      <section className="page-hero" style={{ backgroundColor: 'var(--color-warm-ivory)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Breadcrumbs items={[{ label: 'FAQs' }]} />
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-deep-navy)', margin: 'var(--spacing-6) 0' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-charcoal)', opacity: 0.9, lineHeight: 1.6 }}>
            Navigating home care can be overwhelming. We've compiled answers to the most common questions families ask us.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--spacing-16) 0', backgroundColor: 'var(--color-white)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
            {faqs.map((category, idx) => (
              <div key={idx}>
                <h2 style={{ fontSize: '1.75rem', color: 'var(--color-deep-navy)', borderBottom: '2px solid var(--color-border)', paddingBottom: 'var(--spacing-4)', marginBottom: 'var(--spacing-6)' }}>
                  {category.category}
                </h2>
                <div className={styles.faqList}>
                  {category.questions.map((faq, fIdx) => (
                    <details key={fIdx} className={styles.faqItem}>
                      <summary className={styles.faqSummary}>
                        {faq.q}
                        <ChevronDown size={20} className={styles.faqIcon} />
                      </summary>
                      <div className={styles.faqAnswer}>
                        <p>{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Still have questions?" description="Our care coordination team is available to answer any specific questions you have about our services or your unique situation." primaryButtonText="Contact Us Today" primaryButtonHref="/contact" variant="light" />
    </>
  );
}
