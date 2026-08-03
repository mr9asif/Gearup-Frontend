"use client";

import {
  Activity,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  ChartColumn,
  Database,
  LayoutDashboard,
  Package,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import MobileSidebar from "./Mobile-sidebar";

export default function DashboardHeader() {
  return (
    <header className="relative overflow-hidden border-b bg-background px-6 py-5">
      {/* Big Background Icon */}
      <LayoutDashboard className="absolute right-10 top-1/2 h-40 w-40 -translate-y-1/2 text-primary/5 animate-float" />

      {/* Floating Icons */}
      <Package className="absolute left-40 top-4 h-7 w-7 text-primary/10 animate-float" />

      <Users className="absolute left-72 bottom-5 h-6 w-6 text-primary/10 animate-float-delay" />

      <Database className="absolute left-1/2 top-4 h-6 w-6 text-primary/10 animate-float-slow" />

      <ChartColumn className="absolute left-[58%] bottom-4 h-6 w-6 text-primary/10 animate-float" />

      <BarChart3 className="absolute right-64 top-5 h-7 w-7 text-primary/10 animate-float-delay" />

      <Activity className="absolute right-44 bottom-6 h-6 w-6 text-primary/10 animate-float-slow" />

      <ShieldCheck className="absolute right-28 top-8 h-6 w-6 text-primary/10 animate-float" />

      <BriefcaseBusiness className="absolute right-20 bottom-8 h-7 w-7 text-primary/10 animate-float-delay" />

      <Boxes className="absolute right-80 top-1/2 h-6 w-6 text-primary/10 animate-float-slow" />

      <Sparkles className="absolute left-1/3 top-10 h-5 w-5 text-primary/20 animate-pulse" />

      {/* Content */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MobileSidebar />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Dashboard
            </p>
          </div>
        </div>

        {/* Avatar */}
      </div>
    </header>
  );
}
