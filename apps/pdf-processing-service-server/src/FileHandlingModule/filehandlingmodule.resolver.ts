import * as graphql from "@nestjs/graphql";
import { UploadFileInput } from "../fileHandlingModule/UploadFileInput";
import { FileHandlingModuleService } from "./filehandlingmodule.service";

export class FileHandlingModuleResolver {
  constructor(protected readonly service: FileHandlingModuleService) {}

  @graphql.Query(() => String)
  async UploadFile(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UploadFile(args);
  }

  @graphql.Mutation(() => String)
  async UploadPdf(
    @graphql.Args()
    args: UploadFileInput
  ): Promise<string> {
    return this.service.UploadPdf(args);
  }
}
