import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  Updater,
  useReactTable,
} from "@tanstack/react-table";

import { Dispatch, SetStateAction } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type DataTableProps<TColumn extends object> = {
  columns: ColumnDef<TColumn>[];
  data: any;
  pagination: PaginationState;
  setPagination: (pagination: Updater<PaginationState>) => void;
  sorting: SortingState;
  setSorting: Dispatch<SetStateAction<SortingState>>;

  pageCount: number;
};

export function DataTable<TColumn extends object>({
  columns,
  data = [],
  pageCount,
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
    pageCount,
    state: {
      pagination,
      sorting,
      // rowSelection, columnVisibility
    },
    columns,
    data: data.records,
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4">
        <button
          // variant="outline"
          // size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        <button
          // variant="outline"
          // size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
