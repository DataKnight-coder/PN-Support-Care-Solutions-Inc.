'use client';

import React, { useRef, useState, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitConsultation } from '@/app/actions/submitConsultation';
import { Button } from '@/components/ui/Button';
import styles from './ConsultationForm.module.css';

const initialState = {
  success: false,
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <Button 
      type="submit" 
      variant="primary" 
      size="lg" 
      fullWidth 
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Request Consultation'}
    </Button>
  );
}

export const ConsultationForm = () => {
  const [state, formAction] = useActionState(submitConsultation, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // If success, we don't show the form anymore, just the success message
  if (state.success) {
    return (
      <div className={styles.successState}>
        <div className={styles.successIcon}>✓</div>
        <h3>Request Received</h3>
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <form ref={formRef} action={formAction} className={styles.form}>
        
        {/* Honeypot field (hidden from real users) */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" tabIndex={-1} autoComplete="off" />
        </div>

        {state.message && !state.success && (
          <div className={styles.errorState}>{state.message}</div>
        )}

        <div className={styles.formGrid}>
          <div className={styles.fieldGroup}>
            <label htmlFor="fullName" className={styles.label}>Full Name *</label>
            <input type="text" id="fullName" name="fullName" required className={styles.input} />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="phone" className={styles.label}>Phone Number *</label>
            <input type="tel" id="phone" name="phone" required className={styles.input} />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="email" className={styles.label}>Email Address *</label>
            <input type="email" id="email" name="email" required className={styles.input} />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="city" className={styles.label}>City (in GTA) *</label>
            <input type="text" id="city" name="city" required className={styles.input} />
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="whoRequiresCare" className={styles.label}>Who requires care? *</label>
          <select id="whoRequiresCare" name="whoRequiresCare" required className={styles.input}>
            <option value="">Please select...</option>
            <option value="Myself">Myself</option>
            <option value="Parent">Parent</option>
            <option value="Spouse">Spouse</option>
            <option value="Other Family Member">Other Family Member</option>
            <option value="Client/Patient">Client/Patient</option>
          </select>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="typeOfSupport" className={styles.label}>Type of support required *</label>
          <select id="typeOfSupport" name="typeOfSupport" required className={styles.input}>
            <option value="">Please select...</option>
            <option value="Personal Support">Personal Support</option>
            <option value="Companion Care">Companion Care</option>
            <option value="Dementia Care">Dementia & Alzheimer's Care</option>
            <option value="Respite Care">Respite Care</option>
            <option value="Post-Hospital">Post-Hospital Recovery</option>
            <option value="Live-in Care">Live-in Care</option>
            <option value="Not Sure Yet">Not Sure Yet</option>
          </select>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.fieldGroup}>
            <label htmlFor="preferredSchedule" className={styles.label}>Preferred Schedule</label>
            <select id="preferredSchedule" name="preferredSchedule" className={styles.input}>
              <option value="">Select option...</option>
              <option value="Few hours a week">A few hours a week</option>
              <option value="Daily visits">Daily visits</option>
              <option value="Overnight support">Overnight support</option>
              <option value="24/7 or Live-in">24/7 or Live-in</option>
            </select>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="whenNeeded" className={styles.label}>When is care needed?</label>
            <select id="whenNeeded" name="whenNeeded" className={styles.input}>
              <option value="">Select option...</option>
              <option value="Immediately">Immediately (Next 24-48 hours)</option>
              <option value="This week">This week</option>
              <option value="Next week">Next week</option>
              <option value="Planning for the future">Planning for the future</option>
            </select>
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Preferred contact method</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input type="radio" name="contactMethod" value="Phone" defaultChecked /> Phone
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="contactMethod" value="Email" /> Email
            </label>
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="additionalInfo" className={styles.label}>Additional Information (Optional)</label>
          <textarea 
            id="additionalInfo" 
            name="additionalInfo" 
            rows={4} 
            className={styles.input}
            placeholder="Please share any specific needs, health conditions, or questions you have."
          ></textarea>
        </div>

        <div className={styles.submitWrapper}>
          <SubmitButton />
          <p className={styles.privacyNote}>
            Your information is kept strictly confidential and will only be used by PN Support Care Solutions to coordinate your care consultation.
          </p>
        </div>
      </form>
    </div>
  );
};
