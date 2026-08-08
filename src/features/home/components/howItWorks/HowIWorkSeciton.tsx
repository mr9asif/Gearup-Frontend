"use client";

import { motion } from "framer-motion";

import { howItWorksSteps } from "./how-it-works";
import { MobileTimelineStep } from "./MobiletimeLineStep";
import { SectionHeader } from "./SectionHeader";
import { TimelineStep } from "./TimelineStep";

export function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      {/* =========================================
          Background
      ========================================== */}

      {/* Main soft gradient */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-primary/[0.025] via-background to-blue-500/[0.025]" />

      {/* Left glow */}
      <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-80 w-80 rounded-full bg-primary/[0.08] blur-[120px]" />

      {/* Right glow */}
      <div className="pointer-events-none absolute -right-40 bottom-20 -z-10 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-[140px]" />

      {/* Center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-72 w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/[0.035] blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* =========================================
            Header
        ========================================== */}

        <SectionHeader
          badge="How It Works"
          title="Rent Gear In A Few Simple Steps"
          description="From browsing equipment to returning it after your adventure — GearUp makes every step simple, transparent, and secure."
        />

        {/* =========================================
            Timeline
        ========================================== */}

        <div className="relative mx-auto max-w-6xl">
          {/* =====================================
              Center Animated Timeline
          ====================================== */}

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
            }}
            className="
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-px
              -translate-x-1/2
              origin-top
              bg-gradient-to-b
              from-primary/10
              via-primary
              to-blue-500/10
              lg:block
            "
          />

          {/* =====================================
              Timeline Steps
          ====================================== */}

          <div className="hidden space-y-10 lg:block">
            {howItWorksSteps.map((step, index) => (
              <TimelineStep
                key={step.id}
                step={step}
                reverse={index % 2 !== 0}
                isLast={index === howItWorksSteps.length - 1}
              />
            ))}
          </div>

          {/* =====================================
              Mobile Timeline
          ====================================== */}

          <div className="space-y-4 lg:hidden">
            {howItWorksSteps.map((step, index) => (
              <MobileTimelineStep
                key={step.id}
                step={step}
                isLast={index === howItWorksSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
