import { delay, http, HttpHandler } from "msw";
import { API_ROUTE } from "@/api";
import { mockAPIBaseJoinPath } from "@/mocks/index";

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

const usersListMock = http.get(API_ROUTE.USERS, async (r) => {
  console.log(r, 555);

  // const pageParam = req.url.searchParams.get('page') || 1;
  // const perPageParam = req.url.searchParams.get('per_page') || 10;
  // const sortBy = req.url.searchParams.get('sortBy');
  //
});
export const handlers = [profileMock, usersListMock] satisfies HttpHandler[];
