import { type ColumnDef, type PaginationState } from '@tanstack/react-table';
import { useEffect, useState } from 'react';

import { useUsersPaginationQuery } from '@/hooks/queries/use-users-pagination-query';
import { DataTable } from '@/ui/data-table';
import { ErrorWrapper, LoadingWrapper } from '@/ui/state-wrapper';

export type User = {
  id: string;
  first_name: string;
  last_name: string;

  // amount: number
  // status: "pending" | "processing" | "success" | "failed"
  // email: string
};
export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
    cell: ({ row }) => {
      console.log(row.original);
      return <div>{99}</div>;
    },
  },
  {
    accessorKey: 'first_name',
    header: 'First Name',
  },
  {
    accessorKey: 'last_name',
    header: 'Last Name',
  },
];

export const DEFAULT_PAGINATION_STATE: PaginationState = {
  pageIndex: 1,
  pageSize: 10,
} as const;

export function UsersTable() {
  const [pagination, setPagination] = useState(DEFAULT_PAGINATION_STATE);
  const users = useUsersPaginationQuery({
    pagination,
    sorting: [{ desc: true, id: '' }],
    searchQuery: '',
  });
  /* Update component pagination when query pagination changes */
  useEffect(() => setPagination(users.pagination), [setPagination, users.pagination]);

  if (users.isLoading) return <LoadingWrapper>Loading...</LoadingWrapper>;
  if (users.isError)
    return (
      <ErrorWrapper>
        Error:<p>{users.error.message}</p>
      </ErrorWrapper>
    );
  // return (
  //   <div data-testid={"UsersTable"}>
  //     <JSONViewer data={users.data} />
  //   </div>
  // );

  return (
    <div data-testid={'UsersTable'}>
      <DataTable
        columns={columns}
        pageCount={users.pageCount}
        data={users.data ?? []}
        pagination={users.pagination}
        setPagination={users.setPagination}
        setSorting={users.setSorting}
        sorting={users.sorting}
      />
    </div>
  );
}
