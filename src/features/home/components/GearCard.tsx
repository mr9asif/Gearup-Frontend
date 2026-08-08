"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, MapPin, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Gear } from "../types/home.types";

interface GearCardProps {
  gear: Gear;
  variant?: "customer" | "provider";
}

export default function GearCard({
  gear,
  variant = "customer",
}: GearCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={gear.images[0] || "/images/placeholder-gear.jpg"}
          alt={gear.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Availability */}
        <div className="absolute left-4 top-4">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              gear.isAvailable
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {gear.isAvailable ? "Available" : "Unavailable"}
          </span>
        </div>

        {/* Wishlist */}
        {/* <button className="absolute right-4 top-4 rounded-full bg-background/90 p-2 backdrop-blur transition hover:scale-110">
          <Heart className="h-4 w-4" />
        </button> */}
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {gear.category.name}
          </span>

          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-medium">
              {gear.averageRating ?? "5.0"}
            </span>
          </div>
        </div>

        <div>
          <h3 className="line-clamp-1 text-xl font-semibold">{gear.name}</h3>

          <p className="text-sm text-muted-foreground">{gear.brand}</p>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />

          <span>{gear.provider.name}</span>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-2xl font-bold text-primary">
              ${gear.pricePerDay}
            </p>

            <span className="text-sm text-muted-foreground">per day</span>
          </div>

          <Link href={`/gear/${gear.id}`}>
            <Button>
              Rent Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
