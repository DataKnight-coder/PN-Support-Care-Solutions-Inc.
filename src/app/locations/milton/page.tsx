import { Metadata } from 'next';
import { LocationLayout } from '@/components/layout/LocationLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/locations/milton' },
  title: 'Home Care Services in Milton | PN Support Care Solutions',
  description: 'Dependable home and community care in Milton, Ontario. PN Support offers personalized senior care, respite, and disability support for Milton families.',
};

export default function MiltonLocationPage() {
  const locationData = {
    cityName: 'Milton',
    heroHeadline: 'Home Care Services in Milton',
    heroDescription: 'Compassionate, reliable home care for Milton families. We provide the essential support needed to maintain safety, health, and independence at home.',
    localIntro: 'As one of Canada\'s fastest-growing communities, Milton is home to families balancing busy careers with the needs of aging parents. PN Support Care Solutions is here to help bridge that gap. We provide dedicated, professional home care services across Milton, giving adult children peace of mind and allowing seniors to age gracefully in the community they helped build.',
    services: [
      { title: 'Respite Care', description: 'Temporary, dependable relief for family caregivers.', href: '/services/respite-care' },
      { title: 'Personal Support', description: 'Assistance with bathing, dressing, and mobility.', href: '/services/personal-support' },
      { title: 'Light Housekeeping', description: 'Maintaining a safe, tidy home environment.', href: '/services/light-housekeeping' },
      { title: 'Meal Preparation', description: 'Nutritious meals prepared fresh at home.', href: '/services/meal-preparation' },
      { title: 'Companion Care', description: 'Social interaction to prevent isolation.', href: '/services/companion-care' },
      { title: 'Live-in Care', description: 'Continuous support and supervision.', href: '/services/live-in-care' },
    ],
    whoWeSupportText: 'Our services in Milton are tailored to support seniors wishing to age in place, individuals managing chronic illnesses, and families seeking dependable respite so they can recharge without worry.',
    localContext: 'We recognize that navigating healthcare options in a rapidly expanding town can be challenging. Whether you need support coordinating discharge care from Milton District Hospital, or simply need a reliable caregiver for a few hours a week, our local team is responsive, accessible, and ready to assist.',
    faqs: [
      {
        question: 'Do you provide care outside of central Milton?',
        answer: 'Yes, our service area includes all of Milton, as well as surrounding rural areas in Halton Region. Please contact us to confirm coverage for your specific address.'
      },
      {
        question: 'How quickly can we arrange respite care?',
        answer: 'We try to be as responsive as possible. While we appreciate advanced notice for scheduled respite, we can often accommodate urgent requests within 24 to 48 hours.'
      },
      {
        question: 'Are your caregivers bonded and insured?',
        answer: 'Absolutely. Every caregiver on our team undergoes a rigorous background check, vulnerable sector screening, and is fully bonded and insured for your complete protection.'
      }
    ],
    nearbyLocations: [
      { name: 'Oakville', href: '/locations/oakville' },
      { name: 'Burlington', href: '/locations/burlington' },
      { name: 'Mississauga', href: '/locations/mississauga' }
    ]
  };

  return <LocationLayout {...locationData} />;
}
