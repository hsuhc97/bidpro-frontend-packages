import ApiClient from "../../../client";
import { PaginationApi } from "../../../types";
import { Auction } from "./types";

export async function get(id: string): Promise<Auction> {
  const response = await ApiClient.getInstance()
    .getClient()
    .get(`/api/customer/auction?id=${id}`);
  return response.data;
}

export const query: PaginationApi<Auction> = async (params) => {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/customer/auction/query", params);
  return response.data;
};
