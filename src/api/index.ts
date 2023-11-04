import axios from "axios";
import { env } from "../../env";

export const API_ROUTE = {
  PROFILE: "/api/profile",
  USERS: "/api/users",
} as const;

console.log(env.NEXT_PUBLIC_API_URL, 23232323);
//  adapter: "http", needed for test fix
export const apiClient = axios.create({
  adapter: "http",
  baseURL: env.NEXT_PUBLIC_API_URL,
});

export function fetchProfile() {
  return apiClient.get(API_ROUTE.PROFILE).then((response) => response.data);
}
