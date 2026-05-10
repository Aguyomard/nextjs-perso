import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.string().default("3000"),
  VERCEL_URL: z.string().optional(),
  NEXT_PUBLIC_APP_URL: z.preprocess((val) => {
    if (val === undefined || val === "") return undefined;
    return val;
  }, z.string().url().optional()),
});

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  VERCEL_URL: process.env.VERCEL_URL,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});
