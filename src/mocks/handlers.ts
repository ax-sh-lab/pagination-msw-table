import { delay, http, HttpHandler, HttpResponse } from "msw";
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

const usersListMock = http.get(API_ROUTE.USERS, async ({ params, request }) => {
  const url = new URL(request.url);

  const pageParam = Number(url.searchParams.get("page") || 1);
  const perPageParam = Number(url.searchParams.get("perPage") || 10);
  // const sortByParam = url.searchParams.get("sortBy");
  console.log(url, pageParam, perPageParam);
  return HttpResponse.json({ pageParam });
});
export const handlers = [profileMock, usersListMock] satisfies HttpHandler[];
