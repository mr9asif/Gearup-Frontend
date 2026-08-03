// constants/provider-sidebar.ts

import {
  CalendarDays,
  LayoutDashboard,
  Package,
  PlusCircle,
} from "lucide-react";

export const providerSidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard/provider",
    icon: LayoutDashboard,
  },
  {
    title: "My Gears",
    href: "/dashboard/provider/gears",
    icon: Package,
  },
  {
    title: "Bookings",
    href: "/dashboard/provider/bookings",
    icon: CalendarDays,
  },
  {
    title: "Add Gear",
    href: "/dashboard/provider/gears/create",
    icon: PlusCircle,
  },
];
