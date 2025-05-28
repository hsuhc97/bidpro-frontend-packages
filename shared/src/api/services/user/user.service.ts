import { ApiClient } from "../..";
import { User, UserUpdateRequest, CustomerUpdateRequest } from "./types";

export async function get(): Promise<User> {
  const response = await ApiClient.getInstance()
    .getClient()
    .get("/api/client/customer");
  return response.data;
}

export async function updateUser(
  request: UserUpdateRequest
): Promise<Boolean> {
  const response = await ApiClient.getInstance()
    .getClient()
    .put("/api/client/user", request);
  return response.data;
}

export async function updateCustomer(
  request: CustomerUpdateRequest
): Promise<Boolean> {
  const response = await ApiClient.getInstance()
    .getClient()
    .put("/api/client/customer", request);
  return response.data;
}