import ApiClient from "../../../client";
import { PaginationApi } from "../../../types";
import { AuctionBatch } from "./types";

export async function get(id: string): Promise<AuctionBatch> {
  const response = await ApiClient.getInstance()
    .getClient()
    .get(`/api/customer/auction-batch?id=${id}`);
  return response.data;
}

export const query: PaginationApi<AuctionBatch> = async (params) => {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/customer/auction-batch/query", params);
  return response.data;
};
