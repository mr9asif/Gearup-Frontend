import { CategoriesSection } from "@/features/home/components/CategoriesSection";
import { FeaturedGearSection } from "@/features/home/components/FeaturedGearSection";
import { HeroSection } from "@/features/home/components/HeroSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedGearSection />
    </>
  );
}
