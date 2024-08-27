import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TelegramMessageServiceBase } from "./base/telegramMessage.service.base";

@Injectable()
export class TelegramMessageService extends TelegramMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
