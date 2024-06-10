import * as graphql from "@nestjs/graphql";
import { PageDto } from "../pageProcessingModule/PageDto";
import { SectionDto } from "../sectionExtractionModule/SectionDto";
import { JsonDataDto } from "../pageJsonModule/JsonDataDto";
import { UploadFileInput } from "../fileHandlingModule/UploadFileInput";
import { TestsService } from "./tests.service";

export class TestsResolver {
  constructor(protected readonly service: TestsService) {}

  @graphql.Mutation(() => [SectionDto])
  async TestAnalyzePdfPage(
    @graphql.Args()
    args: PageDto
  ): Promise<SectionDto[]> {
    return this.service.TestAnalyzePdfPage(args);
  }

  @graphql.Mutation(() => [JsonDataDto])
  async TestConvertToSectionDataJson(
    @graphql.Args()
    args: SectionDto[]
  ): Promise<JsonDataDto[]> {
    return this.service.TestConvertToSectionDataJson(args);
  }

  @graphql.Mutation(() => [PageDto])
  async TestSplitPdfPages(
    @graphql.Args()
    args: UploadFileInput
  ): Promise<PageDto[]> {
    return this.service.TestSplitPdfPages(args);
  }

  @graphql.Mutation(() => String)
  async TestUploadPdfFile(
    @graphql.Args()
    args: UploadFileInput
  ): Promise<string> {
    return this.service.TestUploadPdfFile(args);
  }
}
