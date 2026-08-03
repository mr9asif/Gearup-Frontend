"use client";

import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Logo } from "./Logo";

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

type MobileMenuProps = {
  items: NavItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-muted">
          <Menu className="h-6 w-6" />
        </SheetTrigger>

        <SheetContent side="left" className="w-[320px] p-0">
          {/* Logo */}
          <div className="border-b p-6">
            <Logo />
          </div>

          {/* Navigation */}
          <nav className="space-y-2 p-4">
            {items.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />

                    <span>{item.label}</span>
                  </div>

                  <ChevronRight className="h-4 w-4 opacity-60" />
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
