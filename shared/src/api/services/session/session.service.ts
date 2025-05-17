import ApiClient from "../../client";
import { LoginRequest, LoginResult } from "./types";

export async function login(
  request: LoginRequest
): Promise<LoginResult> {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/session/login", request);
  return response.data;
}
