import { useState } from "react";
import { PaginationState, SortingState } from "@tanstack/react-table";
import { useUsersQuery } from "@/hooks/queries/use-users-query";

type UsersPaginationQueryProps = {
  searchQuery: string;
  pagination: PaginationState;
  sorting: SortingState;
};
export function useUsersPaginationQuery({
  searchQuery,
  pagination,
  sorting,
}: UsersPaginationQueryProps) {
  const [_pagination, setPagination] = useState<PaginationState>(pagination);
  const [_sorting, setSorting] = useState<SortingState>(sorting);
  const query = useUsersQuery({
    page: pagination.pageIndex,
    perPage: pagination.pageSize,
  });
  return {
    ...query,
    pagination: _pagination,
    setPagination,
    sorting: _sorting,
    setSorting,
  };
}
