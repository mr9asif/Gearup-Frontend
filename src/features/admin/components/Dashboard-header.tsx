import MobileSidebar from "./Mobile-sidebar";

export default function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div className="flex items-center gap-3">
        <MobileSidebar />

        <h1 className="text-lg font-semibold">Admin Dashboard</h1>
      </div>

      {/* Avatar */}
    </header>
  );
}
