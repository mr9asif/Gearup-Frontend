"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import DashboardShell from "@/features/admin/components/Dashboard-shel";
import { adminSidebarItems } from "@/features/admin/constants/sidebar";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";
import { customerSidebarItems } from "@/features/customer/constants/customer.sidebar";
import { providerSidebarItems } from "@/features/provider/constant/provider-sidebar";
import AppLoader from "@/shared/common/AppLoader";
import DashboardSidebar from "./Dashboard-Sidebar";

interface ProtectedDashboardProps {
  children: React.ReactNode;
  role: "ADMIN" | "PROVIDER" | "CUSTOMER";
}

export default function ProtectedDashboard({
  children,
  role,
}: ProtectedDashboardProps) {
  const router = useRouter();

  const { data: user, isLoading } = useCurrentUser();

  useEffect(() => {
    if (isLoading) return;

    if (!user) {
      router.replace("/login");
      return;
    }

    if (user.role !== role) {
      router.replace("/");
    }
  }, [user, isLoading, role, router]);

  if (isLoading) {
    return <AppLoader />;
  }

  if (!user || user.role !== role) {
    return null;
  }

  const sidebarConfig =
    role === "ADMIN"
      ? {
          title: "GearUp Admin",
          subtitle: "Administration Panel",
          items: adminSidebarItems,
        }
      : role === "PROVIDER"
        ? {
            title: "GearUp Provider",
            subtitle: "Provider Panel",
            items: providerSidebarItems,
          }
        : {
            title: "GearUp",
            subtitle: "Customer Panel",
            items: customerSidebarItems,
          };

  return (
    <DashboardShell sidebar={<DashboardSidebar {...sidebarConfig} />}>
      {children}
    </DashboardShell>
  );
}
