import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TelegramMessageService } from "./telegramMessage.service";
import { TelegramMessageControllerBase } from "./base/telegramMessage.controller.base";

@swagger.ApiTags("telegramMessages")
@common.Controller("telegramMessages")
export class TelegramMessageController extends TelegramMessageControllerBase {
  constructor(protected readonly service: TelegramMessageService) {
    super(service);
  }
}
