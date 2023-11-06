import { createEnv } from '@t3-oss/env-nextjs';
import { z, type ZodError } from 'zod';

export const env = createEnv({
  isServer: typeof window === 'undefined',
  server: {
    // DATABASE_URL: z.string().url(),
    // OPEN_AI_API_KEY: z.string().min(1),
  },
  client: {
    // https://zod.dev/?id=coercion-for-primitives
    NEXT_PUBLIC_API_URL: z.string().url().min(1),
    NEXT_PUBLIC_API_MOCKING: z.coerce.boolean().default(false),
  },
  runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_API_MOCKING: process.env.NEXT_PUBLIC_API_MOCKING,
  },
  onValidationError: (error: ZodError) => {
    console.error('❌ Invalid environment variables:', error.flatten().fieldErrors);
    throw new Error('Invalid environment variables');
  },
  // Called when server variables are accessed on the client.
  onInvalidAccess: (variable: string) => {
    throw new Error('❌ Attempted to access a server-side environment variable on the client');
  },
});
