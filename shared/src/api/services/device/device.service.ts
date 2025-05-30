import { ApiClient } from "../..";
import { DeviceApplyRequest } from "./types";

export async function apply(
  request: DeviceApplyRequest
): Promise<Boolean> {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/client/device", request);
  return response.data;
}
