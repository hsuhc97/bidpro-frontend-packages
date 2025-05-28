export type TenderLot = {
    id: string;
    title: string;
    subTitle: string;
    closeTime: number;
    item: string;
    quantity: number;
    grade: string;
    lockCondition: string;
    currency: string;
    enforceBidCap: boolean;
    bidCapMargin: number;
    attributes: Record<string, string>;
    originalPrice?: number;
    actualPrice?: number;
    askingMinBidPrice?: number;
    askingMaxBidPrice?: number;
    bidType: string;
    status: string;
    isWatching: boolean;
    hasBid: boolean;
    bidPrice?: number;
    bidPriceCurrency?: string;
    hasPendingBid?: boolean;
    pendingBidPrice?: number;
    pendingBidPriceCurrency?: string;
    bidStatus?: string;
  };
  
  export type TenderLotBidRequest = {
    tenderLotId: string;
    bidPrice: number;
  };
  
  export type TenderLotBidResult = {
    tenderLotId: string;
    hasBid: boolean;
    bidPrice?: number;
    pendingBidPrice?: number;
    bidStatus?: string;
  }

