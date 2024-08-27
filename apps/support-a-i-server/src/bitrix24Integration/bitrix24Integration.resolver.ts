import * as graphql from "@nestjs/graphql";
import { Bitrix24IntegrationResolverBase } from "./base/bitrix24Integration.resolver.base";
import { Bitrix24Integration } from "./base/Bitrix24Integration";
import { Bitrix24IntegrationService } from "./bitrix24Integration.service";

@graphql.Resolver(() => Bitrix24Integration)
export class Bitrix24IntegrationResolver extends Bitrix24IntegrationResolverBase {
  constructor(protected readonly service: Bitrix24IntegrationService) {
    super(service);
  }
}
