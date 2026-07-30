"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/query-keys";
import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";

export const useCurrentUser = () => {
  const setLoading = useAuthStore((state) => state.setLoading);
  const setUser = useAuthStore((state) => state.setUser);

  return useQuery({
    queryKey: QUERY_KEYS.CURRENT_USER,

    queryFn: async () => {
      setLoading(true);

      try {
        const response = await authService.getMe();

        setUser(response.data);

        return response.data;
      } finally {
        setLoading(false);
      }
    },
    retry: false,

    refetchOnWindowFocus: false,
  });
};
