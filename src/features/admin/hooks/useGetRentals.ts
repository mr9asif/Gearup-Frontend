import { useQuery } from "@tanstack/react-query";

import { adminService } from "../services/admin.api";

export const useGetRentals = (params?: { page?: number; limit?: number }) => {
  return useQuery({
    queryKey: ["admin-rentals", params],
    queryFn: () => adminService.getRentals(params),
  });
};
