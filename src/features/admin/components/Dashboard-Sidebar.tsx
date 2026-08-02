"use client";

import { LogOut } from "lucide-react";
import { adminBottomSidebarItems } from "../constants/sidebar";
import { adminSidebarItems } from "./SideBar";
import NavItem from "./nav-items";

export default function DashboardSidebar() {
  return (
    <aside className="hidden w-64 border-r bg-background lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <span className="text-lg font-bold">GearUp Admin</span>
      </div>

      {/* Main Navigation */}
      <nav className="space-y-1 p-4">
        {adminSidebarItems.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </nav>

      {/* Push everything below to the bottom */}
      <div className="mt-auto border-t p-4">
        <nav className="space-y-1">
          {adminBottomSidebarItems.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950/30">
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </nav>
      </div>
    </aside>
  );
}
