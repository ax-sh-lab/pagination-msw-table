import {
  // DefinedInitialDataOptions,
  // type UndefinedInitialDataOptions,
  useQuery,
  type UseQueryOptions,
} from '@tanstack/react-query';
import { z } from 'zod';

import { API_ROUTE, apiClient } from '@/lib/api-client';
import { type PaginationResponse } from '@/types';

const FetchUsersParamsSchema = z.object({
  page: z.number().default(1).optional(),
  perPage: z.number().default(10).optional(),
});
export type FetchUsersParams = z.infer<typeof FetchUsersParamsSchema>;
export async function fetchUsers({ page = 1, perPage = 10 }: FetchUsersParams) {
  return apiClient
    .get(API_ROUTE.USERS, { params: { page, perPage } })
    .then(response => response.data);
}

export function useUsersQuery<T = PaginationResponse<any>>({
  page,
  perPage,
  placeholderData,
}: FetchUsersParams & Pick<UseQueryOptions<T>, 'placeholderData'>) {
  return useQuery<T>({
    queryKey: [API_ROUTE.USERS, page, perPage],
    queryFn: () => fetchUsers({ page, perPage }),
    placeholderData,
    enabled: Boolean(page && perPage),
  });
}
