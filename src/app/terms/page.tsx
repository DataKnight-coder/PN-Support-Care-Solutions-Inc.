import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
  title: 'Terms of Service | PN Support Care Solutions',
  description: 'Terms of Service for using the PN Support Care Solutions website and services.',
  alternates: { canonical: '/terms' }
};

export default function TermsOfServicePage() {
  return (
    <>
      <div className="bg-soft-aqua page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-deep-navy)', marginTop: 'var(--spacing-4)' }}>Terms of Service</h1>
        </div>
      </div>
      <section className="py-16">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-charcoal)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: 'var(--spacing-6)' }}><strong>Effective Date:</strong> August 17, 2026</p>
          
          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-care-teal)', marginBottom: 'var(--spacing-4)' }}>1. Acceptance of Terms</h2>
          <p style={{ marginBottom: 'var(--spacing-6)' }}>By accessing or using the website of PN Support Care Solutions Inc. ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>

          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-care-teal)', marginBottom: 'var(--spacing-4)' }}>2. Use of Services</h2>
          <p style={{ marginBottom: 'var(--spacing-6)' }}>The information provided on this website is for general informational purposes only. While we strive to provide accurate information regarding our home care services, it does not constitute professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions regarding a medical condition.</p>

          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-care-teal)', marginBottom: 'var(--spacing-4)' }}>3. Intellectual Property</h2>
          <p style={{ marginBottom: 'var(--spacing-6)' }}>All content, design, graphics, compilation, and other matters related to this website are protected under applicable copyrights, trademarks, and other proprietary laws. The copying, redistribution, use, or publication of any part of the website is strictly prohibited without our express written consent.</p>

          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-care-teal)', marginBottom: 'var(--spacing-4)' }}>4. Limitation of Liability</h2>
          <p style={{ marginBottom: 'var(--spacing-6)' }}>PN Support Care Solutions Inc. shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our website or services, even if we have been advised of the possibility of such damages.</p>
        </div>
      </section>
    </>
  );
}
