import { UserRole } from "@/types/user";

export type UserMenuItem = {
  label: string;
  href?: string;
  icon: "dashboard" | "profile" | "settings" | "logout";
};

export const userMenuConfig: Record<UserRole, UserMenuItem[]> = {
  CUSTOMER: [
    {
      label: "Dashboard",
      href: "/dashboard/customer",
      icon: "dashboard",
    },
    {
      label: "Profile",
      href: "/profile",
      icon: "profile",
    },
    {
      label: "Settings",
      href: "/settings",
      icon: "settings",
    },
    {
      label: "Logout",
      icon: "logout",
    },
  ],

  PROVIDER: [
    {
      label: "Dashboard",
      href: "/dashboard/provider",
      icon: "dashboard",
    },
    {
      label: "Profile",
      href: "/profile",
      icon: "profile",
    },
    {
      label: "Settings",
      href: "/settings",
      icon: "settings",
    },
    {
      label: "Logout",
      icon: "logout",
    },
  ],

  ADMIN: [
    {
      label: "Dashboard",
      href: "/dashboard/admin",
      icon: "dashboard",
    },
    {
      label: "Profile",
      href: "/profile",
      icon: "profile",
    },
    {
      label: "Settings",
      href: "/settings",
      icon: "settings",
    },
    {
      label: "Logout",
      icon: "logout",
    },
  ],
};
