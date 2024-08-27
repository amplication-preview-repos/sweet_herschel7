import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TelegramMessageWhereInput = {
  id?: StringFilter;
  messageText?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
};
