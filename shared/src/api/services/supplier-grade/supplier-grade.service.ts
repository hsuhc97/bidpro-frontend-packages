import { ApiClient, PaginationApi } from "../..";
import { SupplierGrade } from "./types";

export const query: PaginationApi<SupplierGrade> = async (params) => {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/client/supplier-grade/query", params);
  return response.data;
};
