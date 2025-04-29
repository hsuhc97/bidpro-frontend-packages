import ApiClient from "../../../client";
import { PaginationApi } from "../../../types";
import { Bid } from "./types";

export async function get(id: string): Promise<Bid> {
  const response = await ApiClient.getInstance()
    .getClient()
    .get(`/api/customer/bid?id=${id}`);
  return response.data;
}

export const query: PaginationApi<Bid> = async (params) => {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/customer/bid/query", params);
  return response.data;
};
