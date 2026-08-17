'use client';

import React, { useRef, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContact } from '@/app/actions/submitContact';
import { Button } from '@/components/ui/Button';

const initialState = {
  success: false,
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="primary" size="lg" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export const ContactForm = () => {
  const [state, formAction] = useActionState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  if (state.success) {
    return (
      <div style={{ backgroundColor: 'var(--color-white)', padding: 'var(--spacing-8)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
        <h3 style={{ color: 'var(--color-deep-navy)', marginBottom: 'var(--spacing-2)' }}>Message Sent</h3>
        <p style={{ color: 'var(--color-charcoal)' }}>{state.message}</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--color-white)', padding: 'var(--spacing-8)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
      <form ref={formRef} action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
        
        {/* Honeypot field */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <input type="text" name="address" tabIndex={-1} autoComplete="off" />
        </div>

        {state.message && !state.success && (
          <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'rgba(229, 62, 62, 0.1)', color: 'var(--color-error)', borderRadius: 'var(--radius-sm)' }}>
            {state.message}
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-6)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
            <label htmlFor="fullName" style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-deep-navy)' }}>Full Name *</label>
            <input type="text" id="fullName" name="fullName" required style={{ padding: 'var(--spacing-3)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
            <label htmlFor="email" style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-deep-navy)' }}>Email Address *</label>
            <input type="email" id="email" name="email" required style={{ padding: 'var(--spacing-3)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-6)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
            <label htmlFor="phone" style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-deep-navy)' }}>Phone Number</label>
            <input type="tel" id="phone" name="phone" style={{ padding: 'var(--spacing-3)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
            <label htmlFor="inquiryType" style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-deep-navy)' }}>Inquiry Type</label>
            <select id="inquiryType" name="inquiryType" style={{ padding: 'var(--spacing-3)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
              <option value="General Question">General Question</option>
              <option value="Billing/Admin">Billing & Administration</option>
              <option value="Partnership">Partnership/Community</option>
              <option value="Careers">Careers (General)</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
          <label htmlFor="message" style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-deep-navy)' }}>Message *</label>
          <textarea id="message" name="message" required rows={5} style={{ padding: 'var(--spacing-3)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', resize: 'vertical' }}></textarea>
        </div>

        <div>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};
