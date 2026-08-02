"use client";

import DashboardShell from "@/features/admin/components/Dashboard-shel";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { data: user, isLoading } = useCurrentUser();

  useEffect(() => {
    if (isLoading) return;

    if (!user) {
      router.replace("/login");
      return;
    }

    if (user.role !== "ADMIN") {
      router.replace("/");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user || user.role !== "ADMIN") {
    return null;
  }

  return <DashboardShell>{children}</DashboardShell>;
}
