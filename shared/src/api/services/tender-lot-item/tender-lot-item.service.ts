import ApiClient from "../../client";
import { PaginationApi } from "../../types";
import { TenderLotItem } from "./types";

export const query: PaginationApi<TenderLotItem> = async (params) => {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/client/tender-lot-item/query", params);
  return response.data;
};