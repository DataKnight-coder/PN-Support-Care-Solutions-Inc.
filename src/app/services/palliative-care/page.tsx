import { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/services/palliative-care' },
  title: 'Palliative Home Care Services | PN Support Care Solutions',
  description: 'Compassionate, end-of-life care in the comfort of home. PN Support provides respectful palliative care focusing on comfort, dignity, and family support.',
};

export default function PalliativeCareService() {
  const serviceData = {
    title: 'Palliative Care',
    intro: 'Compassionate, specialized support focused on maximizing comfort, dignity, and quality of life during a life-limiting illness.',
    overview: 'When a loved one is facing a terminal illness, the environment where they receive care makes a profound difference. Most individuals prefer to spend their final days in the comforting, familiar surroundings of their own home. Our Palliative Care services are designed to support not just the physical needs of the client, but the emotional and practical needs of the entire family during this deeply sensitive time.',
    whoItSupports: [
      'Individuals diagnosed with a life-limiting or terminal illness',
      'Families needing support to fulfill a loved one\'s wish to remain at home',
      'Clients requiring supplemental personal care alongside medical hospice teams',
      'Spouses or children who need respite to focus on being family, rather than caregivers'
    ],
    whatItIncludes: [
      'Gentle, respectful personal care and hygiene assistance',
      'Frequent repositioning and comfort measures',
      'Creating a calm, soothing, and clean environment',
      'Coordination with visiting nurses and medical professionals',
      'Companionship and emotional presence',
      'Support for family members and respite relief'
    ],
    benefits: [
      'Allows the individual to remain in their most comfortable environment',
      'Reduces the physical and emotional burden on family caregivers',
      'Ensures dignity and respect are maintained at all times',
      'Provides a consistent, calming presence during a difficult transition'
    ],
    approach: 'Our approach to palliative care is profoundly respectful and unobtrusive. We understand that this is a sacred time for your family. Our caregivers are selected for their deep empathy, quiet strength, and ability to anticipate needs without being asked. We work collaboratively with your medical hospice team, providing the essential daily personal support that allows your family to focus entirely on spending meaningful time together.',
    faqs: [
      {
        question: 'What is the difference between palliative home care and medical hospice?',
        answer: 'Medical hospice involves registered nurses and doctors who manage pain and medical symptoms. Our palliative care focuses on the crucial day-to-day personal support: bathing, grooming, comfort measures, repositioning, and providing respite for the family. We work alongside medical teams.'
      },
      {
        question: 'Can you provide care overnight?',
        answer: 'Yes. The overnight hours can often be the most difficult and exhausting for families. We offer overnight awake shifts to monitor comfort, assist with repositioning, and provide immediate support so family members can sleep.'
      },
      {
        question: 'How quickly can palliative support begin?',
        answer: 'We understand that palliative situations can escalate quickly. We prioritize these requests and can often arrange a rapid consultation and begin care within 24 hours.'
      }
    ],
    relatedServices: [
      { title: 'Personal Support', href: '/services/personal-support' },
      { title: 'Respite Care', href: '/services/respite-care' },
      { title: 'Live-in Care', href: '/services/live-in-care' }
    ]
  };

  return <ServiceLayout {...serviceData} />;
}
