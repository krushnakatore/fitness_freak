import { Hero } from '@/components/home/Hero';
import { FeaturedPrograms } from '@/components/home/FeaturedPrograms';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Stats } from '@/components/home/Stats';
import { TrainerHighlights } from '@/components/home/TrainerHighlights';
import { Testimonials } from '@/components/home/Testimonials';
import { MembershipPreview } from '@/components/home/MembershipPreview';
import { ContactCTA } from '@/components/home/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPrograms />
      <WhyChooseUs />
      <Stats />
      <TrainerHighlights />
      <Testimonials />
      <MembershipPreview />
      <ContactCTA />
    </>
  );
}
