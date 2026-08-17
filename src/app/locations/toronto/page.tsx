import { Metadata } from 'next';
import { LocationLayout } from '@/components/layout/LocationLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/locations/toronto' },
  title: 'Home Care Services in Toronto | PN Support Care Solutions',
  description: 'Dependable, personalized home care in Toronto. From personal support and dementia care to respite, PN Support helps Toronto seniors age safely in place.',
};

export default function TorontoLocationPage() {
  const locationData = {
    cityName: 'Toronto',
    heroHeadline: 'Home Care Services in Toronto',
    heroDescription: 'Personalized, dependable home and community care for seniors and individuals across Toronto. We help you live safely with dignity and independence.',
    localIntro: 'Toronto is a diverse, vibrant city, and the care you receive should reflect the unique way you live within it. PN Support Care Solutions provides dedicated home care services across Toronto\'s many neighborhoods. Whether you need a few hours of companionship a week in Etobicoke, round-the-clock dementia care in North York, or post-hospital recovery support downtown, our carefully matched caregivers are here to help.',
    services: [
      { title: 'Personal Support', description: 'Assistance with daily activities and hygiene.', href: '/services/personal-support' },
      { title: 'Dementia Care', description: 'Specialized support for memory loss.', href: '/services/dementia-care' },
      { title: 'Companion Care', description: 'Social engagement and emotional support.', href: '/services/companion-care' },
      { title: 'Respite Care', description: 'Temporary relief for family caregivers.', href: '/services/respite-care' },
      { title: 'Live-in Care', description: '24/7 continuous support in the home.', href: '/services/live-in-care' },
      { title: 'Post-Hospital', description: 'Transitional care after a hospital stay.', href: '/services/post-hospital-care' },
    ],
    whoWeSupportText: 'Our Toronto caregivers are experienced in supporting individuals with a wide range of needs. We recognize that home care isn\'t one-size-fits-all, which is why we adapt to your specific routines.',
    localContext: 'As a locally focused provider, we understand the specific needs of Toronto families. From navigating winter weather challenges to coordinating care with major Toronto hospitals like UHN or Sunnybrook for post-discharge support, our team is equipped to provide seamless, community-aware care.',
    faqs: [
      {
        question: 'Which neighborhoods in Toronto do you serve?',
        answer: 'We provide care throughout the City of Toronto, including Downtown, North York, Etobicoke, Scarborough, East York, and York. If you are unsure if we cover your specific area, please contact us for confirmation.'
      },
      {
        question: 'Can your caregivers escort my loved one to appointments in Toronto?',
        answer: 'Yes. Navigating Toronto transit or traffic can be overwhelming for seniors. Our caregivers can accompany your loved one to medical appointments, social outings, or errands, ensuring they travel safely.'
      },
      {
        question: 'How quickly can home care start in Toronto?',
        answer: 'We strive to accommodate your timeline. After you contact us, we can typically schedule a care consultation within 24-48 hours and begin care shortly after the personalized plan is developed.'
      }
    ],
    nearbyLocations: [
      { name: 'Mississauga', href: '/locations/mississauga' },
      { name: 'Oakville', href: '/locations/oakville' },
      { name: 'Vaughan', href: '/locations/vaughan' }
    ]
  };

  return <LocationLayout {...locationData} />;
}
