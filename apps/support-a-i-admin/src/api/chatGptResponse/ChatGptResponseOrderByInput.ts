import { SortOrder } from "../../util/SortOrder";

export type ChatGptResponseOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  requestId?: SortOrder;
  responseText?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
