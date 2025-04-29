import ApiClient from "../../../client";
import { Customer, CustomerUpdateProfileRequest } from "./types";

export async function get(): Promise<Customer> {
  const response = await ApiClient.getInstance()
    .getClient()
    .get("/api/customer");
  return response.data;
}

export async function updateProfile(
  request: CustomerUpdateProfileRequest
): Promise<Boolean> {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/customer/profile", request);
  return response.data;
}
