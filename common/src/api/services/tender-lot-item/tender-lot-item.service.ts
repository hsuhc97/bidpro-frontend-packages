import { ApiClient, PaginationApi } from "../..";
import { TenderLotItem } from "./types";

export const query: PaginationApi<TenderLotItem> = async (params) => {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/client/tender-lot-item/query", params);
  return response.data;
};