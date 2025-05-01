import ApiClient from "../../../client";
import { PaginationApi } from "../../../types";
import { AuctionDetail } from "./types";

export const query: PaginationApi<AuctionDetail> = async (params) => {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/customer/auction-detail/query", params);
  return response.data;
};