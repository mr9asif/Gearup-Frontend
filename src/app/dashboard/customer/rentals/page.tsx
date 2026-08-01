import RentalPage from "@/features/rental/page/CustomerOrderPage";
import AuthGuard from "@/lib/AuthGuard";

const page = () => {
  return (
    <AuthGuard>
      <RentalPage />
    </AuthGuard>
  );
};

export default page;
