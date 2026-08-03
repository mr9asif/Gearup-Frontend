import { CalendarClock, LayoutDashboard, Star } from "lucide-react";

export const customerSidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard/customer",
    icon: LayoutDashboard,
  },
  {
    title: "My Rentals",
    href: "/dashboard/customer/rentals",
    icon: CalendarClock,
  },

  {
    title: "My Reviews",
    href: "/dashboard/customer/reviews",
    icon: Star,
  },
];
