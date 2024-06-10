import { Injectable } from "@nestjs/common";
import { UploadFileInput } from "../fileHandlingModule/UploadFileInput";

@Injectable()
export class FileHandlingModuleService {
  constructor() {}
  async UploadFile(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UploadPdf(args: UploadFileInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
