import DashboardHeader from "./Dashboard-header";
import DashboardSidebar from "./Dashboard-Sidebar";

interface DashboardShellProps {
  children: React.ReactNode;
}

export default function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />

      <div className="flex flex-1 flex-col">
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
