"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Quote, Star } from "lucide-react";

import Image from "next/image";
import { SectionHeader } from "../howItWorks/SectionHeader";
import { testimonials } from "./tetimonial";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/[0.06] blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/[0.05] blur-[140px]" />
      </div>

      {/* Header */}
      <SectionHeader
        badge="Testimonials"
        title="Trusted By Athletes & Adventurers"
        description="Hear what our community says about renting equipment through GearUp."
      />

      {/* Testimonials */}
      <div className="mx-auto mt-12 grid max-w-6xl gap-5 px-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="
              group relative overflow-hidden
              rounded-3xl
              border border-border
              bg-card
              p-6
              shadow-sm

              transition-all duration-300

              hover:-translate-y-1
              hover:border-primary/30
              hover:shadow-xl
              hover:shadow-primary/10

              hover:bg-gradient-to-br
              hover:from-primary/[0.04]
              hover:via-background
              hover:to-blue-500/[0.04]

              dark:hover:from-primary/[0.08]
              dark:hover:via-background
              dark:hover:to-blue-500/[0.08]
            "
          >
            {/* Subtle Hover Glow */}
            <div
              className="
                pointer-events-none
                absolute -right-14 -top-14
                h-32 w-32
                rounded-full
                bg-gradient-to-br
                from-primary/20
                via-emerald-500/10
                to-blue-500/20
                opacity-0
                blur-3xl
                transition-opacity duration-500
                group-hover:opacity-100
              "
            />

            {/* Top Row */}
            <div className="relative flex items-center justify-between">
              {/* Rating */}
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <Quote className="h-7 w-7 text-primary/15 transition-colors duration-300 group-hover:text-primary/30" />
            </div>

            {/* Review */}
            <p className="relative mt-6 text-[15px] leading-7 text-foreground/80">
              “{testimonial.review}”
            </p>

            {/* Divider */}
            <div className="my-6 h-px bg-border" />

            {/* User */}
            <div className="relative flex items-center gap-3">
              {/* Avatar */}
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/10">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="truncate text-sm font-semibold">
                    {testimonial.name}
                  </h4>

                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 fill-primary text-primary-foreground" />
                </div>

                <p className="mt-0.5 truncate text-xs text-muted-foreground">
                  {testimonial.role} · {testimonial.location}
                </p>
              </div>
            </div>

            {/* Verified */}
            <div className="relative mt-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/[0.06] px-2.5 py-1 text-[11px] font-medium text-primary">
                <CheckCircle2 className="h-3 w-3" />
                Verified Renter
              </span>
            </div>

            {/* Bottom Gradient */}
            <div
              className="
                absolute bottom-0 left-0
                h-0.5 w-0
                bg-gradient-to-r
                from-primary
                via-emerald-500
                to-blue-500
                transition-all duration-500
                group-hover:w-full
              "
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
