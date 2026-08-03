"use client";

import { Shapes } from "lucide-react";

import { useGetCategories } from "@/features/category/hooks/useGetCategories";
import { Category } from "@/features/category/types/category.type";

export function CategoriesSection() {
  const { data, isLoading } = useGetCategories();
  console.log(data);
  const categories = data ?? [];
  console.log(categories);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="font-medium text-primary">Categories</p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Explore Sports Categories
          </h2>

          <p className="mt-4 text-muted-foreground">
            Find equipment for every adventure, every sport and every season.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center text-muted-foreground">
            Loading categories...
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category: Category) => (
              <div
                key={category.id}
                className="group cursor-pointer rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Shapes className="h-8 w-8" />
                </div>

                <h3 className="text-xl font-semibold">{category.name}</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {category.description ||
                    "Premium sports equipment available for rent."}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
