"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { useCreateGear } from "../hooks/useCreateGear";
import { CreateGearFormValues, createGearSchema } from "../schema/gear.schema";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useGetCategories } from "@/features/category/hooks/useGetCategories";
import { Gear } from "@/features/gear/types/gear.type";
import { useUpdateGear } from "../hooks/useUpdateGear";
import ImageUploader from "./ImageUploader";

interface GearFormProps {
  mode: "create" | "edit";
  initialData?: Gear;
}
export default function GearForm({ mode, initialData }: GearFormProps) {
  const createGear = useCreateGear();
  const updateGear = useUpdateGear();

  const { data: categories = [] } = useGetCategories();
  console.log(categories);

  // Store selected image files
  const [files, setFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CreateGearFormValues>({
    resolver: zodResolver(createGearSchema),
    defaultValues: {
      categoryId: "",
      name: "",
      brand: "",
      description: "",
      pricePerDay: 0,
      stock: 1,
    },
  });

  useEffect(() => {
    if (mode === "edit" && initialData) {
      reset({
        categoryId: initialData.category.id,
        name: initialData.name,
        brand: initialData.brand,
        description: initialData.description,
        pricePerDay: Number(initialData.pricePerDay),
        stock: initialData.stock,
      });
    }
  }, [mode, initialData, reset]);

  const onSubmit: SubmitHandler<CreateGearFormValues> = (values) => {
    const formData = new FormData();

    formData.append("categoryId", values.categoryId);
    formData.append("name", values.name);
    formData.append("brand", values.brand);
    formData.append("description", values.description);
    formData.append("pricePerDay", values.pricePerDay.toString());
    formData.append("stock", values.stock.toString());

    files.forEach((file) => {
      formData.append("images", file);
    });

    if (mode === "create") {
      createGear.mutate(formData, {
        onSuccess: () => {
          reset();
          setFiles([]);
        },
      });

      return;
    }

    const gear = initialData;

    if (!gear) return;

    updateGear.mutate({
      id: gear.id,
      formData,
    });
  };

  return (
    <Card className="mx-auto max-w-4xl">
      <CardHeader>
        <CardTitle>
          {mode === "create" ? "Add New Gear" : "Edit Gear"}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Category */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>

            <Controller
              control={control}
              name="categoryId"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>

                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            {errors.categoryId && (
              <p className="text-sm text-red-500">
                {errors.categoryId.message}
              </p>
            )}
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Gear Name</label>

            <Input placeholder="Football" {...register("name")} />

            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Brand */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Brand</label>

            <Input placeholder="Nike" {...register("brand")} />

            {errors.brand && (
              <p className="text-sm text-red-500">{errors.brand.message}</p>
            )}
          </div>

          {/* Price & Stock */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Price Per Day</label>

              <Input
                type="number"
                placeholder="100"
                {...register("pricePerDay", {
                  valueAsNumber: true,
                })}
              />

              {errors.pricePerDay && (
                <p className="text-sm text-red-500">
                  {errors.pricePerDay.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Stock</label>

              <Input
                type="number"
                placeholder="5"
                {...register("stock", {
                  valueAsNumber: true,
                })}
              />

              {errors.stock && (
                <p className="text-sm text-red-500">{errors.stock.message}</p>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>

            <Textarea
              rows={5}
              placeholder="Describe your gear..."
              {...register("description")}
            />

            {errors.description && (
              <p className="text-sm text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          {mode === "edit" &&
            files.length === 0 &&
            initialData?.images?.length > 0 && (
              <div className="space-y-3">
                <label className="text-sm font-medium">Current Images</label>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {initialData.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Gear ${index + 1}`}
                      className="h-32 w-full rounded-lg border object-cover"
                    />
                  ))}
                </div>
              </div>
            )}

          {/* Images */}
          <ImageUploader files={files} setFiles={setFiles} />

          <Button
            type="submit"
            className="w-full"
            disabled={createGear.isPending || updateGear.isPending}
          >
            {mode === "create"
              ? createGear.isPending
                ? "Creating..."
                : "Create Gear"
              : updateGear.isPending
                ? "Updating..."
                : "Update Gear"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
