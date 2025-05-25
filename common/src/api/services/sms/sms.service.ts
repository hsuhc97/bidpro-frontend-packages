import { ApiClient } from "../..";
import { SendOTPRequest } from "./types";

export async function sendOTP(
  request: SendOTPRequest
): Promise<Boolean> {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/sms/send-otp", request);
  return response.data;
}
