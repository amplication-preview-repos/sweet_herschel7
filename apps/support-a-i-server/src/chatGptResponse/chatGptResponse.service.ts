import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatGptResponseServiceBase } from "./base/chatGptResponse.service.base";

@Injectable()
export class ChatGptResponseService extends ChatGptResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
