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
import { PageJsonData } from "./PageJsonData";
import { PageJsonDataCountArgs } from "./PageJsonDataCountArgs";
import { PageJsonDataFindManyArgs } from "./PageJsonDataFindManyArgs";
import { PageJsonDataFindUniqueArgs } from "./PageJsonDataFindUniqueArgs";
import { CreatePageJsonDataArgs } from "./CreatePageJsonDataArgs";
import { UpdatePageJsonDataArgs } from "./UpdatePageJsonDataArgs";
import { DeletePageJsonDataArgs } from "./DeletePageJsonDataArgs";
import { Page } from "../../page/base/Page";
import { PageJsonDataService } from "../pageJsonData.service";
@graphql.Resolver(() => PageJsonData)
export class PageJsonDataResolverBase {
  constructor(protected readonly service: PageJsonDataService) {}

  async _pageJsonDataItemsMeta(
    @graphql.Args() args: PageJsonDataCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PageJsonData])
  async pageJsonDataItems(
    @graphql.Args() args: PageJsonDataFindManyArgs
  ): Promise<PageJsonData[]> {
    return this.service.pageJsonDataItems(args);
  }

  @graphql.Query(() => PageJsonData, { nullable: true })
  async pageJsonData(
    @graphql.Args() args: PageJsonDataFindUniqueArgs
  ): Promise<PageJsonData | null> {
    const result = await this.service.pageJsonData(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PageJsonData)
  async createPageJsonData(
    @graphql.Args() args: CreatePageJsonDataArgs
  ): Promise<PageJsonData> {
    return await this.service.createPageJsonData({
      ...args,
      data: {
        ...args.data,

        page: args.data.page
          ? {
              connect: args.data.page,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => PageJsonData)
  async updatePageJsonData(
    @graphql.Args() args: UpdatePageJsonDataArgs
  ): Promise<PageJsonData | null> {
    try {
      return await this.service.updatePageJsonData({
        ...args,
        data: {
          ...args.data,

          page: args.data.page
            ? {
                connect: args.data.page,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => PageJsonData)
  async deletePageJsonData(
    @graphql.Args() args: DeletePageJsonDataArgs
  ): Promise<PageJsonData | null> {
    try {
      return await this.service.deletePageJsonData(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Page, {
    nullable: true,
    name: "page",
  })
  async getPage(@graphql.Parent() parent: PageJsonData): Promise<Page | null> {
    const result = await this.service.getPage(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}