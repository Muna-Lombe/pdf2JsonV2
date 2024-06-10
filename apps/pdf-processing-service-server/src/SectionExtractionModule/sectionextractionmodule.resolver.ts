import * as graphql from "@nestjs/graphql";
import { PageDto } from "../pageProcessingModule/PageDto";
import { SectionDto } from "../sectionExtractionModule/SectionDto";
import { SectionExtractionModuleService } from "./sectionextractionmodule.service";

export class SectionExtractionModuleResolver {
  constructor(protected readonly service: SectionExtractionModuleService) {}

  @graphql.Query(() => String)
  async AnalyzePage(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AnalyzePage(args);
  }

  @graphql.Mutation(() => [SectionDto])
  async AnalyzePdfPage(
    @graphql.Args()
    args: PageDto
  ): Promise<SectionDto[]> {
    return this.service.AnalyzePdfPage(args);
  }
}
