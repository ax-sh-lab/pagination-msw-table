import { computeTotalPages } from "@/mocks/utils/compute-total-pages";

describe(computeTotalPages.name, () => {
  const v = computeTotalPages(10, 5);
  console.log(v);
  it("should return 2", () => {
    expect(v).toBe(2);
  });
});
