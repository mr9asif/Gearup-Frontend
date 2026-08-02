export default function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>

      <div className="text-sm text-muted-foreground">Welcome Admin</div>
    </header>
  );
}
