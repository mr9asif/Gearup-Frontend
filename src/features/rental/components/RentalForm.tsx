"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { differenceInCalendarDays } from "date-fns";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import QuantitySelector from "./QuantitySelector";
import RentalDatePicker from "./RentalDatePicker";

import SubmitRentalButton from "./SubmitRentalButton";

import { getErrorMessage } from "@/lib/getErrorMessage";
import { useCreateRental } from "../hooks/useCreateRental";
import { rentalSchema, RentalSchema } from "../schema/rental.schema";
import RentalSummary from "./RentalSummery";

interface RentalFormProps {
  gearId: string;
  stock: number;
  pricePerDay: number;
}

export default function RentalForm({
  gearId,
  stock,
  pricePerDay,
}: RentalFormProps) {
  const router = useRouter();

  const createRental = useCreateRental();

  const [quantity, setQuantity] = useState(1);

  const [startDate, setStartDate] = useState<Date>();

  const [endDate, setEndDate] = useState<Date>();

  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<RentalSchema>({
    resolver: zodResolver(rentalSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  const totalDays =
    startDate && endDate ? differenceInCalendarDays(endDate, startDate) : 0;

  const onSubmit = () => {
    if (!startDate || !endDate) {
      toast.error("Please select rental dates.");

      return;
    }

    createRental.mutate(
      {
        gearId,
        quantity,
        startDate,
        endDate,
      },
      {
        onSuccess: () => {
          toast.success("Rental request created.");

          router.push("/dashboard/customer/orders");
        },

        onError: (error) => {
          toast.error(getErrorMessage(error));
        },
      },
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm"
    >
      <div>
        <h2 className="text-2xl font-bold">Rent This Gear</h2>

        <p className="text-muted-foreground">Fill in your rental details.</p>
      </div>

      <QuantitySelector
        quantity={quantity}
        stock={stock}
        onChange={(value) => {
          setQuantity(value);
          setValue("quantity", value);
        }}
        error={errors.quantity?.message}
      />

      <RentalDatePicker
        label="Start Date"
        value={startDate}
        onChange={(date) => {
          setStartDate(date);

          if (date) {
            setValue("startDate", date);
          }
        }}
        error={errors.startDate?.message}
        disabled={(date) => {
          const today = new Date();

          today.setHours(0, 0, 0, 0);

          return date < today;
        }}
      />

      <RentalDatePicker
        label="End Date"
        value={endDate}
        onChange={(date) => {
          setEndDate(date);

          if (date) {
            setValue("endDate", date);
          }
        }}
        error={errors.endDate?.message}
        disabled={(date) => {
          if (!startDate) return true;

          return date <= startDate;
        }}
      />

      <RentalSummary
        pricePerDay={pricePerDay}
        quantity={quantity}
        totalDays={totalDays}
      />

      <SubmitRentalButton isPending={createRental.isPending} />
    </form>
  );
}
