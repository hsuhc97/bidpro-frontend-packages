import ApiClient from "../../client";
import { PaginationApi } from "../../types";
import { TenderPackage } from "./types";

export async function get(id: string): Promise<TenderPackage> {
  const response = await ApiClient.getInstance()
    .getClient()
    .get(`/api/client/tender-package?id=${id}`);
  return response.data;
}

export const query: PaginationApi<TenderPackage> = async (params) => {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/client/tender-package/query", params);
  return response.data;
};
