import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import axios from "axios";
import { apiClient } from "@/lib/api-client";

// NOTE: runs a cleanup after each test case (e.g. clearing jsdom)
beforeAll(() => {
  apiClient.defaults.adapter = "http";
  axios.defaults.adapter = "http";
});
afterEach(() => {
  // console.log("[setup-tests: Trigger afterEach]");
  // cleanup();
});
