"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { Gear } from "../types/gear.type";

interface GearCardProps {
  gear: Gear;
  variant?: "customer" | "provider";
}

export function GearCard({ gear, variant = "customer" }: GearCardProps) {
  const router = useRouter();

  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={gear.images?.[0] || "/placeholder.png"}
          alt={gear.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-medium text-white ${
            gear.isAvailable ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {gear.isAvailable ? "Available" : "Unavailable"}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        {gear.category && (
          <span className="text-xs uppercase tracking-wider text-primary">
            {gear.category.name}
          </span>
        )}

        <div>
          <h3 className="line-clamp-1 text-lg font-semibold">{gear.name}</h3>

          <p className="text-sm text-muted-foreground">{gear.brand}</p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div>
            <span className="text-2xl font-bold text-primary">
              ৳{gear.pricePerDay}
            </span>

            <span className="text-muted-foreground"> /day</span>
          </div>

          <div className="flex items-center gap-1 text-muted-foreground">
            <span>{gear.stock}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            className="flex-1"
            onClick={() =>
              router.push(
                variant === "provider"
                  ? `/dashboard/provider/gears/${gear.id}`
                  : `/gear/${gear.id}`,
              )
            }
          >
            View Details
          </Button>

          {variant === "customer" ? (
            <Button
              className="flex-1"
              onClick={() => router.push(`/rentals/${gear.id}`)}
            >
              Rent Now
            </Button>
          ) : (
            <Button
              variant="outline"
              className="flex-1"
              onClick={() =>
                router.push(`/dashboard/provider/gears/${gear.id}/edit`)
              }
            >
              Edit Gear
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
