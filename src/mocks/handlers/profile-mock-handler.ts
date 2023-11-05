// Intercept the "GET /resource" request.
import { delay, http } from "msw";

import { API_ROUTE } from "@/lib/api-client";

export const profileMockHandler = http.get(API_ROUTE.PROFILE, async () => {
  // http.get(mockAPIBaseJoinPath(API_ROUTE.PROFILE), () => {
  // And respond with a "text/plain" response
  // with a "Hello world!" text response body.
  // await delay("infinite");
  // await delay(1000);
  await delay();
  return new Response("User");
});
