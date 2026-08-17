import { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/services/respite-care' },
  title: 'Respite Care Services | Home Care GTA',
  description: 'Dependable, temporary relief for family caregivers. Take time to rest and recharge while PN Support Care Solutions ensures your loved one is safe.',
};

export default function RespiteCareService() {
  const serviceData = {
    title: 'Respite Care',
    intro: 'Temporary, dependable relief for family caregivers, allowing you to rest while knowing your loved one is safe.',
    overview: 'Family caregiving is an act of deep love, but it is also physically and emotionally demanding. You cannot pour from an empty cup. Our Respite Care services provide you with a planned break—whether it’s for a few hours to run errands, a weekend to recharge, or longer periods to accommodate travel. We step in seamlessly, ensuring your loved one\'s routines are maintained without interruption.',
    whoItSupports: [
      'Spouses providing round-the-clock care',
      'Adult children balancing caregiving with careers and families',
      'Caregivers experiencing burnout or stress',
      'Families needing temporary coverage during vacations or emergencies'
    ],
    whatItIncludes: [
      'Continuity of existing care routines',
      'Companionship and engaging activities',
      'Personal care, bathing, and hygiene',
      'Meal preparation and medication reminders',
      'Overnight support or live-in coverage if needed',
      'Peace of mind and regular updates for the family'
    ],
    benefits: [
      'Prevents caregiver burnout and exhaustion',
      'Allows time for personal health and family matters',
      'Introduces a fresh, positive presence for the care recipient',
      'Provides a safe, professional safety net during emergencies'
    ],
    approach: 'We know how hard it is to hand over care responsibilities. Before you take your break, we conduct a detailed consultation to learn every nuance of your loved one\'s routine. Our goal is to make the transition as invisible as possible, providing care exactly the way you do, so you can step away without worry.',
    faqs: [
      {
        question: 'How quickly can respite care be arranged?',
        answer: 'We recommend planning ahead for vacations or scheduled breaks, but we also understand emergencies happen. Contact us as soon as you know you need support, and we will do everything possible to accommodate urgent requests.'
      },
      {
        question: 'Do I have to commit to a long-term contract?',
        answer: 'No. Respite care is designed to be flexible. You can arrange support for a single afternoon, a full week, or on a recurring basis (e.g., every Tuesday) without long-term commitments.'
      },
      {
        question: 'Can you care for someone with complex medical needs?',
        answer: 'Our personal support workers can manage complex daily living tasks, dementia care, and mobility challenges. If nursing-level medical care is required, we will assess our ability to support you safely during the consultation.'
      }
    ],
    relatedServices: [
      { title: 'Personal Support', href: '/services/personal-support' },
      { title: 'Dementia Care', href: '/services/dementia-care' },
      { title: 'Live-in Care', href: '/services/live-in-care' }
    ],
    heroImage: '/images/services/respite-care.jpg'
  };

  return <ServiceLayout {...serviceData} />;
}
