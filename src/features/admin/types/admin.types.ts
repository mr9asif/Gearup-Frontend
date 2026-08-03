// dashboard.type.ts

import { LucideIcon } from "lucide-react";

export interface AdminDashboard {
  totalUsers: number;
  totalProviders: number;
  totalCustomers: number;

  totalGears: number;
  availableGears: number;

  activeRentals: number;
  completedRentals: number;

  totalRevenue: string;

  totalCategories: number;

  totalReviews: number;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: "ADMIN" | "CUSTOMER" | "PROVIDER";
  status: "ACTIVE" | "SUSPENDED";
  profileImage: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface AdminUsersResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };

  data: AdminUser[];
}

export interface Rental {
  id: string;
  quantity: number;
  totalAmount: string;
  status: string;
  startDate: string;
  endDate: string;
  createdAt: string;

  customer: {
    id: string;
    name: string;
    email: string;
    profileImage: string | null;
  };

  gear: {
    id: string;
    name: string;
    images: string[];
  };

  payment: {
    id: string;
    transactionId: string;
    amount: string;
    provider: string;
    status: string;
  };
}

export interface DashboardSidebarProps {
  title: string;
  subtitle: string;
  items: {
    title: string;
    href: string;
    icon: LucideIcon;
  }[];
}
