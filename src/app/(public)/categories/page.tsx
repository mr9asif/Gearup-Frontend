"use client";

import { ArrowRight, FolderOpen } from "lucide-react";
import { useRouter } from "next/navigation";

import { useGetCategories } from "@/features/category/hooks/useGetCategories";
import { Category } from "@/features/category/types/category.type";
import AppLoader from "@/shared/common/AppLoader";

export default function CategoriesPage() {
  const router = useRouter();

  const { data: categories, isLoading } = useGetCategories();

  if (isLoading) {
    return <AppLoader />;
  }

  if (!categories?.length) {
    return (
      <div className="flex h-80 flex-col items-center justify-center">
        <FolderOpen className="mb-4 h-12 w-12 text-muted-foreground" />

        <h2 className="text-2xl font-semibold">No Categories Found</h2>

        <p className="text-muted-foreground">
          Categories will appear here once they are added.
        </p>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl py-12">
      {/* Heading */}
      <div className="mb-14 text-center">
        <p className="font-medium text-primary">Categories</p>

        <h1 className="mt-3 text-4xl font-bold">Explore Sports Categories</h1>

        <p className="mt-4 text-muted-foreground">
          Browse equipment by category and discover your next adventure.
        </p>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category: Category) => (
          <div
            key={category.id}
            onClick={() => router.push(`/gear?categoryId=${category.id}`)}
            className="group cursor-pointer rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
              <FolderOpen className="h-8 w-8" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold">{category.name}</h2>

            {/* Description */}
            <p className="mt-3 line-clamp-2 text-muted-foreground">
              {category.description ||
                "Explore premium sports equipment in this category."}
            </p>

            {/* Button */}
            <div className="mt-8 flex items-center font-medium text-primary">
              Browse Equipment
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
