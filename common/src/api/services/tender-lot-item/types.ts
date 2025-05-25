export type TenderLotItem = {
  id: string;
  tenderLotId: string;
  item: string;
  quantity: number;
  grade: string;
  lockCondition: string;
  attributes: Record<string, string>;
  sortOrder: number;
};

export type TenderLotItemQueryRequest = {
  tenderLotId: string;
};



