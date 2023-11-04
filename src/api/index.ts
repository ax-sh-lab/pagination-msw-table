import axios from "axios";

export const API_ROUTE = { PROFILE: "api/profile" } as const;

const client = axios.create({});

export function fetchProfile() {
  return client.get(API_ROUTE.PROFILE);
}
