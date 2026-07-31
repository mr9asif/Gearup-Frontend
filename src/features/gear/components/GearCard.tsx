"use client";

import { ArrowRight, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Gear } from "../types/gear.type";

interface GearCardProps {
  gear: Gear;
}
export function GearCard({ gear }: GearCardProps) {
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
            <Package className="h-4 w-4" />

            <span>{gear.stock}</span>
          </div>
        </div>

        <Link
          href={`/gear/${gear.id}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
