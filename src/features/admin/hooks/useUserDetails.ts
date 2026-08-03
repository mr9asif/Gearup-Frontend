import { useQuery } from "@tanstack/react-query";
import { adminService } from "../services/admin.api";

export const useUserDetails = (id: string) => {
  return useQuery({
    queryKey: ["admin-user", id],
    queryFn: () => adminService.getUser(id),
    enabled: !!id,
  });
};
