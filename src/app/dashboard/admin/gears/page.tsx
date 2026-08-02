"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";

import { useGetAllGear } from "@/features/admin/hooks/useGetAllGear";
import { Gear } from "@/features/gear/types/gear.type";
import AppPagination from "@/shared/common/AppPagination";

export default function AdminGearPage() {
  const [page, setPage] = useState(1);

  const { data, isPending, isError } = useGetAllGear({
    page,
    limit: 10,
  });

  const gears = data?.data ?? [];
  const meta = data?.meta;

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

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">All Gear</h1>
        <p className="text-muted-foreground">Manage all gears from here.</p>
      </div>

      {/* Scrollable Table */}
      <div
        className="flex-1 overflow-y-auto px-6 py-6"
        style={{ scrollbarGutter: "stable" }}
      >
        <div className="h-full overflow-auto rounded-lg border">
          <table className="w-full">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Brand</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Price / Day</th>
                <th className="p-4 text-left">Stock</th>
              </tr>
            </thead>

            <tbody>
              {gears.map((gear: Gear) => (
                <tr key={gear.id} className="border-b hover:bg-muted/30">
                  <td className="p-4">
                    <img
                      src={gear.images?.[0]}
                      alt={gear.name}
                      className="h-12 w-12 rounded-md object-cover"
                    />
                  </td>

                  <td className="p-4 font-medium">{gear.name}</td>

                  <td className="p-4">{gear.brand}</td>

                  <td className="p-4">{gear.category?.name ?? "-"}</td>

                  <td className="p-4">
                    ৳{Number(gear.pricePerDay).toLocaleString()}
                  </td>

                  <td className="p-4">{gear.stock}</td>
                </tr>
              ))}

              {gears.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="py-10 text-center text-muted-foreground"
                  >
                    No gears found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <AppPagination
        page={page}
        limit={10}
        meta={meta}
        onPageChange={setPage}
      />
    </div>
  );
}
