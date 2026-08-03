import ProtectedDashboard from "../components/ProtectedDashboard";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedDashboard role="CUSTOMER">{children}</ProtectedDashboard>;
}
