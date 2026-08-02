"use client";

import { GearCard } from "@/features/gear/components/GearCard";
import { useMyGear } from "@/features/gear/hooks/useMyGear";

export default function ProviderGearPage() {
  const { data: gears, isLoading, isError } = useMyGear();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong.</div>;

  if (!gears?.length) {
    return <div className="py-20 text-center">No gear found.</div>;
  }
  console.log(gears);

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {gears.map((gear) => (
        <GearCard key={gear.id} gear={gear} variant="provider" />
      ))}
    </div>
  );
}
