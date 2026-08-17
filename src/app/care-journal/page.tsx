import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTABanner } from '@/components/sections/CTABanner';
import Image from 'next/image';

export const metadata: Metadata = {
  alternates: { canonical: '/care-journal' },
  title: 'Care Journal | Home Care Resources | PN Support Care Solutions',
  description: 'Expert advice, practical guides, and resources for families navigating home care, aging, and specialized support in the Greater Toronto Area.',
};

export default function CareJournalPage() {
  const categories = [
    'Aging Well',
    'Condition Specific',
    'Family Caregiving',
    'Home Safety',
    'Planning & Legal',
    'Service Spotlights'
  ];

  const featuredArticles = [
    {
      category: 'Condition Specific',
      title: 'A Practical Guide to Dementia Home Care for GTA Families',
      excerpt: 'Understanding the signs that an older adult may need additional support and how to create safer home routines.',
      slug: 'dementia-home-care-guide',
      image: '/images/journal_dementia_1786973008581.jpg'
    },
    {
      category: 'Home Safety',
      title: 'A Guide to Aging Safely and Independently at Home',
      excerpt: 'Practical strategies for fall prevention, nutrition, and home safety to support long-term independence.',
      slug: 'aging-safely-at-home',
      image: '/images/journal_safety_1786973019680.jpg'
    },
    {
      category: 'Family Caregiving',
      title: 'Preparing the Home for a Safe Hospital Discharge',
      excerpt: 'Essential steps families should take to ensure a comfortable and safe recovery environment after a hospital stay.',
      slug: 'safe-hospital-discharge',
      image: '/images/journal_discharge_1786973031666.jpg'
    },
    {
      category: 'Aging Well',
      title: 'The Hidden Signs of Caregiver Burnout',
      excerpt: 'How to recognize the physical and emotional toll of caregiving, and why arranging respite care is essential for your health.',
      slug: 'caregiver-burnout-signs',
      image: '/images/journal_burnout_1786973042224.jpg'
    }
  ];

  return (
    <>
      <section className="page-hero" style={{ backgroundColor: 'var(--color-warm-ivory)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Care Journal' }]} />
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-deep-navy)', margin: 'var(--spacing-6) 0' }}>
              The Care Journal
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-charcoal)', opacity: 0.9, lineHeight: 1.6 }}>
              Expert guidance, practical advice, and compassionate resources to help your family navigate the journey of aging and home care.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--spacing-16) 0', backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-12)' }}>
            
            {/* Categories */}
            <div>
              <h2 style={{ fontSize: '1.25rem', color: 'var(--color-deep-navy)', marginBottom: 'var(--spacing-4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Browse by Topic</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-3)' }}>
                {categories.map((cat, idx) => (
                  <span key={idx} style={{ padding: 'var(--spacing-2) var(--spacing-4)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)', fontSize: '0.9375rem', color: 'var(--color-charcoal)', cursor: 'pointer', transition: 'all var(--transition-fast)' }}>
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-8)' }}>
              {featuredArticles.map((article, idx) => (
                <Link key={idx} href={`/care-journal/${article.slug}`} style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', textDecoration: 'none', backgroundColor: 'var(--color-warm-ivory)' }}>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderBottom: '1px solid var(--color-border)' }}>
                    <Image src={article.image} alt={article.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div style={{ padding: 'var(--spacing-6)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-care-teal)', marginBottom: 'var(--spacing-3)' }}>{article.category}</span>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-navy)', marginBottom: 'var(--spacing-3)', lineHeight: 1.3 }}>{article.title}</h3>
                    <p style={{ color: 'var(--color-charcoal)', fontSize: '0.9375rem', lineHeight: 1.6, opacity: 0.9, marginBottom: 'var(--spacing-4)', flex: 1 }}>{article.excerpt}</p>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-care-teal)' }}>Read article &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>

      <CTABanner variant="light" />
    </>
  );
}
