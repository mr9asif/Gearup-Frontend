"use client";

import { Camera, User2 } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useRef } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ProfileAvatarProps {
  image: string | null;
  preview: string | null;
  name: string;
  onImageChange: (file: File) => void;
}

export default function ProfileAvatar({
  image,
  preview,
  name,
  onImageChange,
}: ProfileAvatarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    onImageChange(file);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative">
        <Avatar className="h-36 w-36 border-4 border-background shadow-xl">
          {preview || image ? (
            <Image
              src={preview || image || ""}
              alt={name}
              fill
              className="object-cover"
            />
          ) : (
            <AvatarFallback className="text-5xl">
              <User2 className="h-14 w-14" />
            </AvatarFallback>
          )}
        </Avatar>

        <Button
          size="icon"
          type="button"
          className="absolute bottom-1 right-1 rounded-full"
          onClick={() => inputRef.current?.click()}
        >
          <Camera className="h-4 w-4" />
        </Button>
      </div>

      <input
        ref={inputRef}
        hidden
        accept="image/*"
        type="file"
        onChange={handleFileChange}
      />

      <Button
        variant="outline"
        type="button"
        onClick={() => inputRef.current?.click()}
      >
        Change Photo
      </Button>
    </div>
  );
}
