import { describe } from "vitest";
import { computeTotalPages } from "@/mocks/utils/compute-total-pages";

describe(computeTotalPages.name, () => {
  const v = computeTotalPages(10, 5);
  console.log(v);
});
