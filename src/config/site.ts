import type { Metadata } from "next";

export const siteConfig = {
  name: "GearUp",
  description:
    "Rent sports and outdoor gear instantly. Browse, rent, and manage equipment with GearUp.",

  url: "http://localhost:3000",

  ogImage: "/opengraph-image.png",

  keywords: [
    "GearUp",
    "Sports Rental",
    "Outdoor Gear",
    "Equipment Rental",
    "Next.js",
    "TypeScript",
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  metadataBase: new URL(siteConfig.url),

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};
