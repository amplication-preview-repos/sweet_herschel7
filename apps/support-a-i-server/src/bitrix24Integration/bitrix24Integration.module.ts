import { Module } from "@nestjs/common";
import { Bitrix24IntegrationModuleBase } from "./base/bitrix24Integration.module.base";
import { Bitrix24IntegrationService } from "./bitrix24Integration.service";
import { Bitrix24IntegrationController } from "./bitrix24Integration.controller";
import { Bitrix24IntegrationResolver } from "./bitrix24Integration.resolver";

@Module({
  imports: [Bitrix24IntegrationModuleBase],
  controllers: [Bitrix24IntegrationController],
  providers: [Bitrix24IntegrationService, Bitrix24IntegrationResolver],
  exports: [Bitrix24IntegrationService],
})
export class Bitrix24IntegrationModule {}
