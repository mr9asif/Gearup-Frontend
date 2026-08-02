import { z } from "zod";

export const createGearSchema = z.object({
  categoryId: z.string().min(1, "Category is required"),
  name: z.string().min(2, "Gear name is required"),
  brand: z.string().min(2, "Brand is required"),
  description: z.string().min(10, "Description is too short"),

  pricePerDay: z.number().positive(),

  stock: z.number().int().min(1),

  images: z.instanceof(File).array().optional(),
});

export type CreateGearFormValues = z.infer<typeof createGearSchema>;
