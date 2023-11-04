import { useUsersQuery } from "@/hooks/queries/use-users-query";
import { useState } from "react";
import { PaginationState, SortingState } from "@tanstack/react-table";
import { DataTable } from "@/ui/data-table";
import { JSONViewer } from "@/ui/JSONViewer";

export function UsersTable() {
  const users = useUsersQuery({});
  const [pagination, setPagination] = useState<PaginationState>({
    pageSize: 10,
    pageIndex: 0,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { desc: true, id: "" },
  ]);
  return (
    <div>
      <DataTable
        columns={[]}
        data={[]}
        pagination={pagination}
        setPagination={setPagination}
        setSorting={setSorting}
        sorting={sorting}
      />

      <JSONViewer data={users.data} />
    </div>
  );
}
