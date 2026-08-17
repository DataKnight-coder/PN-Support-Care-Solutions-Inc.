import { Metadata } from 'next';
import { ServiceLayout } from '@/components/layout/ServiceLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/services/meal-preparation' },
  title: 'Meal Preparation Services for Seniors | Home Care GTA',
  description: 'Nutritious, delicious meals prepared in your home. PN Support Care Solutions ensures seniors in the GTA eat well and stay hydrated.',
};

export default function MealPreparationService() {
  const serviceData = {
    title: 'Meal Preparation',
    intro: 'Nutritious, delicious, and culturally appropriate meals prepared fresh in your home to support physical health and vitality.',
    overview: 'Proper nutrition is a cornerstone of aging well, yet shopping for groceries, preparing ingredients, and cooking can become overwhelming. When eating becomes difficult, it often leads to weight loss, fatigue, and declining health. Our Meal Preparation services ensure your loved one enjoys balanced, appetizing meals that meet their dietary requirements without the stress of cooking.',
    whoItSupports: [
      'Seniors experiencing unwanted weight loss or low appetite',
      'Individuals with specific dietary restrictions (e.g., diabetic, low-sodium)',
      'Those who find cooking physically exhausting or unsafe',
      'Clients needing assistance with feeding or swallowing difficulties'
    ],
    whatItIncludes: [
      'Collaborative menu planning based on preferences and dietary needs',
      'Grocery shopping and pantry organization',
      'Cooking fresh, hot meals and preparing snacks',
      'Batch cooking and safely storing meals for later',
      'Hydration reminders throughout the day',
      'Cleaning the kitchen and washing dishes post-meal'
    ],
    benefits: [
      'Improves energy levels, immunity, and overall health',
      'Ensures compliance with medical dietary restrictions',
      'Makes mealtime a pleasant, social experience rather than a chore',
      'Provides peace of mind that spoiled food is removed from the fridge'
    ],
    approach: 'Food is deeply personal and cultural. We don\'t just cook; we cook what you love. During our assessment, we document your favorite recipes, cultural preferences, and dietary restrictions. Caregivers involve clients in the kitchen as much or as little as they prefer—often turning meal prep into a joyful, shared activity filled with conversation.',
    faqs: [
      {
        question: 'Can you accommodate specific cultural diets or allergies?',
        answer: 'Yes. We take pride in matching caregivers who are familiar with your cultural cuisine. We also strictly adhere to any allergy, religious, or medical dietary requirements.'
      },
      {
        question: 'Will the caregiver grocery shop for me?',
        answer: 'Yes. Our caregivers can handle the grocery shopping independently based on a provided list, or they can accompany the client to the store if they enjoy selecting their own produce.'
      },
      {
        question: 'Do you help with pureed or minced diets?',
        answer: 'Yes, if a speech-language pathologist or doctor has recommended a modified texture diet (pureed, minced and moist, etc.), our caregivers are trained to prepare foods to the exact required consistency.'
      }
    ],
    relatedServices: [
      { title: 'Light Housekeeping', href: '/services/light-housekeeping' },
      { title: 'Companion Care', href: '/services/companion-care' },
      { title: 'Medication Reminders', href: '/services/medication-reminders' }
    ]
  };

  return <ServiceLayout {...serviceData} />;
}
