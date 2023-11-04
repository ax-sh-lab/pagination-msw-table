// /api/posts?offset=0&limit=10
import { http, HttpResponse } from "msw";
import { API_ROUTE } from "@/api";
import { db } from "@/mocks/mock-schema/db";
import { computeCursor } from "@/mocks/utils/computeCursor";
import { computePageCount } from "@/mocks/utils/computePageCount";
import { range } from "lodash";

function initPopulateData() {
  return range(10).map(() => db.user.create());
}
export const usersListMock = http.get(
  API_ROUTE.USERS,
  async ({ params, request }) => {
    initPopulateData();

    const url = new URL(request.url);

    const page = Number(url.searchParams.get("page") || 1);
    const perPage = Number(url.searchParams.get("perPage") || 10);
    const sortBy = url.searchParams.get("sortBy");

    const list = db.user.findMany({
      take: perPage,
      skip: computeCursor(perPage, page),
    });

    return HttpResponse.json({
      records: list,
      page,
      total_pages: computePageCount(perPage),
      total_records: db.user.count(),
    });
  },
);
