"use client";

import DashboardHeader from "./Dashboard-header";

interface DashboardShellProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function DashboardShell({
  children,
  sidebar,
}: DashboardShellProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      {sidebar}

      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
