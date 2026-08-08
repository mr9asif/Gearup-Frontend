"use client";

import { useAuthStore } from "@/store/auth.store";

import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";
import { UserMenu } from "./UserMenu";

import { dashboardNav, publicNav } from "./nav.config";

export function Navbar() {
  const user = useAuthStore((state) => state.user);

  const dashboard = user ? dashboardNav[user.role] : null;

  const navItems = dashboard ? [...publicNav, dashboard] : publicNav;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden flex-1 justify-center lg:flex">
          <div className="flex items-center gap-2 rounded-full border bg-muted/50 px-5 py-3 shadow-sm">
            <NavLinks items={navItems} />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <UserMenu />

          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
