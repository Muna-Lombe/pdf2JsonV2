/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { FileInput } from "./FileInput";
import { FileInputCountArgs } from "./FileInputCountArgs";
import { FileInputFindManyArgs } from "./FileInputFindManyArgs";
import { FileInputFindUniqueArgs } from "./FileInputFindUniqueArgs";
import { CreateFileInputArgs } from "./CreateFileInputArgs";
import { UpdateFileInputArgs } from "./UpdateFileInputArgs";
import { DeleteFileInputArgs } from "./DeleteFileInputArgs";
import { PageFindManyArgs } from "../../page/base/PageFindManyArgs";
import { Page } from "../../page/base/Page";
import { FileInputService } from "../fileInput.service";
@graphql.Resolver(() => FileInput)
export class FileInputResolverBase {
  constructor(protected readonly service: FileInputService) {}

  async _fileInputsMeta(
    @graphql.Args() args: FileInputCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FileInput])
  async fileInputs(
    @graphql.Args() args: FileInputFindManyArgs
  ): Promise<FileInput[]> {
    return this.service.fileInputs(args);
  }

  @graphql.Query(() => FileInput, { nullable: true })
  async fileInput(
    @graphql.Args() args: FileInputFindUniqueArgs
  ): Promise<FileInput | null> {
    const result = await this.service.fileInput(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FileInput)
  async createFileInput(
    @graphql.Args() args: CreateFileInputArgs
  ): Promise<FileInput> {
    return await this.service.createFileInput({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => FileInput)
  async updateFileInput(
    @graphql.Args() args: UpdateFileInputArgs
  ): Promise<FileInput | null> {
    try {
      return await this.service.updateFileInput({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FileInput)
  async deleteFileInput(
    @graphql.Args() args: DeleteFileInputArgs
  ): Promise<FileInput | null> {
    try {
      return await this.service.deleteFileInput(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Page], { name: "pages" })
  async findPages(
    @graphql.Parent() parent: FileInput,
    @graphql.Args() args: PageFindManyArgs
  ): Promise<Page[]> {
    const results = await this.service.findPages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
