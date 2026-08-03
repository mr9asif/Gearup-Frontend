"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import CategoryModal from "@/features/category/components/CategoryModal";
import CategoryTable from "@/features/category/components/CategoryTable";
import { useDeleteCategory } from "@/features/category/hooks/useDeleteCategory";
import { useGetCategories } from "@/features/category/hooks/useGetCategories";
import { Category } from "@/features/category/types/category.type";

import AppPagination from "@/shared/common/AppPagination";
import ConfirmDialog from "@/shared/common/Confirmation-dialong";

export default function AdminCategoriesPage() {
  const [page, setPage] = useState(1);

  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const { data, isPending, isError } = useGetCategories({
    page,
    limit: 10,
  });

  const { mutate: deleteCategory, isPending: isDeleting } = useDeleteCategory();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load categories.</div>;
  }

  const categories = data?.data ?? [];
  const meta = data?.meta;

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-6 py-5">
        <div>
          <h1 className="text-2xl font-bold">Categories</h1>

          <p className="text-muted-foreground">Manage all gear categories.</p>
        </div>

        <Button
          onClick={() => {
            setSelectedCategory(null);
            setOpen(true);
          }}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-hidden px-6 py-6">
        <CategoryTable
          categories={categories}
          onEdit={(category) => {
            setSelectedCategory(category);
            setOpen(true);
          }}
          onDelete={(category) => {
            setSelectedCategory(category);
            setDeleteOpen(true);
          }}
        />
      </div>

      {/* Pagination */}
      <AppPagination
        page={page}
        limit={10}
        meta={meta}
        onPageChange={setPage}
      />

      {/* Create / Update */}
      <CategoryModal
        open={open}
        onOpenChange={setOpen}
        category={selectedCategory}
      />

      {/* Delete */}
      <ConfirmDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title="Delete Category"
        description={`Are you sure you want to delete "${selectedCategory?.name}"? This action cannot be undone.`}
        confirmText="Delete"
        loading={isDeleting}
        onConfirm={() => {
          if (!selectedCategory) return;

          deleteCategory(selectedCategory.id, {
            onSuccess: () => {
              setDeleteOpen(false);
              setSelectedCategory(null);
            },
          });
        }}
      />
    </div>
  );
}
