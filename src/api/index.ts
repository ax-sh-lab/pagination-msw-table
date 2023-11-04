import axios from "axios";

export const API_ROUTE = {
  PROFILE: "api/profile",
  USERS: "api/users",
} as const;

const client = axios.create({
  // baseURL: "http://localhost:8080",
});

export function fetchProfile() {
  return client.get(API_ROUTE.PROFILE).then((response) => response.data);
}
