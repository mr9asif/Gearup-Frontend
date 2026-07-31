"use client";
import { useAuth } from "@/ hooks/useAuth";

export default function CustomerDashboardPage() {
  const { user } = useAuth();
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Customer Dashboard: {user?.name}</h1>
      <p className="mt-2 text-muted-foreground">Welcome to GearUp 🎉</p>
    </div>
  );
}
