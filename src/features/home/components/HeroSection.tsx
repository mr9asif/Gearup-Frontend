"use client";

import { ArrowRight, PlayCircle, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center lg:py-32">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border bg-background/80 px-5 py-2 text-sm font-medium shadow-sm backdrop-blur">
          ⚡ {"Bangladesh's Trusted Sports Rental Platform"}
        </div>

        {/* Heading */}
        <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Rent Premium
          <span className="text-primary"> Sports Equipment </span>
          For Every Adventure
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
          Football, cricket, cycling, camping, hiking and outdoor gear from
          trusted local providers. Affordable, secure and available whenever you
          need it.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/gear">
            <Button size="lg" className="h-14 rounded-xl px-8 text-base">
              Browse Gear
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <Link href="/register?role=provider">
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-xl px-8 text-base"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Become a Provider
            </Button>
          </Link>
        </div>

        {/* Rating */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          </div>

          <span>4.9/5 Rating</span>

          <span>•</span>

          <span>1000+ Happy Customers</span>
        </div>

        {/* Trust */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            Verified Providers
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            Secure Payments
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            Instant Booking
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid w-full max-w-4xl gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border bg-background/70 p-6 shadow-lg backdrop-blur">
            <h3 className="text-4xl font-bold text-primary">1000+</h3>
            <p className="mt-2 text-muted-foreground">Successful Rentals</p>
          </div>

          <div className="rounded-2xl border bg-background/70 p-6 shadow-lg backdrop-blur">
            <h3 className="text-4xl font-bold text-primary">500+</h3>
            <p className="mt-2 text-muted-foreground">Sports Equipment</p>
          </div>

          <div className="rounded-2xl border bg-background/70 p-6 shadow-lg backdrop-blur">
            <h3 className="text-4xl font-bold text-primary">50+</h3>
            <p className="mt-2 text-muted-foreground">Trusted Providers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
