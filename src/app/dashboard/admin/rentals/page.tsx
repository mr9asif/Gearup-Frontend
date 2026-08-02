"use client";

import { Loader2 } from "lucide-react";

import { useGetRentals } from "@/features/admin/hooks/useGetRentals";
import { Rental } from "@/features/admin/types/admin.types";
import AppPagination from "@/shared/common/AppPagination";
import { useState } from "react";

export default function AdminRentalsPage() {
  const [page, setPage] = useState(1);

  const { data, isPending, isError } = useGetRentals({
    page,
    limit: 10,
  });

  const rentals = data?.data ?? [];
  const meta = data?.meta;
  console.log("meta", meta);

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
        Failed to load rentals.
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">All Rentals</h1>
        <p className="text-muted-foreground">Manage all rental orders.</p>
      </div>

      <div
        className="flex-1 overflow-y-auto px-6 py-6"
        style={{ scrollbarGutter: "stable" }}
      >
        <div className="h-full overflow-auto">
          <table className="w-full">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="p-4 text-left">Customer</th>
                <th className="p-4 text-left">Gear</th>
                <th className="p-4 text-left">Quantity</th>
                <th className="p-4 text-left">Total</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Payment</th>
              </tr>
            </thead>

            <tbody>
              {rentals.map((rental: Rental) => (
                <tr key={rental.id} className="border-b hover:bg-muted/30">
                  <td className="p-4">
                    <div>
                      <p className="font-medium">{rental.customer.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {rental.customer.email}
                      </p>
                    </div>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      {rental.gear.images?.[0] && (
                        <img
                          src={rental.gear.images[0]}
                          alt={rental.gear.name}
                          className="h-12 w-12 rounded-md object-cover"
                        />
                      )}
                      <span>{rental.gear.name}</span>
                    </div>
                  </td>

                  <td className="p-4">{rental.quantity}</td>

                  <td className="p-4 font-medium">
                    ৳{Number(rental.totalAmount).toLocaleString()}
                  </td>

                  <td className="p-4">{rental.status}</td>

                  <td className="p-4">{rental.payment?.status ?? "-"}</td>
                </tr>
              ))}

              {rentals.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="py-10 text-center text-muted-foreground"
                  >
                    No rentals found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AppPagination
        page={page}
        limit={10}
        meta={meta}
        onPageChange={setPage}
      />
    </div>
  );
}
