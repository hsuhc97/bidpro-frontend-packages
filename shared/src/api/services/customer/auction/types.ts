export type Auction = {
    id: string;
    title: string;
    subTitle: string;
    attributes: Record<string, string>;
    quantity: number;
    actualPrice?: number;
    askingMinOfferPrice?: number;
    askingMaxOfferPrice?: number;
    closeTime: number;
    type: number;
    status: number;
    followed: boolean;
    offered: boolean;
    offerPrice?: number;
    pendingOfferPrice?: number;
    offerStatus?: number;
  };
  
  export type AuctionOfferRequest = {
    auctionId: string;
    offerPrice: number;
  };
  
  

