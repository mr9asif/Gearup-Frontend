"use client";

import { FolderOpen } from "lucide-react";

import { useCategories } from "@/features/category/hooks/useCategories";

import { Card, CardContent } from "@/components/ui/card";

export default function CategoriesPage() {
  const { data: categories, isLoading } = useCategories();

  if (isLoading) {
    return (
      <div className="flex h-80 items-center justify-center">
        Loading categories...
      </div>
    );
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
    <div className="container mx-auto max-w-7xl py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Categories</h1>

        <p className="text-muted-foreground">
          Browse sports equipment categories.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <Card key={category.id} className="transition-all hover:shadow-lg">
            <CardContent className="flex flex-col gap-3 p-6">
              <FolderOpen className="text-primary h-10 w-10" />

              <h2 className="text-xl font-semibold">{category.name}</h2>

              <p className="text-muted-foreground line-clamp-3 text-sm">
                {category.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
