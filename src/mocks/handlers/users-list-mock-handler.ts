// /api/posts?offset=0&limit=10
import { range } from 'lodash';
import { http, HttpResponse } from 'msw';

import { API_ROUTE } from '@/lib/api-client';
import { mockAPIBaseJoinPath } from '@/mocks';
import { db } from '@/mocks/models/db';
import { computeOffset } from '@/mocks/utils/compute-offset';
import { computeTotalPages } from '@/mocks/utils/compute-total-pages';
import { type PaginationResponse } from '@/types';

type ListMockPathParams = unknown;
type ListMockRequestBodyType = { k: 9 };
type ListMockResponseBodyType = unknown;

const url = mockAPIBaseJoinPath(API_ROUTE.USERS);

// NOTE this populates the user db with 100 users
range(1, 31).map(i => {
  db.user.create();
});

export const usersListMockHandler = http.get<
  ListMockPathParams,
  ListMockRequestBodyType,
  ListMockResponseBodyType
>(url, async ({ request }) => {
  // console.log(await request.json());
  // request.json().then(data => console.log(44, data));
  console.log(await request.text(), 444);
  const url = new URL(request.url);

  const page = Number(url.searchParams.get('page') || 1);
  const perPage = Number(url.searchParams.get('perPage') || 10);
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
