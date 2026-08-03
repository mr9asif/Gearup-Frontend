"use client";

import {
  Briefcase,
  CheckCircle2,
  CircleCheckBig,
  Clock3,
  DollarSign,
  FolderTree,
  Package,
  Star,
  UserRound,
  Users,
} from "lucide-react";

import DashboardStatCard from "@/features/admin/components/Dashboard-state-card";
import { useAdminDashboard } from "@/features/admin/hooks/useAdminDashboard";
import AppLoader from "@/shared/common/AppLoader";

export default function AdminDashboardPage() {
  const { data, isLoading } = useAdminDashboard();

  if (isLoading) {
    return <AppLoader />;
  }

  if (!data) {
    return <div>Failed to load dashboard.</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="text-muted-foreground">
          Welcome back! Here is an overview of your platform.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardStatCard
          title="Total Users"
          value={data.totalUsers}
          icon={Users}
        />

        <DashboardStatCard
          title="Providers"
          value={data.totalProviders}
          icon={Briefcase}
        />

        <DashboardStatCard
          title="Customers"
          value={data.totalCustomers}
          icon={UserRound}
        />

        <DashboardStatCard
          title="Revenue"
          value={`৳${Number(data.totalRevenue).toLocaleString()}`}
          icon={DollarSign}
        />

        <DashboardStatCard
          title="Total Gears"
          value={data.totalGears}
          icon={Package}
        />

        <DashboardStatCard
          title="Available Gears"
          value={data.availableGears}
          icon={CheckCircle2}
        />

        <DashboardStatCard
          title="Active Rentals"
          value={data.activeRentals}
          icon={Clock3}
        />

        <DashboardStatCard
          title="Completed Rentals"
          value={data.completedRentals}
          icon={CircleCheckBig}
        />

        <DashboardStatCard
          title="Categories"
          value={data.totalCategories}
          icon={FolderTree}
        />

        <DashboardStatCard
          title="Reviews"
          value={data.totalReviews}
          icon={Star}
        />
      </div>
    </div>
  );
}
