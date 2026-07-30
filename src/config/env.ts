const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

if (!API_URL) {
  throw new Error("Missing environment variable: NEXT_PUBLIC_API_BASE_URL");
}

if (!APP_NAME) {
  throw new Error("Missing environment variable: NEXT_PUBLIC_APP_NAME");
}

export const env = {
  API_URL,
  APP_NAME,
} as const;
