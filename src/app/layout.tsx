import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { AuthInitializer } from "@/features/auth/components/auth-initializer";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GearUp",
  description: "...",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
          >
            <ReactQueryProvider>
              <AuthInitializer />

              {children}

              <Toaster position="top-right" richColors />
            </ReactQueryProvider>
          </GoogleOAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
