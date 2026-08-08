"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/store/auth.store";
import { useQueryClient } from "@tanstack/react-query";
import { ChevronUp, LogOut, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { axiosInstance } from "@/services/axios";
import Image from "next/image";
import NavItem from "../../../features/admin/components/nav-items";
import { DashboardSidebarProps } from "../../../features/admin/types/admin.types";

export default function DashboardSidebar({
  title,
  subtitle,
  items,
}: DashboardSidebarProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      // Call backend logout route
      await axiosInstance.post("/auth/logout");

      // Clear frontend auth state
      logout();

      // Clear React Query cache
      queryClient.clear();

      // Redirect
      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <aside className="hidden h-screen w-64 shrink-0 border-r bg-background lg:flex lg:flex-col">
      {/* Logo */}
      {/* Logo */}
      <div className="border-b">
        <Link
          href="/"
          className="flex h-16 items-center gap-3 px-6 transition-colors hover:bg-muted/50"
        >
          <Image
            src="/logo.png" // put your logo in public/logo.png
            alt="GearUp"
            width={42}
            height={42}
          />

          <div>
            <h2 className="text-xl font-bold tracking-tight">GearUp</h2>

            <p className="text-xs text-muted-foreground">{subtitle}</p>
          </div>
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-2 overflow-y-auto p-4">
        {items.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t bg-muted/20 p-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full outline-none">
            <div className="group flex items-center justify-between rounded-xl border bg-background p-3 transition-all duration-200 hover:border-primary/30 hover:bg-muted">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-primary">
                  {user?.profileImage ? (
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-semibold text-primary-foreground">
                      {user?.name?.charAt(0).toUpperCase() ?? "A"}
                    </div>
                  )}
                </div>

                <div className="text-left">
                  <p className="text-sm font-semibold">
                    {user?.name ?? "Administrator"}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {user?.email ?? "admin@gearup.com"}
                  </p>
                </div>
              </div>

              <ChevronUp className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:text-primary" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="mb-2 w-56">
            <DropdownMenuItem onClick={() => router.push("/profile")}>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={handleLogout}
              className="text-red-500 focus:text-red-500"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}
