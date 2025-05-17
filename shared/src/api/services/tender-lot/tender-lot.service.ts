import ApiClient from "../../client";
import { PaginationApi } from "../../types";
import { TenderLot, TenderLotBidRequest, TenderLotBidResult } from "./types";

export async function get(id: string): Promise<TenderLot> {
  const response = await ApiClient.getInstance()
    .getClient()
    .get(`/api/client/tender-lot?id=${id}`);
  return response.data;
}

export const query: PaginationApi<TenderLot> = async (params) => {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/client/tender-lot/query", params);
  return response.data;
};

export async function watch(id: string): Promise<Boolean> {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/client/tender-lot/watch", {
      tenderLotId: id,
    });
  return response.data;
}

export async function unwatch(id: string): Promise<Boolean> {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/client/tender-lot/unwatch", {
      tenderLotId: id,
    });
  return response.data;
}

export async function bid(request: TenderLotBidRequest): Promise<TenderLotBidResult> {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/client/tender-lot/bid", request);
  return response.data;
}
