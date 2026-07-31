import { useAuthStore } from "@/store/auth.store";

export const useAuth = () => {
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.isLoading);
  const logout = useAuthStore((state) => state.logout);

  return {
    user,
    loading,
    logout,
    isAuthenticated: !!user,
  };
};
