import * as graphql from "@nestjs/graphql";
import { SectionDto } from "../sectionExtractionModule/SectionDto";
import { JsonDataDto } from "../pageJsonModule/JsonDataDto";
import { PageJsonModuleService } from "./pagejsonmodule.service";

export class PageJsonModuleResolver {
  constructor(protected readonly service: PageJsonModuleService) {}

  @graphql.Mutation(() => [JsonDataDto])
  async ConvertSectionDataToJson(
    @graphql.Args()
    args: SectionDto[]
  ): Promise<JsonDataDto[]> {
    return this.service.ConvertSectionDataToJson(args);
  }

  @graphql.Query(() => String)
  async ConvertToJson(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ConvertToJson(args);
  }
}
