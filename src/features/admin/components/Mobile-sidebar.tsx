"use client";

import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import SidebarContent from "./Sidebar-content";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent lg:hidden">
        <Menu className="h-5 w-5" />
      </SheetTrigger>

      <SheetContent side="left" className="w-64 p-0">
        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
}
