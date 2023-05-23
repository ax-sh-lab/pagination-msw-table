import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { PaginationState } from "@tanstack/react-table";
import PaginationTable from "../components/PaginationTable";

function fetchData({ pageSize, pageIndex }: PaginationState) {
  return axios
    .get("/posts", { params: { page: pageIndex } })
    .then((x) => x.data);
}

export default function Home() {
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const fetchDataOptions = {
    pageIndex,
    pageSize,
  };

  const dataQuery = useQuery(
    ["data", fetchDataOptions],
    () => fetchData(fetchDataOptions),
    { keepPreviousData: true }
  );

  const pagination = React.useMemo(
    () => ({ pageIndex, pageSize }),
    [pageIndex, pageSize]
  );

  return (
    <div>
      <PaginationTable
        dataQuery={dataQuery}
        pagination={pagination}
        setPagination={setPagination}
      />
    </div>
  );
}
