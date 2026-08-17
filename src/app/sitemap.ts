import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pnsupportcaresolutions.ca';

  const routes = [
    '',
    '/about',
    '/services',
    '/locations',
    '/care-journal',
    '/careers',
    '/contact',
    '/consultation',
    '/faqs'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const services = [
    'personal-support',
    'companion-care',
    'dementia-care',
    'respite-care',
    'palliative-care',
    'live-in-care',
    'post-hospital-care',
    'disability-support',
    'light-housekeeping',
    'meal-preparation',
    'medication-reminders',
    'transportation'
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const locations = [
    'toronto',
    'mississauga',
    'oakville',
    'milton',
    'burlington',
    'hamilton'
  ].map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...routes, ...services, ...locations];
}
