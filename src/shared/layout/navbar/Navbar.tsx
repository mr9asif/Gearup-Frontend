"use client";

import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLink";
import { NotificationButton } from "./NotificationButton";
import { SearchBar } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";
import { UserMenu } from "./UserMenu";

import { adminNav, customerNav, guestNav, providerNav } from "./nav.config";

import { useAuthStore } from "@/store/auth.store";

export function Navbar() {
  const user = useAuthStore((state) => state.user);

  let navItems = guestNav;

  switch (user?.role) {
    case "CUSTOMER":
      navItems = customerNav;
      break;

    case "PROVIDER":
      navItems = providerNav;
      break;

    case "ADMIN":
      navItems = adminNav;
      break;

    default:
      navItems = guestNav;
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left */}
        <div className="flex items-center gap-8">
          <Logo />

          <div className="hidden lg:block">
            <NavLinks items={navItems} />
          </div>
        </div>

        {/* Center */}
        <div className="hidden w-full max-w-md xl:block">
          <SearchBar />
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {user && <NotificationButton />}

          <UserMenu />

          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
