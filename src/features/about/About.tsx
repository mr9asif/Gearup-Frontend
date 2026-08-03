"use client";

import Link from "next/link";

import {
  ArrowRight,
  Award,
  HeartHandshake,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Trusted & Secure",
      description:
        "Every rental is protected with verified providers and a secure booking experience.",
    },
    {
      icon: Zap,
      title: "Fast Booking",
      description:
        "Find and reserve sports equipment within minutes without unnecessary hassle.",
    },
    {
      icon: HeartHandshake,
      title: "Community First",
      description:
        "We connect sports lovers with trusted local providers to make every adventure accessible.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "Quality equipment from reliable providers so you can play with confidence.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative mx-auto max-w-6xl px-4 py-24 text-center">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            About GearUp
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
            Making Sports More Accessible
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            GearUp is a modern sports equipment rental platform that connects
            customers with trusted providers. Whether you want to rent equipment
            for your next adventure or earn by listing your gear, GearUp makes
            the entire experience simple, secure and affordable.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto grid max-w-6xl items-center gap-16 px-4 lg:grid-cols-2">
          <div>
            <span className="font-medium text-primary">Our Story</span>

            <h2 className="mt-3 text-4xl font-bold">Why We Built GearUp</h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              Buying sports equipment can be expensive, especially if you only
              need it occasionally. At the same time, many people own quality
              equipment that sits unused.
            </p>

            <p className="mt-5 leading-8 text-muted-foreground">
              GearUp bridges this gap by creating a trusted marketplace where
              providers can list their equipment and customers can rent exactly
              what they need—saving money, reducing waste and making sports
              accessible to everyone.
            </p>
          </div>

          <div className="rounded-3xl border bg-card p-10 shadow-sm">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-4xl font-bold text-primary">500+</h3>
                <p className="mt-2 text-muted-foreground">Sports Equipment</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-primary">1000+</h3>
                <p className="mt-2 text-muted-foreground">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-primary">50+</h3>
                <p className="mt-2 text-muted-foreground">Trusted Providers</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-primary">99%</h3>
                <p className="mt-2 text-muted-foreground">
                  Customer Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-muted/40 py-24">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <Target className="mx-auto h-14 w-14 text-primary" />

          <h2 className="mt-6 text-4xl font-bold">Our Mission</h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Our mission is to make sports equipment affordable, accessible and
            available for everyone by connecting customers with trusted rental
            providers through one simple platform.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="font-medium text-primary">Our Values</span>

            <h2 className="mt-3 text-4xl font-bold">
              What Makes GearUp Different
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">{value.title}</h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* CTA */}
      <section className="border-t py-24">
        <div className="container mx-auto max-w-4xl rounded-[32px] border bg-gradient-to-r from-primary to-primary/80 px-8 py-16 text-center text-primary-foreground">
          <Users className="mx-auto h-14 w-14" />

          <h2 className="mt-6 text-4xl font-bold">Join the GearUp Community</h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/90">
            Whether you are looking for premium sports equipment or want to earn
            by renting out your gear, GearUp is the perfect place to start.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/gear">
              <Button size="lg" variant="secondary">
                Browse Gear
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link href="/register?role=provider">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
              >
                Become a Provider
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
