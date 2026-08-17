import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTABanner } from '@/components/sections/CTABanner';
import { Calendar, User } from 'lucide-react';

const ARTICLE_DATA: Record<string, any> = {
  'dementia-home-care-guide': {
    title: 'A Practical Guide to Dementia Home Care for GTA Families',
    category: 'Condition Specific',
    image: '/images/journal_dementia_1786973008581.jpg',
    content: (
      <>
        <p style={{ marginBottom: 'var(--spacing-6)' }}>Caring for a loved one with dementia at home can be incredibly rewarding, but it also presents unique challenges. This guide offers practical strategies to create a safe, supportive environment while maintaining dignity and quality of life.</p>
        <h2 style={{ fontSize: '2rem', color: 'var(--color-deep-navy)', margin: 'var(--spacing-10) 0 var(--spacing-4)' }}>Establishing a Routine</h2>
        <p style={{ marginBottom: 'var(--spacing-6)' }}>Consistency is comforting for individuals with dementia. Establish a daily routine for waking, eating, and activities to reduce confusion and anxiety. Keep schedules visible and simple.</p>
        <div style={{ backgroundColor: 'var(--color-warm-ivory)', padding: 'var(--spacing-6)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-care-teal)', margin: 'var(--spacing-8) 0' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-navy)', margin: '0 0 var(--spacing-2) 0' }}>Key Takeaway</h3>
          <p style={{ margin: 0, fontSize: '1rem' }}>Patience and consistency are your most powerful tools in dementia care.</p>
        </div>
      </>
    )
  },
  'aging-safely-at-home': {
    title: 'A Guide to Aging Safely and Independently at Home',
    category: 'Home Safety',
    image: '/images/journal_safety_1786973019680.jpg',
    content: (
      <>
        <p style={{ marginBottom: 'var(--spacing-6)' }}>Most seniors prefer to age in place, surrounded by their memories and familiar comforts. Achieving this requires proactive safety planning and home modifications.</p>
        <h2 style={{ fontSize: '2rem', color: 'var(--color-deep-navy)', margin: 'var(--spacing-10) 0 var(--spacing-4)' }}>Preventing Falls</h2>
        <p style={{ marginBottom: 'var(--spacing-6)' }}>Falls are the leading cause of injury among seniors. Simple adjustments like securing rugs, adding non-slip mats in the bathroom, and ensuring adequate lighting in hallways can drastically reduce risk.</p>
        <div style={{ backgroundColor: 'var(--color-warm-ivory)', padding: 'var(--spacing-6)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-care-teal)', margin: 'var(--spacing-8) 0' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-navy)', margin: '0 0 var(--spacing-2) 0' }}>Key Takeaway</h3>
          <p style={{ margin: 0, fontSize: '1rem' }}>Proactive home safety audits are essential for maintaining independence.</p>
        </div>
      </>
    )
  },
  'safe-hospital-discharge': {
    title: 'Preparing the Home for a Safe Hospital Discharge',
    category: 'Family Caregiving',
    image: '/images/journal_discharge_1786973031666.jpg',
    content: (
      <>
        <p style={{ marginBottom: 'var(--spacing-6)' }}>The transition from hospital to home is a vulnerable period. Proper preparation is crucial to prevent readmission and ensure a smooth recovery process.</p>
        <h2 style={{ fontSize: '2rem', color: 'var(--color-deep-navy)', margin: 'var(--spacing-10) 0 var(--spacing-4)' }}>Medication Management</h2>
        <p style={{ marginBottom: 'var(--spacing-6)' }}>Ensure all new prescriptions are filled before the patient arrives home. Use pill organizers and set strict reminders. Discard or clearly separate old medications that are no longer needed to prevent accidental dosing errors.</p>
        <div style={{ backgroundColor: 'var(--color-warm-ivory)', padding: 'var(--spacing-6)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-care-teal)', margin: 'var(--spacing-8) 0' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-navy)', margin: '0 0 var(--spacing-2) 0' }}>Key Takeaway</h3>
          <p style={{ margin: 0, fontSize: '1rem' }}>Clear communication with discharge planners ensures you have the necessary medical equipment ready.</p>
        </div>
      </>
    )
  },
  'caregiver-burnout-signs': {
    title: 'The Hidden Signs of Caregiver Burnout',
    category: 'Aging Well',
    image: '/images/journal_burnout_1786973042224.jpg',
    content: (
      <>
        <p style={{ marginBottom: 'var(--spacing-6)' }}>Caregiving is an act of deep love, but it can quickly become overwhelming. Recognizing the signs of burnout is the first step to seeking the help you need to protect your own health.</p>
        <h2 style={{ fontSize: '2rem', color: 'var(--color-deep-navy)', margin: 'var(--spacing-10) 0 var(--spacing-4)' }}>Emotional Exhaustion</h2>
        <p style={{ marginBottom: 'var(--spacing-6)' }}>Are you feeling constantly fatigued, irritable, or emotionally detached? These are classic signs of burnout. It is crucial to schedule regular respite breaks to recharge. You cannot pour from an empty cup.</p>
        <div style={{ backgroundColor: 'var(--color-warm-ivory)', padding: 'var(--spacing-6)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-care-teal)', margin: 'var(--spacing-8) 0' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-navy)', margin: '0 0 var(--spacing-2) 0' }}>Key Takeaway</h3>
          <p style={{ margin: 0, fontSize: '1rem' }}>Accepting help, such as professional respite care, is vital for long-term caregiving sustainability.</p>
        </div>
      </>
    )
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = ARTICLE_DATA[resolvedParams.slug];
  const title = article ? article.title : resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  const urlPath = `/care-journal/${resolvedParams.slug}`;
  return {
    alternates: { canonical: urlPath },
    title: `${title} | Care Journal | PN Support Care Solutions`,
    description: `Read our expert guide on ${title} to support your family's home care journey.`,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = ARTICLE_DATA[resolvedParams.slug];
  
  if (!article) {
    return <div style={{ padding: '100px', textAlign: 'center' }}>Article not found.</div>;
  }

  return (
    <>
      <article>
        {/* Article Header */}
        <header style={{ backgroundColor: 'var(--color-warm-ivory)', padding: 'var(--spacing-16) 0', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <Breadcrumbs items={[{ label: 'Care Journal', href: '/care-journal' }, { label: article.title }]} />
            
            <div style={{ marginTop: 'var(--spacing-8)' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-care-teal)' }}>{article.category}</span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-deep-navy)', margin: 'var(--spacing-4) 0', lineHeight: 1.1 }}>
                {article.title}
              </h1>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)', marginTop: 'var(--spacing-6)', color: 'var(--color-charcoal)', fontSize: '0.9375rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                  <User size={16} />
                  <span>By Editorial Team</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                  <Calendar size={16} />
                  <span>August 24, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <section style={{ padding: 'var(--spacing-16) 0', backgroundColor: 'var(--color-white)' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-12)' }}>
            
            {/* Layout for content and sidebar on desktop */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)', '@media (min-width: 992px)': { flexDirection: 'row' } } as any}>
              
              {/* Main Content Area */}
              <div style={{ flex: 1, maxWidth: '768px', fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--color-charcoal)' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', marginBottom: 'var(--spacing-8)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                  <Image src={article.image} alt={article.title} fill style={{ objectFit: 'cover' }} priority sizes="(max-width: 768px) 100vw, 768px" />
                </div>

                {article.content}

                {/* In-article CTA */}
                <div style={{ marginTop: 'var(--spacing-12)', padding: 'var(--spacing-8)', backgroundColor: 'var(--color-soft-aqua)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-deep-navy)', marginBottom: 'var(--spacing-2)' }}>Need personalized advice?</h3>
                  <p style={{ marginBottom: 'var(--spacing-6)' }}>Our care coordinators offer free, in-home assessments across the GTA.</p>
                  <Link href="/consultation" style={{ display: 'inline-block', padding: 'var(--spacing-3) var(--spacing-6)', backgroundColor: 'var(--color-care-teal)', color: 'var(--color-white)', textDecoration: 'none', borderRadius: 'var(--radius-sm)', fontWeight: 600 }}>
                    Book a Care Consultation
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <aside style={{ width: '100%', maxWidth: '320px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
                
                <div style={{ padding: 'var(--spacing-6)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-navy)', marginBottom: 'var(--spacing-4)' }}>Related Services</h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                    <li>
                      <Link href="/services/dementia-care" style={{ color: 'var(--color-care-teal)', textDecoration: 'none', fontWeight: 500 }}>Dementia Care</Link>
                    </li>
                    <li>
                      <Link href="/services/personal-support" style={{ color: 'var(--color-care-teal)', textDecoration: 'none', fontWeight: 500 }}>Personal Support</Link>
                    </li>
                    <li>
                      <Link href="/services/respite-care" style={{ color: 'var(--color-care-teal)', textDecoration: 'none', fontWeight: 500 }}>Respite Care</Link>
                    </li>
                  </ul>
                </div>

                <div style={{ padding: 'var(--spacing-6)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-deep-navy)', marginBottom: 'var(--spacing-4)' }}>Serving the GTA</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal)', marginBottom: 'var(--spacing-4)' }}>We provide compassionate care in communities near you.</p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-2)' }}>
                    <li><Link href="/locations/toronto" style={{ padding: '4px 12px', backgroundColor: 'var(--color-warm-ivory)', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', textDecoration: 'none', color: 'var(--color-deep-navy)' }}>Toronto</Link></li>
                    <li><Link href="/locations/mississauga" style={{ padding: '4px 12px', backgroundColor: 'var(--color-warm-ivory)', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', textDecoration: 'none', color: 'var(--color-deep-navy)' }}>Mississauga</Link></li>
                    <li><Link href="/locations/oakville" style={{ padding: '4px 12px', backgroundColor: 'var(--color-warm-ivory)', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', textDecoration: 'none', color: 'var(--color-deep-navy)' }}>Oakville</Link></li>
                  </ul>
                </div>

              </aside>

            </div>
          </div>
        </section>
      </article>

      <CTABanner />
    </>
  );
}
