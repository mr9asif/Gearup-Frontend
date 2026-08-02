"use client";

import { Eye, ShieldCheck, ShieldX } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface User {
  id: string;
  status: "ACTIVE" | "SUSPENDED";
}

interface Props {
  user: User;
}

export default function UserActionMenu({ user }: Props) {
  const router = useRouter();

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
        <DropdownMenuItem className="text-red-600 focus:text-red-600">
          <ShieldX className="mr-2 h-4 w-4" />
          Suspend User
        </DropdownMenuItem>
      ) : (
        <DropdownMenuItem className="text-green-600 focus:text-green-600">
          <ShieldCheck className="mr-2 h-4 w-4" />
          Activate User
        </DropdownMenuItem>
      )}
    </>
  );
}
