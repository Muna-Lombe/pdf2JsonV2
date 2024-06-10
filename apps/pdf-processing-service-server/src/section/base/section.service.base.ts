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
  Section as PrismaSection,
  Page as PrismaPage,
} from "@prisma/client";

export class SectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SectionCountArgs, "select">): Promise<number> {
    return this.prisma.section.count(args);
  }

  async sections<T extends Prisma.SectionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SectionFindManyArgs>
  ): Promise<PrismaSection[]> {
    return this.prisma.section.findMany<Prisma.SectionFindManyArgs>(args);
  }
  async section<T extends Prisma.SectionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SectionFindUniqueArgs>
  ): Promise<PrismaSection | null> {
    return this.prisma.section.findUnique(args);
  }
  async createSection<T extends Prisma.SectionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SectionCreateArgs>
  ): Promise<PrismaSection> {
    return this.prisma.section.create<T>(args);
  }
  async updateSection<T extends Prisma.SectionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SectionUpdateArgs>
  ): Promise<PrismaSection> {
    return this.prisma.section.update<T>(args);
  }
  async deleteSection<T extends Prisma.SectionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SectionDeleteArgs>
  ): Promise<PrismaSection> {
    return this.prisma.section.delete(args);
  }

  async getPage(parentId: string): Promise<PrismaPage | null> {
    return this.prisma.section
      .findUnique({
        where: { id: parentId },
      })
      .page();
  }
}