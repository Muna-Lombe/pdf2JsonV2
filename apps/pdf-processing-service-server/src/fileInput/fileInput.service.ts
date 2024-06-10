import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FileInputServiceBase } from "./base/fileInput.service.base";

@Injectable()
export class FileInputService extends FileInputServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
