"use client";

import { format } from "date-fns";
import { CalendarDays, Package2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCreatePayment } from "@/features/payment/hooks/useCreatePayment";
import { useState } from "react";
import { useCustomerRentals } from "../hooks/useCustomerRental";
import { RentalOrder } from "../types/rental.type";

import LeaveReviewModal from "@/features/review/components/LeaveReviewModel";
import { EditableReview } from "@/features/review/types/review.type";
export interface ReviewFormData {
  id: string;
  rating: number;
  comment: string;
}
export default function RentalPage() {
  const { data: orders, isLoading } = useCustomerRentals();
  const { mutate: createPayment, isPending } = useCreatePayment();
  const [reviewRentalId, setReviewRentalId] = useState<string | null>(null);

  const [editingReview, setEditingReview] = useState<EditableReview | null>(
    null,
  );
  if (isLoading) {
    return (
      <div className="flex h-80 items-center justify-center">Loading...</div>
    );
  }

  if (!orders?.length) {
    return (
      <div className="flex h-80 flex-col items-center justify-center">
        <Package2 className="mb-4 h-12 w-12 text-muted-foreground" />
        <h2 className="text-xl font-semibold">No Orders Yet</h2>

        <p className="text-muted-foreground">
          Start renting your favourite sports gear.
        </p>
      </div>
    );
  }
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Rental Orders</h1>

        <p className="text-muted-foreground">
          Track all your rental requests and payments.
        </p>
      </div>

      <div className="space-y-5">
        {orders.map((order: RentalOrder) => (
          <Card key={order.id}>
            <CardContent className="p-6">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                {/* Left */}

                <div className="flex gap-4">
                  <img
                    src={order.gear.images[0]}
                    alt={order.gear.name}
                    className="h-28 w-28 rounded-xl object-cover"
                  />

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-semibold">
                        {order.gear.name}
                      </h2>

                      <pre>{order.status}</pre>
                    </div>

                    <p className="text-muted-foreground">
                      {order.gear.category.name} • {order.gear.brand}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      {format(new Date(order.startDate), "dd MMM yyyy")} -
                      {format(new Date(order.endDate), "dd MMM yyyy")}
                    </div>

                    <p>
                      Quantity :
                      <span className="font-medium"> {order.quantity}</span>
                    </p>

                    <p className="font-semibold">
                      ৳ {Number(order.totalAmount).toLocaleString()}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      Provider :
                      <span className="font-medium text-foreground">
                        {" "}
                        {order.gear.provider.name}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Right */}

                <div className="flex flex-col gap-3">
                  {/* Right */}

                  <div className="flex flex-col gap-3">
                    {/* PLACED */}
                    {order.status === "PLACED" && (
                      <Button
                        disabled
                        className="bg-amber-500 text-white hover:bg-amber-500 disabled:opacity-100"
                      >
                        Waiting for Approval
                      </Button>
                    )}

                    {/* CONFIRMED */}
                    {order.status === "CONFIRMED" && !order.payment && (
                      <Button
                        disabled={isPending}
                        onClick={() => createPayment(order.id)}
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        {isPending ? "Redirecting..." : "Pay Now"}
                      </Button>
                    )}

                    {/* PAID */}
                    {order.status === "PAID" && (
                      <Button
                        disabled
                        className="bg-violet-600 text-white hover:bg-violet-600 disabled:opacity-100"
                      >
                        Waiting for Pickup
                      </Button>
                    )}

                    {/* PICKED UP */}
                    {order.status === "PICKED_UP" && (
                      <Button
                        disabled
                        className="bg-emerald-600 text-white hover:bg-emerald-600 disabled:opacity-100"
                      >
                        Rental In Progress
                      </Button>
                    )}

                    {/* RETURNED */}
                    {order.status === "RETURNED" &&
                      (order.review ? (
                        <Button
                          variant="outline"
                          className="border-slate-400 text-slate-700 hover:bg-slate-100"
                          onClick={() => setEditingReview(order.review ?? null)}
                        >
                          Edit Review
                        </Button>
                      ) : (
                        <Button
                          className="bg-slate-600 text-white hover:bg-slate-700"
                          onClick={() => setReviewRentalId(order.id)}
                        >
                          Leave Review
                        </Button>
                      ))}

                    {/* CANCELLED */}
                    {order.status === "CANCELLED" && (
                      <Button
                        disabled
                        className="bg-red-600 text-white hover:bg-red-600 disabled:opacity-100"
                      >
                        Order Cancelled
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <LeaveReviewModal
        open={!!reviewRentalId}
        onOpenChange={(open) => {
          if (!open) setReviewRentalId(null);
        }}
        rentalId={reviewRentalId ?? undefined}
      />

      <LeaveReviewModal
        open={!!editingReview}
        onOpenChange={(open) => {
          if (!open) setEditingReview(null);
        }}
        review={editingReview ?? undefined}
      />
    </div>
  );
}
