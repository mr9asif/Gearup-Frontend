"use client";

import {
  ArrowRight,
  Bike,
  Dumbbell,
  Footprints,
  Goal,
  Shapes,
  TentTree,
} from "lucide-react";
import Link from "next/link";

import { useGetAllCategories } from "@/features/category/hooks/useGetAllCategories";
import { Category } from "@/features/category/types/category.type";
import AppLoader from "@/shared/common/AppLoader";

const categoryIcons = [
  Goal, // Football
  Dumbbell, // Gym / Fitness
  Bike, // Cycling
  TentTree, // Camping
  Footprints, // Hiking
  Shapes, // Fallback
];

export function CategoriesSection() {
  const { data, isLoading } = useGetAllCategories();

  const categories = data ?? [];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <span className="text-sm font-semibold text-primary">Categories</span>

          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Explore Sports Categories
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Find equipment for every adventure, every sport and every season.
          </p>
        </div>

        {/* Loading */}
        {isLoading ? (
          <div className="flex min-h-[250px] items-center justify-center">
            <AppLoader />
          </div>
        ) : (
          /* Category Cards */
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category: Category, index: number) => {
              const Icon = categoryIcons[index % categoryIcons.length];

              return (
                <div
                  key={category.id}
                  className="group rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Category Name */}
                  <h3 className="mt-6 text-xl font-semibold">
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                    {category.description ||
                      "Premium sports equipment available for rent."}
                  </p>

                  {/* View Gear */}
                  <Link
                    href={`/gear?category=${category.id}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    View Gear
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
