import { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/services/light-housekeeping' },
  title: 'Light Housekeeping for Seniors | Home Care GTA',
  description: 'Maintaining a clean, safe, and comfortable home environment. PN Support Care Solutions provides light housekeeping for seniors across the GTA.',
};

export default function LightHousekeepingService() {
  const serviceData = {
    title: 'Light Housekeeping',
    intro: 'Maintaining a clean, organized, and safe home environment to prevent falls and promote overall wellbeing.',
    overview: 'A clean home is vital for both physical safety and mental health. As we age, tasks like vacuuming, changing bed linens, or reaching high shelves can become difficult or dangerous. Our Light Housekeeping service removes these physical burdens, ensuring your loved one’s living space remains tidy, comfortable, and free from tripping hazards.',
    whoItSupports: [
      'Seniors finding household chores physically exhausting',
      'Individuals recovering from surgery or illness',
      'Those with visual impairments or mobility limitations',
      'Families who want to spend quality time, not cleaning time, with loved ones'
    ],
    whatItIncludes: [
      'Vacuuming, sweeping, and mopping floors',
      'Dusting and wiping down surfaces',
      'Cleaning bathrooms and kitchens',
      'Laundry, ironing, and changing bed linens',
      'Taking out the garbage and recycling',
      'Organizing closets and reducing clutter'
    ],
    benefits: [
      'Significantly reduces the risk of in-home falls and accidents',
      'Maintains a hygienic environment to prevent illness',
      'Reduces anxiety and stress associated with a cluttered home',
      'Frees up energy for enjoyable activities and family time'
    ],
    approach: 'We view housekeeping through the lens of care and safety. While keeping the home beautiful, our caregivers are continually assessing the environment for hazards—securing loose rugs, improving lighting, and organizing frequently used items for easy reach. We respect your space and handle your belongings with care.',
    faqs: [
      {
        question: 'Do caregivers provide their own cleaning supplies?',
        answer: 'To prevent cross-contamination between homes and to respect your preferences (e.g., allergies, eco-friendly products), we use the cleaning supplies and equipment already available in your home.'
      },
      {
        question: 'Is this a heavy duty cleaning service?',
        answer: 'No. We provide "light" housekeeping designed for daily or weekly upkeep. We do not perform heavy duties like moving large furniture, cleaning exterior windows, or deep carpet cleaning. If heavy cleaning is required, we can help coordinate a specialized service.'
      },
      {
        question: 'Can housekeeping be combined with other services?',
        answer: 'Absolutely. Light housekeeping is almost always integrated with our Companion Care or Personal Support services. A caregiver can assist with a bath, prepare lunch, and do a load of laundry during a single visit.'
      }
    ],
    relatedServices: [
      { title: 'Companion Care', href: '/services/companion-care' },
      { title: 'Meal Preparation', href: '/services/meal-preparation' },
      { title: 'Transportation & Errands', href: '/services/transportation' }
    ]
  };

  return <ServiceLayout {...serviceData} />;
}
