import { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/services/live-in-care' },
  title: 'Live-in Care Services | 24/7 Home Care GTA',
  description: 'Continuous, round-the-clock support providing ultimate peace of mind. PN Support Care Solutions offers professional live-in care across the GTA.',
};

export default function LiveInCareService() {
  const serviceData = {
    title: 'Live-in Care',
    intro: 'Continuous, round-the-clock support providing ultimate peace of mind and an alternative to long-term care facilities.',
    overview: 'When care needs become continuous, many families assume a nursing home or assisted living facility is the only option. Live-in Care provides a viable, highly personalized alternative. A dedicated caregiver resides in the home, providing consistent one-on-one support throughout the day. This comprehensive service ensures safety, companionship, and immediate assistance while allowing your loved one to remain in the environment they cherish.',
    whoItSupports: [
      'Seniors requiring constant supervision for safety',
      'Individuals with advanced dementia or Alzheimer\'s',
      'Those recovering from a major medical event, like a stroke',
      'Couples who wish to stay together but need significant support'
    ],
    whatItIncludes: [
      'Round-the-clock presence and peace of mind',
      'Comprehensive personal care (bathing, dressing, toileting)',
      'Full meal planning, preparation, and nutritional support',
      'Medication reminders and strict schedule adherence',
      'Light housekeeping, laundry, and maintaining a safe environment',
      'Companionship, engagement, and accompaniment to appointments'
    ],
    benefits: [
      'A safe, cost-effective alternative to institutional care',
      'Unmatched continuity of care and strong caregiver bonding',
      'Immediate response to changing needs or emergencies',
      'Complete peace of mind for family members living far away'
    ],
    approach: 'Live-in care requires an exceptional level of compatibility. We take great care in matching the caregiver’s personality, lifestyle, and skills with your loved one. Our live-in caregivers are highly experienced professionals who understand how to maintain professional boundaries while fostering a warm, familial connection. We also implement a rotating schedule with a primary and secondary caregiver to ensure the care recipient always has fresh, rested support.',
    faqs: [
      {
        question: 'What are the accommodation requirements for a live-in caregiver?',
        answer: 'The client must provide a private bedroom and access to a bathroom for the caregiver. The caregiver also requires time for adequate sleep (typically 8 uninterrupted hours) and scheduled breaks during the day.'
      },
      {
        question: 'What happens if my loved one needs assistance multiple times during the night?',
        answer: 'Live-in care is designed for clients who generally sleep through the night, with perhaps one minor assistance need. If your loved one requires frequent overnight assistance (e.g., turning, wandering prevention), we recommend 24/7 continuous care (shift care) instead, where caregivers remain fully awake.'
      },
      {
        question: 'What happens when the primary caregiver takes time off?',
        answer: 'We operate with a small, dedicated care team for each client. When the primary caregiver goes on break or vacation, a fully briefed secondary caregiver steps in seamlessly, ensuring no interruption to routines.'
      }
    ],
    relatedServices: [
      { title: 'Dementia Care', href: '/services/dementia-care' },
      { title: 'Personal Support', href: '/services/personal-support' },
      { title: 'Companion Care', href: '/services/companion-care' }
    ]
  };

  return <ServiceLayout {...serviceData} />;
}
