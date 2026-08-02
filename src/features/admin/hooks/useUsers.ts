import { useQuery } from "@tanstack/react-query";
import { adminService } from "../services/admin.api";

interface UsersQuery {
  search?: string;
  role?: string;
  status?: string;
  page?: number;
  limit?: number;
}

export const useUsers = (params: UsersQuery) => {
  return useQuery({
    queryKey: ["admin-users", params],
    queryFn: () => adminService.getUsers(params),
  });
};
