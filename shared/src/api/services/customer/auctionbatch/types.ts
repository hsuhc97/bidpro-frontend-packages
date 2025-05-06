import { Option } from "../../../types";

export type AuctionBatch = {
  id: string;
  title: string;
  subTitle: string;
  auctionNumber: number;
  quantity: number;
  closeTime: number;
  filter?: AuctionBatchFilter;
  type: number;
  status: number;
};

export type AuctionBatchFilter = {
  spuNames: string[];
  attrGroups: AuctionBatchAttrGroup[];
};

export type AuctionBatchAttrGroup = {
  key: string;
  options: Option[];
};
