import axios from "axios";

import { env } from "@/config/env";

export const axiosInstance = axios.create({
  baseURL: env.API_URL,
  withCredentials: true,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // Don't retry the refresh request itself
    if (originalRequest?.url?.includes("/auth/refresh-token")) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Refresh token cookie is sent automatically
        await axios.post(
          `${env.API_URL}/auth/refresh-token`,
          {},
          {
            withCredentials: true,
          },
        );

        // Retry original request
        return axiosInstance(originalRequest);
      } catch {
        // Let the caller (AuthGuard or page) handle the 401.
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);
