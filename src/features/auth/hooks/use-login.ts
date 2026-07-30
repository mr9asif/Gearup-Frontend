import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/auth.store";
import { ApiResponse } from "@/types/api";
import { LoginPayload, LoginResponse } from "@/types/auth";
import { authService } from "@/services/auth.service";

interface ErrorResponse {
  success: boolean;
  message: string;
}

export const useLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation<
    ApiResponse<LoginResponse>,
    AxiosError<ErrorResponse>,
    LoginPayload
  >({
    mutationFn: authService.login,

    onSuccess: (response) => {
      setUser(response.data.user);
    },
  });
};