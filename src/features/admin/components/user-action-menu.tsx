"use client";

import { Eye, ShieldCheck, ShieldX } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { useUpdateUserStatus } from "../hooks/useUpdateUserStatus";

interface User {
  id: string;
  status: "ACTIVE" | "SUSPENDED";
}

interface Props {
  user: User;
}

export default function UserActionMenu({ user }: Props) {
  const router = useRouter();

  const { mutate, isPending } = useUpdateUserStatus();

  const handleStatusChange = () => {
    mutate({
      id: user.id,
      status: user.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE",
    });
  };

  return (
    <>
      <DropdownMenuItem
        onClick={() => router.push(`/dashboard/admin/users/${user.id}`)}
      >
        <Eye className="mr-2 h-4 w-4" />
        View Details
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      {user.status === "ACTIVE" ? (
        <DropdownMenuItem
          disabled={isPending}
          className="text-red-600 focus:text-red-600"
          onClick={handleStatusChange}
        >
          <ShieldX className="mr-2 h-4 w-4" />
          {isPending ? "Suspending..." : "Suspend User"}
        </DropdownMenuItem>
      ) : (
        <DropdownMenuItem
          disabled={isPending}
          className="text-green-600 focus:text-green-600"
          onClick={handleStatusChange}
        >
          <ShieldCheck className="mr-2 h-4 w-4" />
          {isPending ? "Activating..." : "Activate User"}
        </DropdownMenuItem>
      )}
    </>
  );
}
