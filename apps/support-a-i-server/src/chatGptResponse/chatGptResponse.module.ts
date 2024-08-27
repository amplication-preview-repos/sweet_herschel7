import { Module } from "@nestjs/common";
import { ChatGptResponseModuleBase } from "./base/chatGptResponse.module.base";
import { ChatGptResponseService } from "./chatGptResponse.service";
import { ChatGptResponseController } from "./chatGptResponse.controller";
import { ChatGptResponseResolver } from "./chatGptResponse.resolver";

@Module({
  imports: [ChatGptResponseModuleBase],
  controllers: [ChatGptResponseController],
  providers: [ChatGptResponseService, ChatGptResponseResolver],
  exports: [ChatGptResponseService],
})
export class ChatGptResponseModule {}
