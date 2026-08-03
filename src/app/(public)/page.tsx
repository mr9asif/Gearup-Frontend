import { CategoriesSection } from "@/features/home/components/CategoriesSection";
import { FeaturedGearSection } from "@/features/home/components/FeaturedGearSection";
import { HeroSection } from "@/features/home/components/HeroSection";
import { TestimonialsSection } from "@/features/home/components/Testimonial/TestimonialSection";
import { WhyChooseSection } from "@/features/home/components/whyChooseUs/WhyChooseUs";
import { Footer } from "@/features/home/Footer";
import HowItWorksPage from "@/features/howItWorks/page";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedGearSection />
      {/* <HowItWorksSection /> */}
      <HowItWorksPage />
      <WhyChooseSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
