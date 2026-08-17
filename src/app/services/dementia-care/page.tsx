import { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/services/dementia-care' },
  title: 'Dementia & Alzheimer\'s Care | GTA Home Care',
  description: 'Specialized, compassionate support focused on safety, familiarity, and dignity for individuals living with memory loss. Personalized dementia care in the GTA.',
};

export default function DementiaCareService() {
  const serviceData = {
    title: 'Dementia & Alzheimer\'s Care',
    intro: 'Specialized, compassionate support focused on safety, familiarity, and dignity for individuals living with memory loss.',
    overview: 'Caring for a loved one with Alzheimer’s or dementia is profoundly challenging. Familiar surroundings play a critical role in managing memory loss. Our specialized Dementia Care allows your loved one to remain in the comfort of their own home, receiving expert support from caregivers trained in managing cognitive decline with empathy and patience.',
    whoItSupports: [
      'Individuals in early, middle, or late stages of dementia',
      'Those experiencing Alzheimer\'s disease',
      'Seniors with other forms of cognitive impairment',
      'Families needing expert support and guidance'
    ],
    whatItIncludes: [
      'Establishing and maintaining calming routines',
      'Safe wandering prevention and home safety supervision',
      'De-escalation of confusion or agitation',
      'Cognitive stimulation and memory games',
      'Assistance with personal hygiene and meals',
      'Medication reminders and tracking'
    ],
    benefits: [
      'Allows the individual to remain in a familiar environment',
      'Reduces anxiety, confusion, and hospitalizations',
      'Provides specialized support for challenging behaviors',
      'Offers crucial relief and education for family caregivers'
    ],
    approach: 'We focus on the person, not just the disease. Our caregivers are trained to step into your loved one’s reality, validating their feelings rather than correcting them. We work closely with families to learn the individual’s life story, using past experiences and preferred routines to create moments of joy and connection.',
    faqs: [
      {
        question: 'Are your caregivers specifically trained for dementia?',
        answer: 'Yes. Our caregivers receive specialized training in dementia care, including communication techniques, behavioral de-escalation, and creating safe, supportive environments.'
      },
      {
        question: 'How do you handle challenging behaviors or aggression?',
        answer: 'Our approach is rooted in understanding the unmet need behind the behavior. Caregivers use validation therapy, distraction, and calming techniques to soothe agitation without arguing or forcing compliance.'
      },
      {
        question: 'Can you provide 24/7 care for someone with advanced dementia?',
        answer: 'Yes. As the disease progresses, round-the-clock support often becomes necessary for safety. We offer both Live-in Care and 24/7 continuous care shifts to ensure constant supervision.'
      }
    ],
    relatedServices: [
      { title: 'Respite Care', href: '/services/respite-care' },
      { title: 'Live-in Care', href: '/services/live-in-care' },
      { title: 'Personal Support', href: '/services/personal-support' }
    ]
  };

  return <ServiceLayout {...serviceData} />;
}
