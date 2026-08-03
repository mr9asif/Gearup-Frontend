import {
  Boxes,
  CalendarCheck,
  ClipboardCheck,
  Package,
  Search,
  Star,
  UserPlus,
  Wallet,
} from "lucide-react";

export const customerSteps = [
  {
    title: "Browse Equipment",
    description:
      "Explore hundreds of sports and outdoor equipment from trusted providers.",
    icon: Search,
  },
  {
    title: "Book Your Gear",
    description:
      "Choose rental dates and submit your booking request in seconds.",
    icon: CalendarCheck,
  },
  {
    title: "Pickup & Enjoy",
    description:
      "Collect your equipment or receive delivery and enjoy your activity.",
    icon: Package,
  },
  {
    title: "Return & Review",
    description: "Return the equipment safely and share your experience.",
    icon: Star,
  },
];

export const providerSteps = [
  {
    title: "Become a Provider",
    description: "Create a provider account and complete your profile.",
    icon: UserPlus,
  },
  {
    title: "List Your Gear",
    description: "Add photos, pricing and availability for your equipment.",
    icon: Boxes,
  },
  {
    title: "Accept Bookings",
    description: "Receive rental requests and prepare equipment.",
    icon: ClipboardCheck,
  },
  {
    title: "Earn Money",
    description: "Complete rentals and grow your rental business.",
    icon: Wallet,
  },
];
