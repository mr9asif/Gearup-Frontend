"use client";

import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Category } from "../types/category.type";

interface CategoryTableProps {
  categories: Category[];
  onEdit: (category: Category) => void;
}

export default function CategoryTable({
  categories,
  onEdit,
}: CategoryTableProps) {
  return (
    <div className="h-full overflow-hidden rounded-lg border">
      <div className="h-full overflow-auto">
        <table className="w-full">
          {/* Sticky Header */}
          <thead className="sticky top-0 z-10 bg-background shadow-sm">
            <tr className="border-b">
              <th className="px-5 py-4 text-left">Name</th>
              <th className="px-5 py-4 text-left">Description</th>
              <th className="w-40 px-5 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.length > 0 ? (
              categories.map((category) => (
                <tr
                  key={category.id}
                  className="border-b transition hover:bg-muted/40"
                >
                  <td className="px-5 py-4 font-medium">{category.name}</td>

                  <td className="px-5 py-4 text-muted-foreground">
                    {category.description}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => onEdit(category)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>

                      <Button size="icon" variant="destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={3}
                  className="py-16 text-center text-muted-foreground"
                >
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
