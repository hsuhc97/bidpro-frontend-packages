import { ApiClient } from "../..";
import { MobilePushSettingsApplyRequest } from "./types";

export async function apply(
  request: MobilePushSettingsApplyRequest
): Promise<Boolean> {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/client/mobile-push-settings", request);
  return response.data;
}
