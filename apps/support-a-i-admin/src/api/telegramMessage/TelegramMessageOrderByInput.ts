import { SortOrder } from "../../util/SortOrder";

export type TelegramMessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  messageText?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
