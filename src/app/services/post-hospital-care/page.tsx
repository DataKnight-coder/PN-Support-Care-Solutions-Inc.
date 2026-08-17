import { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/services/post-hospital-care' },
  title: 'Post-Hospital Recovery Care | Home Care GTA',
  description: 'Safe, transitional home care following surgery or hospitalization. PN Support helps prevent readmission and supports a smooth recovery in the GTA.',
};

export default function PostHospitalCareService() {
  const serviceData = {
    title: 'Post-Hospital Recovery Care',
    intro: 'Safe, transitional home care designed to prevent hospital readmission and support a smooth, comfortable recovery.',
    overview: 'The first few weeks after being discharged from the hospital are critical for recovery. Without adequate support, the risk of falls, medication errors, and readmission increases significantly. Our Post-Hospital Recovery Care bridges the gap between hospital and complete independence. We provide the temporary, intensive support needed to safely navigate this vulnerable transition period.',
    whoItSupports: [
      'Individuals recovering from orthopedic surgery (e.g., hip or knee replacement)',
      'Patients discharged after a cardiac event or stroke',
      'Seniors recovering from an acute illness like pneumonia',
      'Anyone needing temporary assistance while regaining their strength'
    ],
    whatItIncludes: [
      'Safe transfer assistance and mobility support',
      'Strict adherence to discharge plans and medication schedules',
      'Transportation to follow-up medical appointments',
      'Infection prevention through proper hygiene and wound care monitoring',
      'Nutritious meal preparation to aid healing',
      'Light housekeeping to maintain a safe, obstacle-free environment'
    ],
    benefits: [
      'Significantly reduces the risk of hospital readmission',
      'Accelerates healing by ensuring proper nutrition and rest',
      'Prevents falls and injuries in a weakened state',
      'Relieves stress for family members who cannot provide 24/7 recovery support'
    ],
    approach: 'Coordination is key to recovery. We prefer to be involved before discharge, understanding the medical team\'s instructions, dietary restrictions, and physical therapy routines. Our caregivers implement this plan meticulously, communicating any changes in condition immediately. As you regain strength, we gracefully scale back our support, always encouraging your independence.',
    faqs: [
      {
        question: 'Do you coordinate with home-visiting physical therapists or nurses?',
        answer: 'Yes. Our caregivers work collaboratively with LHIN-provided (Home and Community Care Support Services) nurses and therapists, assisting the client with prescribed daily exercises between professional visits.'
      },
      {
        question: 'Can I start with 24/7 care and reduce hours as I recover?',
        answer: 'Absolutely. This is the most common approach. We often provide live-in or 24/7 shift care for the first critical week post-discharge, and then gradually reduce to a few hours a day as you regain independence.'
      },
      {
        question: 'Will the caregiver pick up prescriptions on the way home from the hospital?',
        answer: 'Yes, we can arrange for our caregivers to manage pharmacy pick-ups, grocery shopping, and home preparation before or on the day of discharge.'
      }
    ],
    relatedServices: [
      { title: 'Personal Support', href: '/services/personal-support' },
      { title: 'Medication Reminders', href: '/services/medication-reminders' },
      { title: 'Meal Preparation', href: '/services/meal-preparation' }
    ]
  };

  return <ServiceLayout {...serviceData} />;
}
