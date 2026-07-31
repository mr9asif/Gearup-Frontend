"use client";

import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";

export function NotificationButton() {
  return (
    <Button variant="ghost" size="icon" className="relative">
      <Bell className="size-5" />

      <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
    </Button>
  );
}
