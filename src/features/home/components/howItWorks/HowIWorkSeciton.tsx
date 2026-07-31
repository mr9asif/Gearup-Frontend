"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "./SectionHeader";
import { TimelineStep } from "./TimelineStep";
import { howItWorksSteps } from "./how-it-works";


export function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* ================= Background ================= */}

      <div className="absolute inset-0 -z-10">

        {/* Left Glow */}
        <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

        {/* Right Glow */}
        <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-primary/10 blur-[140px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
      </div>

      {/* ================= Header ================= */}

      <SectionHeader
        badge="How It Works"
        title="Rent Gear In A Few Simple Steps"
        description="From browsing equipment to returning it after your adventure — GearUp makes every step simple, transparent, and secure."
      />

      {/* ================= Timeline ================= */}

      <div className="relative mx-auto max-w-6xl">

        {/* Center Animated Line */}

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.6,
            ease: "easeOut",
          }}
          className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-primary/30 via-primary to-primary/30 lg:block"
        />

        {howItWorksSteps.map((step, index) => (
          <TimelineStep
            key={step.id}
            step={step}
            reverse={index % 2 !== 0}
            isLast={index === howItWorksSteps.length - 1}
          />
        ))}
      </div>
    </section>
  );
}