import { Module } from "@nestjs/common";
import { PageJsonDataModuleBase } from "./base/pageJsonData.module.base";
import { PageJsonDataService } from "./pageJsonData.service";
import { PageJsonDataController } from "./pageJsonData.controller";
import { PageJsonDataResolver } from "./pageJsonData.resolver";

@Module({
  imports: [PageJsonDataModuleBase],
  controllers: [PageJsonDataController],
  providers: [PageJsonDataService, PageJsonDataResolver],
  exports: [PageJsonDataService],
})
export class PageJsonDataModule {}
