// import { computeTotalPages } from "@/mocks/utils/compute-total-pages";

export type PaginationResponse<T = unknown> = {
  records: T[];
  pagination: {
    page: number;
    total_records: number;
    total_pages: number;
    // TODO THINK ABOUT THIS
    //    "current_page": 1,
    //    "next_page": 2,
    //    "prev_page": null
  };
};
