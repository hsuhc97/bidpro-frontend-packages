import ApiClient from "../../client";
import { PaginationApi } from "../../types";
import { Tender } from "./types";

export async function get(id: string): Promise<Tender> {
  const response = await ApiClient.getInstance()
    .getClient()
    .get(`/api/client/tender?id=${id}`);
  return response.data;
}

export const query: PaginationApi<Tender> = async (params) => {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/client/tender/query", params);
  return response.data;
};
