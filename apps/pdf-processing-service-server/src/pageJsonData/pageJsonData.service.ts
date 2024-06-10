import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PageJsonDataServiceBase } from "./base/pageJsonData.service.base";

@Injectable()
export class PageJsonDataService extends PageJsonDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
