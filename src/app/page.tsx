import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { EditorialIntro } from '@/components/sections/EditorialIntro';
import { FeaturedServices } from '@/components/sections/FeaturedServices';
import { WhoWeSupport } from '@/components/sections/WhoWeSupport';
import { FeaturedStory } from '@/components/sections/FeaturedStory';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { HowCareWorks } from '@/components/sections/HowCareWorks';
import { ServiceAreas } from '@/components/sections/ServiceAreas';
import { Testimonials } from '@/components/sections/Testimonials';
import { JournalPreview } from '@/components/sections/JournalPreview';
import { CareersCTA } from '@/components/sections/CareersCTA';
import { CTABanner } from '@/components/sections/CTABanner';
import { ExplainerVideo } from '@/components/sections/ExplainerVideo';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <EditorialIntro />
      <ExplainerVideo />
      <FeaturedServices />
      <WhoWeSupport />
      <FeaturedStory />
      <WhyChooseUs />
      <HowCareWorks />
      <ServiceAreas />
      <Testimonials />
      <JournalPreview />
      <CareersCTA />
      <CTABanner />
    </>
  );
}
