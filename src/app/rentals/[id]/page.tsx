"use client";

import { useParams } from "next/navigation";

import { useGearDetails } from "@/features/gear/hooks/useGear";

import GearPreview from "@/features/rental/components/GearPreview";
import RentalForm from "@/features/rental/components/RentalForm";

export default function RentPage() {
  const { id } = useParams<{ id: string }>();

  const { data: gear, isLoading } = useGearDetails(id);
  console.log("rental", gear);

  if (isLoading) {
    return (
      <div className="container mx-auto py-20 text-center">Loading...</div>
    );
  }

  if (!gear) {
    return (
      <div className="container mx-auto py-20 text-center">Gear not found.</div>
    );
  }

  return (
    <div className="bg-muted/20 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <GearPreview gear={gear} />

          <RentalForm
            gearId={gear.id}
            stock={gear.stock}
            pricePerDay={Number(gear.pricePerDay)}
          />
        </div>
      </div>
    </div>
  );
}
