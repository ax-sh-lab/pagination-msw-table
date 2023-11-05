export function computeTotalPages(totalRecords: number, perPage: number) {
  if (isNaN(totalRecords)) return 0;
  return Math.ceil(totalRecords / perPage);
}
