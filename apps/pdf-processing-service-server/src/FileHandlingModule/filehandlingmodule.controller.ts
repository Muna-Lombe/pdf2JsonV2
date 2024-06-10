import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FileHandlingModuleService } from "./filehandlingmodule.service";
import { UploadFileInput } from "../fileHandlingModule/UploadFileInput";

@swagger.ApiTags("fileHandlingModules")
@common.Controller("fileHandlingModules")
export class FileHandlingModuleController {
  constructor(protected readonly service: FileHandlingModuleService) {}

  @common.Get("/:id/upload-file")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadFile(
    @common.Body()
    body: UploadFileInput
  ): Promise<string> {
        return this.service.UploadFile(body);
      }

  @common.Post("/upload")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadPdf(
    @common.Body()
    body: UploadFileInput
  ): Promise<string> {
        return this.service.UploadPdf(body);
      }
}
