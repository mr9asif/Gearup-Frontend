"use client";

import { SearchX } from "lucide-react";
import { Gear } from "../types/gear.type";
import { GearCard } from "./GearCard";

interface GearGridProps {
  gears: Gear[];
}

export function GearGrid({ gears }: GearGridProps) {
  if (!gears.length) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-24 text-center">
        <SearchX className="mb-4 h-16 w-16 text-muted-foreground" />

        <h3 className="text-2xl font-semibold">No Gear Found</h3>

        <p className="mt-2 max-w-md text-muted-foreground">
          We could not find any equipment matching your search or filters. Try
          changing your filters or search keyword.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {gears.map((gear) => (
        <GearCard key={gear.id} gear={gear} />
      ))}
    </div>
  );
}
