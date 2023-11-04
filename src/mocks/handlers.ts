import { delay, http, HttpHandler } from "msw";
import { API_ROUTE } from "@/api";
import { db } from "@/mocks/mock-schema/db";
import { range } from "lodash";
import { usersListMockHandler } from "@/mocks/mock-schema/users-list-mock-handler";

// Intercept the "GET /resource" request.
const profileMock = http.get(API_ROUTE.PROFILE, async () => {
  // http.get(mockAPIBaseJoinPath(API_ROUTE.PROFILE), () => {
  // And respond with a "text/plain" response
  // with a "Hello world!" text response body.
  // await delay("infinite");
  // await delay(1000);
  await delay();
  return new Response("User");
});

export const handlers = [
  profileMock,
  usersListMockHandler,
] satisfies HttpHandler[];
