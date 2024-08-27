import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type Bitrix24IntegrationWhereInput = {
  apiEndpoint?: StringNullableFilter;
  authorizationKey?: StringNullableFilter;
  id?: StringFilter;
  integrationName?: StringNullableFilter;
};
