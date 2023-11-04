import { API_ROUTE, apiClient } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const FetchUsersParamsSchema = z.object({
  page: z.number().default(1).optional(),
  perPage: z.number().default(10).optional(),
});
export type FetchUsersParams = z.infer<typeof FetchUsersParamsSchema>;
export async function fetchUsers({ page = 1, perPage = 10 }: FetchUsersParams) {
  return apiClient
    .get(API_ROUTE.USERS, { params: { page, perPage } })
    .then((response) => response.data);
}

export function useUsersQuery({ page, perPage }: FetchUsersParams) {
  return useQuery({
    queryKey: [API_ROUTE.USERS, page, perPage],
    queryFn: () => fetchUsers({ page, perPage }),
  });
}
