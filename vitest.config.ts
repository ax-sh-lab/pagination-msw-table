/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

/* To load environment variables in tests */
const { loadEnvConfig } = require("@next/env");
loadEnvConfig(process.env.PWD);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "happy-dom",
    globals: true,
    include: ["**/*.test.{ts,tsx}"],
    exclude: ["node_modules", "**/*.stories.{ts,tsx}"],
    setupFiles: ["./setup-tests.ts"],
  },
});
