import {
  CircleHelp,
  Compass,
  HomeIcon,
  Info,
  LayoutDashboard,
  Shapes,
} from "lucide-react";

export const publicNav = [
  {
    label: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    label: "Browse Gear",
    href: "/gear",
    icon: Compass,
  },
  {
    label: "Categories",
    href: "/categories",
    icon: Shapes,
  },
  {
    label: "How It Works",
    href: "/how-it-works",
    icon: CircleHelp,
  },
  {
    label: "About Us",
    href: "/about",
    icon: Info,
  },
];

export const dashboardNav = {
  CUSTOMER: {
    label: "Dashboard",
    href: "/dashboard/customer",
    icon: LayoutDashboard,
  },

  PROVIDER: {
    label: "Dashboard",
    href: "/dashboard/provider",
    icon: LayoutDashboard,
  },

  ADMIN: {
    label: "Dashboard",
    href: "/dashboard/admin",
    icon: LayoutDashboard,
  },
};
