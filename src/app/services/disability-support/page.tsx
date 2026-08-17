import { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/services/disability-support' },
  title: 'Disability Support Services | Home Care GTA',
  description: 'Empowering adults living with physical disabilities to maintain independence at home. PN Support provides respectful disability care across the GTA.',
};

export default function DisabilitySupportService() {
  const serviceData = {
    title: 'Disability Support',
    intro: 'Empowering individuals living with physical disabilities to navigate daily life with confidence, dignity, and maximum independence.',
    overview: 'Living with a physical disability should not mean compromising on quality of life or autonomy. Our Disability Support services are designed to empower adults of all ages to live fully and independently in their own homes. We view our role as an extension of your own capabilities—providing the physical assistance required so you can focus on your career, family, and passions.',
    whoItSupports: [
      'Adults living with spinal cord injuries',
      'Individuals managing multiple sclerosis (MS) or ALS',
      'Those living with cerebral palsy or muscular dystrophy',
      'Anyone requiring long-term mobility and daily living assistance'
    ],
    whatItIncludes: [
      'Advanced mobility assistance, including Hoyer lift transfers',
      'Comprehensive personal care, bathing, and grooming',
      'Bowel and bladder routine assistance',
      'Meal preparation and feeding assistance',
      'Accompaniment to work, school, or community events',
      'Light housekeeping and environment organization'
    ],
    benefits: [
      'Empowers clients to maintain control over their routines',
      'Ensures safety and comfort in the home environment',
      'Facilitates active participation in the community',
      'Provides reliable, consistent support you can build a life around'
    ],
    approach: 'Our approach is rooted in profound respect for client autonomy. We are there to assist, not to take over. During our consultation, we listen to how you prefer things done—your routines, your equipment, your preferences. Our caregivers are thoroughly trained in safe transfer protocols and adaptive equipment, ensuring a secure, respectful, and empowering care experience.',
    faqs: [
      {
        question: 'Are your caregivers trained in using mechanical lifts?',
        answer: 'Yes. Caregivers assigned to clients requiring mechanical transfers (such as Hoyer lifts or ceiling tracks) undergo specific training and demonstration to ensure absolute safety and comfort.'
      },
      {
        question: 'Can a caregiver accompany me to my workplace or university?',
        answer: 'Yes. We support active lifestyles. Our caregivers can provide transportation and on-site personal support at your workplace, educational institution, or during social engagements.'
      },
      {
        question: 'Is it the same caregiver every day?',
        answer: 'We prioritize consistency. We typically build a small, dedicated team of 2-3 primary caregivers for clients requiring ongoing support, ensuring you always have familiar, well-trained assistance even during staff vacations.'
      }
    ],
    relatedServices: [
      { title: 'Personal Support', href: '/services/personal-support' },
      { title: 'Transportation & Errands', href: '/services/transportation' },
      { title: 'Live-in Care', href: '/services/live-in-care' }
    ]
  };

  return <ServiceLayout {...serviceData} />;
}
