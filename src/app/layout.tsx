import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { metadata as siteMetadata } from "@/config/site";
import { AuthInitializer } from "@/features/auth/components/auth-initializer";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <ThemeProvider>
          <ReactQueryProvider>
            <AuthInitializer />
            {children}

            <Toaster position="top-right" richColors />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
