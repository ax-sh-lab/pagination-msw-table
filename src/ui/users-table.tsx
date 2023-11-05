import { DataTable } from "@/ui/data-table";
import { JSONViewer } from "@/ui/JSONViewer";
import { useUsersPaginationQuery } from "@/hooks/queries/use-users-pagination-query";
import { ColumnDef } from "@tanstack/react-table";
import { ErrorWrapper, LoadingWrapper } from "@/ui/state-wrapper";

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
    accessorKey: "id",
    header: "Id",
    cell: ({ row }) => {
      console.log(row.original);
      return <div>{99}</div>;
    },
  },
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
];
export function UsersTable() {
  const users = useUsersPaginationQuery({
    pagination: {
      pageIndex: 1,
      pageSize: 10,
    },
    sorting: [{ desc: true, id: "" }],
    searchQuery: "",
  });
  if (users.isLoading) return <LoadingWrapper>Loading...</LoadingWrapper>;
  if (users.isError)
    return (
      <ErrorWrapper>
        Error:<p>{users.error.message}</p>
      </ErrorWrapper>
    );
  return (
    <div data-testid={"UsersTable"}>
      <JSONViewer data={users.data} />
    </div>
  );

  return (
    <div data-testid={"UsersTable"}>
      <DataTable
        columns={columns}
        pageCount={0}
        data={users.data ?? []}
        pagination={users.pagination}
        setPagination={users.setPagination}
        setSorting={users.setSorting}
        sorting={users.sorting}
      />

      {/*<JSONViewer data={users.data} />*/}
    </div>
  );
}
