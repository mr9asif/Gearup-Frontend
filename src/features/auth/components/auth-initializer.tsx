"use client";

import { useCurrentUser } from "@/features/auth/hooks/use-current-user";

export function AuthInitializer() {
  useCurrentUser();

  return null;
}
