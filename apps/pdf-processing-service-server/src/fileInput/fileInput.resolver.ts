import * as graphql from "@nestjs/graphql";
import { FileInputResolverBase } from "./base/fileInput.resolver.base";
import { FileInput } from "./base/FileInput";
import { FileInputService } from "./fileInput.service";

@graphql.Resolver(() => FileInput)
export class FileInputResolver extends FileInputResolverBase {
  constructor(protected readonly service: FileInputService) {
    super(service);
  }
}
