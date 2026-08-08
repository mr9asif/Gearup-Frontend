"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { toast } from "sonner";

export function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;

    if (!emailInput.value) {
      emailInput.reportValidity();
      return;
    }

    toast.success("Subscribed successfully!", {
      description: "Thank you for subscribing to GearUp updates.",
    });

    form.reset();
  };

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background dark:bg-black">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-xl font-bold text-primary-foreground">
                G
              </div>

              <div>
                <h2 className="text-2xl font-bold">GearUp</h2>

                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Rent Sports Gear
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-muted-foreground dark:text-white/80">
              GearUp helps athletes and outdoor enthusiasts rent quality sports
              equipment from trusted local providers quickly, securely, and at
              affordable prices.
            </p>

            {/* Contact */}
            <div className="mt-8 space-y-3 text-sm text-muted-foreground dark:text-white/80">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>01792952161</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>asifalibd002@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 font-semibold dark:text-white">Company</h3>

            <ul className="space-y-3 text-muted-foreground dark:text-white/80">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-primary"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/gear"
                  className="transition-colors hover:text-primary"
                >
                  Browse Gear
                </Link>
              </li>

              <li>
                <Link
                  href="/how-it-works"
                  className="transition-colors hover:text-primary"
                >
                  How it works
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 font-semibold dark:text-white">Categories</h3>

            <ul className="space-y-3 text-muted-foreground dark:text-white/80">
              <li>
                <Link
                  href="/gear?category=football"
                  className="transition-colors hover:text-primary"
                >
                  Football
                </Link>
              </li>

              <li>
                <Link
                  href="/gear?category=cricket"
                  className="transition-colors hover:text-primary"
                >
                  Cricket
                </Link>
              </li>

              <li>
                <Link
                  href="/gear?category=camping"
                  className="transition-colors hover:text-primary"
                >
                  Camping
                </Link>
              </li>

              <li>
                <Link
                  href="/gear?category=cycling"
                  className="transition-colors hover:text-primary"
                >
                  Cycling
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 font-semibold dark:text-white">Stay Updated</h3>

            <p className="mb-5 text-sm text-muted-foreground dark:text-white/80">
              Subscribe to receive the latest rental offers and new equipment
              updates.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder:text-white/50"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-primary px-4 py-3 font-medium text-primary-foreground transition hover:opacity-90"
              >
                Subscribe
              </button>
            </form>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              {/* GitHub */}
              <Link
                href="https://github.com/mr9asif/Gearup-Frontend"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl border border-border
                  text-muted-foreground
                  transition-all duration-300
                  hover:border-primary
                  hover:bg-primary
                  hover:text-primary-foreground
                  dark:border-white/20
                  dark:text-white
                  dark:hover:border-primary
                  dark:hover:bg-primary
                  dark:hover:text-primary-foreground
                "
              >
                <FaGithub className="h-5 w-5" />
              </Link>

              {/* Facebook */}
              <Link
                href="https://facebook.com/mr9asif"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl border border-border
                  text-muted-foreground
                  transition-all duration-300
                  hover:border-primary
                  hover:bg-primary
                  hover:text-primary-foreground
                  dark:border-white/20
                  dark:text-white
                  dark:hover:border-primary
                  dark:hover:bg-primary
                  dark:hover:text-primary-foreground
                "
              >
                <FaFacebookF className="h-5 w-5" />
              </Link>

              {/* Instagram */}
              <Link
                href="https://instagram.com/mr9asif"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl border border-border
                  text-muted-foreground
                  transition-all duration-300
                  hover:border-primary
                  hover:bg-primary
                  hover:text-primary-foreground
                  dark:border-white/20
                  dark:text-white
                  dark:hover:border-primary
                  dark:hover:bg-primary
                  dark:hover:text-primary-foreground
                "
              >
                <FaInstagram className="h-5 w-5" />
              </Link>

              {/* X */}
              <Link
                href="https://x.com/mr9asif"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl border border-border
                  text-muted-foreground
                  transition-all duration-300
                  hover:border-primary
                  hover:bg-primary
                  hover:text-primary-foreground
                  dark:border-white/20
                  dark:text-white
                  dark:hover:border-primary
                  dark:hover:bg-primary
                  dark:hover:text-primary-foreground
                "
              >
                <FaXTwitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row dark:border-white/15 dark:text-white/70">
          <p>© {new Date().getFullYear()} GearUp. All rights reserved.</p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-black dark:hover:text-white/60"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-black dark:hover:text-white/60"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
