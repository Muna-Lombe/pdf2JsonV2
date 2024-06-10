import { Injectable } from "@nestjs/common";
import { PageDto } from "../pageProcessingModule/PageDto";
import { SectionDto } from "../sectionExtractionModule/SectionDto";
import { JsonDataDto } from "../pageJsonModule/JsonDataDto";
import { UploadFileInput } from "../fileHandlingModule/UploadFileInput";

@Injectable()
export class TestsService {
  constructor() {}
  async TestAnalyzePdfPage(args: PageDto): Promise<SectionDto[]> {
    throw new Error("Not implemented");
  }
  async TestConvertToSectionDataJson(args: SectionDto[]): Promise<JsonDataDto[]> {
    throw new Error("Not implemented");
  }
  async TestSplitPdfPages(args: UploadFileInput): Promise<PageDto[]> {
    throw new Error("Not implemented");
  }
  async TestUploadPdfFile(args: UploadFileInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
