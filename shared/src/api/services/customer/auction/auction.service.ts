import ApiClient from "../../../client";
import { PaginationApi } from "../../../types";
import { Auction, AuctionOfferRequest } from "./types";

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

export async function follow(id: string): Promise<Boolean> {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/customer/auction/follow", {
      auctionId: id,
    });
  return response.data;
}

export async function unfollow(id: string): Promise<Boolean> {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/customer/auction/unfollow", {
      auctionId: id,
    });
  return response.data;
}

export async function offer(request: AuctionOfferRequest): Promise<Boolean> {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/customer/auction/offer", request);
  return response.data;
}
