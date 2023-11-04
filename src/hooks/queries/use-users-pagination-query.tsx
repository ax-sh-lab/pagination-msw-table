import { useMemo, useState } from "react";
import { PaginationState, SortingState } from "@tanstack/react-table";
import { useUsersQuery } from "@/hooks/queries/use-users-query";
import { computeTotalPages } from "@/mocks/utils/compute-total-pages";

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

  // const pageCount = useMemo(
  //     () => (data.totalRecords ? Math.ceil(data.totalRecords / pagination.pageSize) : 0),
  //     [data.totalRecords, pagination.pageSize]
  // );

  const pageCount = useMemo(() => {
    const total_pages = query.data?.pagination.total_pages;
    return computeTotalPages(Number(total_pages), pagination.pageSize);
  }, [query.data?.pagination, pagination.pageSize]);

  return {
    ...query,
    pagination: _pagination,
    setPagination,
    sorting: _sorting,
    setSorting,
  };
}
