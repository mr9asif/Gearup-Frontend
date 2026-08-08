import { ApiResponse } from "@/types/api";
import {
  AuthUser,
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from "@/types/auth";
import { axiosInstance } from "./axios";

export const authService = {
  register: async (payload: RegisterPayload) => {
    const { data } = await axiosInstance.post<ApiResponse<RegisterResponse>>(
      "/auth/register",
      payload,
    );

    return data;
  },

  login: async (payload: LoginPayload) => {
    const { data } = await axiosInstance.post<ApiResponse<LoginResponse>>(
      "/auth/login",
      payload,
    );

    return data;
  },
  googleLogin: async (idToken: string) => {
    const { data } = await axiosInstance.post<
      ApiResponse<{
        user: AuthUser;
      }>
    >("/auth/google", {
      idToken,
    });

    return data;
  },

  getMe: async () => {
    const { data } = await axiosInstance.get<ApiResponse<AuthUser>>("/auth/me");

    return data;
  },

  refreshToken: async () => {
    const { data } = await axiosInstance.post<
      ApiResponse<{ accessToken: string }>
    >("/auth/refresh-token");

    return data;
  },

  logout: async () => {
    const { data } =
      await axiosInstance.post<ApiResponse<null>>("/auth/logout");

    return data;
  },
};
