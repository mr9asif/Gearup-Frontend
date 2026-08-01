"use client";

import { Package2 } from "lucide-react";
import ProviderOrderCard from "../components/provider/ProviderOrderCard";
import { useProviderOrders } from "../hooks/useProviderOrder";
import { RentalOrder } from "../types/rental.type";
import { useCompleteRental } from "../hooks/useCompleteRental";

export default function ProviderOrdersPage() {
  const { data: orders, isLoading } = useProviderOrders();
const {
  mutate: completeRental,
  isPending: completing,
} = useCompleteRental();
  if (isLoading) {
    return (
      <div className="flex h-80 items-center justify-center">Loading...</div>
    );
  }

  if (!orders?.length) {
    return (
      <div className="flex h-80 flex-col items-center justify-center">
        <Package2 className="mb-4 h-12 w-12 text-muted-foreground" />

        <h2 className="text-2xl font-semibold">No Rental Requests</h2>

        <p className="text-muted-foreground">
          Rental requests from customers will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Rental Requests</h1>

        <p className="text-muted-foreground">
          Review and manage customer rental requests.
        </p>
      </div>

      <div className="space-y-5">
        {orders.map((order: RentalOrder) => (
          <ProviderOrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
