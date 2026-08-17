import { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/services/personal-support' },
  title: 'Personal Support Services | Home Care GTA',
  description: 'Respectful, personalized assistance with daily activities and personal hygiene. PN Support Care Solutions helps seniors and adults maintain independence at home.',
};

export default function PersonalSupportService() {
  const serviceData = {
    title: 'Personal Support Services',
    intro: 'Respectful assistance with daily activities, designed to maintain your dignity and independence at home.',
    overview: 'Our Personal Support Services provide the essential, day-to-day assistance you need to remain safely in your own home. We understand that accepting help with personal routines requires immense trust. Our carefully matched caregivers are trained to provide support that respects your boundaries, preferences, and privacy.',
    whoItSupports: [
      'Seniors wishing to age in place safely',
      'Individuals recovering from illness or surgery',
      'Adults living with physical disabilities',
      'Anyone needing a steady hand with daily routines'
    ],
    whatItIncludes: [
      'Bathing and showering assistance',
      'Dressing and grooming',
      'Mobility and transfer support',
      'Toileting and incontinence care',
      'Morning and evening routines',
      'Personal hygiene maintenance'
    ],
    benefits: [
      'Maintains personal dignity and comfort',
      'Reduces the risk of falls and injuries',
      'Preserves independence at home',
      'Provides peace of mind for family members'
    ],
    approach: 'We don\'t believe in one-size-fits-all care. During our initial consultation, we learn about your specific routines—from how you like your hair brushed to your preferred morning schedule. Our caregivers adapt to your life, ensuring support feels natural rather than intrusive.',
    faqs: [
      {
        question: 'How do you match a caregiver for personal support?',
        answer: 'We consider clinical needs, personality, cultural background, and personal preferences to find a caregiver you will feel entirely comfortable with. If the match isn\'t perfect, we will gladly make adjustments.'
      },
      {
        question: 'Can the level of support change over time?',
        answer: 'Absolutely. We regularly review your care plan and can easily scale support up or down depending on your changing health and capabilities.'
      },
      {
        question: 'Are your caregivers trained for mobility transfers?',
        answer: 'Yes, our personal support workers are fully trained in safe transfer techniques (including lifts, if required) to ensure safety during movement around the home.'
      }
    ],
    relatedServices: [
      { title: 'Companion Care', href: '/services/companion-care' },
      { title: 'Live-in Care', href: '/services/live-in-care' },
      { title: 'Post-Hospital Recovery', href: '/services/post-hospital-care' }
    ]
  };

  return <ServiceLayout {...serviceData} />;
}
