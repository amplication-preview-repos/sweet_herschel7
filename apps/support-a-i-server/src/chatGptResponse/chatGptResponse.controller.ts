import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChatGptResponseService } from "./chatGptResponse.service";
import { ChatGptResponseControllerBase } from "./base/chatGptResponse.controller.base";

@swagger.ApiTags("chatGptResponses")
@common.Controller("chatGptResponses")
export class ChatGptResponseController extends ChatGptResponseControllerBase {
  constructor(protected readonly service: ChatGptResponseService) {
    super(service);
  }
}
