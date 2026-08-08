import { useMutation } from "@tanstack/react-query";

import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";

export const useGoogleLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: (idToken: string) => authService.googleLogin(idToken),

    onSuccess: (res) => {
      setUser(res.data.user);
    },
  });
};
