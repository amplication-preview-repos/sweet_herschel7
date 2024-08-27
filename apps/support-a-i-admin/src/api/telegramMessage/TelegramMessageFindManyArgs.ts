import { TelegramMessageWhereInput } from "./TelegramMessageWhereInput";
import { TelegramMessageOrderByInput } from "./TelegramMessageOrderByInput";

export type TelegramMessageFindManyArgs = {
  where?: TelegramMessageWhereInput;
  orderBy?: Array<TelegramMessageOrderByInput>;
  skip?: number;
  take?: number;
};
