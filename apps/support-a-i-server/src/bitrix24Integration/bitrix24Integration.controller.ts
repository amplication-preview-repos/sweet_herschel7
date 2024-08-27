import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Bitrix24IntegrationService } from "./bitrix24Integration.service";
import { Bitrix24IntegrationControllerBase } from "./base/bitrix24Integration.controller.base";

@swagger.ApiTags("bitrix24Integrations")
@common.Controller("bitrix24Integrations")
export class Bitrix24IntegrationController extends Bitrix24IntegrationControllerBase {
  constructor(protected readonly service: Bitrix24IntegrationService) {
    super(service);
  }
}
