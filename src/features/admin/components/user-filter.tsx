"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UserFiltersProps {
  search: string;
  role: string;
  status: string;

  setSearch: (value: string) => void;
  setRole: (value: string | null) => void;
  setStatus: (value: string | null) => void;
}

export default function UserFilters({
  search,
  role,
  status,
  setSearch,
  setRole,
  setStatus,
}: UserFiltersProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-card p-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}

      <div className="relative w-full lg:max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Select value={role} onValueChange={setRole}>
          <SelectTrigger className="w-full sm:w-44">
            <SelectValue placeholder="Role" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="ALL">All Roles</SelectItem>

            <SelectItem value="CUSTOMER">Customer</SelectItem>

            <SelectItem value="PROVIDER">Provider</SelectItem>
          </SelectContent>
        </Select>

        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-full sm:w-44">
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="ALL">All Status</SelectItem>

            <SelectItem value="ACTIVE">Active</SelectItem>

            <SelectItem value="SUSPENDED">Suspended</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
