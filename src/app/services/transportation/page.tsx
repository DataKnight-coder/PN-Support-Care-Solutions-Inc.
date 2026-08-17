import { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/services/transportation' },
  title: 'Transportation & Errands for Seniors | Home Care GTA',
  description: 'Safe, reliable transportation for medical appointments, errands, and social outings. PN Support keeps GTA seniors connected to their community.',
};

export default function TransportationService() {
  const serviceData = {
    title: 'Transportation & Errands',
    intro: 'Safe, reliable accompaniment to appointments, errands, and social outings, keeping you connected to the community.',
    overview: 'Giving up the keys to a car doesn\'t have to mean giving up independence. Staying active in the community is vital for emotional health. Our Transportation and Errand services ensure that your loved one can safely attend medical appointments, visit friends, attend religious services, or simply go out for a coffee, without relying on stressful public transit or waiting for family members to be available.',
    whoItSupports: [
      'Seniors who no longer drive',
      'Individuals with mobility or visual impairments',
      'Patients needing an escort to outpatient procedures',
      'Families who cannot take time off work for daytime appointments'
    ],
    whatItIncludes: [
      'Escorted transportation to medical and dental appointments',
      'Accompaniment during the appointment (taking notes if requested by family)',
      'Grocery shopping, pharmacy pick-ups, and post office runs',
      'Transportation to social events, salons, or religious services',
      'Assistance getting safely in and out of the vehicle and destination',
      'Putting away groceries and supplies upon return home'
    ],
    benefits: [
      'Prevents isolation by maintaining community connections',
      'Ensures critical medical appointments are never missed',
      'Provides a safer alternative to taxis for those with mobility aids',
      'Gives families peace of mind knowing a professional is assisting'
    ],
    approach: 'We offer "through-the-door" service, not just "curb-to-curb." Our caregivers don\'t just drop you off; they help you get ready, assist you into the vehicle, navigate the destination, carry bags, and ensure you are safely settled back inside your home afterward.',
    faqs: [
      {
        question: 'Do caregivers use their own vehicles?',
        answer: 'Yes, caregivers can use their own insured, reliable vehicles. Mileage is typically tracked and billed at a standard rate. Alternatively, caregivers can escort clients via accessible transit or pre-arranged accessible taxis if preferred.'
      },
      {
        question: 'Can the caregiver take notes during a doctor\'s appointment?',
        answer: 'Yes. With your explicit permission, a caregiver can sit in on medical appointments, take detailed notes regarding medication changes or therapy instructions, and provide a full update to the family.'
      },
      {
        question: 'Does the caregiver stay with me the whole time?',
        answer: 'Yes, the caregiver remains with the client for the duration of the outing to ensure continuous safety and support.'
      }
    ],
    relatedServices: [
      { title: 'Companion Care', href: '/services/companion-care' },
      { title: 'Disability Support', href: '/services/disability-support' },
      { title: 'Light Housekeeping', href: '/services/light-housekeeping' }
    ]
  };

  return <ServiceLayout {...serviceData} />;
}
