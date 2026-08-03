"use client";

import Image from "next/image";
export default function AppLoader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      {/* Outer Ring */}
      <div className="relative flex h-24 w-24 items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-primary/20" />

        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-primary border-r-primary" />

        {/* Logo */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          {/* Static Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-primary/15" />

          {/* Rotating Ring */}
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-primary border-r-primary" />

          {/* Logo */}
          <div className="z-10 rounded-full bg-background p-2 shadow-lg">
            <Image
              src="/logo.png"
              alt="GearUp"
              width={35}
              height={35}
              priority
            />
          </div>
        </div>
      </div>

      {/* Brand */}
      <h2 className="mt-6 text-2xl font-bold tracking-wide">
        Gear<span className="text-primary">Up</span>
      </h2>

      {/* Loading Text */}
      <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
        <span>{text}</span>

        <span className="animate-bounce">.</span>
        <span className="animate-bounce" style={{ animationDelay: "150ms" }}>
          .
        </span>
        <span className="animate-bounce" style={{ animationDelay: "300ms" }}>
          .
        </span>
      </div>
    </div>
  );
}
