"use client";

import { CreditCard } from "lucide-react";

import PaymentCard from "../components/PaymentCard";
import { usePayments } from "../hooks/usePayments";
import { Payment } from "../types/payment.types";

export default function PaymentHistoryPage() {
  const { data: payments, isLoading } = usePayments();

  if (isLoading) {
    return (
      <div className="flex h-80 items-center justify-center">
        Loading payment history...
      </div>
    );
  }

  if (!payments?.length) {
    return (
      <div className="flex h-80 flex-col items-center justify-center">
        <CreditCard className="mb-4 h-12 w-12 text-muted-foreground" />

        <h2 className="text-2xl font-semibold">No Payments Found</h2>

        <p className="text-muted-foreground">
          Your completed payments will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">Payment History</h1>

        <p className="text-muted-foreground">
          View all your completed rental payments.
        </p>
      </div>

      {/* Payment List */}

      <div className="space-y-5">
        {payments.map((payment: Payment) => (
          <PaymentCard key={payment.id} payment={payment} />
        ))}
      </div>
    </div>
  );
}
