import { db } from "@/mocks/mock-schema/db";

export function computePageCount(perPage: number) {
  return Math.ceil(db.user.count() / perPage);
}
