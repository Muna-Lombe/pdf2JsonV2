/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  PageJsonData as PrismaPageJsonData,
  Page as PrismaPage,
} from "@prisma/client";

export class PageJsonDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PageJsonDataCountArgs, "select">
  ): Promise<number> {
    return this.prisma.pageJsonData.count(args);
  }

  async pageJsonDataItems<T extends Prisma.PageJsonDataFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageJsonDataFindManyArgs>
  ): Promise<PrismaPageJsonData[]> {
    return this.prisma.pageJsonData.findMany<Prisma.PageJsonDataFindManyArgs>(
      args
    );
  }
  async pageJsonData<T extends Prisma.PageJsonDataFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageJsonDataFindUniqueArgs>
  ): Promise<PrismaPageJsonData | null> {
    return this.prisma.pageJsonData.findUnique(args);
  }
  async createPageJsonData<T extends Prisma.PageJsonDataCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageJsonDataCreateArgs>
  ): Promise<PrismaPageJsonData> {
    return this.prisma.pageJsonData.create<T>(args);
  }
  async updatePageJsonData<T extends Prisma.PageJsonDataUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageJsonDataUpdateArgs>
  ): Promise<PrismaPageJsonData> {
    return this.prisma.pageJsonData.update<T>(args);
  }
  async deletePageJsonData<T extends Prisma.PageJsonDataDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageJsonDataDeleteArgs>
  ): Promise<PrismaPageJsonData> {
    return this.prisma.pageJsonData.delete(args);
  }

  async getPage(parentId: string): Promise<PrismaPage | null> {
    return this.prisma.pageJsonData
      .findUnique({
        where: { id: parentId },
      })
      .page();
  }
}
