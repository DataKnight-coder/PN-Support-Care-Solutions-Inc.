import { Metadata } from 'next';
import { LocationLayout } from '@/components/layout/LocationLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/locations/mississauga' },
  title: 'Home Care Services in Mississauga | PN Support Care Solutions',
  description: 'Compassionate, personalized home care in Mississauga. PN Support provides dependable senior care, dementia support, and respite for Mississauga families.',
};

export default function MississaugaLocationPage() {
  const locationData = {
    cityName: 'Mississauga',
    heroHeadline: 'Home Care Services in Mississauga',
    heroDescription: 'Personalized, dependable home and community care for seniors and individuals across Mississauga. We help you live safely, with dignity and independence in the community you love.',
    localIntro: 'From Port Credit to Streetsville, Mississauga is a community built on strong family values. At PN Support Care Solutions, we share those values. We provide dedicated home care services that allow seniors and individuals with support needs to remain safely in their own Mississauga homes. Whether you are looking for post-hospital recovery support or ongoing dementia care, our compassionate team is here to help.',
    services: [
      { title: 'Personal Support', description: 'Assistance with hygiene and morning routines.', href: '/services/personal-support' },
      { title: 'Companion Care', description: 'Social engagement and daily living support.', href: '/services/companion-care' },
      { title: 'Dementia Care', description: 'Specialized support for memory loss at home.', href: '/services/dementia-care' },
      { title: 'Respite Care', description: 'Dependable relief for family caregivers.', href: '/services/respite-care' },
      { title: 'Post-Hospital Care', description: 'Recovery support after hospital discharge.', href: '/services/post-hospital-care' },
      { title: 'Live-in Care', description: 'Around-the-clock peace of mind.', href: '/services/live-in-care' },
    ],
    whoWeSupportText: 'Our Mississauga care team is carefully vetted and trained to support individuals with diverse needs. We focus on adapting our care to your specific routines, ensuring a comfortable and respectful experience.',
    localContext: 'We understand the Mississauga healthcare landscape. If your loved one is being discharged from Trillium Health Partners (Mississauga Hospital or Credit Valley Hospital), we can coordinate a seamless transition back home, providing the precise level of care needed to prevent readmission and support full recovery.',
    faqs: [
      {
        question: 'Do you serve all areas of Mississauga?',
        answer: 'Yes, we provide home care services throughout Mississauga, including Port Credit, Clarkson, Erin Mills, Streetsville, Malton, and Meadowvale.'
      },
      {
        question: 'Can I meet the caregiver before services begin?',
        answer: 'Absolutely. We believe the right match is essential. During our care consultation, we will introduce a caregiver who fits your clinical needs and personality preferences.'
      },
      {
        question: 'Is your care available on weekends and holidays in Mississauga?',
        answer: 'Yes, our care services are available 24 hours a day, 7 days a week, 365 days a year. We provide consistent coverage so you are never left without support.'
      }
    ],
    nearbyLocations: [
      { name: 'Toronto', href: '/locations/toronto' },
      { name: 'Oakville', href: '/locations/oakville' },
      { name: 'Milton', href: '/locations/milton' }
    ]
  };

  return <LocationLayout {...locationData} />;
}
