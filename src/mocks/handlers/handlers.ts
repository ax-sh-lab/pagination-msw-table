import { HttpHandler } from "msw";
import { usersListMockHandler } from "@/mocks/handlers/users-list-mock-handler";
import { profileMockHandler } from "@/mocks/handlers/profile-mock-handler";

export const handlers = [
  profileMockHandler,
  usersListMockHandler,
] satisfies HttpHandler[];
