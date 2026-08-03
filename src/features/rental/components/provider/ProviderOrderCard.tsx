"use client";

import { format } from "date-fns";
import { CalendarDays, Package2, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAcceptRental } from "../../hooks/useAcceptRental";
import { useCompleteRental } from "../../hooks/useCompleteRental";
import { useRejectRental } from "../../hooks/useRejectRental";
import { useStartRental } from "../../hooks/useStartRental";
import { RentalOrder } from "../../types/rental.type";

interface ProviderOrderCardProps {
  order: RentalOrder;
}

export default function ProviderOrderCard({ order }: ProviderOrderCardProps) {
  const { mutate: acceptRental, isPending: isAccepting } = useAcceptRental();

  const { mutate: rejectRental, isPending: isRejecting } = useRejectRental();
  const { mutate: startRental, isPending: isStarting } = useStartRental();
  const { mutate: completeRental, isPending: completing } = useCompleteRental();
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
          {/* Left */}

          <div className="flex gap-4">
            <img
              src={order.gear.images[0]}
              alt={order.gear.name}
              className="h-28 w-28 rounded-xl object-cover"
            />

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold">{order.gear.name}</h2>

                <Badge>{order.status}</Badge>
              </div>

              <p className="text-muted-foreground">{order.gear.brand}</p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                {order.customer.name} ({order.customer.email})
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                {format(new Date(order.startDate), "dd MMM yyyy")}-
                {format(new Date(order.endDate), "dd MMM yyyy")}
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Package2 className="h-4 w-4" />
                Qty: {order.quantity}
              </div>

              <p className="font-semibold">
                ৳{Number(order.totalAmount).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Right */}

          <div className="flex flex-col gap-3">
            {/* PLACED */}
            {order.status === "PLACED" && (
              <>
                <Button
                  variant="destructive"
                  disabled={isRejecting || isAccepting}
                  onClick={() => rejectRental(order.id)}
                >
                  Reject
                </Button>

                <Button
                  disabled={isRejecting || isAccepting}
                  onClick={() => acceptRental(order.id)}
                  className="bg-amber-500 text-white hover:bg-amber-600"
                >
                  Accept
                </Button>
              </>
            )}

            {/* CONFIRMED */}
            {order.status === "CONFIRMED" && (
              <Button
                disabled
                className="bg-blue-600 text-white hover:bg-blue-600 disabled:opacity-100"
              >
                Waiting for Payment
              </Button>
            )}

            {/* PAID */}
            {order.status === "PAID" && (
              <Button
                disabled={isStarting}
                onClick={() => startRental(order.id)}
                className="bg-violet-600 text-white hover:bg-violet-700"
              >
                {isStarting ? "Starting..." : "Mark Picked Up"}
              </Button>
            )}

            {/* PICKED UP */}
            {order.status === "PICKED_UP" && (
              <Button
                disabled={completing}
                onClick={() => completeRental(order.id)}
                className="bg-emerald-600 text-white hover:bg-emerald-700"
              >
                {completing ? "Completing..." : "Mark Returned"}
              </Button>
            )}

            {/* RETURNED */}
            {order.status === "RETURNED" && (
              <Button
                disabled
                className="bg-slate-600 text-white hover:bg-slate-600 disabled:opacity-100"
              >
                Completed
              </Button>
            )}

            {/* CANCELLED */}
            {order.status === "CANCELLED" && (
              <Button
                disabled
                className="bg-red-600 text-white hover:bg-red-600 disabled:opacity-100"
              >
                Cancelled
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
