"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { useFeaturedGear } from "../hooks/use-featured";

import GearCard from "./GearCard";
import { GearCardSkeleton } from "./GearCardSkeleton";

export function FeaturedGearSection() {
  const { data, isPending, isError } = useFeaturedGear();

  const gears = data?.data?.data ?? [];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Browse Equipment
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Rent Premium Sports Equipment
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Discover high-quality sports and outdoor equipment from trusted
            providers. Find the perfect gear for your next adventure.
          </p>
        </div>

        {/* Loading */}
        {isPending && (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <GearCardSkeleton key={index} />
            ))}
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 py-12 text-center">
            <h3 className="text-xl font-semibold">Failed to load equipment</h3>

            <p className="mt-2 text-muted-foreground">
              Please try again later.
            </p>
          </div>
        )}

        {/* Empty */}
        {!isPending && !isError && gears.length === 0 && (
          <div className="rounded-2xl border py-16 text-center">
            <h3 className="text-xl font-semibold">No equipment available</h3>

            <p className="mt-2 text-muted-foreground">
              Equipment will appear here soon.
            </p>
          </div>
        )}

        {/* Gear Grid */}
        {!isPending && !isError && gears.length > 0 && (
          <>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {gears.map((gear) => (
                <GearCard key={gear.id} gear={gear} />
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-14 flex justify-center">
              <Link href="/gear">
                <Button size="lg">
                  View All Equipment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
