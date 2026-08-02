"use client";

import { Loader2 } from "lucide-react";

import { useGetRentals } from "@/features/admin/hooks/useGetRentals";
import { Rental } from "@/features/admin/types/admin.types";

export default function AdminRentalsPage() {
  const { data: rentals = [], isPending, isError } = useGetRentals();

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
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">All Rentals</h1>
        <p className="text-muted-foreground">Manage all rental orders.</p>
      </div>

      <div className="overflow-x-auto rounded-lg border">
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
              <tr key={rental.id} className="border-b">
                <td className="p-4">{rental.customer?.name ?? "-"}</td>

                <td className="p-4">{rental.gear?.name ?? "-"}</td>

                <td className="p-4">{rental.quantity}</td>

                <td className="p-4">৳{rental.totalPrice}</td>

                <td className="p-4">{rental.status}</td>

                <td className="p-4">{rental.paymentStatus}</td>
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
  );
}
