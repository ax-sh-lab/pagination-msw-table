// /api/posts?offset=0&limit=10
import { http, HttpResponse } from "msw";
import { API_ROUTE } from "@/api";
import { db } from "@/mocks/models/db";
import { computeOffset } from "@/mocks/utils/compute-offset";
import { computeTotalPages } from "@/mocks/utils/compute-total-pages";
import { range } from "lodash";
import { PaginationResponse } from "@/types";
import { mockAPIBaseJoinPath } from "@/mocks";

type ListMockPathParams = any;
type ListMockRequestBodyType = {};
type ListMockResponseBodyType = any;

export const usersListMockHandler = http.get<
  ListMockPathParams,
  ListMockRequestBodyType,
  ListMockResponseBodyType
>(mockAPIBaseJoinPath(API_ROUTE.USERS), async ({ request }) => {
  // NOTE this populates the user db with 100 users
  range(100).map(() => db.user.create());
  // console.log(await request.json());

  const url = new URL(request.url);

  const page = Number(url.searchParams.get("page") || 1);
  const perPage = Number(url.searchParams.get("perPage") || 10);
  // const sortBy = url.searchParams.get("sortBy");

  const list = db.user.findMany({
    take: perPage,
    skip: computeOffset(perPage, page),
  });

  const total_records = db.user.count();

  return HttpResponse.json<PaginationResponse>(
    {
      records: list,
      pagination: {
        page,
        total_records,
        total_pages: computeTotalPages(total_records, perPage),
      },
    },
    // { status: 500 },
  );
});
