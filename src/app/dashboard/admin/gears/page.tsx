"use client";

import { useGetAllGear } from "@/features/admin/hooks/useGetAllGear";
import { Gear } from "@/features/gear/types/gear.type";
import { Loader2 } from "lucide-react";

export default function AdminGearPage() {
  const { data, isPending, isError } = useGetAllGear();

  if (isPending) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-96 items-center justify-center">
        Failed to load gears.
      </div>
    );
  }

  const gears = data?.data ?? [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">All Gear</h1>
        <p className="text-muted-foreground">Manage all gears from here.</p>
      </div>

      <div className="rounded-lg border">
        <table className="w-full">
          <thead className="border-b bg-muted/50">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Brand</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price/Day</th>
              <th className="p-4 text-left">Stock</th>
            </tr>
          </thead>

          <tbody>
            {gears.map((gear: Gear) => (
              <tr key={gear.id} className="border-b">
                <td className="p-4">
                  <img
                    src={gear.images?.[0]}
                    alt={gear.name}
                    className="h-12 w-12 rounded-md object-cover"
                  />
                </td>

                <td className="p-4">{gear.name}</td>

                <td className="p-4">{gear.brand}</td>

                <td className="p-4">{gear.category?.name ?? "-"}</td>

                <td className="p-4">৳{gear.pricePerDay}</td>

                <td className="p-4">{gear.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
