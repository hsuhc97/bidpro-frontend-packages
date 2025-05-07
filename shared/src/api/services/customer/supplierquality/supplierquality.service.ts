import ApiClient from "../../../client";
import { PaginationApi } from "../../../types";
import { SupplierQuality } from "./types";

export const query: PaginationApi<SupplierQuality> = async (params) => {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/customer/supplier-quality/query", params);
  return response.data;
};
