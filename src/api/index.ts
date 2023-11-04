import axios from "axios";
import { env } from "../../env";

export const API_ROUTE = {
  PROFILE: "/api/profile",
  USERS: "/api/users",
} as const;

//  adapter: "http", needed for test fix
export const apiClient = axios.create({
  adapter: "http",
  baseURL: " http://localhost:3000",
  // baseURL: env.NEXT_PUBLIC_API_URL,
});

export function fetchProfile() {
  return apiClient.get(API_ROUTE.PROFILE).then((response) => response.data);
}
