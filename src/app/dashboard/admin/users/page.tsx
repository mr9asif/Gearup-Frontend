"use client";

import { useState } from "react";

import UserFilters from "@/features/admin/components/user-filter";
import UserTable from "@/features/admin/components/user-table";
import { useUsers } from "@/features/admin/hooks/useUsers";
import AppPagination from "@/shared/common/AppPagination";

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
            setRole={setRole as (value: string | null) => void}
            status={status}
            setStatus={setStatus as (value: string | null) => void}
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
      <div className="w-full border-t bg-background px-6 py-4">
        <div className="flex justify-center">
          <AppPagination
            page={page}
            limit={10}
            meta={data?.meta}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
}
