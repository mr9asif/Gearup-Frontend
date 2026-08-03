"use client";

import { CalendarDays, Clock3, Mail, Phone, Shield, User } from "lucide-react";
import { useParams } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { useUserDetails } from "@/features/admin/hooks/useUserDetails";
import AppLoader from "@/shared/common/AppLoader";

export default function UserDetailsPage() {
  const params = useParams();

  const id = params.id as string;

  const { data: user, isPending, isError } = useUserDetails(id);

  if (isPending) {
    return <AppLoader />;
  }

  if (isError || !user) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        Failed to load user.
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-6xl space-y-8 p-6">
      {/* Header */}
      <div>
        <p className="text-sm text-muted-foreground">
          Dashboard / Users / Details
        </p>

        <h1 className="mt-2 text-3xl font-bold">User Details</h1>
      </div>

      {/* Profile */}
      <Card className="overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-primary/20 via-primary/10 to-background" />

        <CardContent className="-mt-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <Avatar className="h-28 w-28 border-4 border-background shadow-lg">
              <AvatarImage src={user.profileImage ?? ""} />

              <AvatarFallback className="text-3xl font-bold">
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h2 className="text-3xl font-bold">{user.name}</h2>

              <p className="mt-1 text-muted-foreground">{user.email}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Badge
                  variant={user.status === "ACTIVE" ? "default" : "destructive"}
                >
                  {user.status}
                </Badge>

                <Badge variant="secondary">{user.role}</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Information */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="space-y-6 p-6">
            <h3 className="text-lg font-semibold">Contact Information</h3>

            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">Email</p>

                <p className="font-medium">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">Phone</p>

                <p className="font-medium">{user.phone || "Not Provided"}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-6 p-6">
            <h3 className="text-lg font-semibold">Account Information</h3>

            <div className="flex items-center gap-4">
              <Shield className="h-5 w-5 text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">Role</p>

                <p className="font-medium">{user.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <User className="h-5 w-5 text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">User ID</p>

                <p className="break-all font-medium">{user.id}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dates */}
      <Card>
        <CardContent className="grid gap-6 p-6 md:grid-cols-2">
          <div className="flex items-center gap-4">
            <CalendarDays className="h-5 w-5 text-primary" />

            <div>
              <p className="text-sm text-muted-foreground">Joined On</p>

              <p className="font-medium">
                {new Date(user.createdAt).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Clock3 className="h-5 w-5 text-primary" />

            <div>
              <p className="text-sm text-muted-foreground">Last Updated</p>

              <p className="font-medium">
                {new Date(user.updatedAt).toLocaleString()}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
