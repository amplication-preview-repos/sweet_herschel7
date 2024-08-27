import { Module } from "@nestjs/common";
import { TelegramMessageModuleBase } from "./base/telegramMessage.module.base";
import { TelegramMessageService } from "./telegramMessage.service";
import { TelegramMessageController } from "./telegramMessage.controller";
import { TelegramMessageResolver } from "./telegramMessage.resolver";

@Module({
  imports: [TelegramMessageModuleBase],
  controllers: [TelegramMessageController],
  providers: [TelegramMessageService, TelegramMessageResolver],
  exports: [TelegramMessageService],
})
export class TelegramMessageModule {}
