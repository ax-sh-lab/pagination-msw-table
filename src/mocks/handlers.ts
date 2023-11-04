import { delay, http, HttpHandler } from "msw";
import { API_ROUTE } from "@/api";
import { mockAPIBaseJoinPath } from "@/mocks/index";

export const handlers = [
  // Intercept the "GET /resource" request.
  http.get(API_ROUTE.PROFILE, async () => {
    // http.get(mockAPIBaseJoinPath(API_ROUTE.PROFILE), () => {
    // And respond with a "text/plain" response
    // with a "Hello world!" text response body.
    // await delay("infinite");
    // await delay(1000);
    await delay();
    return new Response("User");
  }),
] satisfies HttpHandler[];
