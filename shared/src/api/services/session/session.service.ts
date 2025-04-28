import ApiClient from "../../client";
import { SpaceLoginRequest, UserLoginResult } from "./types";

export async function loginCustomer(
  request: SpaceLoginRequest
): Promise<UserLoginResult> {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/session/login/customer", request);
  return response.data;
}
