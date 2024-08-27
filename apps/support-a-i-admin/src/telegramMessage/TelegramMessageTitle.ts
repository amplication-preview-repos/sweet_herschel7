import { TelegramMessage as TTelegramMessage } from "../api/telegramMessage/TelegramMessage";

export const TELEGRAMMESSAGE_TITLE_FIELD = "userId";

export const TelegramMessageTitle = (record: TTelegramMessage): string => {
  return record.userId?.toString() || String(record.id);
};
