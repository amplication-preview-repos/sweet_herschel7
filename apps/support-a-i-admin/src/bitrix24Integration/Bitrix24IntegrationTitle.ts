import { Bitrix24Integration as TBitrix24Integration } from "../api/bitrix24Integration/Bitrix24Integration";

export const BITRIX24INTEGRATION_TITLE_FIELD = "integrationName";

export const Bitrix24IntegrationTitle = (
  record: TBitrix24Integration
): string => {
  return record.integrationName?.toString() || String(record.id);
};
