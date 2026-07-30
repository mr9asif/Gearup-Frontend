"use client";

import { useMutation } from "@tanstack/react-query";

import { authService } from "@/services/auth.service";

import { useAuthStore } from "@/store/auth.store";

export const useLogout = () => {
  const logout = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: authService.logout,

    onSuccess: () => {
      logout();
    },
  });
};
