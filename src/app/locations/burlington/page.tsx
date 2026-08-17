import { Metadata } from 'next';
import { LocationLayout } from '@/components/layout/LocationLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/locations/burlington' },
  title: 'Home Care Services in Burlington | PN Support Care Solutions',
  description: 'Professional senior care and home support in Burlington. PN Support provides dementia care, personal support, and post-hospital recovery assistance.',
};

export default function BurlingtonLocationPage() {
  const locationData = {
    cityName: 'Burlington',
    heroHeadline: 'Home Care Services in Burlington',
    heroDescription: 'Exceptional home care for Burlington seniors. We provide the compassionate, professional support needed to age safely and independently at home.',
    localIntro: 'Burlington offers an incredible quality of life, and our goal is to help seniors continue to enjoy it from the comfort of their own homes. PN Support Care Solutions delivers highly personalized home care across Burlington. Whether you require specialized dementia care in Aldershot or companionship and light housekeeping in Tyandaga, our dedicated caregivers provide support that feels like family.',
    services: [
      { title: 'Dementia Care', description: 'Expert, compassionate support for memory loss.', href: '/services/dementia-care' },
      { title: 'Personal Support', description: 'Dignified assistance with daily hygiene and care.', href: '/services/personal-support' },
      { title: 'Companion Care', description: 'Meaningful social connection and support.', href: '/services/companion-care' },
      { title: 'Post-Hospital Care', description: 'Safe recovery at home after a hospital stay.', href: '/services/post-hospital-care' },
      { title: 'Medication Reminders', description: 'Ensuring prescriptions are taken safely.', href: '/services/medication-reminders' },
      { title: 'Live-in Care', description: '24/7 peace of mind and supervision.', href: '/services/live-in-care' },
    ],
    whoWeSupportText: 'We proudly support Burlington seniors dealing with age-related mobility issues, cognitive decline, or those simply needing an extra set of hands to maintain their household and independence.',
    localContext: 'A hospital stay can be disruptive. We work closely with families to coordinate safe discharges from Joseph Brant Hospital. Our caregivers ensure the home environment is prepared, prescriptions are managed, and the transition back to daily life in Burlington is as smooth and stress-free as possible.',
    faqs: [
      {
        question: 'Which Burlington neighborhoods do you serve?',
        answer: 'We provide care throughout Burlington, including Aldershot, Tyandaga, Brant Hills, Millcroft, Orchard, and the downtown core.'
      },
      {
        question: 'Can a caregiver take my father for walks near the lake?',
        answer: 'Yes! We encourage physical activity and community connection. Our caregivers can accompany clients on walks at Spencer Smith Park or other local areas, ensuring they are safe while enjoying the outdoors.'
      },
      {
        question: 'Is it possible to change the care schedule if needs change?',
        answer: 'Absolutely. We offer highly flexible care plans. You can easily scale hours up during a recovery period and reduce them as your loved one regains their strength.'
      }
    ],
    nearbyLocations: [
      { name: 'Oakville', href: '/locations/oakville' },
      { name: 'Hamilton', href: '/locations/hamilton' },
      { name: 'Milton', href: '/locations/milton' }
    ]
  };

  return <LocationLayout {...locationData} />;
}
