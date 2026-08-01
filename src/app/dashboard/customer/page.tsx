"use client";
import { useAuth } from "@/ hooks/useAuth";
import DashboardStats from "@/features/dashboard/components/DashboardStates";

export default function CustomerDashboardPage() {
  const { user } = useAuth();
  return <DashboardStats />;
}
