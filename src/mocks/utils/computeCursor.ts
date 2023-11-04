export function computeCursor(perPage: number, page: number) {
  return Math.max(perPage * (page - 1), 0);
}
