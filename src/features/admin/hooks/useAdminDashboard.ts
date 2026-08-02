import { useQuery } from "@tanstack/react-query";
import { adminService } from "../services/admin.api";

export const useAdminDashboard = () => {
  return useQuery({
    queryKey: ["admin-dashboard"],
    queryFn: adminService.getDashboard,
  });
};
