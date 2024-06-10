import * as graphql from "@nestjs/graphql";
import { UploadFileInput } from "../fileHandlingModule/UploadFileInput";
import { PageDto } from "../pageProcessingModule/PageDto";
import { PageProcessingModuleService } from "./pageprocessingmodule.service";

export class PageProcessingModuleResolver {
  constructor(protected readonly service: PageProcessingModuleService) {}

  @graphql.Query(() => String)
  async SplitPdf(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SplitPdf(args);
  }

  @graphql.Mutation(() => [PageDto])
  async SplitPdfPages(
    @graphql.Args()
    args: UploadFileInput
  ): Promise<PageDto[]> {
    return this.service.SplitPdfPages(args);
  }
}
