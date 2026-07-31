"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { SectionHeader } from "../howItWorks/SectionHeader";
import { whyChooseFeatures } from "./why-choose-us";

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* ================= Background ================= */}

      <div className="absolute inset-0 -z-10">
        {/* Left Glow */}
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

        {/* Right Glow */}
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/10 blur-[140px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
      </div>

      {/* ================= Header ================= */}

      <SectionHeader
        badge="Why Choose GearUp"
        title="Why Thousands Choose GearUp"
        description="A modern rental platform built for athletes, adventurers, and outdoor enthusiasts who want quality gear without the high ownership cost."
      />

      {/* ================= Cards ================= */}

      <div className="container mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border",
                  "border-border bg-background/70",
                  "backdrop-blur-xl",
                  "transition-all duration-300",
                  "hover:border-primary/30",
                  "hover:shadow-2xl hover:shadow-primary/10",
                )}
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
                </div>

                <div className="relative p-8">
                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 5,
                    }}
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>

                  {/* Number */}

                  <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Feature {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Title */}

                  <h3 className="mt-4 text-2xl font-semibold transition-colors duration-300 group-hover:text-primary">
                    {feature.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
