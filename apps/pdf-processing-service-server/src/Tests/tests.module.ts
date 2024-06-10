import { Module } from "@nestjs/common";
import { TestsService } from "./tests.service";
import { TestsController } from "./tests.controller";
import { TestsResolver } from "./tests.resolver";

@Module({
  controllers: [TestsController],
  providers: [TestsService, TestsResolver],
  exports: [TestsService],
})
export class TestsModule {}
