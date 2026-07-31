import { CategoriesSection } from "@/features/home/components/CategoriesSection";
import { FeaturedGearSection } from "@/features/home/components/FeaturedGearSection";
import { HeroSection } from "@/features/home/components/HeroSection";
import { HowItWorksSection } from "@/features/home/components/howItWorks/HowIWorkSeciton";
import { TestimonialsSection } from "@/features/home/components/Testimonial/TestimonialSection";
import { WhyChooseSection } from "@/features/home/components/whyChooseUs/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedGearSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <TestimonialsSection />
    </>
  );
}
