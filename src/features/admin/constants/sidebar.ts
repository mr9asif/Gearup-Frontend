// constants/sidebar.ts

import {
  ClipboardList,
  FolderTree,
  LayoutDashboard,
  Package,
  Users,
} from "lucide-react";

export const adminSidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/dashboard/admin/users",
    icon: Users,
  },
  {
    title: "Gears",
    href: "/dashboard/admin/gears",
    icon: Package,
  },
  {
    title: "Rentals",
    href: "/dashboard/admin/rentals",
    icon: ClipboardList,
  },
  {
    title: "Categories",
    href: "/dashboard/admin/categories",
    icon: FolderTree,
  },
];

// export const adminBottomSidebarItems = [
//   {
//     title: "Settings",
//     href: "/dashboard/admin/settings",
//     icon: Settings,
//   },
// ];
