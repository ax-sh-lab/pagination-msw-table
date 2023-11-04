import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// NOTE: runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  console.log("[setup-tests: Trigger afterEach]");
  cleanup();
});
