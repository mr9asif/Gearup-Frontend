"use client";

import { XCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function PaymentCancelPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border bg-background p-8 text-center shadow-sm">
        <XCircle className="mx-auto mb-6 h-20 w-20 text-red-500" />

        <h1 className="mb-3 text-3xl font-bold">Payment Cancelled</h1>

        <p className="mb-8 text-muted-foreground">
          Your payment was cancelled. You can try again whenever you are ready.
        </p>

        <Link href="/dashboard/customer/rentals">
          <Button className="w-full">Back to Rentals</Button>
        </Link>
      </div>
    </div>
  );
}
