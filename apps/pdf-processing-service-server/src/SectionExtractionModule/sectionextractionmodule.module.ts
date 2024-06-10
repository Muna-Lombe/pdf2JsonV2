import { Module } from "@nestjs/common";
import { SectionExtractionModuleService } from "./sectionextractionmodule.service";
import { SectionExtractionModuleController } from "./sectionextractionmodule.controller";
import { SectionExtractionModuleResolver } from "./sectionextractionmodule.resolver";

@Module({
  controllers: [SectionExtractionModuleController],
  providers: [SectionExtractionModuleService, SectionExtractionModuleResolver],
  exports: [SectionExtractionModuleService],
})
export class SectionExtractionModuleModule {}
