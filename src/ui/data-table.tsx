import {
  ColumnDef,
  getCoreRowModel,
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

export function DataTable<TColumn extends object>({}: DataTableProps<TColumn>) {
  const table = useReactTable({
    getCoreRowModel: getCoreRowModel(),
    state: {},
    columns: [],
    data: [],
  });
  return null;
}
