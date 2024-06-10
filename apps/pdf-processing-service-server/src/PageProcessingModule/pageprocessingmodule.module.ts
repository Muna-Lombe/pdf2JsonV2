import { Module } from "@nestjs/common";
import { PageProcessingModuleService } from "./pageprocessingmodule.service";
import { PageProcessingModuleController } from "./pageprocessingmodule.controller";
import { PageProcessingModuleResolver } from "./pageprocessingmodule.resolver";

@Module({
  controllers: [PageProcessingModuleController],
  providers: [PageProcessingModuleService, PageProcessingModuleResolver],
  exports: [PageProcessingModuleService],
})
export class PageProcessingModuleModule {}
