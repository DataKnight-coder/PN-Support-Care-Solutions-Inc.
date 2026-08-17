import { Metadata } from 'next';
import { LocationLayout } from '@/components/layout/LocationLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/locations/hamilton' },
  title: 'Home Care Services in Hamilton | PN Support Care Solutions',
  description: 'Compassionate, reliable home care for Hamilton seniors. PN Support provides customized personal support, dementia care, and respite services across Hamilton.',
};

export default function HamiltonLocationPage() {
  const locationData = {
    cityName: 'Hamilton',
    heroHeadline: 'Home Care Services in Hamilton',
    heroDescription: 'Dedicated, compassionate home care across Hamilton. We provide the personalized support needed to help seniors live safely and independently in the community they love.',
    localIntro: 'Hamilton is a city built on resilience and community, and we bring those same values to our home care services. PN Support Care Solutions is proud to serve families throughout the Hamilton area. Whether your loved one requires specialized dementia support on the Mountain, or companion care in Dundas, our carefully vetted caregivers deliver professional, respectful support tailored to your family\'s unique needs.',
    services: [
      { title: 'Personal Support', description: 'Assistance with daily living activities and hygiene.', href: '/services/personal-support' },
      { title: 'Dementia Care', description: 'Specialized support for memory loss and cognitive decline.', href: '/services/dementia-care' },
      { title: 'Respite Care', description: 'Dependable relief for Hamilton family caregivers.', href: '/services/respite-care' },
      { title: 'Post-Hospital Care', description: 'Safe transitional support following discharge.', href: '/services/post-hospital-care' },
      { title: 'Companion Care', description: 'Meaningful social engagement to prevent isolation.', href: '/services/companion-care' },
      { title: 'Live-in Care', description: 'Continuous, 24/7 supervision and support.', href: '/services/live-in-care' },
    ],
    whoWeSupportText: 'Our Hamilton care team is dedicated to supporting seniors aging in place, adults living with physical disabilities, and individuals requiring complex care management following an illness or injury.',
    localContext: 'Navigating post-hospital care can be overwhelming. If your family is managing a discharge from Hamilton General Hospital, Juravinski Hospital, or St. Joseph\'s Healthcare, our team works proactively to ensure a safe transition home. We coordinate closely with discharge planners to implement a home care strategy that prevents readmission and supports full recovery.',
    faqs: [
      {
        question: 'What areas of Hamilton are covered by your services?',
        answer: 'We provide comprehensive home care throughout Hamilton, including the Mountain, downtown Hamilton, Dundas, Ancaster, Stoney Creek, and Waterdown.'
      },
      {
        question: 'Can your caregivers support someone with advanced Parkinson\'s?',
        answer: 'Yes. Our personal support workers are trained to assist clients managing progressive neurological conditions like Parkinson\'s, providing safe mobility transfers, feeding assistance, and specialized personal care.'
      },
      {
        question: 'How are your Hamilton caregivers screened?',
        answer: 'Every caregiver undergoes a strict vetting process, including in-depth interviews, professional reference checks, vulnerable sector police screening, and verification of their PSW certifications and training.'
      }
    ],
    nearbyLocations: [
      { name: 'Burlington', href: '/locations/burlington' },
      { name: 'Oakville', href: '/locations/oakville' },
      { name: 'Mississauga', href: '/locations/mississauga' }
    ],
    heroImage: '/images/locations/hamilton.jpg'
  };

  return <LocationLayout {...locationData} />;
}
