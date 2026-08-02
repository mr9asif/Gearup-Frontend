"use client";

import { useParams } from "next/navigation";

import { useGearDetails } from "@/features/gear/hooks/useGear";
import GearForm from "@/features/provider/components/GearForm";

export default function EditGearPage() {
  const { id } = useParams<{ id: string }>();

  const { data: gear, isLoading } = useGearDetails(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!gear) {
    return <div>Gear not found.</div>;
  }

  return <GearForm mode="edit" initialData={gear} />;
}
