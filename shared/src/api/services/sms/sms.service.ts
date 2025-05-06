import ApiClient from "../../client";
import { SmsSendVerificationCodeRequest } from "./types";

export async function sendVerificationCode(
  request: SmsSendVerificationCodeRequest
): Promise<Boolean> {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/sms/send-verification-code", request);
  return response.data;
}
