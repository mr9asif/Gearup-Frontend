import { useQuery } from "@tanstack/react-query";

import { adminService } from "../services/admin.api";

export const useGetRentals = () => {
  return useQuery({
    queryKey: ["admin-rentals"],
    queryFn: adminService.getRentals,
  });
};
