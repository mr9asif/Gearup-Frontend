"use client";

import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";
import { UserMenu } from "./UserMenu";

import { publicNav } from "./nav.config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-2">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden flex-1 justify-center lg:flex">
          <div className="flex items-center gap-2 rounded-full border bg-muted/50 px-5 py-3 shadow-sm">
            <NavLinks items={publicNav} />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <UserMenu />

          <MobileMenu items={publicNav} />
        </div>
      </div>
    </header>
  );
}
