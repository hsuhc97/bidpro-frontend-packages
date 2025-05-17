import { Option } from "../../types";

export type TenderPackage = {
  id: string;
  name: string;
  description: string;
  numberOfLots: number;
  quantity: number;
  closeTime: number;
  filter?: TenderPackageFilter;
  type: string;
  status: string;
};

export type TenderPackageFilter = {
  items: string[];
  attrGroups: TenderItemAttrFilter[];
};

export type TenderItemAttrFilter = {
  key: string;
  options: Option[];
};
