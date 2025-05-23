import { Option } from "../../types";

export type TenderPackage = {
  id: string;
  name: string;
  description: string;
  numberOfLots: number;
  quantity: number;
  closeTime: number;
  filter?: TenderPackageFilter;
  bidType: string;
  status: string;
};

export type TenderPackageFilter = {
  items: string[];
  grades: string[];
  lockConditions: string[];
};

export type TenderItemAttrFilter = {
  key: string;
  options: Option[];
};
