"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bike, CheckCircle2, CreditCard, Star } from "lucide-react";
import Link from "next/link";

import { useCustomerDashboard } from "../hooks/useCustomerDashboard";

export default function DashboardStats() {
  const { data, isLoading } = useCustomerDashboard();

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="h-44 animate-pulse rounded-3xl bg-muted" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-44 animate-pulse rounded-3xl bg-muted"
            />
          ))}
        </div>
      </div>
    );
  }

  if (!data) return null;

  const stats = [
    {
      title: "Active Rentals",
      value: data.activeRentals,
      description: "Currently renting",
      icon: Bike,
      color: "text-sky-600",
      bg: "bg-sky-500/10",
    },
    {
      title: "Completed Rentals",
      value: data.completedRentals,
      description: "Finished rentals",
      icon: CheckCircle2,
      color: "text-emerald-600",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Total Spent",
      value: `৳${Number(data.totalSpent).toLocaleString()}`,
      description: "Lifetime spending",
      icon: CreditCard,
      color: "text-violet-600",
      bg: "bg-violet-500/10",
    },
    {
      title: "Reviews",
      value: data.totalReviews,
      description: "Reviews submitted",
      icon: Star,
      color: "text-amber-600",
      bg: "bg-amber-500/10",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Hero */}

      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-8 text-primary-foreground shadow-xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h1 className="text-4xl font-bold">Welcome Back 👋</h1>

            <p className="mt-3 max-w-xl text-primary-foreground/80">
              Track your rentals, payments and activity from one place.
            </p>
          </div>

          <Link
            href="/gears"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:scale-105"
          >
            Browse Gear
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Stats */}

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border bg-card p-8 shadow-sm transition-all hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground">{item.title}</p>

                  <h2 className="mt-4 text-5xl font-bold">{item.value}</h2>

                  <p className="mt-3 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <div className={`rounded-2xl p-5 ${item.bg}`}>
                  <Icon className={`h-8 w-8 ${item.color}`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
