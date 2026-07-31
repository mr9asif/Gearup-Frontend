import { CalendarCheck2, Search, Trophy } from "lucide-react";

import { SectionHeader } from "./SectionHeader";
import { StepCard } from "./StepCard";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Browse Equipment",
    description:
      "Explore hundreds of sports and outdoor equipment from trusted local providers.",
  },
  {
    number: "02",
    icon: CalendarCheck2,
    title: "Book Instantly",
    description:
      "Select your rental dates, confirm availability, and reserve your equipment within minutes.",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Play & Return",
    description:
      "Enjoy your adventure, then return the equipment hassle-free after your rental period.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <SectionHeader
        badge="How It Works"
        title="Rent Gear in Three Simple Steps"
        description="Finding and renting quality sports equipment has never been easier. Get started in just a few minutes."
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => (
          <StepCard
            key={step.number}
            {...step}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
