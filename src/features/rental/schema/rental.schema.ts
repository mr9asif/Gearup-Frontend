import { z } from "zod";

export const rentalSchema = z
  .object({
    quantity: z.number().min(1, "Quantity must be at least 1"),

    startDate: z.date(),

    endDate: z.date(),
  })
  .refine((data) => data.endDate > data.startDate, {
    path: ["endDate"],
    message: "End date must be after start date",
  });

export type RentalSchema = z.infer<typeof rentalSchema>;
