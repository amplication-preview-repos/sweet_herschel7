import { ChatGptResponse as TChatGptResponse } from "../api/chatGptResponse/ChatGptResponse";

export const CHATGPTRESPONSE_TITLE_FIELD = "requestId";

export const ChatGptResponseTitle = (record: TChatGptResponse): string => {
  return record.requestId?.toString() || String(record.id);
};
