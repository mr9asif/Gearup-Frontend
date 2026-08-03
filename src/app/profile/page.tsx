"use client";

import ProfileForm from "@/features/profile/Components/ProfileForm";
import { useAuthStore } from "@/store/auth.store";

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p className="text-muted-foreground">Loading profile...</p>
      </div>
    );
  }

  const profile = {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone ?? "",
    profileImage: user.profileImage ?? "",
    role: user.role,
  };

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>

        <p className="text-muted-foreground">
          View and update your account information.
        </p>
      </div>

      <ProfileForm profile={profile} />
    </div>
  );
}
