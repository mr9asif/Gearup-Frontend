"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/query-keys";
import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";

export const useCurrentUser = () => {
  const setLoading = useAuthStore((state) => state.setLoading);
  const setUser = useAuthStore((state) => state.setUser);
  const logout = useAuthStore((state) => state.logout);

  return useQuery({
    queryKey: QUERY_KEYS.CURRENT_USER,

    queryFn: async () => {
      setLoading(true);

      try {
        const response = await authService.getMe();

        setUser(response.data);

        return response.data;
      } catch (error) {
        logout(); // Clear user when /me returns 401 (or any error)

        throw error;
      } finally {
        setLoading(false);
      }
    },

    retry: false,
    refetchOnWindowFocus: false,
  });
};
