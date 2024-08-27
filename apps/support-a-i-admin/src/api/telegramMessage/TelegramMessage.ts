export type TelegramMessage = {
  createdAt: Date;
  id: string;
  messageText: string | null;
  timestamp: Date | null;
  updatedAt: Date;
  userId: string | null;
};
