export {
  get as getTenderLot,
  query as queryTenderLot,
  watch as watchTenderLot,
  unwatch as unwatchTenderLot,
  bid as bidTenderLot,
} from "./tender-lot.service";
export type {
  TenderLot,
  TenderLotBidRequest,
  TenderLotBidResult,
} from "./types";
