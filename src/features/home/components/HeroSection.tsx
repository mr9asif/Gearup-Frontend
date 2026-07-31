"use client";

import Link from "next/link";

import { ArrowRight, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              ⚡ Rent Sports Equipment Instantly
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Play More.
              <br />
              <span className="text-primary">Own Less.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Rent premium sports and outdoor equipment from trusted providers
              near you. Affordable, secure and hassle-free.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/gear">
                <Button size="lg">
                  Browse Gear
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/register?role=provider">
                <Button size="lg" variant="outline">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Become a Provider
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-10">
              <div>
                <h3 className="text-3xl font-bold">1000+</h3>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-sm text-muted-foreground">Sports Gear</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-sm text-muted-foreground">
                  Trusted Providers
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center">
            <div className="flex h-[500px] w-full max-w-[560px] items-center justify-center rounded-3xl border bg-gradient-to-br from-primary/15 via-primary/5 to-background shadow-2xl">
              <div className="text-center">
                <div className="text-8xl">🏕️</div>

                <h3 className="mt-4 text-2xl font-bold">
                  Sports & Outdoor Gear
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Hero illustration will be added here later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
