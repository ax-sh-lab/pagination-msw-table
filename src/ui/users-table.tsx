import { DataTable } from "@/ui/data-table";
import { JSONViewer } from "@/ui/JSONViewer";
import { useUsersPaginationQuery } from "@/hooks/queries/use-users-pagination-query";
import { ColumnDef } from "@tanstack/react-table";

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
    header: "name",
  },
  {
    accessorKey: "amount",
    header: "Amount",
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
  if (users.isLoading) return <div>Loading...</div>;
  console.log(users.data?.pagination.total_pages, 22);
  // const pageCount = useMemo(
  //     () => (data.totalRecords ? Math.ceil(data.totalRecords / pagination.pageSize) : 0),
  //     [data.totalRecords, pagination.pageSize]
  // );

  return (
    <div>
      <DataTable
        columns={columns}
        data={users.data}
        pagination={users.pagination}
        setPagination={users.setPagination}
        setSorting={users.setSorting}
        sorting={users.sorting}
      />

      <JSONViewer data={users.data} />
    </div>
  );
}
