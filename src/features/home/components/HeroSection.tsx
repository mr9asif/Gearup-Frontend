"use client";

import {
  ArrowRight,
  Bike,
  Package,
  PlayCircle,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* =========================
          Background Effects
      ========================== */}

      {/* Left primary glow */}
      <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[110px]" />

      {/* Right blue glow */}
      <div className="pointer-events-none absolute -right-40 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Center soft glow */}
      <div className="pointer-events-none absolute left-1/2 top-[20%] -z-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />

      {/* Subtle top gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[420px] bg-gradient-to-b from-primary/[0.06] via-primary/[0.025] to-transparent" />

      {/* =========================
          Hero Content
      ========================== */}

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-10 pt-24 text-center lg:pb-12 lg:pt-24">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-primary/15 bg-background/80 px-5 py-2 text-sm font-medium shadow-sm backdrop-blur-md">
          <span className="mr-1.5">⚡</span>
          {"Bangladesh's Trusted Sports Rental Platform"}
        </div>

        {/* Heading */}
        <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
          Rent{" "}
          <span className="relative inline-block">
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 via-emerald-500/20 to-blue-500/20 blur-2xl" />

            <span className="bg-gradient-to-r from-primary via-emerald-500 to-blue-500 bg-clip-text text-transparent">
              Premium Variety
            </span>
          </span>{" "}
          Equipment For Every Adventure
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
          Football, cricket, cycling, camping, hiking and outdoor gear from
          trusted local providers. Affordable, secure and available whenever you
          need it.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <Link href="/gear">
            <Button
              size="lg"
              className="h-13 rounded-xl px-8 text-base shadow-md cursor-pointer"
            >
              Browse Gear
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <Link href="/register?role=provider">
            <Button
              size="lg"
              variant="outline"
              className="h-13 rounded-xl border-primary/20 bg-background/70 px-8 text-base backdrop-blur-sm cursor-pointer"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Become a Provider
            </Button>
          </Link>
        </div>

        {/* Rating */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <span className="font-semibold text-foreground">4.9/5</span>

          <span className="text-muted-foreground">Rating</span>

          <span className="text-muted-foreground/40">•</span>

          <span className="text-muted-foreground">1000+ Happy Customers</span>
        </div>

        {/* Trust */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4.5 w-4.5 text-primary" />
            <span>Verified Providers</span>
          </div>

          <div className="hidden h-4 w-px bg-border sm:block" />

          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4.5 w-4.5 text-primary" />
            <span>Secure Payments</span>
          </div>

          <div className="hidden h-4 w-px bg-border sm:block" />

          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4.5 w-4.5 text-primary" />
            <span>Instant Booking</span>
          </div>
        </div>

        {/* Statistics */}
        {/* Statistics */}
        <div className="mt-10 grid w-full max-w-4xl gap-5 sm:grid-cols-3">
          {/* Successful Rentals */}
          <div className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white/70 p-6 shadow-md shadow-primary/[0.04] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/90 hover:shadow-xl hover:shadow-primary/10 dark:border-primary/20 dark:bg-white/[0.08] dark:shadow-black/20 dark:hover:border-primary/30 dark:hover:bg-white/[0.12]">
            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all duration-300 group-hover:bg-primary/20" />

            {/* Icon */}
            <div className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
              <Package className="h-5 w-5" />
            </div>

            {/* Number */}
            <h3 className="relative bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-4xl font-black tracking-tight text-transparent">
              1000+
            </h3>

            {/* Label */}
            <p className="relative mt-1.5 text-sm font-medium text-muted-foreground">
              Successful Rentals
            </p>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-emerald-500 transition-all duration-300 group-hover:w-full" />
          </div>

          {/* Sports Equipment */}
          <div className="group relative overflow-hidden rounded-2xl border border-blue-500/10 bg-white/70 p-6 shadow-md shadow-blue-500/[0.04] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/25 hover:bg-white/90 hover:shadow-xl hover:shadow-blue-500/10 dark:border-blue-400/20 dark:bg-white/[0.08] dark:shadow-black/20 dark:hover:border-blue-400/30 dark:hover:bg-white/[0.12]">
            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all duration-300 group-hover:bg-blue-500/20" />

            {/* Icon */}
            <div className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition-transform duration-300 group-hover:scale-110">
              <Bike className="h-5 w-5" />
            </div>

            {/* Number */}
            <h3 className="relative bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-4xl font-black tracking-tight text-transparent">
              500+
            </h3>

            {/* Label */}
            <p className="relative mt-1.5 text-sm font-medium text-muted-foreground">
              Sports Equipment
            </p>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
          </div>

          {/* Trusted Providers */}
          <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/10 bg-white/70 p-6 shadow-md shadow-emerald-500/[0.04] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/25 hover:bg-white/90 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-emerald-400/20 dark:bg-white/[0.08] dark:shadow-black/20 dark:hover:border-emerald-400/30 dark:hover:bg-white/[0.12]">
            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition-all duration-300 group-hover:bg-emerald-500/20" />

            {/* Icon */}
            <div className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 transition-transform duration-300 group-hover:scale-110">
              <Users className="h-5 w-5" />
            </div>

            {/* Number */}
            <h3 className="relative bg-gradient-to-r from-emerald-500 to-primary bg-clip-text text-4xl font-black tracking-tight text-transparent">
              50+
            </h3>

            {/* Label */}
            <p className="relative mt-1.5 text-sm font-medium text-muted-foreground">
              Trusted Providers
            </p>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-primary transition-all duration-300 group-hover:w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
