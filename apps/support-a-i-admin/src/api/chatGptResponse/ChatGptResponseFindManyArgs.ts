import { ChatGptResponseWhereInput } from "./ChatGptResponseWhereInput";
import { ChatGptResponseOrderByInput } from "./ChatGptResponseOrderByInput";

export type ChatGptResponseFindManyArgs = {
  where?: ChatGptResponseWhereInput;
  orderBy?: Array<ChatGptResponseOrderByInput>;
  skip?: number;
  take?: number;
};
