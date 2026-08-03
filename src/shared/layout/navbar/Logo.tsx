"use client";

import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
    >
      <Image
        src="/logo.png"
        alt="GearUp Logo"
        width={42}
        height={42}
        priority
      />

      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold tracking-tight text-primary">
          GearUp
        </span>

        <span className="text-xs text-muted-foreground">Rental Platform</span>
      </div>
    </Link>
  );
}
