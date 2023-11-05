import { PaginationState, SortingState } from "@tanstack/react-table";
import { useMemo, useState } from "react";

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
    console.log("rendered");
    return computeTotalPages(
      Number(query.data?.pagination.total_records),
      pagination.pageSize,
    );
  }, [query.data, pagination.pageSize]);

  return {
    ...query,
    pageCount,
    pagination: _pagination,
    setPagination,
    sorting: _sorting,
    setSorting,
  };
}
