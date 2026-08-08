export const config = {
  demoAccounts: {
    customer: {
      email: process.env.NEXT_PUBLIC_DEMO_CUSTOMER_EMAIL ?? "",
      password: process.env.NEXT_PUBLIC_DEMO_CUSTOMER_PASSWORD ?? "",
    },

    provider: {
      email: process.env.NEXT_PUBLIC_DEMO_PROVIDER_EMAIL ?? "",
      password: process.env.NEXT_PUBLIC_DEMO_PROVIDER_PASSWORD ?? "",
    },

    admin: {
      email: process.env.NEXT_PUBLIC_DEMO_ADMIN_EMAIL ?? "",
      password: process.env.NEXT_PUBLIC_DEMO_ADMIN_PASSWORD ?? "",
    },
  },
} as const;
