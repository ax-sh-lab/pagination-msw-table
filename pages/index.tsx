import axios from "axios";
import React from "react";
import { PaginationState } from "@tanstack/react-table";
import PaginationTable from "../components/PaginationTable";
import { useManualPaginationQuery } from "../hooks/useManualPaginationQuery";

function fetchPosts({ pageSize, pageIndex }: PaginationState) {
  return axios
    .get("/posts", { params: { page: pageIndex } })
    .then((x) => x.data);
}

export default function Home() {
  const { dataQuery, pagination, setPagination } = useManualPaginationQuery(
    "data",
    fetchPosts
  );

  if (dataQuery.isLoading) return <>loading</>;
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
