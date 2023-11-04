// /api/posts?offset=0&limit=10
import { http, HttpResponse } from "msw";
import { API_ROUTE } from "@/api";
import { db } from "@/mocks/models/db";
import { computeOffset } from "@/mocks/utils/compute-offset";
import { computeTotalPages } from "@/mocks/utils/compute-total-pages";
import { range } from "lodash";
import { PaginationResponse } from "@/types";
import { mockAPIBaseJoinPath } from "@/mocks";

export const usersListMockHandler = http.get(
  mockAPIBaseJoinPath(API_ROUTE.USERS),
  async ({ request }) => {
    console.log(32323);
    // NOTE this populates the user db with 100 users
    range(10).map(() => db.user.create());

    const url = new URL(request.url);

    const page = Number(url.searchParams.get("page") || 1);
    const perPage = Number(url.searchParams.get("perPage") || 10);
    const sortBy = url.searchParams.get("sortBy");

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
  },
);
