import ProtectedDashboard from "../components/ProtectedDashboard";

export default function ProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedDashboard role="PROVIDER">{children}</ProtectedDashboard>;
}
