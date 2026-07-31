"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeader } from "../howItWorks/SectionHeader";
import { testimonials } from "./tetimonial";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
      </div>

      <SectionHeader
        badge="Testimonials"
        title="Trusted By Athletes & Adventurers"
        description="Hear what our community says about renting equipment through GearUp."
      />

      <div className="container mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background/70 p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Glow */}

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              {/* Quote */}

              <Quote className="mb-6 h-10 w-10 text-primary/20" />

              {/* Stars */}

              <div className="mb-6 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}

              <p className="leading-7 text-muted-foreground">
                {testimonial.review}
              </p>

              {/* User */}

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {testimonial.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>

                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
