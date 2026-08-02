"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationMeta {
  total: number;
  totalPage: number;
}

interface AppPaginationProps {
  page: number;
  limit: number;
  meta?: PaginationMeta;
  onPageChange: (page: number) => void;
}

export default function AppPagination({
  page,
  limit,
  meta,
  onPageChange,
}: AppPaginationProps) {
  if (!meta || meta.totalPage <= 1) return null;

  return (
    <div className="border-t bg-background px-6 py-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {(page - 1) * limit + 1} -{" "}
          {Math.min(page * limit, meta.total)} of {meta.total}
        </p>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();

                  if (page > 1) {
                    onPageChange(page - 1);
                  }
                }}
              />
            </PaginationItem>

            {Array.from({ length: meta.totalPage }, (_, i) => {
              const pageNumber = i + 1;

              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    href="#"
                    isActive={page === pageNumber}
                    onClick={(e) => {
                      e.preventDefault();
                      onPageChange(pageNumber);
                    }}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();

                  if (page < meta.totalPage) {
                    onPageChange(page + 1);
                  }
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
