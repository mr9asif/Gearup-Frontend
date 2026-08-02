import { useQuery } from "@tanstack/react-query";
import { adminService } from "../services/admin.api";

export const useGetAllGear = (params?: { page?: number; limit?: number }) => {
  return useQuery({
    queryKey: ["admin-gears", params],
    queryFn: () => adminService.getGears(params),
  });
};
