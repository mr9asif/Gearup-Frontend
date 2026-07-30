function getEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export const env = {
  API_URL: getEnv("NEXT_PUBLIC_API_BASE_URL"),

  APP_NAME: getEnv("NEXT_PUBLIC_APP_NAME"),
};
