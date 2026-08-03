"use client";

import { Shield } from "lucide-react";

import { adminSidebarItems } from "../constants/sidebar";
import NavItem from "./nav-items";

export default function SidebarContent() {
  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <Shield className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold">GearUp Admin</span>
      </div>

      {/* Main Navigation */}
      <nav className="space-y-1 p-4">
        {adminSidebarItems.map((item) => (
          <NavItem
            key={item.href}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </nav>

      {/* Bottom Section */}
      {/* <div className="mt-auto border-t p-4">
        <nav className="space-y-1">
          {adminBottomSidebarItems.map((item) => (
            <NavItem
              key={item.href}
              title={item.title}
              href={item.href}
              icon={item.icon}
            />
          ))}

          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-50 dark:hover:bg-red-950/20"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </nav>
      </div> */}
    </div>
  );
}
