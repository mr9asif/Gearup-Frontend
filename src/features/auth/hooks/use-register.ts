import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { authService } from "@/services/auth.service";
import { ApiResponse } from "@/types/api";
import { RegisterPayload, RegisterResponse } from "@/types/auth";

interface ErrorResponse {
  success: boolean;
  message: string;
}

export const useRegister = () => {
  return useMutation<
    ApiResponse<RegisterResponse>,
    AxiosError<ErrorResponse>,
    RegisterPayload
  >({
    mutationFn: authService.register,
  });
};
