/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PageService } from "../page.service";
import { PageCreateInput } from "./PageCreateInput";
import { Page } from "./Page";
import { PageFindManyArgs } from "./PageFindManyArgs";
import { PageWhereUniqueInput } from "./PageWhereUniqueInput";
import { PageUpdateInput } from "./PageUpdateInput";
import { PageJsonDataFindManyArgs } from "../../pageJsonData/base/PageJsonDataFindManyArgs";
import { PageJsonData } from "../../pageJsonData/base/PageJsonData";
import { PageJsonDataWhereUniqueInput } from "../../pageJsonData/base/PageJsonDataWhereUniqueInput";
import { SectionFindManyArgs } from "../../section/base/SectionFindManyArgs";
import { Section } from "../../section/base/Section";
import { SectionWhereUniqueInput } from "../../section/base/SectionWhereUniqueInput";

export class PageControllerBase {
  constructor(protected readonly service: PageService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Page })
  async createPage(@common.Body() data: PageCreateInput): Promise<Page> {
    return await this.service.createPage({
      data: {
        ...data,

        fileInput: data.fileInput
          ? {
              connect: data.fileInput,
            }
          : undefined,
      },
      select: {
        contentType: true,
        createdAt: true,

        fileInput: {
          select: {
            id: true,
          },
        },

        id: true,
        pageNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Page] })
  @ApiNestedQuery(PageFindManyArgs)
  async pages(@common.Req() request: Request): Promise<Page[]> {
    const args = plainToClass(PageFindManyArgs, request.query);
    return this.service.pages({
      ...args,
      select: {
        contentType: true,
        createdAt: true,

        fileInput: {
          select: {
            id: true,
          },
        },

        id: true,
        pageNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Page })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async page(
    @common.Param() params: PageWhereUniqueInput
  ): Promise<Page | null> {
    const result = await this.service.page({
      where: params,
      select: {
        contentType: true,
        createdAt: true,

        fileInput: {
          select: {
            id: true,
          },
        },

        id: true,
        pageNumber: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Page })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePage(
    @common.Param() params: PageWhereUniqueInput,
    @common.Body() data: PageUpdateInput
  ): Promise<Page | null> {
    try {
      return await this.service.updatePage({
        where: params,
        data: {
          ...data,

          fileInput: data.fileInput
            ? {
                connect: data.fileInput,
              }
            : undefined,
        },
        select: {
          contentType: true,
          createdAt: true,

          fileInput: {
            select: {
              id: true,
            },
          },

          id: true,
          pageNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Page })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePage(
    @common.Param() params: PageWhereUniqueInput
  ): Promise<Page | null> {
    try {
      return await this.service.deletePage({
        where: params,
        select: {
          contentType: true,
          createdAt: true,

          fileInput: {
            select: {
              id: true,
            },
          },

          id: true,
          pageNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/pageJsonDataItems")
  @ApiNestedQuery(PageJsonDataFindManyArgs)
  async findPageJsonDataItems(
    @common.Req() request: Request,
    @common.Param() params: PageWhereUniqueInput
  ): Promise<PageJsonData[]> {
    const query = plainToClass(PageJsonDataFindManyArgs, request.query);
    const results = await this.service.findPageJsonDataItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        data: true,
        id: true,

        page: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/pageJsonDataItems")
  async connectPageJsonDataItems(
    @common.Param() params: PageWhereUniqueInput,
    @common.Body() body: PageJsonDataWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pageJsonDataItems: {
        connect: body,
      },
    };
    await this.service.updatePage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/pageJsonDataItems")
  async updatePageJsonDataItems(
    @common.Param() params: PageWhereUniqueInput,
    @common.Body() body: PageJsonDataWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pageJsonDataItems: {
        set: body,
      },
    };
    await this.service.updatePage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/pageJsonDataItems")
  async disconnectPageJsonDataItems(
    @common.Param() params: PageWhereUniqueInput,
    @common.Body() body: PageJsonDataWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pageJsonDataItems: {
        disconnect: body,
      },
    };
    await this.service.updatePage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/sections")
  @ApiNestedQuery(SectionFindManyArgs)
  async findSections(
    @common.Req() request: Request,
    @common.Param() params: PageWhereUniqueInput
  ): Promise<Section[]> {
    const query = plainToClass(SectionFindManyArgs, request.query);
    const results = await this.service.findSections(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,
        id: true,

        page: {
          select: {
            id: true,
          },
        },

        typeField: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/sections")
  async connectSections(
    @common.Param() params: PageWhereUniqueInput,
    @common.Body() body: SectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sections: {
        connect: body,
      },
    };
    await this.service.updatePage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sections")
  async updateSections(
    @common.Param() params: PageWhereUniqueInput,
    @common.Body() body: SectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sections: {
        set: body,
      },
    };
    await this.service.updatePage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sections")
  async disconnectSections(
    @common.Param() params: PageWhereUniqueInput,
    @common.Body() body: SectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sections: {
        disconnect: body,
      },
    };
    await this.service.updatePage({
      where: params,
      data,
      select: { id: true },
    });
  }
}