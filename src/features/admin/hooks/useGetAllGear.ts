import { useQuery } from "@tanstack/react-query";
import { adminService } from "../services/admin.api";

export const useGetAllGear = () => {
  return useQuery({
    queryKey: ["all-gear"],
    queryFn: adminService.getGears,
  });
};
