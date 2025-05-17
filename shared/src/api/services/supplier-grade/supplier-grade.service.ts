import ApiClient from "../../client";
import { PaginationApi } from "../../types";
import { SupplierGrade } from "./types";

export const query: PaginationApi<SupplierGrade> = async (params) => {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/client/supplier-grade/query", params);
  return response.data;
};
