import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Bitrix24IntegrationServiceBase } from "./base/bitrix24Integration.service.base";

@Injectable()
export class Bitrix24IntegrationService extends Bitrix24IntegrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
