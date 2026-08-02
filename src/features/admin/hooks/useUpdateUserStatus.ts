import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { adminService } from "../services/admin.api";
import { AdminUser } from "../types/admin.types";

type AdminUsersResponse = {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  data: AdminUser[];
};
export const useUpdateUserStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      status,
    }: {
      id: string;
      status: "ACTIVE" | "SUSPENDED";
    }) => adminService.updateUserStatus(id, status),

    onMutate: async ({ id, status }) => {
      await queryClient.cancelQueries({
        queryKey: ["admin-users"],
      });

      const previousUsers = queryClient.getQueryData(["admin-users"]);

      queryClient.setQueryData(
        ["admin-users"],
        (old: AdminUsersResponse | undefined) => {
          if (!old) return old;

          return {
            ...old,
            data: old.data.map((user: AdminUser) =>
              user.id === id
                ? {
                    ...user,
                    status,
                  }
                : user,
            ),
          };
        },
      );

      return { previousUsers };
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(["admin-users"], context?.previousUsers);

      toast.error("Failed to update user.");
    },

    onSuccess: () => {
      toast.success("User updated successfully.");
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-users"],
      });
    },
  });
};
