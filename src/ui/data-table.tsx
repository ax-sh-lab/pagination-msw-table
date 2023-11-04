import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  Updater,
  useReactTable,
} from "@tanstack/react-table";

import { Dispatch, SetStateAction } from "react";

type DataTableProps<TColumn extends object> = {
  columns: ColumnDef<TColumn>[];
  data: any;
  pagination: PaginationState;
  setPagination: (pagination: Updater<PaginationState>) => void;
  sorting: SortingState;
  setSorting: Dispatch<SetStateAction<SortingState>>;
};

export function DataTable<TColumn extends object>({
  columns,
  data,
  sorting,
  setSorting,

  pagination,
  setPagination,
}: DataTableProps<TColumn>) {
  const table = useReactTable({
    manualPagination: true,
    // debugTable: sta !== pr,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    // onColumnVisibilityChange: setColumnVisibility,
    // onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),

    state: {
      pagination,
      sorting,
      // rowSelection, columnVisibility
    },
    columns,
    data,
  });
  return null;
}
