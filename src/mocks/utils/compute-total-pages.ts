export function computeTotalPages(totalRecords: number, perPage: number) {
  return Math.ceil(totalRecords / perPage);
}
