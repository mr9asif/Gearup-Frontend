import {
  CalendarRange,
  ClipboardCheck,
  CreditCard,
  Search,
  ShieldCheck,
  Trophy,
} from "lucide-react";

export const howItWorksSteps = [
  {
    id: 1,
    title: "Browse Equipment",
    description:
      "Explore a wide range of quality sports and outdoor equipment from trusted local providers.",
    icon: Search,
  },
  {
    id: 2,
    title: "Select Rental Dates",
    description:
      "Choose your preferred rental dates and quantity based on your adventure or sporting event.",
    icon: CalendarRange,
  },
  {
    id: 3,
    title: "Submit Rental Request",
    description:
      "Send your rental request to the provider. They'll review availability before confirming.",
    icon: ClipboardCheck,
  },
  {
    id: 4,
    title: "Approval & Payment",
    description:
      "Once approved, securely complete your payment to confirm your booking instantly.",
    icon: CreditCard,
  },
  {
    id: 5,
    title: "Enjoy Your Rental",
    description:
      "Pick up your equipment or receive it as arranged, then enjoy your rental during the booked period.",
    icon: Trophy,
  },
  {
    id: 6,
    title: "Return Equipment",
    description:
      "Return the equipment on time to complete the rental and keep your provider rating strong.",
    icon: ShieldCheck,
  },
];
