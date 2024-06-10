import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PageProcessingModuleService } from "./pageprocessingmodule.service";
import { UploadFileInput } from "../fileHandlingModule/UploadFileInput";
import { PageDto } from "../pageProcessingModule/PageDto";

@swagger.ApiTags("pageProcessingModules")
@common.Controller("pageProcessingModules")
export class PageProcessingModuleController {
  constructor(protected readonly service: PageProcessingModuleService) {}

  @common.Get("/:id/split-pdf")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SplitPdf(
    @common.Body()
    body: UploadFileInput
  ): Promise<string> {
        return this.service.SplitPdf(body);
      }

  @common.Post("/split-pages")
  @swagger.ApiOkResponse({
    type: PageDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SplitPdfPages(
    @common.Body()
    body: UploadFileInput
  ): Promise<PageDto[]> {
        return this.service.SplitPdfPages(body);
      }
}
