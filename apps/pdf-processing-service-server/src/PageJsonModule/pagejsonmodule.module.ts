import { Module } from "@nestjs/common";
import { PageJsonModuleService } from "./pagejsonmodule.service";
import { PageJsonModuleController } from "./pagejsonmodule.controller";
import { PageJsonModuleResolver } from "./pagejsonmodule.resolver";

@Module({
  controllers: [PageJsonModuleController],
  providers: [PageJsonModuleService, PageJsonModuleResolver],
  exports: [PageJsonModuleService],
})
export class PageJsonModuleModule {}
