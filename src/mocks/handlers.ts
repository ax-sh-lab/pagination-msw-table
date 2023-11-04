import { http, HttpHandler } from "msw";

export const handlers = [
  // Intercept the "GET /resource" request.
  http.get("/profile", () => {
    // And respond with a "text/plain" response
    // with a "Hello world!" text response body.
    return new Response("User");
  }),
] satisfies HttpHandler[];
