"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-gray-200">
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
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
                <p className="text-sm text-muted-foreground">
                  Rent Sports Gear
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-muted-foreground">
              GearUp helps athletes and outdoor enthusiasts rent quality sports
              equipment from trusted local providers quickly, securely, and at
              affordable prices.
            </p>

            {/* Contact */}

            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                Dinajpur, Bangladesh
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                +880 1XXX-XXXXXX
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                support@gearup.com
              </div>
            </div>
          </div>

          {/* Links */}

          <div className="lg:col-span-2">
            <h3 className="mb-5 font-semibold">Company</h3>

            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>

              <li>
                <Link href="/gear" className="hover:text-primary">
                  Browse Gear
                </Link>
              </li>

              <li>
                <Link href="/providers" className="hover:text-primary">
                  Providers
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}

          <div className="lg:col-span-2">
            <h3 className="mb-5 font-semibold">Categories</h3>

            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link
                  href="/gear?category=football"
                  className="hover:text-primary"
                >
                  Football
                </Link>
              </li>

              <li>
                <Link
                  href="/gear?category=cricket"
                  className="hover:text-primary"
                >
                  Cricket
                </Link>
              </li>

              <li>
                <Link
                  href="/gear?category=camping"
                  className="hover:text-primary"
                >
                  Camping
                </Link>
              </li>

              <li>
                <Link
                  href="/gear?category=cycling"
                  className="hover:text-primary"
                >
                  Cycling
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}

          <div className="lg:col-span-3">
            <h3 className="mb-5 font-semibold">Stay Updated</h3>

            <p className="mb-5 text-sm text-muted-foreground">
              Subscribe to receive the latest rental offers and new equipment
              updates.
            </p>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
              />

              <button className="w-full rounded-xl bg-primary px-4 py-3 font-medium text-primary-foreground transition hover:opacity-90">
                Subscribe
              </button>
            </div>

            {/* Social */}

            <div className="mt-8 flex gap-3">
              {[FaGithub, FaFacebookF, FaInstagram, FaXTwitter].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} GearUp. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
