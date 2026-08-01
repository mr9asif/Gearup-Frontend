"use client";

import { format } from "date-fns";
import {
  CalendarDays,
  CheckCircle2,
  CreditCard,
  Receipt,
  Tag,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Payment } from "../types/payment.types";

interface PaymentCardProps {
  payment: Payment;
}

export default function PaymentCard({ payment }: PaymentCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Left */}
          <div className="flex gap-5">
            <img
              src={payment.order.gear.images[0]}
              alt={payment.order.gear.name}
              className="h-28 w-28 rounded-xl object-cover"
            />

            <div className="space-y-3">
              <div>
                <h2 className="text-xl font-bold">{payment.order.gear.name}</h2>

                <p className="text-sm text-muted-foreground">
                  {payment.order.gear.brand}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge>{payment.order.gear.category.name}</Badge>

                <Badge variant="secondary" className="gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  {payment.status}
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                {format(new Date(payment.order.startDate), "dd MMM yyyy")}-
                {format(new Date(payment.order.endDate), "dd MMM yyyy")}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-3 lg:text-right">
            <div>
              <p className="text-sm text-muted-foreground">Amount Paid</p>

              <h2 className="text-3xl font-bold text-primary">
                ৳{Number(payment.amount).toLocaleString()}
              </h2>
            </div>

            <div className="flex items-center gap-2 lg:justify-end">
              <CreditCard className="h-4 w-4 text-muted-foreground" />

              <span className="text-sm">{payment.provider}</span>
            </div>

            <div className="flex items-center gap-2 lg:justify-end">
              <Receipt className="h-4 w-4 text-muted-foreground" />

              <span className="max-w-[220px] truncate text-xs text-muted-foreground">
                {payment.transactionId}
              </span>
            </div>

            <div className="flex items-center gap-2 lg:justify-end">
              <Tag className="h-4 w-4 text-muted-foreground" />

              <span className="text-sm text-muted-foreground">
                {format(new Date(payment.paidAt), "dd MMM yyyy, hh:mm a")}
              </span>
            </div>

            <Badge variant="outline" className="mt-2">
              Rental {payment.order.status}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
