import { Injectable } from "@nestjs/common";
import { PageDto } from "../pageProcessingModule/PageDto";
import { SectionDto } from "../sectionExtractionModule/SectionDto";

@Injectable()
export class SectionExtractionModuleService {
  constructor() {}
  async AnalyzePage(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async AnalyzePdfPage(args: PageDto): Promise<SectionDto[]> {
    throw new Error("Not implemented");
  }
}
