export type AuctionDetail = {
  id: string;
  auctionId: string;
  spuId: string;
  spuName: string;
  skuId: string;
  skuName: string;
  attributes: Record<string, string>;
  quantity: number;
};

export type AuctionDetailQueryRequest = {
  auctionId: string;
};



