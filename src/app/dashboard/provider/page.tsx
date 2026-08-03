"use client";

import DashboardStatCard from "@/features/admin/components/Dashboard-state-card";
import { useProviderDashboard } from "@/features/provider/hooks/useProviderDashboard";
import {
  CalendarClock,
  Clock3,
  DollarSign,
  MessageSquare,
  Package,
  Star,
} from "lucide-react";

export default function ProviderDashboardPage() {
  const { data, isLoading } = useProviderDashboard();

  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        Failed to load dashboard.
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Provider Dashboard
        </h1>

        <p className="text-muted-foreground">Manage your gears and bookings.</p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardStatCard
          title="Total Gears"
          value={data.totalGears}
          icon={Package}
        />

        <DashboardStatCard
          title="Available Gears"
          value={data.availableGears}
          icon={Package}
        />

        <DashboardStatCard
          title="Active Rentals"
          value={data.activeRentals}
          icon={CalendarClock}
        />

        <DashboardStatCard
          title="Completed Rentals"
          value={data.completedRentals}
          icon={Clock3}
        />

        <DashboardStatCard
          title="Total Revenue"
          value={`৳${Number(data.totalRevenue).toLocaleString()}`}
          icon={DollarSign}
        />

        <DashboardStatCard
          title="Total Reviews"
          value={data.totalReviews}
          icon={MessageSquare}
        />

        <DashboardStatCard
          title="Average Rating"
          value={`${Number(data.averageRating).toFixed(1)} ⭐`}
          icon={Star}
        />
      </div>

      {/* Dashboard Lists */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Bookings */}
        <div className="flex h-[450px] flex-col rounded-xl border bg-background p-6 shadow-sm">
          <div className="mb-5">
            <h2 className="text-lg font-semibold">Recent Bookings</h2>
          </div>

          {data.recentBookings.length === 0 ? (
            <p className="text-sm text-muted-foreground">No bookings found.</p>
          ) : (
            <div className="flex-1 overflow-y-auto pr-2">
              <div className="space-y-4">
                {data.recentBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div>
                      <p className="font-medium">{booking.customer.name}</p>

                      <p className="text-sm text-muted-foreground">
                        {booking.gear.name}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        {booking.status}
                      </span>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {new Date(booking.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Most Rented Gears */}
        <div className="flex h-[450px] flex-col rounded-xl border bg-background p-6 shadow-sm">
          <div className="mb-5">
            <h2 className="text-lg font-semibold">Most Rented Gears</h2>
          </div>

          {data.topGears.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No gear rentals yet.
            </p>
          ) : (
            <div className="flex-1 overflow-y-auto pr-2">
              <div className="space-y-4">
                {data.topGears.map((gear) => (
                  <div
                    key={gear.id}
                    className="flex items-center gap-4 rounded-lg border p-3"
                  >
                    <img
                      src={gear.images?.[0]}
                      alt={gear.name}
                      className="h-14 w-14 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <p className="font-medium">{gear.name}</p>

                      <p className="text-sm text-muted-foreground">
                        {gear.totalRentals} Rentals
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
