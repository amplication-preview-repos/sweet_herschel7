export type ChatGptResponse = {
  createdAt: Date;
  id: string;
  requestId: string | null;
  responseText: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
