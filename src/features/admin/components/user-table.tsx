"use client";

import { MoreHorizontal, ShieldCheck, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import AppLoader from "@/shared/common/AppLoader";
import UserActionMenu from "./user-action-menu";
import UserStatusBadge from "./user-status-badge";

interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  role: "CUSTOMER" | "PROVIDER";
  status: "ACTIVE" | "SUSPENDED";
  createdAt: string;
}

interface Props {
  users: User[];
  isLoading: boolean;
}

export default function UserTable({ users, isLoading }: Props) {
  if (isLoading) {
    return <AppLoader />;
  }

  if (!users.length) {
    return (
      <div className="rounded-xl border p-10 text-center text-muted-foreground">
        No users found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>

            <TableHead>Role</TableHead>

            <TableHead>Status</TableHead>

            <TableHead>Joined</TableHead>

            <TableHead className="w-[70px]" />
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              className="transition-colors hover:bg-muted/40"
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={user.image} />

                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="font-medium">{user.name}</p>

                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </div>
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-2">
                  {user.role === "PROVIDER" ? (
                    <ShieldCheck className="h-4 w-4 text-primary" />
                  ) : (
                    <User className="h-4 w-4 text-muted-foreground" />
                  )}

                  {user.role}
                </div>
              </TableCell>

              <TableCell>
                <UserStatusBadge status={user.status} />
              </TableCell>

              <TableCell>
                {new Date(user.createdAt).toLocaleDateString()}
              </TableCell>

              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className="
      inline-flex
      h-9
      w-9
      items-center
      justify-center
      rounded-md
      transition-colors
      hover:bg-muted
    "
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    <UserActionMenu user={user} />
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
