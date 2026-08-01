"use client";

import {
  ChevronRight,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useAuthStore } from "@/store/auth.store";
import { useQueryClient } from "@tanstack/react-query";

export function UserMenu() {
  const router = useRouter();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const queryClient = useQueryClient();
  if (!user) {
    return (
      <div className="hidden items-center gap-2 md:flex">
        <Button variant="ghost" onClick={() => router.push("/login")}>
          Login
        </Button>

        <Button onClick={() => router.push("/register")}>Register</Button>
      </div>
    );
  }

  const dashboardPath =
    user.role === "ADMIN"
      ? "/dashboard/admin"
      : user.role === "PROVIDER"
        ? "/dashboard/provider"
        : "/dashboard/customer";

  const handleLogout = () => {
    logout();

    // Clear all React Query cache
    queryClient.clear();

    router.push("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary">
        <Avatar className="cursor-pointer">
          <AvatarFallback className="font-semibold">
            {user.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-72">
        {/* User Info */}
        <div className="px-3 py-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="font-semibold">
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0">
              <p className="truncate font-semibold">{user.name}</p>

              <p className="truncate text-xs text-muted-foreground">
                {user.email}
              </p>

              <span className="mt-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                {user.role}
              </span>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => router.push(dashboardPath)}>
          <LayoutDashboard className="mr-3 h-4 w-4" />
          <span className="flex-1">Dashboard</span>
          <ChevronRight className="h-4 w-4 opacity-50" />
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => router.push("/profile")}>
          <User className="mr-3 h-4 w-4" />
          <span className="flex-1">Profile</span>
          <ChevronRight className="h-4 w-4 opacity-50" />
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => router.push("/settings")}>
          <Settings className="mr-3 h-4 w-4" />
          <span className="flex-1">Settings</span>
          <ChevronRight className="h-4 w-4 opacity-50" />
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem variant="destructive" onClick={handleLogout}>
          <LogOut className="mr-3 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
