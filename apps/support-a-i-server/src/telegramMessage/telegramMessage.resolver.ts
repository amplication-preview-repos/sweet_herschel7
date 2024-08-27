import * as graphql from "@nestjs/graphql";
import { TelegramMessageResolverBase } from "./base/telegramMessage.resolver.base";
import { TelegramMessage } from "./base/TelegramMessage";
import { TelegramMessageService } from "./telegramMessage.service";

@graphql.Resolver(() => TelegramMessage)
export class TelegramMessageResolver extends TelegramMessageResolverBase {
  constructor(protected readonly service: TelegramMessageService) {
    super(service);
  }
}
