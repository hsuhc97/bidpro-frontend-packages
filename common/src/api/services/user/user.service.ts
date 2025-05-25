import { ApiClient } from "../..";
import { User, ProfileUpdateRequest } from "./types";

export async function get(): Promise<User> {
  const response = await ApiClient.getInstance()
    .getClient()
    .get("/api/user");
  return response.data;
}

export async function updateProfile(
  request: ProfileUpdateRequest
): Promise<Boolean> {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/user/profile", request);
  return response.data;
}
