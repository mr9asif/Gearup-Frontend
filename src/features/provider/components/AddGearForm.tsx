"use client";

import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


import { useCreateGear } from "../hooks/useCreateGear";
import { useCategories } from "@/features/category/hooks/useCategories";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitHandler, } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CreateGearFormInput, CreateGearFormValues, createGearSchema } from "../schema/gear.schema";

export default function AddGearForm() {
  const { mutate, isPending } = useCreateGear();

  const { data: categories = [] } = useCategories();

 const form = useForm<
  CreateGearFormInput,
  unknown,
  CreateGearFormValues
>({
  resolver: zodResolver(createGearSchema),
  defaultValues: {
    categoryId: "",
    name: "",
    brand: "",
    description: "",
    pricePerDay: 0,
    stock: 1,
    images: [],
  },
});

const onSubmit: SubmitHandler<CreateGearFormValues> = (values) => {
  mutate(values);
};

  return (
    <Card className="mx-auto max-w-4xl">
      <CardHeader>
        <CardTitle>Add New Gear</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Category */}
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem
                          key={category.id}
                          value={category.id}
                        >
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gear Name</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Football"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Brand */}
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Nike"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price + Stock */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="pricePerDay"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price Per Day</FormLabel>

                    <FormControl>
                      <Input
                        type="number"
                        placeholder="100"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock</FormLabel>

                    <FormControl>
                      <Input
                        type="number"
                        placeholder="5"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>

                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder="Describe your gear..."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Image Upload Placeholder */}
            <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
              Image upload will be added next.
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isPending}
            >
              {isPending ? "Creating..." : "Create Gear"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}