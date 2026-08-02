"use client";

import { Shield } from "lucide-react";
import { adminSidebarItems } from "./SideBar";
import NavItem from "./nav-items";

export default function DashboardSidebar() {
  return (
    <aside className="hidden w-64 border-r bg-background lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <Shield className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold">GearUp Admin</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {adminSidebarItems.map((item) => (
          <NavItem
            key={item.href}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t p-4">
        <p className="text-xs text-muted-foreground">GearUp Admin Panel</p>
      </div>
    </aside>
  );
}
