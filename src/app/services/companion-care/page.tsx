import { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/services/companion-care' },
  title: 'Companion Care Services | Home Care GTA',
  description: 'Meaningful social interaction and emotional support to prevent isolation. PN Support Care Solutions provides compassionate companion care across the GTA.',
};

export default function CompanionCareService() {
  const serviceData = {
    title: 'Companion Care',
    intro: 'Meaningful social interaction, engagement, and emotional support to prevent isolation and encourage a vibrant, active lifestyle at home.',
    overview: 'Loneliness and isolation can significantly impact physical and mental wellbeing, especially for older adults. Our Companion Care services focus on bringing joy, conversation, and reliable friendship into the home. We provide a supportive presence that goes beyond basic assistance, helping your loved one stay connected to the things they love.',
    whoItSupports: [
      'Seniors living alone or far from family',
      'Individuals experiencing decreased mobility',
      'Those dealing with mild cognitive decline',
      'Anyone seeking social engagement and activity'
    ],
    whatItIncludes: [
      'Meaningful conversation and active listening',
      'Sharing hobbies, games, and reading',
      'Accompaniment on walks and light exercise',
      'Escorting to social events and appointments',
      'Planning and preparing meals together',
      'Light organization and safety supervision'
    ],
    benefits: [
      'Reduces feelings of loneliness and depression',
      'Keeps the mind active and engaged',
      'Encourages physical activity and mobility',
      'Provides reassuring supervision for safety'
    ],
    approach: 'A successful companion is someone you genuinely enjoy spending time with. We take the time to learn about your loved one’s history, hobbies, and personality traits to thoughtfully match them with a caregiver who shares similar interests and a complementary temperament.',
    faqs: [
      {
        question: 'What is the difference between Companion Care and Personal Support?',
        answer: 'Companion Care focuses on social interaction, supervision, and light household tasks. Personal Support includes physical assistance with hygiene, bathing, and mobility transfers. If personal care is needed, our caregivers are trained to provide both.'
      },
      {
        question: 'Can the caregiver drive my loved one to appointments?',
        answer: 'Yes, our caregivers can accompany clients to appointments, grocery shopping, or social outings, either by arranging accessible transportation or using an approved vehicle.'
      },
      {
        question: 'Is there a minimum number of hours required?',
        answer: 'We offer flexible scheduling options to suit your needs, from a few hours a week for social visits to daily comprehensive companionship.'
      }
    ],
    relatedServices: [
      { title: 'Personal Support', href: '/services/personal-support' },
      { title: 'Dementia Care', href: '/services/dementia-care' },
      { title: 'Respite Care', href: '/services/respite-care' }
    ],
    heroImage: '/images/services/companion-care.jpg'
  };

  return <ServiceLayout {...serviceData} />;
}
