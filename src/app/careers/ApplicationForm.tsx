'use client';

import React, { useRef, useState, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitApplication } from '@/app/actions/submitApplication';
import { Button } from '@/components/ui/Button';

const initialState = {
  success: false,
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="primary" size="lg" disabled={pending}>
      {pending ? 'Submitting Application...' : 'Submit Application'}
    </Button>
  );
}

export const ApplicationForm = () => {
  const [state, formAction] = useActionState(submitApplication, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  if (state.success) {
    return (
      <div style={{ backgroundColor: 'var(--color-soft-aqua)', padding: 'var(--spacing-12)', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid var(--color-care-teal)' }}>
        <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-4)' }}>🎉</div>
        <h3 style={{ color: 'var(--color-deep-navy)', marginBottom: 'var(--spacing-2)', fontSize: '1.5rem' }}>Application Received</h3>
        <p style={{ color: 'var(--color-charcoal)', fontSize: '1.125rem' }}>{state.message}</p>
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
            <label htmlFor="phone" style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-deep-navy)' }}>Phone Number *</label>
            <input type="tel" id="phone" name="phone" required style={{ padding: 'var(--spacing-3)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
            <label htmlFor="position" style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-deep-navy)' }}>Position Applying For *</label>
            <select id="position" name="position" required style={{ padding: 'var(--spacing-3)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
              <option value="">Select a role...</option>
              <option value="Personal Support Worker (PSW)">Personal Support Worker (PSW)</option>
              <option value="Registered Nurse (RN/RPN)">Registered Nurse (RN/RPN)</option>
              <option value="Companion Caregiver">Companion Caregiver</option>
              <option value="Care Coordinator">Care Coordinator</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
          <label htmlFor="resume" style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-deep-navy)' }}>Upload Resume (PDF, DOC, DOCX - Max 5MB) *</label>
          <div style={{ position: 'relative' }}>
            <input 
              type="file" 
              id="resume" 
              name="resume" 
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              required 
              onChange={handleFileChange}
              style={{ 
                opacity: 0, 
                position: 'absolute', 
                top: 0, left: 0, right: 0, bottom: 0, 
                width: '100%', cursor: 'pointer' 
              }} 
            />
            <div style={{ 
              padding: 'var(--spacing-4)', 
              border: '2px dashed var(--color-border)', 
              borderRadius: 'var(--radius-sm)', 
              textAlign: 'center', 
              backgroundColor: 'var(--color-warm-ivory)',
              color: 'var(--color-charcoal)'
            }}>
              {fileName ? <span style={{ fontWeight: 600, color: 'var(--color-care-teal)' }}>Selected: {fileName}</span> : 'Click or drag file to upload'}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
          <label htmlFor="coverLetter" style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-deep-navy)' }}>Cover Letter / Notes (Optional)</label>
          <textarea id="coverLetter" name="coverLetter" rows={4} style={{ padding: 'var(--spacing-3)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', resize: 'vertical' }}></textarea>
        </div>

        <div style={{ marginTop: 'var(--spacing-4)' }}>
          <SubmitButton />
          <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal)', opacity: 0.7, marginTop: 'var(--spacing-3)' }}>
            All applicant information is processed securely and kept strictly confidential.
          </p>
        </div>
      </form>
    </div>
  );
};
