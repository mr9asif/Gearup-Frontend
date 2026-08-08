"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { ArrowLeft } from "lucide-react";
import { useUpdateProfile } from "../hooks/useUpdateProfile";
import { Profile } from "../types/profile.type";
import ProfileAvatar from "./ProfileAvater";

const profileSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name is too long."),
  phone: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

interface ProfileFormProps {
  profile: Profile;
}

export default function ProfileForm({ profile }: ProfileFormProps) {
  const { mutate: updateProfile, isPending } = useUpdateProfile();

  const [selectedImage, setSelectedImage] = useState<File>();
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: profile.name,
      phone: profile.phone ?? "",
    },
  });

  const handleImageChange = (file: File) => {
    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const onSubmit = (values: ProfileFormValues) => {
    updateProfile({
      name: values.name,
      phone: values.phone || "",
      profileImage: selectedImage,
    });
  };

  return (
    <Card>
      <CardContent className="p-8">
        <div className="mb-6">
          <Button
            type="button"
            variant="ghost"
            onClick={() => (window.location.href = "/")}
            className="gap-2 px-0 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <ProfileAvatar
            image={profile.profileImage}
            preview={preview}
            name={profile.name}
            onImageChange={handleImageChange}
          />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>

              <Input {...register("name")} placeholder="Enter your full name" />

              {errors.name && (
                <p className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email & Phone */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>

                <Input value={profile.email} disabled />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Phone</label>

                <Input
                  {...register("phone")}
                  placeholder="Enter your phone number"
                />

                {errors.phone && (
                  <p className="text-sm text-destructive">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Role */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Role</label>

              <div>
                <Badge>{profile.role}</Badge>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end">
              <Button type="submit" disabled={isPending}>
                {isPending ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
