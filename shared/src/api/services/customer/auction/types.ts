export type Auction = {
    id: string;
    title: string;
    subTitle: string;
    attributes: Record<string, string>;
    quantity: number;
    actualPrice: number;
    askingMinOfferPrice: number;
    askingMaxOfferPrice: number;
    closeTime: number;
    type: number;
    status: number;
  };
  