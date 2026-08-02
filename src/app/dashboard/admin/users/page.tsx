"use client";

import { useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import UserFilters from "@/features/admin/components/user-filter";
import UserTable from "@/features/admin/components/user-table";
import { useUsers } from "@/features/admin/hooks/useUsers";

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("ALL");
  const [status, setStatus] = useState("ALL");
  const [page, setPage] = useState(1);

  const { data, isLoading } = useUsers({
    search,
    role,
    status,
    page,
    limit: 10,
  });

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Fixed Top */}
      <div className="border-b bg-background px-6 py-6">
        <h1 className="text-3xl font-bold">Users</h1>

        <p className="mt-1 text-muted-foreground">
          Manage customers and providers.
        </p>

        <div className="mt-6">
          <UserFilters
            search={search}
            setSearch={setSearch}
            role={role}
            setRole={setRole}
            status={status}
            setStatus={setStatus}
          />
        </div>
      </div>

      {/* Scrollable Table */}
      <div
        className="flex-1 overflow-y-auto px-6 py-6"
        style={{ scrollbarGutter: "stable" }}
      >
        <UserTable users={data?.data ?? []} isLoading={isLoading} />
      </div>

      {/* Pagination */}
      <div className="border-t bg-background px-6 py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground inline">
            Showing {(page - 1) * 10 + 1} -{" "}
            {Math.min(page * 10, data?.meta.total ?? 0)} of{" "}
            {data?.meta.total ?? 0} users
          </p>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();

                    if (page > 1) {
                      setPage(page - 1);
                    }
                  }}
                />
              </PaginationItem>

              {Array.from({ length: data?.meta.totalPage ?? 1 }, (_, i) => {
                const pageNumber = i + 1;

                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href="#"
                      isActive={page === pageNumber}
                      onClick={(e) => {
                        e.preventDefault();
                        setPage(pageNumber);
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

                    if (page < (data?.meta.totalPage ?? 1)) {
                      setPage(page + 1);
                    }
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
