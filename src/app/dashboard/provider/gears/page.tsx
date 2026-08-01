"use client";

import { useMyGear } from "@/features/gear/hooks/useMyGear";

export default function ProviderGearPage() {
  const { data: gears, isLoading, isError } = useMyGear();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong.</div>;
  }

  if (!gears?.length) {
    return <div className="py-20 text-center">No gear found.</div>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {gears.map((gear) => (
        <div key={gear.id} className="rounded-lg border p-4">
          <img
            src={gear.images?.[0]}
            alt={gear.name}
            className="aspect-video w-full rounded-md object-cover"
          />

          <h2 className="mt-3 text-lg font-semibold">{gear.name}</h2>

          <p>{gear.brand}</p>

          <p className="font-medium">৳{gear.pricePerDay}/day</p>

          <p>Stock: {gear.stock}</p>

          <p>{gear.isAvailable ? "Available" : "Unavailable"}</p>
        </div>
      ))}
    </div>
  );
}
