import { Metadata } from 'next';
import { LocationLayout } from '@/components/layout/LocationLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/locations/oakville' },
  title: 'Home Care Services in Oakville | PN Support Care Solutions',
  description: 'Premium, personalized home care for seniors in Oakville. PN Support delivers professional respite, dementia, and companion care across Halton Region.',
};

export default function OakvilleLocationPage() {
  const locationData = {
    cityName: 'Oakville',
    heroHeadline: 'Home Care Services in Oakville',
    heroDescription: 'Elevating the standard of senior care in Oakville. We provide premium, dependable support to help you or your loved one live safely and comfortably at home.',
    localIntro: 'Oakville is known for its beautiful neighborhoods, strong community ties, and exceptional quality of life. At PN Support Care Solutions, we believe your home care experience should meet those same high standards. Whether your family resides near Bronte Village, Glen Abbey, or downtown Oakville, our caregivers deliver compassionate, highly personalized support designed to maintain your independence and dignity.',
    services: [
      { title: 'Personal Support', description: 'Respectful assistance with morning routines and hygiene.', href: '/services/personal-support' },
      { title: 'Companion Care', description: 'Meaningful engagement and support for active living.', href: '/services/companion-care' },
      { title: 'Dementia Care', description: 'Specialized cognitive support and safety supervision.', href: '/services/dementia-care' },
      { title: 'Post-Hospital', description: 'Transitional care following surgery or illness.', href: '/services/post-hospital-care' },
      { title: 'Respite Care', description: 'Reliable relief for family caregivers in Halton.', href: '/services/respite-care' },
      { title: 'Transportation', description: 'Escorts to appointments and errands.', href: '/services/transportation' },
    ],
    whoWeSupportText: 'Our Oakville care team supports a diverse range of clients, from active seniors needing a bit of help around the house, to individuals requiring intensive, round-the-clock support for complex health conditions.',
    localContext: 'We are deeply familiar with the Halton healthcare system. If your loved one is preparing for a scheduled surgery at Oakville Trafalgar Memorial Hospital, we can arrange proactive post-hospital care to ensure their transition back home is safe, comfortable, and focused entirely on recovery.',
    faqs: [
      {
        question: 'What areas of Oakville do you service?',
        answer: 'We serve all of Oakville, including Bronte, Glen Abbey, River Oaks, Joshua Creek, Clearview, and the downtown core.'
      },
      {
        question: 'Can your caregivers accompany my mother to appointments in Halton?',
        answer: 'Yes, our caregivers frequently provide transportation and accompaniment to medical appointments across Halton Region, as well as social outings to local community centres or the lakeshore.'
      },
      {
        question: 'Do you offer 24-hour care in Oakville?',
        answer: 'Yes, we provide both Live-in Care and 24/7 continuous shift care for Oakville residents who require round-the-clock supervision and support.'
      }
    ],
    nearbyLocations: [
      { name: 'Mississauga', href: '/locations/mississauga' },
      { name: 'Burlington', href: '/locations/burlington' },
      { name: 'Milton', href: '/locations/milton' }
    ],
    heroImage: '/images/locations/oakville.jpg'
  };

  return <LocationLayout {...locationData} />;
}
