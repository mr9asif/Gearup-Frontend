import { useQuery } from "@tanstack/react-query";

import { dashboardService } from "../service/dashboard.api";

export const useCustomerDashboard = () => {
  return useQuery({
    queryKey: ["customer-dashboard"],
    queryFn: dashboardService.getCustomerDashboard,
  });
};
