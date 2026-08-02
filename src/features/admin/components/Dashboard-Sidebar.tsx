"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronUp, LogOut, Settings } from "lucide-react";
import { adminSidebarItems } from "./SideBar";
import NavItem from "./nav-items";

export default function DashboardSidebar() {
  return (
    <aside className="hidden h-screen w-64 shrink-0 border-r bg-background lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <div>
          <h2 className="text-xl font-bold tracking-tight">GearUp Admin</h2>

          <p className="text-xs text-muted-foreground">Administration Panel</p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-2 overflow-y-auto p-4">
        {adminSidebarItems.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t bg-muted/20 p-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full outline-none">
            <div className="group flex items-center justify-between rounded-xl border bg-background p-3 transition-all duration-200 hover:border-primary/30 hover:bg-muted">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
                  A
                </div>

                <div className="text-left">
                  <p className="text-sm font-semibold">Administrator</p>

                  <p className="text-xs text-muted-foreground">
                    admin@gearup.com
                  </p>
                </div>
              </div>

              <ChevronUp className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:text-primary" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="mb-2 w-56">
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuItem className="text-red-500 focus:text-red-500">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}
