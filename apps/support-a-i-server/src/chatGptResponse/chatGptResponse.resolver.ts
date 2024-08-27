import * as graphql from "@nestjs/graphql";
import { ChatGptResponseResolverBase } from "./base/chatGptResponse.resolver.base";
import { ChatGptResponse } from "./base/ChatGptResponse";
import { ChatGptResponseService } from "./chatGptResponse.service";

@graphql.Resolver(() => ChatGptResponse)
export class ChatGptResponseResolver extends ChatGptResponseResolverBase {
  constructor(protected readonly service: ChatGptResponseService) {
    super(service);
  }
}
