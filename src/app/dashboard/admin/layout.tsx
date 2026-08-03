import ProtectedDashboard from "../components/ProtectedDashboard";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedDashboard role="ADMIN">{children}</ProtectedDashboard>;
}
