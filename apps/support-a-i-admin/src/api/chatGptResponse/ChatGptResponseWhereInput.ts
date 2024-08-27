import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ChatGptResponseWhereInput = {
  id?: StringFilter;
  requestId?: StringNullableFilter;
  responseText?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
