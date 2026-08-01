export type NavItem = {
  label: string;
  href: string;
};

export const guestNav: NavItem[] = [
  {
    label: "Browse Gear",
    href: "/gear",
  },
  {
    label: "Categories",
    href: "/categories",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const customerNav: NavItem[] = [
  {
    label: "Browse Gear",
    href: "/gear",
  },
  {
    label: "Categories",
    href: "/categories",
  },
  {
    label: "My Rentals",
    href: "/dashboard/customer/rentals",
  },
  {
    label: "My Reviews",
    href: "/dashboard/customer/reviews",
  },
];

export const providerNav: NavItem[] = [
  {
    label: "Browse Gear",
    href: "/gear",
  },
  {
    label: "My Gear",
    href: "/dashboard/provider/gears",
  },
  {
    label: "Bookings",
    href: "/dashboard/provider/orders",
  },
  {
    label: "Add Gear",
    href: "/dashboard/provider/gears/create",
  },
];

export const adminNav: NavItem[] = [
  {
    label: "Users",
    href: "/dashboard/admin/users",
  },
  {
    label: "Gear",
    href: "/dashboard/admin/gears",
  },
  {
    label: "Orders",
    href: "/dashboard/admin/orders",
  },
  {
    label: "Categories",
    href: "/dashboard/admin/categories",
  },
];
