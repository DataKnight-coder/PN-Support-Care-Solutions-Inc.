import { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/services/medication-reminders' },
  title: 'Medication Reminders & Management Support | GTA',
  description: 'Ensure medications are taken safely and on time. PN Support provides reliable medication reminders for seniors across the Greater Toronto Area.',
};

export default function MedicationRemindersService() {
  const serviceData = {
    title: 'Medication Reminders',
    intro: 'Reliable, scheduled reminders to ensure prescriptions are taken safely, correctly, and on time.',
    overview: 'Managing multiple prescriptions, vitamins, and varying schedules can be confusing and dangerous if mistakes are made. Missing doses or double-dosing are leading causes of hospital admissions for seniors. Our Medication Reminder service provides the watchful eye needed to ensure your loved one adheres strictly to their doctor\'s prescribed regimen.',
    whoItSupports: [
      'Seniors managing multiple daily prescriptions (polypharmacy)',
      'Individuals experiencing memory loss or early-stage dementia',
      'Patients discharged from the hospital with new, complex medication schedules',
      'Those with vision impairments who struggle to read medication labels'
    ],
    whatItIncludes: [
      'Verbal reminders when it is time to take medication',
      'Assisting with opening blister packs or pill bottles',
      'Providing water or food required to take with medication',
      'Monitoring and documenting that the medication was taken',
      'Observing for and reporting any potential side effects',
      'Reminding families when prescription refills are needed'
    ],
    benefits: [
      'Significantly reduces the risk of dangerous medication errors',
      'Keeps chronic health conditions stable',
      'Removes the daily stress of remembering schedules',
      'Provides families with a documented record of adherence'
    ],
    approach: 'Safety and compliance are our top priorities. We require all medications to be pre-organized in blister packs (provided by a pharmacy) or a dosette box (filled by a family member or nurse). Our personal support workers will then provide timely prompts, physically assist with the packaging if arthritis makes opening difficult, and ensure the medication is swallowed.',
    faqs: [
      {
        question: 'Can your caregivers administer injections or IV medications?',
        answer: 'No. Personal Support Workers (PSWs) provide *reminders* and *assistance*. They cannot perform delegated medical acts like administering injections, adjusting oxygen levels, or setting up IVs. If nursing care is required, we will inform you during the consultation.'
      },
      {
        question: 'Will the caregiver fill the pill organizer?',
        answer: 'For liability and safety reasons, our caregivers do not fill dosette boxes from loose pill bottles. We strongly recommend having your pharmacy provide medications in sealed blister packs.'
      },
      {
        question: 'What happens if a client refuses to take their medication?',
        answer: 'Our caregivers use gentle encouragement and distraction techniques. However, they will never force a client. If a client persistently refuses, the caregiver will immediately document the refusal and notify the family or designated contact person.'
      }
    ],
    relatedServices: [
      { title: 'Post-Hospital Recovery', href: '/services/post-hospital-care' },
      { title: 'Dementia Care', href: '/services/dementia-care' },
      { title: 'Personal Support', href: '/services/personal-support' }
    ]
  };

  return <ServiceLayout {...serviceData} />;
}
