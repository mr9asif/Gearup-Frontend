"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function PaymentSuccessPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border bg-background p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto mb-6 h-20 w-20 text-green-500" />

        <h1 className="mb-3 text-3xl font-bold">Payment Successful</h1>

        <p className="mb-8 text-muted-foreground">
          Thank you! Your payment has been completed successfully.
        </p>

        <Link href="/dashboard/customer/rentals">
          <Button className="w-full">View My Rentals</Button>
        </Link>
      </div>
    </div>
  );
}
