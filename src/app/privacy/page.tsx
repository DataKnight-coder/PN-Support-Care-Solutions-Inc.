import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
  title: 'Privacy Policy | PN Support Care Solutions',
  description: 'Learn how PN Support Care Solutions collects, uses, and protects your personal and health information in accordance with Canadian PIPEDA regulations.',
  alternates: { canonical: '/privacy' }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-soft-aqua page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-deep-navy)', marginTop: 'var(--spacing-4)' }}>Privacy Policy</h1>
        </div>
      </div>
      <section className="py-16">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-charcoal)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: 'var(--spacing-6)' }}><strong>Effective Date:</strong> August 17, 2026</p>
          
          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-care-teal)', marginBottom: 'var(--spacing-4)' }}>1. Introduction</h2>
          <p style={{ marginBottom: 'var(--spacing-6)' }}>At PN Support Care Solutions Inc., we are committed to protecting the privacy and confidentiality of our clients, their families, and our staff. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of personal and personal health information in compliance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial health privacy legislation in Ontario.</p>

          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-care-teal)', marginBottom: 'var(--spacing-4)' }}>2. Information We Collect</h2>
          <p style={{ marginBottom: 'var(--spacing-4)' }}>We may collect personal information directly from you or your authorized representatives, including:</p>
          <ul style={{ marginBottom: 'var(--spacing-6)', paddingLeft: 'var(--spacing-6)' }}>
            <li style={{ marginBottom: 'var(--spacing-2)' }}><strong>Contact Information:</strong> Names, addresses, phone numbers, and email addresses.</li>
            <li style={{ marginBottom: 'var(--spacing-2)' }}><strong>Health Information:</strong> Medical history, current health status, care requirements, and emergency contacts to provide safe and effective care.</li>
            <li style={{ marginBottom: 'var(--spacing-2)' }}><strong>Billing Information:</strong> Payment details and insurance information.</li>
            <li style={{ marginBottom: 'var(--spacing-2)' }}><strong>Website Usage Data:</strong> IP addresses and cookies used for analytics and improving our website experience.</li>
          </ul>

          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-care-teal)', marginBottom: 'var(--spacing-4)' }}>3. How We Use Your Information</h2>
          <p style={{ marginBottom: 'var(--spacing-6)' }}>Your information is used exclusively to deliver personalized home care services, process billing, communicate with you regarding your care plan, and comply with legal and regulatory obligations. We do not sell or rent your personal information to third parties.</p>

          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-care-teal)', marginBottom: 'var(--spacing-4)' }}>4. Data Security</h2>
          <p style={{ marginBottom: 'var(--spacing-6)' }}>We implement robust physical, technical, and administrative safeguards to protect your personal and health information against unauthorized access, disclosure, or misuse. Access to your health records is strictly limited to authorized personnel directly involved in your care.</p>

          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-care-teal)', marginBottom: 'var(--spacing-4)' }}>5. Contact Us</h2>
          <p style={{ marginBottom: 'var(--spacing-6)' }}>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact our Privacy Officer at:</p>
          <p>
            <strong>PN Support Care Solutions Inc.</strong><br />
            Phone: <a href="tel:647-470-3892" style={{ color: 'var(--color-care-teal)' }}>647-470-3892</a><br />
            Email: <a href="mailto:perpetualnyarko1561@gmail.com" style={{ color: 'var(--color-care-teal)' }}>perpetualnyarko1561@gmail.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
