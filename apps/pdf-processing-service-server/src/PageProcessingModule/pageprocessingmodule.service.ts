import { Injectable } from "@nestjs/common";
import { UploadFileInput } from "../fileHandlingModule/UploadFileInput";
import { PageDto } from "../pageProcessingModule/PageDto";

@Injectable()
export class PageProcessingModuleService {
  constructor() {}
  async SplitPdf(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SplitPdfPages(args: UploadFileInput): Promise<PageDto[]> {
    throw new Error("Not implemented");
  }
}
