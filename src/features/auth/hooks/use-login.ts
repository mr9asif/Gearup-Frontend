import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";
import { ApiResponse } from "@/types/api";
import { LoginPayload, LoginResponse } from "@/types/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface ErrorResponse {
  success: boolean;
  message: string;
}

export const useLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);

  const queryClient = useQueryClient();

  return useMutation<
    ApiResponse<LoginResponse>,
    AxiosError<ErrorResponse>,
    LoginPayload
  >({
    mutationFn: authService.login,

    onSuccess: (response) => {
      // Save logged in user
      setUser(response.data.user);

      // Remove any cached data from the previous session
      queryClient.clear();

      // Refetch important queries for the new user
      queryClient.invalidateQueries({
        queryKey: ["me"],
      });
    },
  });
};
