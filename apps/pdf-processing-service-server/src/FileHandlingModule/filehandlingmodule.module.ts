import { Module } from "@nestjs/common";
import { FileHandlingModuleService } from "./filehandlingmodule.service";
import { FileHandlingModuleController } from "./filehandlingmodule.controller";
import { FileHandlingModuleResolver } from "./filehandlingmodule.resolver";

@Module({
  controllers: [FileHandlingModuleController],
  providers: [FileHandlingModuleService, FileHandlingModuleResolver],
  exports: [FileHandlingModuleService],
})
export class FileHandlingModuleModule {}
