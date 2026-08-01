"use client";

interface RentalSummaryProps {
  pricePerDay: number;
  quantity: number;
  totalDays: number;
}

export default function RentalSummary({
  pricePerDay,
  quantity,
  totalDays,
}: RentalSummaryProps) {
  const subtotal = pricePerDay * quantity * totalDays;

  return (
    <div className="rounded-xl border bg-muted/30 p-5">
      <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Price / Day</span>

          <span>৳{pricePerDay.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Quantity</span>

          <span>{quantity}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Rental Days</span>

          <span>{totalDays}</span>
        </div>

        <div className="border-t pt-3 flex justify-between text-lg font-bold">
          <span>Total</span>

          <span className="text-primary">৳{subtotal.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
