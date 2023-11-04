import { DataTable } from "@/ui/data-table";
import { JSONViewer } from "@/ui/JSONViewer";
import { useUsersPaginationQuery } from "@/hooks/queries/use-users-pagination-query";

export function UsersTable() {
  const users = useUsersPaginationQuery({
    pagination: {
      pageIndex: 1,
      pageSize: 10,
    },
    sorting: [{ desc: true, id: "" }],
    searchQuery: "",
  });
  console.log(users.data, 888);

  return (
    <div>
      <DataTable
        columns={[]}
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
