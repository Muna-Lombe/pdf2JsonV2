import { Module } from "@nestjs/common";
import { FileInputModuleBase } from "./base/fileInput.module.base";
import { FileInputService } from "./fileInput.service";
import { FileInputController } from "./fileInput.controller";
import { FileInputResolver } from "./fileInput.resolver";

@Module({
  imports: [FileInputModuleBase],
  controllers: [FileInputController],
  providers: [FileInputService, FileInputResolver],
  exports: [FileInputService],
})
export class FileInputModule {}
