import { Injectable } from "@nestjs/common";
import { SectionDto } from "../sectionExtractionModule/SectionDto";
import { JsonDataDto } from "../pageJsonModule/JsonDataDto";

@Injectable()
export class PageJsonModuleService {
  constructor() {}
  async ConvertSectionDataToJson(args: SectionDto[]): Promise<JsonDataDto[]> {
    throw new Error("Not implemented");
  }
  async ConvertToJson(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
